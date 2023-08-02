"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Montserrat({
	weight: "600",
	subsets: ["latin"],
});

export const LandingNavBar = () => {
	const { isSignedIn } = useAuth();

	return (
		<nav className="p-4 bg-transparent flex items-center justify-between">
			<Link
				href="/"
				className="flex items-center"
			>
				<div className="relative h-14 w-14 ">
					<Image
						fill
						alt="logo"
						src={"/logo1.png"}
					/>
				</div>
				<h1 className={cn("text-2xl font-bold text-white", font.className)}>
					Flair
					<span
						className={cn(
							" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600",
							font.className
						)}
					>
						AI
					</span>
				</h1>
			</Link>
			<div className="flex items-centergap-x-2">
				<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
					<Button
						variant={"outline"}
						className="rounded-full"
					>
						Get Started
					</Button>
				</Link>
			</div>
		</nav>
	);
};
