import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useHash = () => {
  const router = useRouter();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (!router.isReady) return; // Ensure router is ready
    const currentHash = router.asPath.split("#")[1] || "";
    setHash(currentHash);
  }, [router.isReady, router.asPath]);

  return hash;
};

export default useHash;
