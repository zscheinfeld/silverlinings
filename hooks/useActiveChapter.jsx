import { useEffect, useState } from "react";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";

const useActiveChapter = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const parsedChapter = new URLSearchParams(url.split("?")[1]).get(
        "chapter",
      );
      const matchedChapter =
        Chapters.find((c) => c.slug === parsedChapter)?.number || -1;
      setActiveChapter(matchedChapter);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Run once on mount in case of direct page load
    if (router.isReady) {
      const { chapter } = router.query;
      setActiveChapter(Chapters.find((c) => c.slug === chapter)?.number || -1);
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.isReady]);

  return activeChapter;
};

export default useActiveChapter;
