import {
  ApiResponse,
  SearchParam,
  Mst_District,
  Mst_Inventory_Cost,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMstInventoryCost = (apiBase: AxiosInstance) => {
  return {
    Mst_Inventory_Cost_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Inventory_Cost>> => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Inventory_Cost>>(
        "/MstInventoryCost/Search",
        {
          ...params,
        }
      );
    },
    Mst_Inventory_Cost_GetByCostTypeCode: async (): Promise<
      ApiResponse<Mst_Inventory_Cost>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_Inventory_Cost>>(
        "/MstInventoryCost/GetByCostTypeCode"
      );
    },
    Mst_Inventory_Cost_Rate_Create: async (
      data: Partial<Mst_Inventory_Cost>
    ): Promise<ApiResponse<Mst_Inventory_Cost>> => {
      return await apiBase.post<
        Partial<Mst_Inventory_Cost>,
        ApiResponse<Mst_Inventory_Cost>
      >("/MstInventoryCost/Create", {
        strJson: JSON.stringify(data),
      });
    },

    Mst_Inventory_Cost_Rate_Delete: async (SalesType: string) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Inventory_Cost>>(
        "/MstInventoryCost/Delete",
        {
          SalesType: SalesType,
        }
      );
    },
    Mst_Inventory_Cost_Delete_Multiple: async (SalesType: string[]) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Inventory_Cost>>(
        "/MstInventoryCost/DeleteMultiple",
        {
          strJson: JSON.stringify(
            SalesType.map((SalesType) => ({
              SalesType: SalesType,
            }))
          ),
        }
      );
    },
    Mst_Inventory_Cost_Update: async (
      key: string,
      port: Partial<Mst_Inventory_Cost>,
      data: Partial<Mst_Inventory_Cost>
    ): Promise<ApiResponse<Mst_Inventory_Cost>> => {
      return await apiBase.post<
        Partial<Mst_Inventory_Cost>,
        ApiResponse<Mst_Inventory_Cost>
      >("/MstInventoryCost/Update", {
        strJson: JSON.stringify({
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_Inventory_Cost_Upload: async (
      file: File
    ): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstInventoryCost/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Inventory_Cost_ExportTemplate: async (): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Inventory_Cost>,
        ApiResponse<string>
      >("/MstInventoryCost/ExportTemplate", {});
    },
    Mst_Inventory_Cost_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Inventory_Cost>,
        ApiResponse<string>
      >("/MstInventoryCost/Export", {
        KeyWord: keyword,
        FlagActive: "",
      });
    },
  };
};
