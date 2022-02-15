import type { NextPage } from "next";
import Image from "next/image";
import ImageJambookLogo from "@images/logo.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(10);

  function sleep(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  async function initializeJambook() {
    await sleep(1);
    setProgress(40);
    await sleep(1);
    setProgress(80);
    await sleep(1);
    setProgress(99);
    await sleep(1);
    router.push("/login");
  }

  useEffect(() => {
    initializeJambook();
  }, []);

  return (
    <>
      <div className="jb-logo">
        <Image src={ImageJambookLogo} />
        <div className="jb-loader">
          <div className="jb-loader-progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
