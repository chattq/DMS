import { useMstPortTypeAPI } from "./clientgate/Mst_PortType-api";
import { useMstPort } from "./clientgate/MstPort-api";
import axios, { AxiosError } from "axios";
import { Tid } from "@/utils/hash";
import { IUser } from "@packages/types";
import { useAuth } from "../contexts/auth";
import { useProvinceApi } from "./clientgate/province-api";
import { useDealerApi } from "./clientgate/dealer-api";
import { useAreaApi } from "./clientgate/area-api";
import { useMst_DealerType } from "./clientgate/Mst_DealerType-api";
import { useMst_District } from "./clientgate/Mst_District-api";
import { useUserApi } from "@packages/api/clientgate/user-api";
import { useMst_MaintainTask } from "./clientgate/Mst_MaintainTask-api";
import { useMst_CarCancelType } from "./clientgate/Mst_Car_Cancel_Type-api";
import { useMst_Plant } from "./clientgate/Mst_Plant-api";
import { useMst_Dealer_Sales_Group } from "./clientgate/Mst_Dealer_Sales_Group-api";
import { useMstSalesType } from "./clientgate/Mst_Sales_Type-api";
import { useRptPrincipleContract } from "./clientgate/Rpt_Principle_Contract-apis";
import { useMst_Insurance } from "./clientgate/Mst_Insurance-api";
import { useMst_Delay_Transports } from "./clientgate/Mst_Delay_Transports-api";
import { useMstStorageAreaRate } from "./clientgate/Mst_Storage_Area_Rate-api";
import { useMstUnitPriceAVN } from "./clientgate/Mst_Unit_Price_AVN-api";
import { useMstInventoryCost } from "./clientgate/Mst_Inventory_Cost-api";

/**
 * Creates an axios instance for making requests to the ClientGate API.
 *
 * @param {IUser} currentUser - The current user's information.
 * @param {string} clientGateDomain - The base URL for the ClientGate API.
 * @param {string} networkId - The ID of the network.
 * @param {string} orgId - The ID of the organization.
 * @return {AxiosInstance} An axios instance configured for the ClientGate API.
 */
export const createClientGateApiBase = (
  currentUser: IUser,
  clientGateDomain: string,
  networkId: string,
  orgId: string
) => {
  const api = axios.create({
    baseURL: clientGateDomain,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/x-www-form-urlencoded",
      AppAgent: import.meta.env.VITE_AGENT,
      GwUserCode: import.meta.env.VITE_GW_USER,
      GwPassword: import.meta.env.VITE_GW_USER_PW,
      AppVerCode: "V1",
      Tid: Tid(),
      AppTid: Tid(),
      AppLanguageCode: currentUser.Language,
      UtcOffset: currentUser.TimeZone,
      NetworkId: networkId,
      OrgId: orgId,
    },
  });
  api.interceptors.response.use(
    function (response) {
      // with this API, it always falls to this case.
      const data = response.data;
      const result: any = {
        isSuccess: data.Data._strErrCode === "0" && !data.Data._excResult,
        debugInfo: data.Data._dicDebugInfo,
        errorInfo:
          data.Data._strErrCode === "0" ? undefined : data.Data._excResult,
        errorCode: data.Data._strErrCode,
      };
      if (
        result.isSuccess &&
        !!data.Data._objResult &&
        !!data.Data._objResult.DataList
      ) {
        result.DataList = data.Data._objResult.DataList;
        result.ItemCount = data.Data._objResult.ItemCount;
        result.PageCount = data.Data._objResult.PageCount;
        result.PageIndex = data.Data._objResult.PageIndex;
        result.PageSize = data.Data._objResult.PageSize;
      } else {
        result.Data = data.Data._objResult;
      }
      return result;
    },
    function (error: AxiosError) {
      if (error?.response?.status === 401) {
        location.href = "/login";
      }
      return Promise.reject(error.response?.data);
    }
  );
  return api;
};

export const createClientGateApi = (
  currentUser: IUser,
  clientgateDomain: string,
  networkId: string,
  orgId: string
) => {
  const apiBase = createClientGateApiBase(
    currentUser,
    clientgateDomain,
    networkId,
    orgId
  );
  const provinceApis = useProvinceApi(apiBase);
  const dealerApis = useDealerApi(apiBase);
  const areaApis = useAreaApi(apiBase);
  const mstPort = useMstPort(apiBase);
  const mstPortType = useMstPortTypeAPI(apiBase);
  const mstDealerType = useMst_DealerType(apiBase);
  const mstDistrict = useMst_District(apiBase);
  const userApis = useUserApi(apiBase);
  const mstMaintainTask = useMst_MaintainTask(apiBase);
  const mstCarCancel = useMst_CarCancelType(apiBase);
  const mstPlant = useMst_Plant(apiBase);
  const mstDealerSalesGroup = useMst_Dealer_Sales_Group(apiBase);
  const mstSalesType = useMstSalesType(apiBase);
  const rptPrincipleContract = useRptPrincipleContract(apiBase);
  const mstInsurance = useMst_Insurance(apiBase);
  const mstDelayTransports = useMst_Delay_Transports(apiBase);
  const mstStorageAreaRate = useMstStorageAreaRate(apiBase);
  const mstUnitPriceAVN = useMstUnitPriceAVN(apiBase);
  const mstInventoryCost = useMstInventoryCost(apiBase);

  return {
    ...provinceApis,
    ...dealerApis,
    ...areaApis,
    ...mstPort,
    ...mstPortType,
    ...mstDealerType,
    ...mstDistrict,
    ...userApis,
    ...mstMaintainTask,
    ...mstCarCancel,
    ...mstPlant,
    ...mstDealerSalesGroup,
    ...mstSalesType,
    ...rptPrincipleContract,
    ...mstInsurance,
    ...mstDelayTransports,
    ...mstStorageAreaRate,
    ...mstUnitPriceAVN,
    ...mstInventoryCost,
  };
};

export const useClientgateApi = () => {
  const {
    auth: { currentUser, networkId, orgData, clientGateUrl },
  } = useAuth();
  return createClientGateApi(
    currentUser!,
    clientGateUrl!,
    networkId,
    orgData?.Id!
  );
};
