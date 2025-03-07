import ChatBox from "./Components/ChatBox/ChatBox";
import { Sidebar } from "./Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Chat History or Empty Space */}
        <div className="flex-1 p-4 overflow-y-auto">
          <p className="text-gray-500 text-sm">No messages yet...</p>
        </div>
        {/* ChatBox at Bottom */}
        <div className="p-4 bg-white border-t border-gray-200">
          <ChatBox />
        </div>
      </main>
    </div>
  );
}