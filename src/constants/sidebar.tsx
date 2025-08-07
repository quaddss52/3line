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
    href: "#",
    pathname: "Home",
    icon: <House />,
    notifs: 0,
  },
  {
    href: "#",
    pathname: "Dashboard",
    icon: <ChartNoAxesColumn />,
    notifs: 10,
  },

  {
    href: "#",
    pathname: "Projects",
    icon: <Layers />,
    notifs: 0,
  },
  {
    href: "#",
    pathname: "Tasks",
    icon: <CheckSquare />,
    notifs: 0,
  },
  {
    href: "#",
    pathname: "Reporting",
    icon: <Flag />,
    notifs: 0,
  },
  {
    href: "#",
    pathname: "Users",
    icon: <UsersRound />,
    notifs: 0,
  },
  {
    href: "#",
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
