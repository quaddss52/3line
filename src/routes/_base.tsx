import BaseLayout from "@/layouts/baseLayout";
import RouteComponent from "@/layouts/settingsLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_base")({
  component: BaseLayout,
});
