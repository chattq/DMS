import {
  ApiResponse,
  SearchParam,
  Mst_Delay_Transports,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMst_Delay_Transports = (apiBase: AxiosInstance) => {
  return {
    Mst_Delay_Transports_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Delay_Transports>> => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Delay_Transports>>(
        "/MstDelayTransports/Search",
        {
          ...params,
        }
      );
    },
    Mst_Delay_Transports_GetAllActive: async (): Promise<
      ApiResponse<Mst_Delay_Transports>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_Delay_Transports>>(
        "/MstDelayTransports/GetAllActive"
      );
    },
    Mst_Delay_Transports_Create: async (
      DistrictCode: Partial<Mst_Delay_Transports>
    ): Promise<ApiResponse<Mst_Delay_Transports>> => {
      return await apiBase.post<
        Partial<Mst_Delay_Transports>,
        ApiResponse<Mst_Delay_Transports>
      >("/MstDelayTransports/Create", {
        strJson: JSON.stringify(DistrictCode),
      });
    },

    Mst_Delay_Transports_Delete: async (DistrictCode: string) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Delay_Transports>>(
        "/MstDelayTransports/Delete",
        {
          DistrictCode: DistrictCode,
        }
      );
    },
    Mst_Delay_Transports_Delete_Multiple: async (DistrictCodes: string[]) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Delay_Transports>>(
        "/MstDelayTransports/DeleteMultiple",
        {
          strJson: JSON.stringify(
            DistrictCodes.map((DistrictCode) => ({
              DistrictCode: DistrictCode,
            }))
          ),
        }
      );
    },
    Mst_Delay_Transports_Update: async (
      key: string,
      port: Partial<Mst_Delay_Transports>
    ): Promise<ApiResponse<Mst_Delay_Transports>> => {
      // console.log(56, port);
      // console.log(57, key);
      return await apiBase.post<
        Partial<Mst_Delay_Transports>,
        ApiResponse<Mst_Delay_Transports>
      >("/MstDelayTransports/Update", {
        strJson: JSON.stringify({
          ProvinceCode: key,
          DistrictCode: key,
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_Delay_Transports_Upload: async (
      file: File
    ): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstDelayTransports/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Delay_Transports_ExportTemplate: async (): Promise<
      ApiResponse<any>
    > => {
      return await apiBase.post<
        Partial<Mst_Delay_Transports>,
        ApiResponse<string>
      >("/MstDelayTransports/ExportTemplate", {});
    },
    Mst_Delay_Transports_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Delay_Transports>,
        ApiResponse<string>
      >("/MstDelayTransports/Export", {
        KeyWord: keyword,
        FlagActive: "",
      });
    },
  };
};
