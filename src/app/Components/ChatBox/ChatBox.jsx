// 'use client'

import { Button } from "@/Components/ui/button"
import { Textarea } from "@/Components/ui/textarea";
import { SendHorizontal } from 'lucide-react';


export default function ChatBox() {
    return (
        <div>
            <div className="flex h-full">
            <Textarea/>
                <Button className="" variant="outline">
                    <SendHorizontal />
                </Button>
            </div>
        </div>
    )
}
