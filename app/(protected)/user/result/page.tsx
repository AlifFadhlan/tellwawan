import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getInterviewbyId } from "@/data/user";

const UserResult = async () => {
  const user = await currentUser();
  const summary = await getInterviewbyId(user?.id);
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-[600px] shadow-md">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">{user?.name}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Chat History</p>
            <p className="text-xs max-w-[300px] font-mono p-1 bg-slate-100 rounded-md">
              {summary?.chathistory}
            </p>
          </div> */}
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Summary</p>
            <p className=" text-xs max-w-[300px] font-mono p-1 bg-slate-100 rounded-md">
              {summary?.summary as string}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserResult;
