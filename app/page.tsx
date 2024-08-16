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
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FormEvent, useState } from "react";




export default function Home() {
  const [longUrl, setLongUrl] = useState<string>('');

  const router = useRouter()
  const user = false;

  const handleUrlShortner = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(longUrl) router.push(`/auth?createNew=${longUrl}`) 
  }


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
          <Button onClick={() => router.push("/auth")}> Login</Button>
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

      <section className="flex flex-col items-center">
        <h2 className="my-10 sm:text-6xl lg:text-7xl text-center text-textGradient font-extrabold">
          Shorten Your Loooooong URLs</h2>
          <form onSubmit={handleUrlShortner} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
            <Input type="url"
            placeholder="Enter URL"
            className="h-full flex-1 py-4 px-4"
            onChange={(e)=> setLongUrl(e.target.value)}
            />
            <Button className="h-full bg-blue-700 text-white hover:text-black" type="submit">Shorten Now!</Button>
          </form>
      </section>

      <Accordion type="multiple" collapsible className="w-full my-11 md:px-11">
  <AccordionItem value="item-1">
    <AccordionTrigger>How does it works?</AccordionTrigger>
    <AccordionContent>
      When you enter a lonig URL, our system generates a shorter version
      of that URL. This shortened URL redirects to the original long URL when acessed
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does it works?</AccordionTrigger>
    <AccordionContent>
      When you enter a lonig URL, our system generates a shorter version
      of that URL. This shortened URL redirects to the original long URL when acessed
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>How does it works?</AccordionTrigger>
    <AccordionContent>
      When you enter a lonig URL, our system generates a shorter version
      of that URL. This shortened URL redirects to the original long URL when acessed
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </main>
  );
}
