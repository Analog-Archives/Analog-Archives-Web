import React from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardTitle
} from "@/components/ui/card";

interface ArticleCardProps {
    title: string,
    description: string
}

const ArticleCard: React.FC<ArticleCardProps>
    = ({ title, description }) => {
        return (
            <div>
                <Card>
                    {/* <Image src={} alt=""></Image> */}
                    <CardTitle>{title && (title)}</CardTitle>
                    <CardContent>{description && (description)}</CardContent>
                </Card>
            </div>
        )
    }

export default ArticleCard