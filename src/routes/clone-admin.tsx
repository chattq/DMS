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
];
