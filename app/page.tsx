"use client"
import React, { useEffect, useState } from "react"
import axios from "axios";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/app/carousel/EmblaCarousel'

// components
import Heading from "@/components/app/heading";
import BriefIntro from "@/components/app/brief";
import Logo from "@/components/app/logo";

// stylesheets
import '@/app/embla.css'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Home: React.FC = () => {
  const [brief, setBrief] = useState<string>("");

  useEffect(() => {
    const fetchDataDOC = async () => {
      const apiEndpoint = '/data/content.json';
      const response = await axios.get(apiEndpoint);

      if (!response.data) {
        throw new Error("Error with response");
      }
      setBrief(response.data[0].brief);
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
      <Logo></Logo>

      <Heading title={titleDOMElement}></Heading>

      <BriefIntro brief={brief}></BriefIntro>

      <div style={{
        marginTop: 90,
        textAlign: 'center'
      }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default Home
