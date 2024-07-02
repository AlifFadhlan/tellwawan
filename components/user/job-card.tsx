import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DashboardCardProps {
  title: string;
  count: string | null;
  icon: React.ReactNode;
  id_interview: string;
}

const JobCard: React.FC<DashboardCardProps> = ({
  title,
  count,
  icon,
  id_interview,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 shadow-md rounded-lg p-3 flex flex-col justify-between h-40">
      {" "}
      {/* Reduced padding and height */}
      <div className="flex justify-between items-center mb-2">
        {" "}
        {/* Reduced bottom margin */}
        <div className="text-2xl font-bold">{count}</div>
        <div className="text-gray-500">{icon}</div>
      </div>
      <div className="">{title}</div>
      <Dialog>
        <DialogTrigger className="p-2 bg-primary rounded rounded-xl text-white font-semibold dark:text-black mt-2">
          Mulai Interview
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Peringatan</DialogTitle>
            <DialogDescription>
              Jika Anda Sudah siap, klik tombol dibawah ini
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>
              <Link href={`/chat/${id_interview}`}>Save changes</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobCard;
