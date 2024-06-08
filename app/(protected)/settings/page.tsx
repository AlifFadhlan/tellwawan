"use client";

import { logout } from "@/actions/logout";
import { useSession, signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const session = useSession();
  const user = useCurrentUser();

  const onPlis = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={onPlis}>
        Logout
      </button>
    </div>
  );
};

export default SettingsPage;
