import {
  ApiResponse,
  SearchParam,
  Mst_District,
  Mst_Sales_Type,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMstSalesType = (apiBase: AxiosInstance) => {
  return {
    Mst_Sales_Type_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Sales_Type>> => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Sales_Type>>(
        "/MstDealerSalesType/Search",
        {
          ...params,
        }
      );
    },
    Mst_Sales_Type_GetBySalesType: async (): Promise<
      ApiResponse<Mst_Sales_Type>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_Sales_Type>>(
        "/MstDealerSalesType/GetBySalesType"
      );
    },
    Mst_Sales_Type_Create: async (
      data: Partial<Mst_Sales_Type>
    ): Promise<ApiResponse<Mst_Sales_Type>> => {
      return await apiBase.post<
        Partial<Mst_Sales_Type>,
        ApiResponse<Mst_Sales_Type>
      >("/MstDealerSalesType/Create", {
        strJson: JSON.stringify(data),
      });
    },

    Mst_Sales_Type_Delete: async (SalesType: string) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Sales_Type>>(
        "/MstDealerSalesType/Delete",
        {
          SalesType: SalesType,
        }
      );
    },
    Mst_Sales_Type_Delete_Multiple: async (SalesType: string[]) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Sales_Type>>(
        "/MstDealerSalesType/DeleteMultiple",
        {
          strJson: JSON.stringify(
            SalesType.map((SalesType) => ({
              SalesType: SalesType,
            }))
          ),
        }
      );
    },
    Mst_Sales_Type_Update: async (
      key: string,
      port: Partial<Mst_Sales_Type>,
      data: Partial<Mst_Sales_Type>
    ): Promise<ApiResponse<Mst_Sales_Type>> => {
      return await apiBase.post<
        Partial<Mst_Sales_Type>,
        ApiResponse<Mst_Sales_Type>
      >("/MstDealerSalesType/Update", {
        strJson: JSON.stringify({
          SalesType: key,
          SalesTypeName: port?.SalesTypeName
            ? port?.SalesTypeName
            : data.SalesTypeName,
          SalesTypeNameVN: port?.SalesTypeNameVN,
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_Sales_Type_Upload: async (file: File): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstDealerSalesType/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Sales_Type_ExportTemplate: async (): Promise<ApiResponse<any>> => {
      return await apiBase.post<Partial<Mst_Sales_Type>, ApiResponse<string>>(
        "/MstDealerSalesType/ExportTemplate",
        {}
      );
    },
    Mst_Sales_Type_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<Partial<Mst_Sales_Type>, ApiResponse<string>>(
        "/MstDealerSalesType/Export",
        {
          KeyWord: keyword,
          FlagActive: "",
        }
      );
    },
  };
};
