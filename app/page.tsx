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
import FAQ from "@/components/app/faq";

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
  const [brief, setBrief] = useState<string>(() => {
    const savedBrief = localStorage.getItem('brief');
    return savedBrief ? savedBrief : " "
  });
  const [articles, setArticles] = useState<ArticleProps[]>(() => {
    const savedArticles = localStorage.getItem('articlesData');
    return savedArticles ? JSON.parse(savedArticles) : []
  });

  useEffect(() => {
    const fetchDataDOC = async () => {
      const apiEndpoint = '/data/content.json';
      const response = await axios.get<DataProps[]>(apiEndpoint);

      if (!response.data) {
        throw new Error("Error with response");
      }
      else {
        setData(response.data);

        // lcalstorage config
        localStorage.setItem('brief', response.data[0].brief);
        localStorage.setItem('articlesData', JSON.stringify(response.data[0].articles));

        setBrief(response.data[0].brief);
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

      <Articles articles={articles}></Articles>

      <FAQ  />
    </div>
  );
}

export default Home
