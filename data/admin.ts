import db from "@/lib/db";

export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getAllJobParents = async () => {
  try {
    const jobParents = await db.job_Parent.findMany();
    return jobParents;
  } catch (error) {
    throw new Error("Failed to fetch job parents");
  }
};
