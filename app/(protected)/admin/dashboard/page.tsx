import dynamic from "next/dynamic";
import { FC } from "react";

import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "@/components/widget";
import DashboardCard from "@/components/DashboardCard";
import {
  Briefcase,
  User,
  MessageCircleWarning,
  Building,
  CircleCheckBig,
} from "lucide-react";

type Props = {};

const DashboardPage: FC<Props> = () => {
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
  );
};

export default DashboardPage;
