import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { getAllJobChild } from "@/data/admin";
import Link from "next/link";

import React from "react";

export const ChildTables = async () => {
  const childs = await getAllJobChild();

  return (
    <Table>
      <TableCaption>A list of job child</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nama</TableHead>
          <TableHead className="hidden md:table-cell">Job Parent</TableHead>
          <TableHead className="hidden md:table-cell">Rekruter</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {childs.map((child) => (
          <TableRow key={child.id}>
            <TableCell>{child.name}</TableCell>
            <TableCell className="hidden md:table-cell">
              {child.parent.name}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {child.user.name}
            </TableCell>
            <TableCell>
              <Link href={`/admin/jobchild/edit/${child.id}`}>
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
