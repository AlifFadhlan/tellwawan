import UpdateParentForm from "@/components/admin/jobparent-edit";
import { getJobParentbyId } from "@/data/admin";
import { notFound } from "next/navigation";

const AdminEditJobParent = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const oldParent = await getJobParentbyId(id);

  if (!oldParent) {
    return notFound();
  }

  return <UpdateParentForm jobparent={oldParent} />;
};

export default AdminEditJobParent;
