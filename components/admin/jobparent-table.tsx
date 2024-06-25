import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { getAllJobParents } from "@/data/admin";
import Link from "next/link";

import React from "react";

export const ParentTables = async () => {
  const parents = await getAllJobParents();
  return (
    <Table>
      <TableCaption>A list of job parent</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nama</TableHead>
          <TableHead className="hidden md:table-cell">Pertanyaan</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {parents.map((parent) => (
          <TableRow key={parent.id}>
            <TableCell>{parent.name}</TableCell>
            <TableCell className="hidden md:table-cell">
              {parent.question}
            </TableCell>
            <TableCell>
              <Link href={`/admin/jobparent/edit/${parent.id}`}>
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
