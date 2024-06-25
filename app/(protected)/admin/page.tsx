"use client";

import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRoles } from "@prisma/client";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import DashboardCard from "@/components/DashboardCard";
import {
  Briefcase,
  User,
  MessageCircleWarning,
  Building,
  CircleCheckBig,
} from "lucide-react";

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route");
      } else {
        toast.error("Forbidden API Route");
      }
    });
  };
  return (
    <>
      {/* Card widget */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-5">
        {" "}
        {/* Reduced gap from 5 to 3 */}
        <DashboardCard
          title="Perusahaan"
          count={9}
          icon={<Building className="text-slate-500" size={20} />}
        />
        <DashboardCard
          title="Mahasiswa"
          count={210}
          icon={<User className="text-slate-500" size={20} />}
        />
        <DashboardCard
          title="Lowongan"
          count={90}
          icon={<Briefcase className="text-slate-500" size={20} />}
        />
        <DashboardCard
          title="Sudah Interview"
          count={109}
          icon={<CircleCheckBig className="text-slate-500" size={20} />}
        />
        <DashboardCard
          title="Belum Interview"
          count={110}
          icon={<MessageCircleWarning className="text-slate-500" size={20} />}
        />
      </div>
    </>
    // <div className="flex flex-row justify-between">
    //   <p>Admin Page</p>

    //   <Dialog>
    //     <DialogTrigger className="p-2 bg-primary rounded rounded-xl text-white">
    //       Add User
    //     </DialogTrigger>
    //     <DialogContent className="sm:max-w-[425px]">
    //       <DialogHeader>
    //         <DialogTitle>Add user</DialogTitle>
    //         <DialogDescription>
    //           Make changes to your profile here. Click save when you're done.
    //         </DialogDescription>
    //       </DialogHeader>
    //       <div className="grid gap-4">
    //         <div className="grid grid-cols-4 items-center gap-4">
    //           <Label htmlFor="name" className="text-left">
    //             Name
    //           </Label>
    //           <Input id="name" className="col-span-3" />
    //         </div>
    //         <div className="grid grid-cols-4 items-center gap-4">
    //           <Label htmlFor="email" className="text-left">
    //             Email
    //           </Label>
    //           <Input id="email" type="email" className="col-span-3" />
    //         </div>
    //         <div className="grid grid-cols-4 items-center gap-4">
    //           <Label htmlFor="password" className="text-left">
    //             Password
    //           </Label>
    //           <Input id="password" type="password" className="col-span-3" />
    //         </div>
    //       </div>
    //       <DialogFooter>
    //         <Button type="submit">Save changes</Button>
    //       </DialogFooter>
    //     </DialogContent>
    //   </Dialog>
    // </div>
    // ========================================
    // <Card className="w-[600px]">
    //   <CardHeader>
    //     <p className="text-2xl font-semibold text-center">🔑 Admin</p>
    //   </CardHeader>
    //   <CardContent className="space-y-4">
    //     <RoleGate allowedRoles={UserRoles.ADMIN}>
    //       {/* <FormSuccess message="You are an admin" /> */}

    //       <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
    //         <p className="text-sm font-medium">Admin-only API Route</p>
    //         <Button onClick={onApiRouteClick}>Click to test</Button>
    //       </div>
    //       <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
    //         <p className="text-sm font-medium">Admin-only Server Action</p>
    //         <Button>Click to test</Button>
    //       </div>
    //     </RoleGate>
    //   </CardContent>
    // </Card>
  );
};
export default AdminPage;
