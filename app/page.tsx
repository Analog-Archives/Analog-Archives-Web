"use client"
import React, { useEffect, useState } from "react"
import axios from "axios";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/app/carousel/EmblaCarousel'

// components
import Heading from "@/components/app/heading";
import BriefIntro from "@/components/app/brief";
import Logo from "@/components/app/logo";
import Articles from "@/components/app/articles/aricles";

// stylesheets
import '@/app/embla.css'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export interface ArticleProps {
  title: string
  description: string
}
interface FetchDataProps {
  brief: string
  articles: ArticleProps[]
}

const Home: React.FC = () => {
  const [brief, setBrief] = useState<string>("");
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const fetchDataDOC = async () => {
      const apiEndpoint = '/data/content.json';
      const response = await axios.get<FetchDataProps[]>(apiEndpoint);

      if (!response.data) {
        throw new Error("Error with response");
      }
      else {
        setBrief(response.data[0].brief);
        console.log(response.data[0].articles);
        setArticles(response.data[0].articles);
      }
    }

    fetchDataDOC();
  }, []);

  const spanColorStylings = {
    color: '#AEFF00'
  }
  const titleDOMElement: React.ReactNode = (
    <>
      <span style={spanColorStylings}>anal</span>og
      arc<span style={spanColorStylings}>hiv</span>es
    </>
  )

  return (
    <div className="parent_wrapper">
      <Logo />

      <Heading title={titleDOMElement}></Heading>

      <BriefIntro brief={brief}></BriefIntro>

      <div style={{
        marginTop: 90,
        textAlign: 'center'
      }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      <>
        {articles.map((art, index) => {
          <div style={{ color: 'white', fontSize: 30 }}>{index}</div>
        })}
      </>
      <Articles articles={articles}></Articles>
    </div>
  );
}

export default Home
