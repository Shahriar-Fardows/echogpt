"use client"

import { Plus, MessageSquare, Settings, LogOut } from "lucide-react"
import { Button } from "../../Components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function Sidebar({  }) {
    const [conversations, setConversations] = useState([
        { id: 1, title: "Website design ideas", date: "2 hours ago" },
        { id: 2, title: "JavaScript debugging help", date: "Yesterday" },
        { id: 3, title: "Next.js routing question", date: "3 days ago" },
    ])

    const addNewChat = () => {
        const newChat = {
            id: conversations.length + 1,
            title: "New conversation",
            date: "Just now",
        }
        setConversations([newChat, ...conversations])
    }

    return (
        <div className="flex h-screen">
           
            {/* Sidebar */}
            <div
                className={`bg-sidebar text-sidebar-foreground border-r border-border transition-all duration-300 flex flex-col `}
            >
                {/* New Chat Button */}
                <div className="p-4">
                    <div className="flex items-center gap-4 py-2 px-4 cursor-pointer">
                        <Image
                            src="/logo.png"
                            alt="Echogpt Logo"
                            width={40}
                            height={30}
                            className="object-contain transition-transform hover:scale-110"
                        />
                        <h2 className="text-2xl font-bold tracking-tight">Echogpt</h2>
                    </div>
                    <Button onClick={addNewChat} className="w-full justify-start gap-2" variant="outline">
                        <Plus size={16} />
                        New Chat
                    </Button>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-auto p-2">
                    <h3 className="mb-2 px-2 text-xs font-medium text-muted-foreground">Recent Conversations</h3>
                    <div className="space-y-1">
                        {conversations.map((chat) => (
                            <Button key={chat.id} variant="ghost" className="w-full justify-start text-left">
                                <div className="flex items-center gap-2 truncate">
                                    <MessageSquare size={16} className="shrink-0" />
                                    <div className="truncate">
                                        <div className="truncate text-sm">{chat.title}</div>
                                        <div className="truncate text-xs text-muted-foreground">{chat.date}</div>
                                    </div>
                                </div>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-border p-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-2">
                        <Settings size={16} />
                        Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                        <LogOut size={16} />
                        Logout
                    </Button>
                </div>
            </div>
             
        </div>
    )
}

