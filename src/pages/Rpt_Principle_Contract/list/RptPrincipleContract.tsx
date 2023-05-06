import { useEffect, useMemo, useRef, useState } from "react";

import { PageHeaderLayout } from "@layouts/page-header-layout";
import { AdminContentLayout } from "@layouts/admin-content-layout";
import { BaseGridView, ColumnOptions } from "@packages/ui/base-gridview";
import { StatusButton } from "@/packages/ui/status-button";
import {
  FlagActiveEnum,
  Mst_Dealer_Sales_Groups,
  Mst_Sales_Type,
  Province,
  Rpt_Principle_Contract,
  SearchParam,
} from "@/packages/types";
import { useI18n } from "@/i18n/useI18n";
import { useConfiguration } from "@/packages/hooks";
import { logger } from "@/packages/logger";
import { EditorPreparingEvent } from "devextreme/ui/data_grid";
import { useQuery } from "@tanstack/react-query";
import { useClientgateApi } from "@/packages/api";
import { showErrorAtom } from "@/packages/store";
import { toast } from "react-toastify";
import { useAtomValue, useSetAtom } from "jotai";

import { HeaderPart } from "./header-part";
import {
  keywordAtom,
  selectedItemsAtom,
} from "@/pages/province/components/screen-atom";

export const RptPrincipleContract = () => {
  const { t } = useI18n("RptPrincipleContract");
  const api = useClientgateApi();
  const config = useConfiguration();
  let gridRef: any = useRef(null);
  const keyword = useAtomValue(keywordAtom);
  const [dataSearch, setDataSearch] = useState([] as any);
  const showError = useSetAtom(showErrorAtom);
  const setSelectedItems = useSetAtom(selectedItemsAtom);
  const { data, isLoading, refetch } = useQuery(
    ["provinces", keyword],
    () =>
      api.Rpt_Principle_Contract_Search({
        KeyWord: keyword,
        FlagActive: FlagActiveEnum.All,
        Ft_PageIndex: 0,
        Ft_PageSize: config.MAX_PAGE_ITEMS,
      } as SearchParam),
    {}
  );
  logger.debug("isLoading", isLoading, data);
  useEffect(() => {
    if (!!data && !data.isSuccess) {
      showError({
        message: t(data.errorCode),
        debugInfo: data.debugInfo,
        errorInfo: data.errorInfo,
      });
    } else {
      setDataSearch(data?.DataList);
    }
  }, [data]);

  const onCreate = async (data: Partial<Rpt_Principle_Contract>) => {
    const resp = await api.Mst_Sales_Type_Create({
      ...data,
    });
    if (resp.isSuccess) {
      toast.success(t("Create Successfully"));
      await refetch();
      return true;
    }
    showError({
      message: t(resp.errorCode),
      debugInfo: resp.debugInfo,
      errorInfo: resp.errorInfo,
    });
    throw new Error(resp.errorCode);
  };
  const onUpdate = async (
    key: string,
    data: Partial<Rpt_Principle_Contract>,
    e: any
  ) => {
    // const datakey = dataSearch.filter((item: any) => item.SalesType === key)[0];
    // // console.log(84, datakey);
    const resp = await api.Rpt_Principle_Contract_Update(key, data);
    if (resp.isSuccess) {
      toast.success(t("Update Successfully"));
      await refetch();
      return true;
    }
    showError({
      message: t(resp.errorCode),
      debugInfo: resp.debugInfo,
      errorInfo: resp.errorInfo,
    });
    throw new Error(resp.errorCode);
  };
  const onDelete = async (key: string) => {
    const resp = await api.Mst_Sales_Type_Delete(key);
    if (resp.isSuccess) {
      toast.success(t("Delete Successfully"));
      await refetch();
      return true;
    }
    showError({
      message: t(resp.errorCode),
      debugInfo: resp.debugInfo,
      errorInfo: resp.errorInfo,
    });
    throw new Error(resp.errorCode);
  };

  // const flagActiveFilter = useMemo(() => {
  //   if (data?.isSuccess) {
  //     return data.DataList?.reduce((acc, cur) => {
  //       const value = cur.FlagActive;
  //       const existingItem = acc.find((item) => item.FlagActive === value);
  //       if (!existingItem) {
  //         acc.push({ FlagActive: value, count: 1 });
  //       } else {
  //         existingItem.count++;
  //       }
  //       return acc;
  //     }, [] as { FlagActive: string; count: number }[])
  //       .sort((a, b) => a.FlagActive?.localeCompare(b.FlagActive))
  //       .map((item) => ({
  //         text: `${t(`FlagActive.${item.FlagActive}`)} (${item.count})`,
  //         value: item.FlagActive,
  //       }));
  //   }
  // }, [data]);

  const columns: ColumnOptions[] = [
    {
      dataField: "DealerCode",
      caption: t("DealerCode"),
      editorType: "dxTextBox",
      visible: true,
      editorOptions: {
        placeholder: t("Input"),
      },
      validationRules: [
        {
          type: "required",
        },
        {
          type: "pattern",
          pattern: /[a-zA-Z0-9]/,
        },
      ],
    },
    {
      dataField: "PrincipleContractNo",
      caption: t("PrincipleContractNo"),
      editorType: "dxTextBox",
      visible: true,
      editorOptions: {
        placeholder: t("Input"),
      },
      validationRules: [
        {
          type: "required",
        },
      ],
    },
    {
      dataField: "PrincipleContractDate",
      caption: t("PrincipleContractDate"),
      editorType: "dxTextBox",
      visible: true,
      editorOptions: {
        placeholder: t("Input"),
      },
      validationRules: [
        {
          type: "required",
        },
      ],
    },
    {
      dataField: "BankInfo",
      caption: t("BankInfo"),
      editorType: "dxTextBox",
      visible: true,
      editorOptions: {
        placeholder: t("Input"),
      },
      validationRules: [
        {
          type: "required",
        },
      ],
    },
    {
      dataField: "Representative",
      caption: t("Representative"),
      editorType: "dxTextBox",
      visible: true,
      editorOptions: {
        placeholder: t("Input"),
      },
      validationRules: [
        {
          type: "required",
        },
      ],
    },
    {
      dataField: "JobTitle",
      caption: t("JobTitle"),
      editorType: "dxTextBox",
      visible: true,
      editorOptions: {
        placeholder: t("Input"),
      },
      validationRules: [
        {
          type: "required",
        },
      ],
    },
    // {
    //   dataField: "FlagActive",
    //   caption: t("Trạng thái"),
    //   editorType: "dxSwitch",
    //   visible: true,
    //   alignment: "center",
    //   width: 120,
    //   cellRender: ({ data }: any) => {
    //     return <StatusButton isActive={data.FlagActive === "1"} />;
    //   },
    //   headerFilter: {
    //     dataSource: flagActiveFilter,
    //   },
    // },
  ];

  const handleAddNew = () => {
    if (gridRef.instance) {
      gridRef.instance.addRow();
    }
  };

  const handleEditorPreparing = (e: EditorPreparingEvent<any, any>) => {
    // tạm thời chưa  dùng, để default
    if (e.dataField === "DealerCode") {
      e.editorOptions.readOnly = !e.row?.isNewRow;
    } else if (e.dataField === "FlagActive") {
      e.editorOptions.value = false;
    }
  };
  // đã chạy
  const handleDeleteRows = async (rows: string[]) => {
    // console.log(201, rows);
    const resp = await api.Mst_Sales_Type_Delete_Multiple(rows);
    if (resp.isSuccess) {
      toast.success(t("Delete Successfully"));
      await refetch();
    } else {
      showError({
        message: t(resp.errorCode),
        debugInfo: resp.debugInfo,
        errorInfo: resp.errorInfo,
      });
    }
  };

  const handleSavingRow = async (e: any) => {
    logger.debug("e:", e);
    // stop grid behaviour
    if (e.changes && e.changes.length > 0) {
      // we don't enable batch mode, so only 1 change at a time.
      const { type } = e.changes[0];
      if (type === "remove") {
        const id = e.changes[0].key;
        e.promise = onDelete(id);
      } else if (type === "insert") {
        const data: Province = e.changes[0].data!;
        e.promise = onCreate(data);
      } else if (type === "update") {
        e.promise = onUpdate(e.changes[0].key, e.changes[0].data!, e);
      }
    }
    e.cancel = true;
    logger.debug("e after:", e);
  };

  const handleUploadFile = async (file: File, progressCallback?: Function) => {
    const resp = await api.Mst_Sales_Type_Upload(file);
    if (resp.isSuccess) {
      toast.success(t("Upload Successfully"));
      await refetch();
    } else {
      showError({
        message: t(resp.errorCode),
        debugInfo: resp.debugInfo,
        errorInfo: resp.errorInfo,
      });
    }
  };
  const handleDownloadTemplate = async () => {
    const resp = await api.Mst_Sales_Type_ExportTemplate();
    if (resp.isSuccess) {
      toast.success(t("Download Successfully"));
      window.location.href = resp.Data;
    } else {
      showError({
        message: t(resp.errorCode),
        debugInfo: resp.debugInfo,
        errorInfo: resp.errorInfo,
      });
    }
  };
  const handleSelectionChanged = (rowKeys: string[]) => {
    setSelectedItems(rowKeys);
  };
  return (
    <AdminContentLayout className={"province-management"}>
      <AdminContentLayout.Slot name={"Header"}>
        <PageHeaderLayout>
          <PageHeaderLayout.Slot name={"Before"}>
            <div className="font-bold dx-font-m">
              {t("Quản lý loại hình bán lẻ")}
            </div>
          </PageHeaderLayout.Slot>
          <PageHeaderLayout.Slot name={"Center"}>
            <HeaderPart
              onAddNew={handleAddNew}
              onUploadFile={handleUploadFile}
              onDownloadTemplate={handleDownloadTemplate}
            />
          </PageHeaderLayout.Slot>
        </PageHeaderLayout>
      </AdminContentLayout.Slot>
      <AdminContentLayout.Slot name={"Content"}>
        <BaseGridView
          isLoading={isLoading}
          defaultPageSize={config.PAGE_SIZE}
          dataSource={data?.DataList ?? []}
          columns={columns}
          keyExpr="DealerCode"
          allowSelection={true}
          allowInlineEdit={true}
          onReady={(ref) => (gridRef = ref)}
          onEditorPreparing={handleEditorPreparing}
          onSelectionChanged={handleSelectionChanged}
          onSaveRow={handleSavingRow}
          inlineEditMode={"row"}
          onDeleteRows={handleDeleteRows}
        />
      </AdminContentLayout.Slot>
    </AdminContentLayout>
  );
};
