type navbarProps = {
  pageTitle: string;
  subHeading: string;
};
export default function Navbar({ pageTitle, subHeading }: navbarProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-medium text-3xl">{pageTitle}</h3>
      <p className=" text-gray-500">{subHeading}</p>
    </div>
  );
}
