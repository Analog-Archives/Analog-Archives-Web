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
interface DataProps {
  brief: string
  articles: ArticleProps[]
}

const Home: React.FC = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [brief, setBrief] = useState<string>("");
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    fetch('/data/content.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Make sure this logs the expected data structure
        setArticles(data[0].articles); // Adjust this line based on the actual data structure
      })
      .catch((error) => console.error('Error fetching articles:', error));
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
      
      <Articles articles={articles}></Articles>
    </div>
  );
}

export default Home
