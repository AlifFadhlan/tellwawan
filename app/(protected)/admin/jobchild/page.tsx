import { ChildTables } from "@/components/admin/jobchild-table";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const JobChildPage = () => {
  return (
    <Card className="p-4 dark:bg-slate-900">
      <div className="flex flex-row items-center justify-between">
        <p className="font-semibold">Job Child</p>
        <Button>
          <Link href={"/admin/jobchild/add"}>Add</Link>
        </Button>
      </div>
      <ChildTables />
    </Card>
  );
};

export default JobChildPage;
