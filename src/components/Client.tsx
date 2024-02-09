

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { User, users } from "@/utils/data";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { ExportCSV } from "@/Excel/ExportToCSV";





interface ProductsClientProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  category: string;
}

export const UserClient: React.FC<ProductsClientProps<User>> = React.memo(({ data,columns,category }) => {


//   const router = useRouter();

  return (
    <>
       <Heading
          title={category}
          description=""
        />
       {category == 'Products'? 
      <div className="flex items-start justify-between">
        <div className="bg-red-400 p-2 text-white rounded">
       
       <ExportCSV  csvData={users} fileName="text-excel-doc" />
       </div>

        
       
       
        
        
      </div>:null}
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
});
