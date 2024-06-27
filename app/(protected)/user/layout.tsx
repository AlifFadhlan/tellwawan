import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[2000px] bg-secondary">
          {children}
        </div>
      </div>
    </>
  );
};

export default UserLayout;
