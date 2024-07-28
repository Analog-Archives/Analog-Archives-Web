"use client"
import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

// interfaces
import { SliderItemProps } from "@/interfaces/interface";

const SliderItem: React.FC<SliderItemProps>
    = ({ title, description, projectThumbnail }) => {

        return (
            <div className="slider_item_wrapper">
                <Image src={projectThumbnail} alt=''></Image>
                <div style={{
                    lineHeight: 1.8,
                    marginTop: 20,
                    color: 'white',
                    fontFamily: 'ShareTechMono-Regular',
                    textAlign: 'left',
                }}>
                    <span style={{ textTransform: 'uppercase' }}>{title}</span>
                    <div style={{ marginTop: 10 }}></div>
                    <span style={{ lineHeight: 1.1 }}>{description}</span>
                </div>
            </div>
        )
    }

export default SliderItem