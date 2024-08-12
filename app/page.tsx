"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { LinkIcon, LogOut } from "lucide-react";


export default function Home() {
  const router = useRouter();
  const user = true;

  return (
    <main className="min-h-screen container">
      <nav className="py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-x-1">
          <Image
            src="/url-trim-png.png"
            alt="web-logo"
            width={50}
            height={50}
          />
          <h3>url-trim</h3>
        </Link>
        {!user ? (
          <Button onClick={() => router.push("/auth/login")}> Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>KY</AvatarFallback>
            </Avatar>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Kehinde Yusuf</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LinkIcon className='mr-2 h-4 w-4'/>
                My Links
                </DropdownMenuItem>
              <DropdownMenuItem className='text-red-400'>
                <LogOut className='mr-2 h-4 w-4'/>
                  <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>
    </main>
  );
}
