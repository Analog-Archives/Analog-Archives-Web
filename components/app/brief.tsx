"use client"
import React from "react";

// inteerfaces
import { BriefIntroProps } from "@/interfaces/interface";


const BriefIntro: React.FC<BriefIntroProps> = ({ brief }) => {
    return (
        <>
            <p style={{
                color: 'white',
                fontSize: 19,
                textAlign: 'center',
                marginTop: 30,
                lineHeight: 1.8,
                fontFamily: 'ShareTechMono-Regular'
            }}>{brief}</p>
        </>
    )
}

export default BriefIntro