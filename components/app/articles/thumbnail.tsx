"use client"
import React from "react";
import Image from 'next/image'
import { StaticImageData } from "next/image";

import Logo from "@/public/logo.png";

interface ThumbnailProps {
    title: string
}


const Thumbnail: React.FC<ThumbnailProps> = ({ title }) => {
    const getThumbnail = (title: string): StaticImageData => {
        switch (title) {
            case "title":
                return Logo
                break;
            default:
                throw new Error("Image not found !");
                break;
        }
    }
    const thumbnail = getThumbnail(title);

    return (
        <><Image src={thumbnail} alt={title}></Image></>
    )
}

export default Thumbnail