import React from "react";
import { spotifyDataR, spotifyDataL, spotifyDataM } from "@/data/spotifyData";
import Image from "next/image";


const Gallery = () => {
  return (
    <div className=" h-[300px] w-[90vw] sm:h-[400px] sm:w-[620px] lg:h-[500px]  rounded-xl overflow-hidden  ring-1 ring-artman-blue-600/20 shadow-xl ">
    <div className="  relative flex  items-center justify-between w-[33wv] gap-2 ">
      {/* animation below */}

      <div className=" flex flex-col animate-sm-gallery-move min-[426px]:animate-gallery-move  ">
      {spotifyDataL.map((single, i) => (
          <a
            target="_blank"
            className=" shadow-md   overflow-hidden h-[100px] w-[100px]   min-[432px]:h-[200px] min-[432px]:w-[200px] rounded-xl flex relative flex-end mb-2 "
            href={single.trackUrl}
            key={single.id}
          >
            <Image src={single.imgUrl} alt="Album cover" className="bg-image w-full h-full absolute object-cover rounded-xl "  width={300}
      height={300}/>
            <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2  bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
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

      <div className=" flex flex-col animate-sm-gallery-move2 min-[426px]:animate-gallery-move2  ">
      {spotifyDataM.map((single, i) => (
          <a
          target="_blank"
          className=" shadow-md   overflow-hidden h-[100px] w-[100px]  min-[432px]:h-[200px] min-[432px]:w-[200px] rounded-xl flex relative flex-end mb-2 "
          href={single.trackUrl}
          key={single.id}
        >
          <Image src={single.imgUrl} alt="Album cover" className="bg-image w-full h-full absolute object-cover rounded-xl "  width={300}
    height={300}/>
          <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2  bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
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

      <div className=" flex flex-col animate-sm-gallery-move min-[426px]:animate-gallery-move pt-20 min-[426px]:pt-40 ">
      {spotifyDataR.map((single, i) => (
          <a
          target="_blank"
          className=" shadow-md   overflow-hidden h-[100px] w-[100px]   min-[432px]:h-[200px] min-[432px]:w-[200px] rounded-xl flex relative flex-end mb-2 "
          href={single.trackUrl}
          key={single.id}
        >
          <Image src={single.imgUrl} alt="Album cover" className="bg-image w-full h-full absolute object-cover rounded-xl "  width={300}
    height={300}/>
          <div className=" flex items-stretch w-full h-[54px] flex-col absolute bottom-0 p-2  bg-artblack bg-opacity-50 text-artman-blue-50 abs rounded-b-xl overflow-hidden ">
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


      </div>
    </div>
  );
};

export default Gallery;
