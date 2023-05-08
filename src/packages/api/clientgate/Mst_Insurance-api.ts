import { ApiResponse, SearchParam, Mst_Insurance } from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMst_Insurance = (apiBase: AxiosInstance) => {
  return {
    Mst_Insurance_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Insurance>> => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Insurance>>(
        "/MstInsuranceType/Search",
        {
          ...params,
        }
      );
    },
    Mst_Insurance_GetAllActive: async (): Promise<
      ApiResponse<Mst_Insurance>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_Insurance>>(
        "/MstInsuranceType/GetAllActive"
      );
    },
    Mst_Insurance_Create: async (
      DistrictCode: Partial<Mst_Insurance>
    ): Promise<ApiResponse<Mst_Insurance>> => {
      return await apiBase.post<
        Partial<Mst_Insurance>,
        ApiResponse<Mst_Insurance>
      >("/MstInsuranceType/Create", {
        strJson: JSON.stringify(DistrictCode),
      });
    },

    Mst_Insurance_Delete: async (DistrictCode: string) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Insurance>>(
        "/MstInsuranceType/Delete",
        {
          DistrictCode: DistrictCode,
        }
      );
    },
    Mst_Insurance_Delete_Multiple: async (DistrictCodes: string[]) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Insurance>>(
        "/MstInsuranceType/DeleteMultiple",
        {
          strJson: JSON.stringify(
            DistrictCodes.map((DistrictCode) => ({
              DistrictCode: DistrictCode,
            }))
          ),
        }
      );
    },
    Mst_Insurance_Update: async (
      key: string,
      port: Partial<Mst_Insurance>
    ): Promise<ApiResponse<Mst_Insurance>> => {
      console.log(56, port);
      console.log(57, key);
      return await apiBase.post<
        Partial<Mst_Insurance>,
        ApiResponse<Mst_Insurance>
      >("/MstInsuranceType/Update", {
        strJson: JSON.stringify({
          ProvinceCode: key,
          DistrictCode: key,
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_Insurancet_Upload: async (file: File): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstInsuranceType/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Insurance_ExportTemplate: async (): Promise<ApiResponse<any>> => {
      return await apiBase.post<Partial<Mst_Insurance>, ApiResponse<string>>(
        "/MstInsuranceType/ExportTemplate",
        {}
      );
    },
    Mst_Insurance_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<Partial<Mst_Insurance>, ApiResponse<string>>(
        "/MstInsuranceType/Export",
        {
          KeyWord: keyword,
          FlagActive: "",
        }
      );
    },
  };
};
