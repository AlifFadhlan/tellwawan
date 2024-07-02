import React from "react";
import JobCard from "./job-card";
import {
  Briefcase,
  User,
  MessageCircleWarning,
  Building,
  CircleCheckBig,
} from "lucide-react";
import { getInterviewUser } from "@/data/pelamar";

const DashCard = async ({ id }: { id: string | undefined }) => {
  const interviews = await getInterviewUser(id);
  return (
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

export default DashCard;
