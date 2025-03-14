import { useEffect, useState } from "react";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";

const useActiveChapter = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      setActiveChapter(null);
    } else {
      const { chapter } = router.query;
      setActiveChapter(Chapters.find((c) => c.slug === chapter)?.number || -1);
    }
  }, [router.query, router.isReady]);

  return activeChapter;
};

export default useActiveChapter;
