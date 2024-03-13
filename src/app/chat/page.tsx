import { UserButton } from "@clerk/nextjs";

export default function ChatPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      Chat
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
