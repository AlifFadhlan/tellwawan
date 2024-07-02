export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col p-4 md:p-12 h-[100vh] bg-slate-200">
      {children}
    </div>
  );
}
