"use client";
import Image from "next/image";
import { strapiImage } from "../../../../lib/strapi/strapiImage";
import { ContentBlock } from "./ContentBlock";
export const RummyVideo = (props: any) => {
   const {
    videoTitle,
    videoDescription,
    videoUrl,
    videoThumbnail,
    myRummyVideo
  } = props;
  return (
    <section
      className="rummyVideoRow"
    >
     <div className="videoContainer max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-theme">
            {props.videoTitle || ""}
          </h2>
          {props.videoDescription && (
            <div className="text-theme mx-auto  max-w-5xl" dangerouslySetInnerHTML={{ __html: props.videoDescription }}>
            </div>
          )}
        </div>
        <div className="rummyVideoBox">
          <video className="w-full h-full object-cover rounded-sm" muted loop playsInline controls poster= {strapiImage(videoThumbnail.url)}>
            <source src={strapiImage(myRummyVideo.url)} type="video/mp4" />
          </video>
        </div>
      </div> 
    </section>
  );
};
export default RummyVideo;
