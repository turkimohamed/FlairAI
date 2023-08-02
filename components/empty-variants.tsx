import Image from "next/image";

interface EmptyProps {
	label?: string;
	variant?: string;
}

interface VariantImages {
	[key: string]: string;
}

export const EmptyVariants = ({ label, variant = "default" }: EmptyProps) => {
	const variantImages: VariantImages = {
		default: "/empty.png",
		aiboy: "/aiboy.png",
		draw: "/draw1.png",
		video: "/video.png",
		music: "/music.png",
		compman: "/compman.png",
		explore: "/explore.png",
	};

	const imagePath = variantImages[variant] || variantImages.default;

	return (
		<div className="h-full p-20 flex flex-col items-center justify-center">
			<div className="relative h-72 w-72 transform transition-transform hover:-translate-y-2">
				<Image
					alt="Empty"
					fill
					src={imagePath}
				/>
			</div>
			<p className="text-muted-foreground text-sm text-center">{label}</p>
		</div>
	);
};
