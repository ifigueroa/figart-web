import React from "react";

const discography = [
{
  id:"3hxRKXzZS0XRYGZ123JDNH",
  name: "Djon maya maï (feat. Victor Démé)" ,
  artist: "Synapson",
  imgUrl: "https://i.scdn.co/image/ab67616d00001e02de23d050cae38ec9ef979bc3",
  trackUrl: "https://open.spotify.com/track/3hxRKXzZS0XRYGZ123JDNH"
},
{
  id:"3hxRKXzZS0XRYGZ123JDNH",
  name: "Djon maya maï (feat. Victor Démé)" ,
  artist: "Synapson",
  imgUrl: "https://i.scdn.co/image/ab67616d00001e02de23d050cae38ec9ef979bc3",
  trackUrl: "https://open.spotify.com/track/3hxRKXzZS0XRYGZ123JDNH"
},
{
  id:"3hxRKXzZS0XRYGZ123JDNH",
  name: "Djon maya maï (feat. Victor Démé)" ,
  artist: "Synapson",
  imgUrl: "https://i.scdn.co/image/ab67616d00001e02de23d050cae38ec9ef979bc3",
  trackUrl: "https://open.spotify.com/track/3hxRKXzZS0XRYGZ123JDNH"
},
{
  id:"3hxRKXzZS0XRYGZ123JDNH",
  name: "Djon maya maï (feat. Victor Démé)" ,
  artist: "Synapson",
  imgUrl: "https://i.scdn.co/image/ab67616d00001e02de23d050cae38ec9ef979bc3",
  trackUrl: "https://open.spotify.com/track/3hxRKXzZS0XRYGZ123JDNH"
},
{
  id:"3hxRKXzZS0XRYGZ123JDNH",
  name: "Djon maya maï (feat. Victor Démé)" ,
  artist: "Synapson",
  imgUrl: "https://i.scdn.co/image/ab67616d00001e02de23d050cae38ec9ef979bc3",
  trackUrl: "https://open.spotify.com/track/3hxRKXzZS0XRYGZ123JDNH"
},
];

const Gallery = () => {
  return (
    <div className=" h-[300px] w-[90vw] sm:h-[400px] sm:w-[620px] lg:h-[500px]  rounded-xl overflow-hidden  ring-2 ring-artman-blue-600 shadow ">
    <div className="  relative flex  items-center justify-between w-[33wv] gap-2 ">
      {/* animation below */}

      <div className=" flex flex-col animate-sm-gallery-move min-[426px]:animate-gallery-move  ">
      {discography.map((single, i) => (
          <a
            target="_blank"
            className="   shadow-md   overflow-hidden h-[100px] w-[100px]  min-[426px]:h-[200px] min-[426px]:w-[200px] rounded-xl flex relative flex-end mb-2 "
            href="https://open.spotify.com/track/3fmXrzV5KtCIuvQM7WhnbO?si=73452079c592410d"
            key={i}
          >
            <div
              className="bg-image w-full h-full absolute bg-cover bg-no-repeat rounded-xl "
              style={{
                backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273de23d050cae38ec9ef979bc3)`,
              }}
            ></div>
            <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2  bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
              <p className="name  whitespace-nowrap overflow-hidden text-ellipsis  text-xs leading-5 font-normal tracking-normal  ">
                DOPE
              </p>
              <p className="artist  whitespace-nowrap overflow-hidden text-ellipsis  text-xs leading-5 font-normal tracking-normal  ">
                NLE Choppa
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className=" flex flex-col animate-sm-gallery-move2  min-[426px]:animate-gallery-move2 ">
      {discography.map((single, i) => (
          <a
            target="_blank"
            className="   shadow-md   overflow-hidden h-[100px] w-[100px]  min-[426px]:h-[200px] min-[426px]:w-[200px] rounded-xl flex relative flex-end mb-2 "
            href="https://open.spotify.com/track/3fmXrzV5KtCIuvQM7WhnbO?si=73452079c592410d"
            key={i}
          >
            <div
              className="bg-image w-full h-full absolute bg-cover bg-no-repeat rounded-xl "
              style={{
                backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273de23d050cae38ec9ef979bc3)`,
              }}
            ></div>
            <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2  bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
              <p className="name  whitespace-nowrap overflow-hidden text-ellipsis  text-xs leading-5 font-normal tracking-normal  ">
                DOPE
              </p>
              <p className="artist  whitespace-nowrap overflow-hidden text-ellipsis  text-xs leading-5 font-normal tracking-normal  ">
                NLE Choppa
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className=" flex flex-col animate-sm-gallery-move min-[426px]:animate-gallery-move  ">
      {discography.map((single, i) => (
          <a
            target="_blank"
            className="   shadow-md   overflow-hidden h-[100px] w-[100px]  min-[426px]:h-[200px] min-[426px]:w-[200px] rounded-2xl flex relative flex-end mb-2 "
            href="https://open.spotify.com/track/3fmXrzV5KtCIuvQM7WhnbO?si=73452079c592410d"
            key={i}
          >
            <div
              className="bg-image w-full h-full absolute bg-cover bg-no-repeat rounded-xl "
              style={{
                backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273de23d050cae38ec9ef979bc3)`,
              }}
            ></div>
            <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2  bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
              <p className="name  whitespace-nowrap overflow-hidden text-ellipsis  text-xs leading-5 font-normal tracking-normal  ">
                DOPE
              </p>
              <p className="artist  whitespace-nowrap overflow-hidden text-ellipsis  text-xs leading-5 font-normal tracking-normal  ">
                NLE Choppa
              </p>
            </div>
          </a>
        ))}
      </div>


      </div>
    </div>
  );
};

export default Gallery;
