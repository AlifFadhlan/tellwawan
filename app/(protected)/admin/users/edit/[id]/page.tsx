import UpdateParentForm from "@/components/admin/jobparent-edit";
import UpdateUserForm from "@/components/admin/user-edit";
import { getJobParentbyId } from "@/data/admin";
import { getUserById } from "@/data/user";
import { notFound } from "next/navigation";

const AdminEditUser = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const user = await getUserById(id);

  if (!user) {
    return notFound();
  }

  return <UpdateUserForm user={user} />;
};

export default AdminEditUser;
