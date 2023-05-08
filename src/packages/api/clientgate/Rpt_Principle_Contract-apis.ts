import {
  ApiResponse,
  SearchParam,
  Mst_District,
  Rpt_Principle_Contract,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useRptPrincipleContract = (apiBase: AxiosInstance) => {
  return {
    Rpt_Principle_Contract_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Rpt_Principle_Contract>> => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Rpt_Principle_Contract>
      >("/RptPrincipleContract/Search", {
        ...params,
      });
    },
    Rpt_Principle_Contract_GetAllActive: async (): Promise<
      ApiResponse<Rpt_Principle_Contract>
    > => {
      return await apiBase.post<any, ApiResponse<Rpt_Principle_Contract>>(
        "/RptPrincipleContract/GetAllActive"
      );
    },
    Rpt_Principle_Contract_Create: async (
      data: Partial<Rpt_Principle_Contract>
    ): Promise<ApiResponse<Rpt_Principle_Contract>> => {
      return await apiBase.post<
        Partial<Rpt_Principle_Contract>,
        ApiResponse<Rpt_Principle_Contract>
      >("/RptPrincipleContract/Create", {
        strJson: JSON.stringify(data),
      });
    },

    Rpt_Principle_Contract_Delete: async (DealerCode: string) => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Rpt_Principle_Contract>
      >("/RptPrincipleContract/Delete", {
        DealerCode: DealerCode,
      });
    },
    Rpt_Principle_Contract_Delete_Multiple: async (DealerCode: string[]) => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Rpt_Principle_Contract>
      >("/RptPrincipleContract/DeleteMultiple", {
        strJson: JSON.stringify(
          DealerCode.map((DealerCode) => ({
            DealerCode: DealerCode,
          }))
        ),
      });
    },
    Rpt_Principle_Contract_Update: async (
      key: string,
      port: Partial<Rpt_Principle_Contract>
    ): Promise<ApiResponse<Rpt_Principle_Contract>> => {
      return await apiBase.post<
        Partial<Rpt_Principle_Contract>,
        ApiResponse<Rpt_Principle_Contract>
      >("/RptPrincipleContract/Update", {
        strJson: JSON.stringify({
          DealerCode: key,
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Rpt_Principle_Contract_Upload: async (
      file: File
    ): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/RptPrincipleContract/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Rpt_Principle_Contract_ExportTemplate: async (): Promise<
      ApiResponse<any>
    > => {
      return await apiBase.post<
        Partial<Rpt_Principle_Contract>,
        ApiResponse<string>
      >("/RptPrincipleContract/ExportTemplate", {});
    },
    Rpt_Principle_Contract_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Rpt_Principle_Contract>,
        ApiResponse<string>
      >("/RptPrincipleContract/Export", {
        KeyWord: keyword,
        FlagActive: "",
      });
    },
  };
};
