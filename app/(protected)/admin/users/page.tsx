import UserTables from "@/components/admin/user-table";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AdminUsers = () => {
  return (
    <>
      <Card className="p-4 dark:bg-slate-900">
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold">Admin Users</p>
          <Button>
            <Link href={"/admin/users/add"}>Add</Link>
          </Button>
        </div>
        <UserTables />
      </Card>
    </>
  );
};

export default AdminUsers;
