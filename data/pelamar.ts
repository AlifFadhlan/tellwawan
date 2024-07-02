import db from "@/lib/db";
import { UserRoles } from "@prisma/client";

export const getInterviewUser = async (id: string | undefined) => {
  try {
    const interview = await db.interview.findMany({
      include: {
        child: { include: { parent: true, user: true } },
        user: true,
      },
      where: {
        user_id: id,
      },
    });
    return interview;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getInterviewUserById = async (id: string) => {
  try {
    const interview = await db.interview.findUnique({
      include: {
        child: { include: { parent: true, user: true } },
        user: true,
      },
      where: {
        id,
      },
    });
    return interview;
  } catch (error) {
    throw new Error("Failed to fetch interview by id");
  }
};
