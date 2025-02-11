import Head from "next/head";
import Book from "@/components/Book";
import Landing from "@/components/Landing";
import { useEffect, useState } from "react";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";
import Script from "next/script"; // Import Next.js Script component
import WorldMap from "@/components/WorldMap";


  export default function LandingPage() {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Landing></Landing>
      </>
    );
  }
  