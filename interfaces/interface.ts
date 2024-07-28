import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

export interface HeadingProps {
    title: React.ReactNode
}

export interface BriefIntroProps {
    brief: string
}

export interface SliderItemProps {
    title: string,
    description: string,
    projectThumbnail: StaticImport
}