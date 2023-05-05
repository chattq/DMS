import {
  ApiResponse,
  SearchParam,
  Mst_District,
  Mst_Maintain_Task,
  Mst_CarCancelType,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMst_CarCancelType = (apiBase: AxiosInstance) => {
  return {
    Mst_CarCancelType_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_CarCancelType>> => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_CarCancelType>>(
        "/MstCarCancelType/Search",
        {
          ...params,
        }
      );
    },
    Mst_CarCancelType_GetAllActive: async (): Promise<
      ApiResponse<Mst_CarCancelType>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_CarCancelType>>(
        "/MstMaintainTask/GetAllActive"
      );
    },
    Mst_CarCancelType_Create: async (
      data: Partial<Mst_CarCancelType>
    ): Promise<ApiResponse<Mst_CarCancelType>> => {
      return await apiBase.post<
        Partial<Mst_CarCancelType>,
        ApiResponse<Mst_CarCancelType>
      >("/MstCarCancelType/Create", {
        strJson: JSON.stringify(data),
      });
    },

    Mst_CarCancelType_Delete: async (CarCancelType: string) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_CarCancelType>>(
        "/MstCarCancelType/Delete",
        {
          CarCancelType: CarCancelType,
        }
      );
    },
    Mst_CarCancelType_Delete_Multiple: async (CarCancelType: string[]) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_CarCancelType>>(
        "/MstCarCancelType/DeleteMultiple",
        {
          strJson: JSON.stringify(
            CarCancelType.map((CarCancelType) => ({
              CarCancelType: CarCancelType,
            }))
          ),
        }
      );
    },
    Mst_CarCancelType_Update: async (
      key: string,
      port: Partial<Mst_CarCancelType>
    ): Promise<ApiResponse<Mst_CarCancelType>> => {
      return await apiBase.post<
        Partial<Mst_CarCancelType>,
        ApiResponse<Mst_CarCancelType>
      >("/MstCarCancelType/Update", {
        strJson: JSON.stringify({
          CarCancelType: key,
          CarCancelTypeName: port?.CarCancelTypeName,
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_CarCancelType_Upload: async (file: File): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstCarCancelType/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_CarCancelType_ExportTemplate: async (): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Maintain_Task>,
        ApiResponse<string>
      >("/MstCarCancelType/ExportTemplate", {});
    },
    Mst_CarCancelType_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Maintain_Task>,
        ApiResponse<string>
      >("/MstCarCancelType/Export", {
        KeyWord: keyword,
        FlagActive: "",
      });
    },
  };
};
