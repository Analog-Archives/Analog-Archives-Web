"use client"
import React from "react";

// interfaces
import { ArticleProps } from "@/app/page";
import ArticleCard from "./article-card";

interface ArticleCompProps {
    articles: ArticleProps[]
}

const Articles: React.FC<ArticleCompProps>
    = ({ articles }) => {
        return (
            <div>
                {/* heading */}
                <span style={{
                    color: 'white',
                    fontFamily: 'ShareTechMono-Regular',
                }}>Research / Articles</span>

                {/* grids */}
                <div className="grid_wrapper" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 10
                }}>
                    <>
                        {console.log(articles.length)}
                        {/* {articles.map((article, index) => {
                            <div className="grid_item" key={index}>
                                <div>s</div>
                            </div>
                        })} */}
                    </>
                    {/* <div className="grid_item">1</div>
                <div className="grid_item">2</div>
                <div className="grid_item">3</div>
                <div className="grid_item">4</div> */}
                </div>
            </div>
        )
    }

export default Articles