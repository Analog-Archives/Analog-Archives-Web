import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

import {
    Card,
    CardContent,
    CardTitle
} from "@/components/ui/card";
import Thumbnail from "./thumbnail";

interface ArticleCardProps {
    title: string,
    description: string
    thumbnail?: any
}


const ArticleCard: React.FC<ArticleCardProps>
    = ({
        title,
        description,
        thumbnail
    }) => {

        return (
            <div>
                <Card style={{
                    backgroundColor: '#181818',
                    border: 'none',
                    color: 'white',
                    fontFamily: 'ShareTechMono-Regular',
                    padding: 15,
                    paddingBottom: 0
                }}>
                    <Thumbnail title={title} />

                    <CardTitle style={{
                        fontSize: 22,
                        fontWeight: 500,
                        textAlign: 'left',
                        marginTop: 20
                    }}>{title && (title)}</CardTitle>

                    <CardContent style={{
                        paddingLeft: '0px',
                        marginTop: 20,
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: 'left'
                    }}>{description && (description)}</CardContent>
                </Card>
            </div>
        )
    }

export default ArticleCard