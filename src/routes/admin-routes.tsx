import {
  AdminPage,
  DealerManagementPage,
  ProvinceManagementPage,
} from "@/pages";
import { MstMaintainTaskClone } from "@/pages/MstMaintainTask-Clone/list";
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
