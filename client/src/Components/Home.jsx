import React, { useState, useMemo } from "react";
import SplitText from "../Utils/SplitText";
import axios from "axios";

const Home = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setshortUrl] = useState("");

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/short`,
        { redirectUrl: url }
      );
      setshortUrl(result.data.shortUrl);
    } catch (error) {
      console.log("Error in handle submit", error);
    }
  };

  const memoizedSplitText = useMemo(
    () => (
      <SplitText
        text="Track Everything"
        className="lg:text-8xl text-7xl text-center font-bold text-white"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    ),
    []
  );

  return (
    <div
      className="flex justify-center items-center bg-black text-white"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="md:w-8/12 w-full lg-max flex flex-col justify-center items-center p-6">
        <h1 className="lg:text-8xl text-7xl text-center font-bold bg-gradient-to-r from-sky-700 to-sky-400 bg-clip-text text-transparent">
          Shorten Your URLs
        </h1>

        {memoizedSplitText}

        <p className="pt-4 lg:text-xl text-md text-gray-400 text-center">
          Create short, branded links that are easy to share and track. Get
          detailed analytics on every click.
        </p>

        {shortUrl ? (
          <div className="flex mt-3 w-full">
            <p className="bg-gray-800 px-3 py-3 rounded-2xl flex-1 text-white">
              {shortUrl}
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                alert("Short URL copied to clipboard!");
              }}
              className="ms-3 px-3 py-3 bg-gradient-to-r from-sky-700 to-sky-400 rounded-2xl"
            >
              Copy Url
            </button>
          </div>
        ) : (
          <div className="flex mt-3 w-full">
            <input
              type="text"
              placeholder="Enter your long URL here..."
              className="bg-gray-800 px-3 py-3 rounded-2xl flex-1"
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="ms-3 px-3 py-3 bg-gradient-to-r from-sky-700 to-sky-400 rounded-2xl"
            >
              Shorten URL
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
