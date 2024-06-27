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
import {
  Briefcase,
  User,
  MessageCircleWarning,
  Building,
  CircleCheckBig,
} from "lucide-react";
import JobCard from "@/components/user/job-card";

const UserPage = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-5">
        {" "}
        {/* Reduced gap from 5 to 3 */}
        <JobCard
          count="Perusahaan A"
          title="UIUX"
          icon={<Building className="text-slate-500" size={20} />}
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
  );
};
export default UserPage;
