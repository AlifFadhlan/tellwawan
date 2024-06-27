import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { currentUser } from "@/lib/auth";
import { UserRoles } from "@prisma/client";
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = async () => {
  const user = await currentUser();
  return (
    <Command className="rounded-none">
      <CommandList>
        {user?.role === UserRoles.ADMIN && (
          <CommandGroup heading="Admin">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/admin">Dashboard</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className="mr-2 h-4 w-4" />
              <Link href="/admin/users">User</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/admin/jobparent">Job Parent</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/admin/jobchild">Job Child</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/admin/interview">Interview</Link>
            </CommandItem>
          </CommandGroup>
        )}
        {user?.role === UserRoles.USER && (
          <CommandGroup heading="Pelamar">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/user">Dashboard</Link>
            </CommandItem>
          </CommandGroup>
        )}
        {user?.role === UserRoles.REKRUTER && (
          <CommandGroup heading="Rekruter">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/rekruter">Dashboard</Link>
            </CommandItem>
          </CommandGroup>
        )}
        {/* <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup> */}
      </CommandList>
    </Command>
  );
};

export default Sidebar;
