"use client";

import { useMeeting } from "@videosdk.live/react-sdk";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import ParticipantView from "@/components/libs/PaticipantView";

import micOn from "@/public/icons/users/mic-on.svg";
import micOff from "@/public/icons/users/mic-off.svg";
import cameraOn from "@/public/icons/users/video-on.svg";
import cameraOff from "@/public/icons/users/video-off.svg";

import { VideoType } from "@/helpers/enum/video";

import * as S from "./Video.styles";
import { onValue, ref, set } from "firebase/database";
import { database } from "@/app/firebaseConfig";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/hooks/useRedux";
import RatingModal from "../RatingModal";

function Video() {
  const searchParams = useSearchParams();
  const participantId = searchParams.get("participantId");
  const roomId = searchParams.get("roomId");
  const [isMicroOn, setIsMicroOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const { join, leave, toggleMic, toggleWebcam } = useMeeting();
  const { participants } = useMeeting({
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });
  const [isEnded, setIsEnded] = useState(false);

  const { userInfo } = useAppSelector((state) => state?.auth);

  useEffect(() => {
    join();
    return () => {
      leave();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMicroClick = () => {
    setIsMicroOn((prev) => !prev);
    toggleMic();
  };
  const handleCameraClick = () => {
    setIsCameraOn((prev) => !prev);
    toggleWebcam();
  };

  const handleEndRoom = () => {
    set(ref(database, "ended-rooms/" + participantId), {
      roomId: roomId,
      participantId: +participantId,
      userId: userInfo?.id,
    });
  };

  useEffect(() => {
    if (userInfo) {
      const unsubscribe = onValue(ref(database, "ended-rooms/"), (snapshot) => {
        const data = snapshot.val();
        for (const key in data) {
          const object = data[key];
          if (
            roomId === object?.roomId &&
            (userInfo.id === object?.participantId ||
              userInfo.id === object?.userId)
          ) {
            setIsEnded(true);
          }
        }
      });

      return () => unsubscribe();
    }
  }, [userInfo]);

  return (
    <>
      {!isEnded ? (
        <S.PlayerWrap>
          <ParticipantView
            participantId={[...participants.keys()][1]}
            key={[...participants.keys()][1]}
            type={VideoType.PATICIPANT}
          />
          <S.MyCamera>
            <ParticipantView
              participantId={[...participants.keys()][0]}
              key={[...participants.keys()][0]}
              type={VideoType.ME}
            />
          </S.MyCamera>
          <S.Controller gap={20}>
            <S.ControllItem
              type="primary"
              shape="circle"
              size="large"
              onClick={handleMicroClick}
              danger={!isMicroOn}
            >
              <Image
                src={isMicroOn ? micOn : micOff}
                alt=""
                width={24}
                height={24}
              ></Image>
            </S.ControllItem>
            <S.ControllItem
              type="primary"
              shape="circle"
              size="large"
              onClick={handleCameraClick}
              danger={!isCameraOn}
            >
              <Image
                src={isCameraOn ? cameraOn : cameraOff}
                alt=""
                width={24}
                height={24}
              ></Image>
            </S.ControllItem>
          </S.Controller>
          <S.EndCallButton
            type="primary"
            danger
            size="large"
            onClick={handleEndRoom}
          >
            Kết thúc
          </S.EndCallButton>
        </S.PlayerWrap>
      ) : (
        <p>Ended</p>
      )}
      <RatingModal isModalOpen={isEnded} />
    </>
  );
}

export default Video;
