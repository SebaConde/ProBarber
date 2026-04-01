"use client";
import Link from "next/link";
import { signOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import { Session } from "next-auth";

interface Props {
  session: Session | null;
}

const UserButton = ({ session }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center">
              <Button variant="ghost" className="relative w-8 h-8 rounded-full ml-2 flex items-center justify-center">
                {session?.user?.name?.charAt(0).toUpperCase() || "U"}
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <div className="text-sm font-medium leading-none font-bold">
                    {session?.user?.name}
                  </div>
                  <div className="text-sm text-muted-foreground leading-none">
                    {session?.user?.email}
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem className="p-0 mb-1">
                <form action={signOutUser} className="w-full">
                  <Button className="w-full py-4 px-2 h-4 justify-start" variant="ghost">
                    Cerrar sesión
                  </Button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button>
          <Link href="/sign-in">
            <UserIcon />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default UserButton; 