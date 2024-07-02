import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-red-600">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">
          TellWawan 🤵
        </h1>
        <p className="text-white text-lg">Chatbot Interview</p>
        <div>
          <LoginButton asChild>
            <Button size="lg" variant="secondary">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
