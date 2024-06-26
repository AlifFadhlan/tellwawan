import AddJobChildForm from "@/components/admin/jobchild-add";
import { getAllJobParents, getAllPerekrut } from "@/data/admin";

const AdminAddJobChild = async () => {
  const parent_id = await getAllJobParents();
  const user_id = await getAllPerekrut();
  const parentt = parent_id.entries();
  const parent = parent_id.values();
  const users = user_id.values();
  return <AddJobChildForm parent_id={parent} user_id={users} />;
};

export default AdminAddJobChild;
