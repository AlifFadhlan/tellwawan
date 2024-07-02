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
import DashCard from "@/components/user/dashcard";
import { getInterviewUser } from "@/data/pelamar";
import { currentUser } from "@/lib/auth";

const UserPage = async () => {
  const user = await currentUser();
  const userid = user?.id;
  const interviews = await getInterviewUser(userid);
  return (
    // <DashCard id={userid} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-5">
      {interviews.map((interview) => (
        <JobCard
          count={interview.child.user.name}
          title={interview.child.parent.name}
          id_interview={interview.id}
          icon={<Building className="text-slate-500" size={20} />}
        />
      ))}
    </div>
  );
};
export default UserPage;
