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
    <div className="  relative flex items-center justify-center gap-2  overflow-hidden shadow-lg  ">
      {/* animation below */}

      <div className=" animate-gallery-move  w-1/3 flex flex-col basis-1/3 pt-24 ">
        {discography.map((single, i) => (
          <a
            target="_blank"
            className="   shadow-md   overflow-hidden h-[100px] w-[100px]  lg:h-[200px] lg:w-[200px] rounded-xl flex relative flex-end mb-2 "
            href={single.trackUrl}
            key={i}
          >
            <div
              className="bg-image w-full h-full absolute bg-cover bg-no-repeat rounded-xl "
              style={{
                backgroundImage: `${single.imgUrl}`,
              }}
            ></div>
            <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2 backdrop-blur bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
              <p className="name  whitespace-nowrap overflow-hidden text-ellipsis  text-xs leading-5 font-normal tracking-normal  ">
                {single.name}
              </p>
              <p className="artist  whitespace-nowrap overflow-hidden text-ellipsis  text-xs leading-5 font-normal tracking-normal  ">
                {single.artist}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className=" w-1/3 flex flex-col basis-1/3 animate-gallery-move2 ">
        {discography.map((single, i) => (
          <a
            target="_blank"
            className="   shadow-md   overflow-hidden h-[100px] w-[100px]  lg:h-[200px] lg:w-[200px] rounded-xl flex relative flex-end mb-2 "
            href="https://open.spotify.com/track/3fmXrzV5KtCIuvQM7WhnbO?si=73452079c592410d"
            key={i}
          >
            <div
              className="bg-image w-full h-full absolute bg-cover bg-no-repeat rounded-xl "
              style={{
                backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273de23d050cae38ec9ef979bc3)`,
              }}
            ></div>
            <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2 backdrop-blur bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
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

      <div className=" w-1/3 flex flex-col basis-1/3 pb-24 animate-gallery-move ">
        {discography.map((single, i) => (
          <a
            target="_blank"
            className="   shadow-md   overflow-hidden h-[100px] w-[100px]  lg:h-[200px] lg:w-[200px] rounded-xl flex relative flex-end mb-2 "
            href="https://open.spotify.com/track/3fmXrzV5KtCIuvQM7WhnbO?si=73452079c592410d"
            key={i}
          >
            <div
              className="bg-image w-full h-full absolute bg-cover bg-no-repeat rounded-xl "
              style={{
                backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273de23d050cae38ec9ef979bc3)`,
              }}
            ></div>
            <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2 backdrop-blur bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
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
  );
};

export default Gallery;
