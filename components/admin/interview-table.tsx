import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { getAllInterviews } from "@/data/admin";
import Link from "next/link";

import React from "react";

export const InterviewTables = async () => {
  const interviews = await getAllInterviews();

  return (
    <Table>
      <TableCaption>A list of interviews</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nama</TableHead>
          <TableHead className="hidden md:table-cell">Job Child</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Keputusan</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {interviews.map((interview) => (
          <TableRow key={interview.id}>
            <TableCell>{interview.user.name}</TableCell>
            <TableCell className="hidden md:table-cell">
              {interview.child.name}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {interview.status}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {interview.judgment}
            </TableCell>
            <TableCell>
              <Link href={`/admin/interview/edit/${interview.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                  Edit
                </button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
