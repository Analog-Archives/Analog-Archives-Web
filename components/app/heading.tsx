"use client"
import React from "react";

// inteerfaces
import { HeadingProps } from "@/interfaces/interface";


const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <>
            <h1 style={{
                color: 'white',
                fontFamily: 'Baunk',
                textTransform: 'uppercase',
                textAlign: 'center',
                fontSize: 50,
                whiteSpace: 'nowrap',
                marginTop: 20
            }}>{title}</h1>
        </>
    )
}

export default Heading