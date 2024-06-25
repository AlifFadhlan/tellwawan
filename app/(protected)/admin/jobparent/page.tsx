import { ParentTables } from "@/components/admin/jobparent-table";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const JobParentPage = () => {
  return (
    <Card className="p-4 dark:bg-slate-900">
      <div className="flex flex-row items-center justify-between">
        <p>Admin Users</p>
        <Button>
          <Link href={"/admin/jobparent/add"}>Add</Link>
        </Button>
      </div>
      <ParentTables />
    </Card>
  );
};

export default JobParentPage;
