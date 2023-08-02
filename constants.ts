import {
	LayoutDashboard,
	MessageSquarePlus,
	FileImageIcon,
	Clapperboard,
	Headphones,
	FileCode,
	Settings,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
	{
		label: "Conversation",
		icon: MessageSquarePlus,
		href: "/conversation",
		color: "text-violet-500",
		bgColor: "bg-violet-500/10",
	},

	{
		label: "Image Generation",
		icon: FileImageIcon,
		href: "/image",
		color: "text-pink-700",
		bgColor: "bg-pink-700/10",
	},

	{
		label: "Video Generation",
		icon: Clapperboard,
		href: "/video",
		color: "text-orange-700",
		bgColor: "bg-orange-700/10",
	},

	{
		label: "Music Generation",
		icon: Headphones,
		href: "/music",
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
	},

	{
		label: "Code Generation",
		icon: FileCode,
		href: "/code",
		color: "text-green-700",
		bgColor: "bg-green-700/10",
	},

	{
		label: "Settings",
		icon: Settings,
		href: "/settings",
		color: "text-gray-700",
		bgColor: "bg-gray-700/10",
	},
];
