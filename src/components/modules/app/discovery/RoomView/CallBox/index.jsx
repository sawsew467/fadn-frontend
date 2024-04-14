"use client";

import { MeetingConsumer, MeetingProvider } from "@videosdk.live/react-sdk";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Video = dynamic(
  () => import("@/components/modules/app/discovery/RoomView/Video/index"),
  {
    ssr: false,
  }
);

function CallBox() {
  const [renderMeetingProvider, setRenderMeetingProvider] = useState(false);
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderMeetingProvider(true);
    }, 2000); // Delay 2 giây

    return () => clearTimeout(timer); // Xóa timer nếu component bị unmounted
  }, []); // Chỉ chạy một lần sau khi component được mounted

  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        borderRadius: 12,
      }}
    >
      {renderMeetingProvider ? (
        <MeetingProvider
          config={{
            meetingId: `${roomId}`,
            micEnabled: true,
            webcamEnabled: true,
            name: "C.V. Raman",
          }}
          token={
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2ODY3NGEyYy04NzY5LTQxZDQtOGMzMy0zOWM2ZWI1ODcwZGUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMjgwMTk4NCwiZXhwIjoxNzE1MzkzOTg0fQ.yWpMIJO4SdL8bIQgqdT-u91vNHJLEhutQS9RPUzq9Jg"
          }
        >
          <MeetingConsumer>{() => <Video></Video>}</MeetingConsumer>
        </MeetingProvider>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default CallBox;
