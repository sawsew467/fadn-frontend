import { useAppSelector } from "@/hooks/useRedux";
import { authToken } from "@/libs/react-video/api";
import { MeetingConsumer, MeetingProvider } from "@videosdk.live/react-sdk";
import dynamic from "next/dynamic";

const Video = dynamic(
  () => import("@/components/modules/app/discovery/RoomView/Video/index"),
  {
    ssr: false,
  }
);

function CallBox() {
  const { meetingId } = useAppSelector((state) => state?.app);
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        borderRadius: 12,
      }}
    >
      {meetingId ? (
        <MeetingProvider
          config={{
            meetingId: `qpd8-hpc7-coif`,
            micEnabled: true,
            webcamEnabled: true,
            name: "C.V. Raman",
          }}
          token={authToken}
        >
          <MeetingConsumer>
            {() => (
              // <Video></Video>
              <></>
            )}
          </MeetingConsumer>
        </MeetingProvider>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default CallBox;
