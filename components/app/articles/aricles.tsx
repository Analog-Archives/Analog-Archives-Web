"use client"
import React from "react";
import Logo from "@/public/logo.png";
import ArticleCard from "./article-card";

// interfaces
import { ArticleProps } from "@/app/page";

interface ArticleCompProps {
    articles: ArticleProps[]
}


const Articles: React.FC<ArticleCompProps>
    = ({ articles }) => {

        return (
            <div style={{ textAlign: 'center', marginTop: 35 }}>
                {/* heading */}
                <span style={{
                    color: 'white',
                    fontFamily: 'Baunk',
                    fontSize: 18,
                    textTransform: 'uppercase',
                }}>Research / Articles</span>

                {/* grids */}
                <div className="grid_wrapper" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 10,
                    marginTop: 40
                }}>
                    <>
                        {articles.map((article, index) => (
                            <div key={index}>
                                <ArticleCard
                                    title={article.title}
                                    description={article.description} />
                            </div>
                        ))}
                    </>
                </div>
            </div>
        )
    }

export default Articles