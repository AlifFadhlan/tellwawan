import db from "@/lib/db";
import { UserRoles } from "@prisma/client";

export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getAllPerekrut = async () => {
  try {
    const users = await db.user.findMany({
      where: {
        role: UserRoles.REKRUTER,
      },
    });
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getAllPelamar = async () => {
  try {
    const users = await db.user.findMany({
      where: {
        role: UserRoles.USER,
      },
    });
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user");
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

export const getJobParentbyId = async (id: string) => {
  try {
    const jobParent = await db.job_Parent.findUnique({
      where: {
        id: id,
      },
    });
    return jobParent;
  } catch (error) {
    throw new Error("Failed to fetch job parent");
  }
};

export const getAllJobChild = async () => {
  try {
    const jobChild = await db.job_Child.findMany({
      include: {
        parent: true,
        user: true,
      },
    });
    return jobChild;
  } catch (error) {
    throw new Error("Failed to fetch job childs");
  }
};

export const getAllInterviews = async () => {
  try {
    const interviews = await db.interview.findMany({
      include: {
        child: { include: { parent: true, user: true } },
        user: true,
      },
    });
    return interviews;
  } catch (error) {
    throw new Error("Failed to fetch interviews");
  }
};

export const getInterviewByUserId = async (user_id: string | undefined) => {
  try {
    const interviews = await db.interview.findMany({
      where: {
        child: {
          user_id: user_id,
        },
      },
      include: {
        child: { include: { parent: true, user: true } },
        user: true,
      },
    });
    return interviews;
  } catch (error) {
    throw new Error("Failed to fetch interviews");
  }
};
