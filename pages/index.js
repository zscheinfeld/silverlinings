import Head from "next/head";
import Book from "@/components/Book";
import Landing from "@/components/Landing";
import { useEffect, useState } from "react";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";
import Script from "next/script"; // Import Next.js Script component

export default function Home() {
  const [isLanding, setIsLanding] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const { chapter } = router.query;
    if (!chapter) return;
    const currentChapter = Chapters.find((c) => c.slug === chapter);
    if (currentChapter) {
      setIsLanding(false);
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Silver Linings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/jsvectormap"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js"
        strategy="beforeInteractive"
      />

      <div className="main">
        <Landing
          active={isLanding}
          onReachedBottom={() => setIsLanding(false)}
        />
        <Book active={!isLanding} />
      </div>
    </>
  );
}
