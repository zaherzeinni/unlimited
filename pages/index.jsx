import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";
import Link from "next/link";
import Navbar from "@/components/navbar";
import SectionOne from "@/components/section";
import SectionTwo from "@/components/sectionTwo";
import SectionThree from "@/components/sectionThree";
import SectionFour from "@/components/PeopleSlider";
import ClientsLogo from "@/components/ClientsLogo";
import Footer from "@/components/Footer";
import   Head  from "next/head";



export default function Index({}) {
  const router = useRouter();

  return (
    <div className=" ">
      <Head>
        <title>Unlmtd</title>
        <link 
        sizes="512x512"
        
        rel="icon" href="/UN.png" />



      </Head>

      <div className="mb-2  overflow-x-hidden ">
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <ClientsLogo />
        <Footer />
      </div>
    </div>
  );
}
