export default function PageScaffold({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="">
      <p className="text-xl fornt-medium">{pageTitle}</p>
    </div>
  );
}
