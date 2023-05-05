import {
  ApiResponse,
  SearchParam,
  Mst_District,
  Mst_Maintain_Task,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMst_MaintainTask = (apiBase: AxiosInstance) => {
  return {
    Mst_Maintain_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Maintain_Task>> => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Maintain_Task>>(
        "/MstMaintainTask/Search",
        {
          ...params,
        }
      );
    },
    Mst_Maintain_GetAllActive: async (): Promise<
      ApiResponse<Mst_Maintain_Task>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_Maintain_Task>>(
        "/MstMaintainTask/GetAllActive"
      );
    },
    Mst_Maintain_Create: async (
      data: Partial<Mst_Maintain_Task>
    ): Promise<ApiResponse<Mst_Maintain_Task>> => {
      return await apiBase.post<
        Partial<Mst_Maintain_Task>,
        ApiResponse<Mst_Maintain_Task>
      >("/MstMaintainTask/Create", {
        strJson: JSON.stringify(data),
      });
    },

    Mst_Maintain_Delete: async (MtnTkCode: string) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Maintain_Task>>(
        "/MstMaintainTask/Delete",
        {
          MtnTkCode: MtnTkCode,
        }
      );
    },
    Mst_Maintain_Delete_Multiple: async (MtnTkCode: string[]) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Maintain_Task>>(
        "/MstMaintainTask/DeleteMultiple",
        {
          strJson: JSON.stringify(
            MtnTkCode.map((MtnTkCode) => ({
              MtnTkCode: MtnTkCode,
            }))
          ),
        }
      );
    },
    Mst_Maintain_Update: async (
      key: string,
      port: Partial<Mst_District>
    ): Promise<ApiResponse<Mst_Maintain_Task>> => {
      return await apiBase.post<
        Partial<Mst_Maintain_Task>,
        ApiResponse<Mst_Maintain_Task>
      >("/MstMaintainTask/Update", {
        strJson: JSON.stringify({
          MtnTkCode: key,
          MtnTkName: port?.DistrictName,
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_Maintain_Upload: async (file: File): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstMaintainTask/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Maintain_ExportTemplate: async (): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Maintain_Task>,
        ApiResponse<string>
      >("/MstMaintainTask/ExportTemplate", {});
    },
    Mst_Maintain_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Maintain_Task>,
        ApiResponse<string>
      >("/MstMaintainTask/Export", {
        KeyWord: keyword,
        FlagActive: "",
      });
    },
  };
};
