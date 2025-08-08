import RouteComponent from "@/layouts/settingsLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/settings")({
  component: RouteComponent,
});
