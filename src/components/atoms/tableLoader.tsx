import { Skeleton } from "../ui/skeleton";

interface TableLoaderProps {
  columnCount: number;
  rowCount?: number;
}

const TableLoader = ({ columnCount, rowCount = 3 }: TableLoaderProps) => {
  return (
    <>
      {Array.from({ length: rowCount }).map(() => (
        <tr key={crypto.randomUUID()}>
          {Array.from({ length: columnCount }).map(() => (
            <td key={crypto.randomUUID()} className="px-2 py-3">
              <Skeleton className="h-[35px]" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableLoader;
