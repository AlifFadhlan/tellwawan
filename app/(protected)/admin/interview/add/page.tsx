import AddInterviewForm from "@/components/admin/interview-add";
import AddJobChildForm from "@/components/admin/jobchild-add";
import { getAllJobChild, getAllPelamar } from "@/data/admin";

const AdminAddJobChild = async () => {
  const jobchild_id = await getAllJobChild();
  const user_id = await getAllPelamar();
  const child = jobchild_id.values();
  const users = user_id.values();
  return <AddInterviewForm jobchild_id={child} user_id={users} />;
};

export default AdminAddJobChild;
