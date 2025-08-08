import PageScaffold from "@/components/layout/emptyPageScaffold";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/settings/reporting")({
  component: () => <PageScaffold pageTitle="Reporting" />,
});
