import { ApiResponse, Mst_Plant, SearchParam } from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMst_Plant = (apiBase: AxiosInstance) => {
  return {
    Mst_Plant_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Plant>> => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Plant>>(
        "/MstPlant/Search",
        {
          ...params,
        }
      );
    },
    Mst_Maintain_GetByPlantCode: async (): Promise<ApiResponse<Mst_Plant>> => {
      return await apiBase.post<any, ApiResponse<Mst_Plant>>(
        "/MstPlant/GetByPlantCode"
      );
    },
    Mst_Plant_Create: async (
      data: Partial<Mst_Plant>
    ): Promise<ApiResponse<Mst_Plant>> => {
      return await apiBase.post<Partial<Mst_Plant>, ApiResponse<Mst_Plant>>(
        "/MstPlant/Create",
        {
          strJson: JSON.stringify(data),
        }
      );
    },

    Mst_Plant_Delete: async (PlantCode: string) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Plant>>(
        "/MstPlant/Delete",
        {
          PlantCode: PlantCode,
        }
      );
    },
    Mst_Plant_Delete_Multiple: async (PlantCode: string[]) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Plant>>(
        "/MstPlant/DeleteMultiple",
        {
          strJson: JSON.stringify(
            PlantCode.map((PlantCode) => ({
              PlantCode: PlantCode,
            }))
          ),
        }
      );
    },
    Mst_Plant_Update: async (
      key: string,
      port: Partial<Mst_Plant>
    ): Promise<ApiResponse<Mst_Plant>> => {
      return await apiBase.post<Partial<Mst_Plant>, ApiResponse<Mst_Plant>>(
        "/MstPlant/Update",
        {
          strJson: JSON.stringify({
            PlantCode: key,
            PlantName: port?.PlantName,
            ...port,
          }),
          ColsUpd: Object.keys(port),
        }
      );
    },
    Mst_Plant_Upload: async (file: File): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstPlant/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Plant_ExportTemplate: async (): Promise<ApiResponse<any>> => {
      return await apiBase.post<Partial<Mst_Plant>, ApiResponse<string>>(
        "/MstPlant/ExportTemplate",
        {}
      );
    },
    Mst_Plant_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<Partial<Mst_Plant>, ApiResponse<string>>(
        "/MstPlant/Export",
        {
          KeyWord: keyword,
          FlagActive: "",
        }
      );
    },
  };
};
