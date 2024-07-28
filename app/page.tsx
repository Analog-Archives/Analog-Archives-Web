"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import Heading from "@/components/app/heading";
import BriefIntro from "@/components/app/brief";


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
  }, [])

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
      <Heading title={titleDOMElement}></Heading>

      <BriefIntro brief={brief}></BriefIntro>
    </div>
  );
}

export default Home
