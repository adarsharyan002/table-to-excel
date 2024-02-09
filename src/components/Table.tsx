// import BreadCrumb from "@/components/BreadCrumb";
import { UserClient } from "@/components/Client";
import { users } from "@/utils/data";


import {columns} from '@/components/columns'
// const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default function Table() {

 
  return (
    <>
      <div className="flex-1 space-y-4  pt-2">
        
        <UserClient  data={users} columns={columns} category="Products" />
      </div>
    </>
  );
}
