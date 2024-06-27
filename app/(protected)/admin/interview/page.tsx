import { InterviewTables } from "@/components/admin/interview-table";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AdminInterviewPage = () => {
  return (
    <Card className="p-4 dark:bg-slate-900">
      <div className="flex flex-row items-center justify-between">
        <p className="font-semibold">Interview</p>
        <Button>
          <Link href={"/admin/interview/add"}>Add</Link>
        </Button>
      </div>
      <InterviewTables />
    </Card>
  );
};

export default AdminInterviewPage;
