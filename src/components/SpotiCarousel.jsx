import { Carousel } from "@material-tailwind/react";
 
const tracksUrl = [ "https://open.spotify.com/embed/track/0mko5sZQMfALeG2bzpWZRy?utm_source=generator","https://open.spotify.com/embed/track/2PFqkHzF7R1cBttOp0jUXg?utm_source=generator", "https://open.spotify.com/embed/track/5BiYg12l7EpFZtrvWZpkT0?utm_source=generator", "https://open.spotify.com/embed/track/1a66w9JwoarISVpjCU6RBt?utm_source=generator", "https://open.spotify.com/embed/track/7hHRtX3HG9DOZtF5sW68iy?utm_source=generator", "https://open.spotify.com/embed/track/5e0Q4X1HKFBFt3omsWVgNd?utm_source=generator", "https://open.spotify.com/embed/track/6H3nSdUt186Z4ooh3XWGon?utm_source=generator"  ]

export function SpotiCarousel() {
  return (
    <Carousel
      className="rounded-xl h-96"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-artman-blue-400" : "w-4 bg-artman-blue-200"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
        {tracksUrl.map((url, i) => (
            <iframe
            className="h-full w-full object-cover"
            style={{ borderRadius: '12px' }}
            src={url}
          key={i}
           
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ))}
      <iframe
              className="h-full w-full object-cover"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/3hxRKXzZS0XRYGZ123JDNH?utm_source=generator"
            
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
      <iframe
              className="h-full w-full object-cover"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/3hxRKXzZS0XRYGZ123JDNH?utm_source=generator"
            
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
      <iframe
              className="h-full w-full object-cover"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/3hxRKXzZS0XRYGZ123JDNH?utm_source=generator"
            
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
      <iframe
              className="h-full w-full object-cover"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/3hxRKXzZS0XRYGZ123JDNH?utm_source=generator"
            
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
    </Carousel>
  );
}