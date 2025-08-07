import RoleSettings from "@/pages/settings";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/settings")({
  component: () => <RoleSettings />,
});
