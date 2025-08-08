import Welcome from "@/components/layout/welcome";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_base/")({
  component: () => <Welcome />,
});
