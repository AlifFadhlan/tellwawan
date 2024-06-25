import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { getAllUsers } from "@/data/admin";
import Link from "next/link";

const UserTables = async () => {
  const users = await getAllUsers();
  return (
    <Table>
      <TableCaption>A list of users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nama</TableHead>
          <TableHead className="hidden md:table-cell">Email</TableHead>
          <TableHead className="hidden md:table-cell">Role</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.name}</TableCell>
            <TableCell className="hidden md:table-cell">{post.email}</TableCell>
            <TableCell className="hidden md:table-cell">{post.role}</TableCell>
            <TableCell>
              <Link href={`/admin/users/edit/${post.id}`}>
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

export default UserTables;
