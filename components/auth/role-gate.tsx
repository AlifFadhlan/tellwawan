"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRoles } from "@prisma/client";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: UserRoles;
}

export const RoleGate = ({ children, allowedRoles }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRoles) {
    return <FormError message="You are not authorized to view this page" />;
  }

  return <>{children}</>;
};
