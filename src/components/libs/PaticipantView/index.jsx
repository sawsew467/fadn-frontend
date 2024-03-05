import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

import { VideoType } from "@/helpers/enum/video";

import * as S from "./PaticipantView.styles";

export default function ParticipantView(props) {
  const { type } = props;
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);
  return (
    <div
      key={props.participantId}
      style={{
        height: "100%",
      }}
      className="react-player"
    >
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn ? (
        <ReactPlayer
          playsinline
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          style={{
            height: "100%",
            borderRadius: 12,
          }}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      ) : (
        <S.AvatarOverlay>
          <Image
            src={"/images/avatar/img1.png"}
            alt=""
            width={type === VideoType.PATICIPANT ? 200 : 40}
            height={type === VideoType.PATICIPANT ? 200 : 40}
          ></Image>
        </S.AvatarOverlay>
      )}
    </div>
  );
}
