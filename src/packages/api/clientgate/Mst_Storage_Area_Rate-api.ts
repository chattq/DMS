import {
  ApiResponse,
  SearchParam,
  Mst_District,
  Mst_Storage_Area_Rate,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMstStorageAreaRate = (apiBase: AxiosInstance) => {
  return {
    Mst_Storage_Area_Rate_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Storage_Area_Rate>> => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Mst_Storage_Area_Rate>
      >("/MstStorageAreaRate/Search", {
        ...params,
      });
    },
    Mst_Storage_Area_Rate_GetAllActive: async (): Promise<
      ApiResponse<Mst_Storage_Area_Rate>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_Storage_Area_Rate>>(
        "/MstStorageAreaRate/GetAllActive"
      );
    },
    Mst_Storage_Area_Rate_Create: async (
      data: Partial<Mst_Storage_Area_Rate>
    ): Promise<ApiResponse<Mst_Storage_Area_Rate>> => {
      return await apiBase.post<
        Partial<Mst_Storage_Area_Rate>,
        ApiResponse<Mst_Storage_Area_Rate>
      >("/MstStorageAreaRate/Create", {
        strJson: JSON.stringify(data),
      });
    },

    Mst_Storage_Area_Rate_Delete: async (SalesType: string) => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Mst_Storage_Area_Rate>
      >("/MstStorageAreaRate/Delete", {
        SalesType: SalesType,
      });
    },
    Mst_Storage_Area_Rate_Delete_Multiple: async (SalesType: string[]) => {
      return await apiBase.post<
        SearchParam,
        ApiResponse<Mst_Storage_Area_Rate>
      >("/MstStorageAreaRate/DeleteMultiple", {
        strJson: JSON.stringify(
          SalesType.map((SalesType) => ({
            SalesType: SalesType,
          }))
        ),
      });
    },
    Mst_Storage_Area_Rate_Update: async (
      key: string,
      port: Partial<Mst_Storage_Area_Rate>,
      data: Partial<Mst_Storage_Area_Rate>
    ): Promise<ApiResponse<Mst_Storage_Area_Rate>> => {
      return await apiBase.post<
        Partial<Mst_Storage_Area_Rate>,
        ApiResponse<Mst_Storage_Area_Rate>
      >("/MstStorageAreaRate/Update", {
        strJson: JSON.stringify({
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_Storage_Area_Rate_Upload: async (
      file: File
    ): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstStorageAreaRate/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Storage_Area_Rate_ExportTemplate: async (): Promise<
      ApiResponse<any>
    > => {
      return await apiBase.post<
        Partial<Mst_Storage_Area_Rate>,
        ApiResponse<string>
      >("/MstStorageAreaRate/ExportTemplate", {});
    },
    Mst_Storage_Area_Rate_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Storage_Area_Rate>,
        ApiResponse<string>
      >("/MstStorageAreaRate/Export", {
        KeyWord: keyword,
        FlagActive: "",
      });
    },
  };
};
