import { useMemo } from "react";
import { MenuBarItem } from "@/types";
import { useI18n } from "@/i18n/useI18n";

export const useHeaderItems = () => {
  const { t } = useI18n("Common");
  const menuBarItems = useMemo<MenuBarItem[]>(
    () => [
      {
        text: t("Sales"),
        path: `/sales`,
      },
      {
        text: t("Payment"),
        path: `/payment`,
      },
      {
        text: t("Contract"),
        path: `/contract`,
      },
      {
        text: t("Logistic"),
        path: `/logistic`,
      },
      {
        text: t("Report"),
        path: `/report`,
      },
      {
        text: t("Admin"),
        path: `/admin`,
      },
      {
        text: t("Clone"),
        path: `/clone`,
      },
    ],
    [t]
  );

  return { items: menuBarItems };
};
