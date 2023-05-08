import {
  ApiResponse,
  SearchParam,
  Mst_District,
  Mst_Unit_Price_AVN,
} from "@/packages/types";
import { AxiosInstance } from "axios";

export const useMstUnitPriceAVN = (apiBase: AxiosInstance) => {
  return {
    Mst_Unit_Price_AVN_Search: async (
      params: SearchParam
    ): Promise<ApiResponse<Mst_Unit_Price_AVN>> => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Unit_Price_AVN>>(
        "/MstUnitPriceAVN/Search",
        {
          ...params,
        }
      );
    },
    Mst_Unit_Price_AVN_Rate_GetAllActive: async (): Promise<
      ApiResponse<Mst_Unit_Price_AVN>
    > => {
      return await apiBase.post<any, ApiResponse<Mst_Unit_Price_AVN>>(
        "/MstUnitPriceAVN/GetAllActive"
      );
    },
    Mst_Unit_Price_AVN_Rate_Create: async (
      data: Partial<Mst_Unit_Price_AVN>
    ): Promise<ApiResponse<Mst_Unit_Price_AVN>> => {
      return await apiBase.post<
        Partial<Mst_Unit_Price_AVN>,
        ApiResponse<Mst_Unit_Price_AVN>
      >("/MstUnitPriceAVN/Create", {
        strJson: JSON.stringify(data),
      });
    },

    Mst_Unit_Price_AVN_Rate_Delete: async (AVNCode: string) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Unit_Price_AVN>>(
        "/MstUnitPriceAVN/Delete",
        {
          AVNCode: AVNCode,
        }
      );
    },
    Mst_Unit_Price_AVN_Rate_Delete_Multiple: async (SalesType: string[]) => {
      return await apiBase.post<SearchParam, ApiResponse<Mst_Unit_Price_AVN>>(
        "/MstUnitPriceAVN/DeleteMultiple",
        {
          strJson: JSON.stringify(
            SalesType.map((SalesType) => ({
              SalesType: SalesType,
            }))
          ),
        }
      );
    },
    Mst_Unit_Price_AVN_Rate_Update: async (
      key: string,
      port: Partial<Mst_Unit_Price_AVN>
    ): Promise<ApiResponse<Mst_Unit_Price_AVN>> => {
      return await apiBase.post<
        Partial<Mst_Unit_Price_AVN>,
        ApiResponse<Mst_Unit_Price_AVN>
      >("/MstUnitPriceAVN/Update", {
        strJson: JSON.stringify({
          ...port,
        }),
        ColsUpd: Object.keys(port),
      });
    },
    Mst_Unit_Price_AVN_Rate_Upload: async (
      file: File
    ): Promise<ApiResponse<any>> => {
      const form = new FormData();
      form.append("file", file); // file is the file you want to upload
      return await apiBase.post<File, ApiResponse<any>>(
        "/MstUnitPriceAVN/Import",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    Mst_Unit_Price_AVN_Rate_ExportTemplate: async (): Promise<
      ApiResponse<any>
    > => {
      return await apiBase.post<
        Partial<Mst_Unit_Price_AVN>,
        ApiResponse<string>
      >("/MstUnitPriceAVN/ExportTemplate", {});
    },
    Mst_Unit_Price_AVN_Rate_ExportExcel: async (
      keys: string[],
      keyword?: string
    ): Promise<ApiResponse<any>> => {
      return await apiBase.post<
        Partial<Mst_Unit_Price_AVN>,
        ApiResponse<string>
      >("/MstUnitPriceAVN/Export", {
        KeyWord: keyword,
        FlagActive: "",
      });
    },
  };
};
