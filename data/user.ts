import db from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

export const getInterviewbyId = async (user_id: string | undefined) => {
  try {
    const interview = await db.interview.findFirst({ where: { user_id } });
    return interview;
  } catch {
    return null;
  }
};
