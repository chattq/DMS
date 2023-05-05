import {
  ApiResponse,
  SearchParam,
  Mst_District,
  Mst_Dealer_Sales_Groups,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMstSalesType = (apiBase: AxiosInstance) => {
  return {
    Mst_Sales_Type_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Dealer_Sales_Groups>> => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Mst_Dealer_Sales_Groups>
      >("/MstDealerSalesGroupType/Search", {
        ...params,
      });
    },
    Mst_Sales_Type_GetAllActive: async (): Promise<
      ApiResponse<Mst_Dealer_Sales_Groups>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_Dealer_Sales_Groups>>(
        "/MstDealerSalesGroupType/GetBySalesGroupType"
      );
    },
    Mst_Sales_Type_Create: async (
      data: Partial<Mst_Dealer_Sales_Groups>
    ): Promise<ApiResponse<Mst_Dealer_Sales_Groups>> => {
      return await apiBase.post<
        Partial<Mst_Dealer_Sales_Groups>,
        ApiResponse<Mst_Dealer_Sales_Groups>
      >("/MstDealerSalesGroupType/Create", {
        strJson: JSON.stringify(data),
      });
    },

    Mst_Sales_Type_Delete: async (SalesGroupType: string) => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Mst_Dealer_Sales_Groups>
      >("/MstDealerSalesGroupType/Delete", {
        SalesGroupType: SalesGroupType,
      });
    },
    Mst_Sales_Type_Delete_Multiple: async (SalesGroupType: string[]) => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Mst_Dealer_Sales_Groups>
      >("/MstDealerSalesGroupType/DeleteMultiple", {
        strJson: JSON.stringify(
          SalesGroupType.map((SalesGroupType) => ({
            SalesGroupType: SalesGroupType,
          }))
        ),
      });
    },
    Mst_Sales_Type_Update: async (
      key: string,
      port: Partial<Mst_Dealer_Sales_Groups>
    ): Promise<ApiResponse<Mst_Dealer_Sales_Groups>> => {
      return await apiBase.post<
        Partial<Mst_Dealer_Sales_Groups>,
        ApiResponse<Mst_Dealer_Sales_Groups>
      >("/MstDealerSalesGroupType/Update", {
        strJson: JSON.stringify({
          SalesGroupType: key,
          SalesGroupTypeName: port?.SalesGroupTypeName,
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_Sales_Type_Upload: async (file: File): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstDealerSalesGroupType/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Sales_Type_ExportTemplate: async (): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Dealer_Sales_Groups>,
        ApiResponse<string>
      >("/MstDealerSalesGroupType/ExportTemplate", {});
    },
    Mst_Sales_Type_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Dealer_Sales_Groups>,
        ApiResponse<string>
      >("/MstDealerSalesGroupType/Export", {
        KeyWord: keyword,
        FlagActive: "",
      });
    },
  };
};
