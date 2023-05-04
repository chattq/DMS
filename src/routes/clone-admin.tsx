import {
  AdminPage,
  DealerManagementPage,
  ProvinceManagementPage,
} from "@/pages";
import ProvinceManagerClone from "@/pages/Clone-Province/Province-list/ProvinceManagerClone";
import { RouteItem } from "@/types";

export const cloneAdminRoutes: RouteItem[] = [
  {
    key: "Clone",
    path: "clone",
    mainMenuTitle: "clone",
    mainMenuKey: "clone",
    getPageElement: () => <ProvinceManagerClone />,
  },
  {
    key: "provinceManagement",
    path: "clone/province",
    subMenuTitle: "provinceManagement",
    mainMenuKey: "clone",
    getPageElement: () => <ProvinceManagementPage />,
  },
  {
    key: "provinceManagement",
    path: "clone/province/:provinceId",
    subMenuTitle: "",
    mainMenuKey: "clone",
    getPageElement: () => <ProvinceManagementPage />,
  },
  {
    key: "districtManagement",
    path: "clone/district",
    subMenuTitle: "districtManagement",
    mainMenuKey: "clone",
    getPageElement: () => <DealerManagementPage />,
  },
  {
    key: "regionManagement",
    path: "clone/region",
    subMenuTitle: "regionManagement",
    mainMenuKey: "clone",
    getPageElement: () => <DealerManagementPage />,
  },
  {
    key: "invoiceTypeManagement",
    path: "clone/invoiceType",
    subMenuTitle: "invoiceTypeManagement",
    mainMenuKey: "clone",
    getPageElement: () => <DealerManagementPage />,
  },
];
