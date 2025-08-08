import CheckSquare from "@/components/icons/checkSquare";
import {
  Bolt,
  ChartNoAxesColumn,
  ClipboardCheck,
  Flag,
  House,
  Layers,
  LifeBuoy,
  Settings,
  UsersRound,
} from "lucide-react";

export const routes = [
  {
    href: "/settings/home",
    pathname: "Home",
    icon: <House />,
    notifs: 0,
  },
  {
    href: "/settings/dashboard",
    pathname: "Dashboard",
    icon: <ChartNoAxesColumn />,
    notifs: 10,
  },

  {
    href: "/settings/projects",
    pathname: "Projects",
    icon: <Layers />,
    notifs: 0,
  },
  {
    href: "/settings/task",
    pathname: "Tasks",
    icon: <CheckSquare />,
    notifs: 0,
  },
  {
    href: "/settings/reporting",
    pathname: "Reporting",
    icon: <Flag />,
    notifs: 0,
  },
  {
    href: "/settings/users",
    pathname: "Users",
    icon: <UsersRound />,
    notifs: 0,
  },
  {
    href: "/settings/support",
    pathname: "Support",
    icon: <LifeBuoy />,
    notifs: 0,
  },
  {
    href: "/settings",
    pathname: "Settings",
    icon: <Settings />,
    notifs: 0,
  },
];
