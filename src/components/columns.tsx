
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/utils/data";

import { Checkbox } from "@/components/ui/checkbox";


export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "NAME",
   

  },
  {
    accessorKey: "category",
    header: "CATEGORY",
  },
  {
    accessorKey: "brand",
    header: "BRAND",
  },
  {
    accessorKey: "price",
    header: "PRICE",
  },
  {
    id: "actions",
    
    cell: () => <CellAction  />,
  },
];
