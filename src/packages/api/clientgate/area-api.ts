import { ApiResponse, Area, CGResponse, Province, SearchParam } from "@/packages/types";
import { AxiosInstance } from "axios";

export const useAreaApi = (apiBase: AxiosInstance) => {
  return {
    getAreas: async (params: SearchParam): Promise<ApiResponse<Area>> => {
      return await apiBase.post<SearchParam, ApiResponse<Area>>("/MstArea/Search", {
        ...params
      });
    },
    getArea: async (areaCode: string): Promise<ApiResponse<Area>> => {
      return await apiBase.post<string, ApiResponse<Area>>("/MstArea/GetAreaByCode", {
        AreaCode: areaCode
      });
    }
  };
};