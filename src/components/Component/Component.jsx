import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const Component = ({ srcDoc }) => {
  const [breakpoint, setBreakpoint] = useState("xl");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section class="w-full relative flexflex-col items-center justify-center overflow-hidden rounded-3xl bg-white pt-6 px-4 pb-4 shadow-xl">
      <div className="flex justify-between items-center">
        <div className="py-4 flex gap-2">
          <button
            onClick={() => setBreakpoint("sm")}
            className="p-2 w-20 border-2 border-gray-400 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-device-mobile"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
              <path d="M11 4h2"></path>
              <path d="M12 17v.01"></path>
            </svg>
          </button>
          <button
            onClick={() => setBreakpoint("md")}
            className="p-2 w-20 border-2 border-gray-400 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-device-ipad"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 15h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"></path>
            </svg>
          </button>
          <button
            onClick={() => setBreakpoint("lg")}
            className="p-2 w-20 border-2 border-gray-400 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-device-laptop"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 19l18 0"></path>
              <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path>
            </svg>
          </button>
          <button
            onClick={() => setBreakpoint("xl")}
            className="p-2 w-20 border-2 border-gray-400 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-device-desktop"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path>
              <path d="M7 20h10"></path>
              <path d="M9 16v4"></path>
              <path d="M15 16v4"></path>
            </svg>
          </button>
        </div>
        <div className="py-4 flex gap-2">
          <button className="p-2 w-20 border-2 border-gray-400 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-eye"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
            </svg>
          </button>
          <button className="p-2 w-20 border-2 border-gray-400 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-code"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 8l-4 4l4 4"></path>
              <path d="M17 8l4 4l-4 4"></path>
              <path d="M14 4l-4 16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="h-[400px] w-full rounded-xl lg:h-[600px] lg:transition-all bg-gray-200 px-2 py-2">
        {/* <iframe
          className={`h-full w-full ${
            breakpoint == "xl"
              ? "max-w-screen-xl"
              : breakpoint == "sm"
              ? "max-w-screen-sm"
              : breakpoint == "md"
              ? "max-w-screen-md"
              : breakpoint == "lg"
              ? "max-w-screen-lg"
              : "max-w-screen-xl"
          }`}
          srcDoc={srcDoc}
        ></iframe> */}
        <pre className="overflow-auto max-w-[1150px] rounded-xl max-h-[575px]">
          <code className="language-html flex flex-col overflow-auto">
            &lt;section class="max-screen-xl mx-auto min-h-screen"&gt; &lt;div
            class="grid place-items-center mx-12 gap-x-2 gap-y-6 sm:grid-cols-1
            md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 relative" &gt; &lt;div
            class="flex flex-col gap-12"&gt; &lt;div class="absolute bottom-0
            left- w-[650px] h-[650px] bg-transparent z-[-1] blur-lg" &gt;
            &lt;svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg"
            &gt; &lt;path id="blob" fill="#19FFBD"&gt; &lt;animate
            attributeName="d" dur="9700ms" repeatCount="indefinite"
            values="M433,353Q369,456,262,435Q155,414,100.5,332Q46,250,88,146Q130,42,233,71Q336,100,416.5,175Q497,250,433,353Z;
            M410,351Q367,452,259.5,435.5Q152,419,123.5,334.5Q95,250,111.5,144Q128,38,233,68Q338,98,395.5,174Q453,250,410,351Z;
            M418,356.5Q373,463,272.5,423.5Q172,384,102.5,317Q33,250,90.5,161Q148,72,238,93.5Q328,115,395.5,182.5Q463,250,418,356.5Z;
            M405.83955,332.68579Q345.63899,415.37158,240.07214,432.62034Q134.50528,449.8691,73.11225,349.93455Q11.71921,250,87.45989,174.6805Q163.20056,99.36101,268.90781,66.64568Q374.61505,33.93034,420.32758,141.96517Q466.04011,250,405.83955,332.68579Z;
            M433,353Q369,456,262,435Q155,414,100.5,332Q46,250,88,146Q130,42,233,71Q336,100,416.5,175Q497,250,433,353Z"
            &gt;&lt;/animate&gt; &lt;/path&gt; &lt;/svg&gt; &lt;/div&gt; &lt;div
            class="absolute top-0 right-0 w-[400px] h-[400px] bg-transparent
            z-[-1] blur-lg" &gt; &lt;svg viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg"
            &gt; &lt;path id="blob" fill=" #19FFBD"&gt; &lt;animate
            attributeName="d" dur="9400ms" repeatCount="indefinite"
            values="M421,330.5Q343,411,252.5,407Q162,403,118.5,326.5Q75,250,111,161Q147,72,250.5,70.5Q354,69,426.5,159.5Q499,250,421,330.5Z;
            M410,351Q367,452,259.5,435.5Q152,419,123.5,334.5Q95,250,111.5,144Q128,38,233,68Q338,98,395.5,174Q453,250,410,351Z;
            M379.5,337Q351,424,255,415.5Q159,407,97.5,328.5Q36,250,93,163.5Q150,77,246,83.5Q342,90,375,170Q408,250,379.5,337Z;
            M405.83955,332.68579Q345.63899,415.37158,240.07214,432.62034Q134.50528,449.8691,73.11225,349.93455Q11.71921,250,87.45989,174.6805Q163.20056,99.36101,268.90781,66.64568Q374.61505,33.93034,420.32758,141.96517Q466.04011,250,405.83955,332.68579Z;
            M421,330.5Q343,411,252.5,407Q162,403,118.5,326.5Q75,250,111,161Q147,72,250.5,70.5Q354,69,426.5,159.5Q499,250,421,330.5Z"
            &gt;&lt;/animate&gt; &lt;/path&gt; &lt;/svg&gt; &lt;/div&gt; &lt;div
            class="grid justify-items-end gap-4 text-end border-2 rounded-2xl
            border-gray-100 shadow-lg p-4 bg-white bg-opacity-50" &gt; &lt;div
            class="w-16 h-16 flex justify-center items-center bg-[#19FFBD]
            rounded-2xl text-xl" &gt; 1 &lt;/div&gt; &lt;h5 class="text-xl
            font-sans font-bold text-gray-700"&gt; Lorem ipsum &lt;/h5&gt; &lt;p
            class="font-serif font-normal text-gray-500"&gt; Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras dictum velit magna, eget
            feugiat augue suscipit sed. &lt;/p&gt; &lt;/div&gt; &lt;div
            class="grid justify-items-end gap-4 text-end border-2 rounded-2xl
            border-gray-100 shadow-lg p-4 bg-white bg-opacity-50" &gt; &lt;div
            class="w-16 h-16 flex justify-center items-center bg-[#19FFBD]
            rounded-2xl text-xl" &gt; 2 &lt;/div&gt; &lt;h5 class="text-xl
            font-sans font-bold text-gray-700"&gt; Lorem ipsum &lt;/h5&gt; &lt;p
            class="font-serif font-normal text-gray-500"&gt; Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras dictum velit magna, eget
            feugiat augue suscipit sed. &lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
            &lt;div&gt; &lt;img src="https://i.imgur.com/cT0lRDY.png"
            alt="Iphone mockup" /&gt; &lt;/div&gt; &lt;div class="flex flex-col
            gap-12"&gt; &lt;div class="grid justify-items-start gap-4 text-start
            border-2 rounded-2xl border-gray-100 shadow-2xl p-4 bg-white
            bg-opacity-50" &gt; &lt;div class="w-16 h-16 flex justify-center
            items-center bg-[#19FFBD] rounded-2xl text-xl" &gt; 3 &lt;/div&gt;
            &lt;h5 class="text-xl font-sans font-bold text-gray-700"&gt; Lorem
            ipsum &lt;/h5&gt; &lt;p class="font-serif font-normal
            text-gray-500"&gt; Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras dictum velit magna, eget feugiat augue
            suscipit sed. &lt;/p&gt; &lt;/div&gt; &lt;div class="grid
            justify-items-start gap-4 text-start border-2 rounded-2xl
            border-gray-100 shadow-lg p-4 bg-white bg-opacity-50" &gt; &lt;div
            class="w-16 h-16 flex justify-center items-center bg-[#19FFBD]
            rounded-2xl text-xl" &gt; 4 &lt;/div&gt; &lt;h5 class="text-xl
            font-sans font-bold text-gray-700"&gt; Lorem ipsum &lt;/h5&gt; &lt;p
            class="font-serif font-normal text-gray-500"&gt; Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras dictum velit magna, eget
            feugiat augue suscipit sed. &lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
            &lt;/div&gt; &lt;/section&gt;
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Component;
