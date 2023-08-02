"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("6cc1cea7-faf0-441f-9ac7-08456f2fc297");
	}, []);

	return null;
};
