import Head from "next/head";
import Book from "@/components/Book";
import Landing from "@/components/Landing";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";
import Script from "next/script";
import useActiveChapter from "@/hooks/useActiveChapter";

import { Spectral } from "next/font/google";
const spectral = Spectral({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const activeChapter = useActiveChapter();

  const navigateToBook = () => {
    void router.push(
      {
        path: router.pathname,
        query: { ...router.query, chapter: Chapters[0].slug },
      },
      undefined,
      {
        scroll: false,
      },
    );
  };

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

      <div className={`main ${spectral.className}`}>
        <Landing hidden={activeChapter > 0} onReachedBottom={navigateToBook} />
        <Book activeChapter={activeChapter} />
      </div>
    </>
  );
}
