interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="flex flex-col p-4 md:p-12 h-[100vh] bg-slate-300">
      {children}
    </div>
  );
};

export default UserLayout;
