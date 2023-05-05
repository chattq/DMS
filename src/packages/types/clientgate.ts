export interface ClientGateInfo {
  SolutionCode: string;
  NetworkID: string;
  NetworkName: string;
  GroupNetworkID: string;
  CoreAddr: string | null;
  PingAddr: string | null;
  XSysAddr: string | null;
  WSUrlAddr: string;
  WSUrlAddrLAN: string;
  DBUrlAddr: string | null;
  DefaultVersion: string;
  MinVersion: string;
  FlagActive: string;
  LogLUDTime: string;
  LogLUBy: string;
}

export interface ClientGateInfoResponse {
  Data: {
    _strTId: string;
    _strAppTId: string;
    _objTTime: string;
    _strType: string;
    _strErrCode: string;
    _objResult: ClientGateInfo[];
    _excResult: any;
    _dicDebugInfo: {
      strTid: string;
      strAppTId: string;
      "dataInput.SolutionCode": string;
      "dataInput.NetworkIDSearch": string;
    };
  };
}

export interface Dealer {
  DealerCode: string;
  DealerType: string;
  ProvinceCode: string;
  BUCode: string;
  BUPattern: string;
  DealerName: string;
  FlagDirect: string;
  FlagActive: string;
  DealerScale: string;
  DealerPhoneNo: string;
  DealerFaxNo: string;
  CompanyName: string;
  CompanyAddress: string;
  ShowroomAddress: string;
  GarageAddress: string | null;
  GaragePhoneNo: string | null;
  GarageFaxNo: string | null;
  DirectorName: string | null;
  DirectorPhoneNo: string | null;
  DirectorEmail: string | null;
  SalesManagerName: string | null;
  SalesManagerPhoneNo: string | null;
  SalesManagerEmail: string;
  GarageManagerName: string | null;
  GarageManagerPhoneNo: string | null;
  GarageManagerEmail: string | null;
  TaxCode: string;
  ContactName: string;
  Signer: string | null;
  SignerPosition: string | null;
  CtrNoSigner: string | null;
  CtrNoSignerPosition: string | null;
  HTCStaffInCharge: string | null;
  Remark: string;
  DealerAddress01: string | null;
  DealerAddress02: string | null;
  DealerAddress03: string | null;
  DealerAddress04: string | null;
  DealerAddress05: string | null;
  FlagTCG: string;
  FlagAutoLXX: string;
  FlagAutoMapVIN: string;
  FlagAutoSOAppr: string;
}

export interface Mst_Port {
  PortCode: string;
  PortName: string;
  ProvinceCode: string;
  PortAddress: string;
  PortType: string;
  LogLUDTimeUTC: string;
  LogLUBy: string;
}

export interface Mst_PortType {
  PortType: string;
  PortTypeName: string;
  LogLUDTimeUTC: string;
  LogLUBy: string;
}

export interface Mst_District {
  DistrictCode: string;
  ProvinceCode: string;
  DistrictName: string;
  FlagActive: string;
  LogLUDTimeUTC: string;
  LogLUBy: string;
}
export interface Mst_Maintain_Task {
  MtnTkCode: string;
  MtnTkType: string;
  MtnTkName: string;
  FlagActive: string;
  LogLUDateTime: string;
  LogLUBy: string;
}

export interface Mst_DealerType {
  DealerType: string;
  DealerTypeName: string;
  LogLUDTimeUTC: string;
  LogLUBy: string;
}

export interface Province {
  ProvinceCode: string;
  AreaCode: string;
  ProvinceName: string;
  FlagActive: string;
  LogLUDateTime: string;
  LogLUBy: string;
}
export interface CGResult<T> {
  PageIndex: number;
  PageSize: number;
  PageCount: number;
  ItemCount: number;
  DataList: T[];
}
export interface CGResponse<T> {
  Data: {
    _strTId: string;
    _strAppTId: string;
    _objTTime: string;
    _strType: string;
    _strErrCode: string;
    _objResult: CGResult<T> | T;
    _excResult: any;
    _dicDebugInfo: {
      strTid: string;
      strAppTId: string;
    };
  };
  isSuccess?: boolean;
}

export interface ApiResponse<T> {
  isSuccess: boolean;
  errorCode: string;
  errorInfo?: object;
  debugInfo: object;
  DataList?: T[];
  Data?: T;
  ItemCount?: number;
  PageCount?: number;
  PageIndex?: number;
  PageSize?: number;
}
export enum FlagActiveEnum {
  Active = "1",
  Inactive = "0",
  All = "",
}
export interface SearchParam {
  KeyWord: string;
  FlagActive: FlagActiveEnum;
  Ft_PageSize: number;
  Ft_PageIndex: number;
}
export interface DeleteDealerParam {
  DealerCode: string;
}

export interface Area {
  AreaCode: string;
  AreaName: string;
  AreaRootCode: string;
  Level: string;
  FlagActive?: FlagActiveEnum;
  LogLUDTimeUTC?: string;
  LogLUBy: string;
}

// Quản lý địa điểm nhận xe của Đại lý
export interface Mst_PointRegis {
  PointRegisCode: string; // Mã địa điểm
  DealerCode: string; // Mã đại lý
  PointRegisName: string; // Địa chỉ giao xe
  MapLongitude: string; // Kinh độ
  MapLatitude: string; // Vĩ độ
  Radius: string; // Bán kính
  Remark: string; // Ghi chú
  FlagActive?: FlagActiveEnum; // Trạng thái
  LogLUDateTime?: string;
  LogLUBy: string;
}

export interface User {
  UserCode: string;
  SUDealerCode: string;
  SUBankCode: string;
  UserName: string;
  UserPassword: string;
  FlagSysAdmin: string;
  FlagSysViewer: string;
  SUFlagActive: string;
  SUTransporterCode?: string;
  SUInsCompanyCode: string;
  NetworkID?: string;
  UserPasswordNew?: string;
  PhoneNo?: string;
  EMail?: string;
  MST?: string;
  OrganCode?: string;
  DepartmentCode?: string;
  Position?: string;
  VerificationCode?: string;
  Avatar?: string;
  UUID?: string;
  FlagDLAdmin?: string;
  FlagNNTAdmin?: string;
  OrgID?: string;
  CustomerCodeSys?: string;
  CustomerCode?: string;
  CustomerName?: string;
  FlagActive: string;
  LogLUDTimeUTC?: string;
  LogLUBy: string;
  ACId?: string;
  ACAvatar?: string;
  ACEmail?: string;
  ACLanguage?: string;
  ACName?: string;
  ACPhone?: string;
  ACTimeZone?: string;
  mo_OrganCode?: string;
  mo_OrganName?: string;
  mdept_DepartmentCode?: string;
  mdept_DepartmentName?: string;
  mnnt_DealerType?: string;
  ctitctg_CustomerGrpCode?: string;
}
