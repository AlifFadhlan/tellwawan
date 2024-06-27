import { currentUser } from "@/lib/auth";
import { UserRoles } from "@prisma/client";
import React from "react";
import AdminPage from "../admin/page";
import UserPage from "../user/page";
import { redirect } from "next/navigation";
import { DEFAULT_ADMIN_REDIRECT, DEFAULT_USER_REDIRECT } from "@/routes";

const AllHomePage = async () => {
  const user = await currentUser();
  if (user?.role === UserRoles.ADMIN) {
    return redirect(DEFAULT_ADMIN_REDIRECT);
  }
  if (user?.role === UserRoles.REKRUTER) {
    return redirect(DEFAULT_USER_REDIRECT);
  }
  if (user?.role === UserRoles.USER) {
    return redirect(DEFAULT_USER_REDIRECT);
  }
};

export default AllHomePage;
