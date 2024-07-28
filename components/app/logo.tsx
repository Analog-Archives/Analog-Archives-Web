"use client"

import React from "react";
import Image from "next/image";
import logo from '@/public/logo.png'

const Logo: React.FC = () => {
    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image
                style={{
                    width: 80,
                    height: 80,
                    aspectRatio: 1,
                    objectFit: 'cover',
                }}
                src={logo}
                alt=""></Image>
        </div >
    )
}

export default Logo