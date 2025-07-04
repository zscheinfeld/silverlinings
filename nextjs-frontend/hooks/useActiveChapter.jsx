import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useActiveChapter = (chapters) => {
  const [activeChapter, setActiveChapter] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const parsedChapter = new URLSearchParams(url.split("?")[1]).get(
        "chapter"
      );
      const matchedChapter =
        chapters.find((c) => c.slug === parsedChapter)?.number || 0;

      if (matchedChapter) {
        setActiveChapter(matchedChapter);
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Run once on mount in case of direct page load
    if (router.isReady) {
      const { chapter } = router.query;
      const matchedChapter =
        chapters.find((c) => c.slug === chapter)?.number || 0;

      if (matchedChapter) {
        setActiveChapter(matchedChapter);
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.isReady, chapters]);

  return { isOpen, activeChapter };
};

export default useActiveChapter;
