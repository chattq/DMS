import {
  AdminPage,
  DealerManagementPage,
  ProvinceManagementPage,
} from "@/pages";
import { MstPlant } from "@/pages/Mst-Plant/list";
import { MstCarCancelType } from "@/pages/MstCarCancelType/list";
import { MstMaintainTaskClone } from "@/pages/MstMaintainTask-Clone/list";
import { MstDealerSalesGroup } from "@/pages/Mst_Dealer_Sales_Group/list";
import { MstSalesType } from "@/pages/Mst_Sales_Type/list";
import { RptPrincipleContract } from "@/pages/Rpt_Principle_Contract/list";
import { DistrictManagermentClone } from "@/pages/district-managermentClone/list";

import { RouteItem } from "@/types";

export const adminRoutes: RouteItem[] = [
  {
    key: "admin",
    path: "admin",
    mainMenuTitle: "admin",
    mainMenuKey: "admin",
    getPageElement: () => <AdminPage />,
  },
  {
    key: "provinceManagement",
    path: "admin/province",
    subMenuTitle: "provinceManagement",
    mainMenuKey: "admin",
    getPageElement: () => <ProvinceManagementPage />,
  },
  {
    key: "provinceManagement",
    path: "admin/province/:provinceId",
    subMenuTitle: "",
    mainMenuKey: "admin",
    getPageElement: () => <ProvinceManagementPage />,
  },
  {
    key: "districtManagementClone",
    path: "admin/districtClone",
    subMenuTitle: "districtManagementClone",
    mainMenuKey: "admin",
    getPageElement: () => <DistrictManagermentClone />,
  },
  {
    key: "MstMaintainTaskClone",
    path: "admin/mainTainClone",
    subMenuTitle: "Hạng mục công việc",
    mainMenuKey: "admin",
    getPageElement: () => <MstMaintainTaskClone />,
  },
  {
    key: "MstCarCancelType",
    path: "admin/MstCarCancelType",
    subMenuTitle: "Quản lý hủy xe",
    mainMenuKey: "admin",
    getPageElement: () => <MstCarCancelType />,
  },
  {
    key: "MstPlant",
    path: "admin/MstPlant",
    subMenuTitle: "Quản lý nhà máy",
    mainMenuKey: "admin",
    getPageElement: () => <MstPlant />,
  },
  {
    key: "Mst_Dealer_SalesGroup",
    path: "admin/MstSalesGroup",
    subMenuTitle: "Nhóm loại hình bán lẻ",
    mainMenuKey: "admin",
    getPageElement: () => <MstDealerSalesGroup />,
  },
  {
    key: "Mst_Sales_Type",
    path: "admin/MstSalesType",
    subMenuTitle: "Loại hình bán lẻ",
    mainMenuKey: "admin",
    getPageElement: () => <MstSalesType />,
  },
  {
    key: "Rpt_PrincipleContract",
    path: "admin/principleContract",
    subMenuTitle: "Quản lý thông tin hợp đồng",
    mainMenuKey: "admin",
    getPageElement: () => <RptPrincipleContract />,
  },
  {
    key: "districtManagement",
    path: "admin/district",
    subMenuTitle: "districtManagement",
    mainMenuKey: "admin",
    getPageElement: () => <DealerManagementPage />,
  },
  {
    key: "regionManagement",
    path: "admin/region",
    subMenuTitle: "regionManagement",
    mainMenuKey: "admin",
    getPageElement: () => <DealerManagementPage />,
  },
  {
    key: "invoiceTypeManagement",
    path: "admin/invoiceType",
    subMenuTitle: "invoiceTypeManagement",
    mainMenuKey: "admin",
    getPageElement: () => <DealerManagementPage />,
  },
];
