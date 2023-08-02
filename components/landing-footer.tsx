"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github } from "lucide-react";
import { Badge } from "./ui/badge";

const font = Montserrat({
	weight: "600",
	subsets: ["latin"],
});

export const LandingFooter = () => {
	const { isSignedIn } = useAuth();

	return (
		<footer className=" flex flex-col">
			<div className="text-zinc-400 flex justify-center">
				<Separator className="my-4" />
			</div>
			<div className="flex justify-between text-white items-center p-6">
				<div>FlairAI © </div>
				<div className="flex justify-center">
					<div className="text-muted-foreground">Developed by Drew 2023</div>
					<Link
						className="text-muted-foreground pl-2 transform transition-transform hover:-translate-y-2"
						href={"https://github.com/andxrew/FlairAI"}
						target="_blank"
					>
						<Github />
					</Link>
				</div>
				<div></div>
			</div>
			<div className="gap-x-2 flex flex-col justify-center ">
				<Badge
					variant={"secondary"}
					className="bg-transparent text-muted-foreground"
				>
					NEXTJS
				</Badge>
				<Badge
					variant={"secondary"}
					className="bg-transparent text-muted-foreground"
				>
					PRISMA
				</Badge>
				<Badge
					variant={"secondary"}
					className="bg-transparent text-muted-foreground"
				>
					TAILWIND CSS
				</Badge>
				<Badge
					variant={"secondary"}
					className="bg-transparent text-muted-foreground"
				>
					REACT
				</Badge>
				<Badge
					variant={"secondary"}
					className="bg-transparent text-muted-foreground"
				>
					CLERK
				</Badge>
				<Badge
					variant={"secondary"}
					className="bg-transparent text-muted-foreground"
				>
					STRIPE
				</Badge>
			</div>
		</footer>
	);
};
