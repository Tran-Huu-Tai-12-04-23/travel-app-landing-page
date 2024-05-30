"use client";
import { TracingBeamDemo } from "./components/TracingBeamDemo";
import { Button } from "./components/ui/moving-border";

export default function Home() {
  const handleDownload = () => {
    const fileUrl = "static/app/travel-app.apk";
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = fileUrl;
    downloadAnchor.download = "travel-app.apk";
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <video
        autoPlay={true}
        preload="preload"
        muted
        className="bg-black shadow-2xl max-h-[50rem] rounded-xl flex flex-row justify-between items-center p-3  "
      >
        <source
          type="video/mp4"
          src="https://firebasestorage.googleapis.com/v0/b/shoes-shop-bb21d.appspot.com/o/video-export%20(2).mp4?alt=media&token=7bcab210-0f79-4493-9ed1-55437e060813"
        ></source>
      </video>
      <div className="h-[1px] bg-gray-500 w-full"></div>
      <div className="full flex justify-center gap-10 mt-5 mb-5 items-center">
        <Button borderRadius="1.75rem" onClick={handleDownload}>
          Download APK{" "}
        </Button>
        <Button
          borderRadius="1.75rem"
          onClick={() => {
            alert("Ios file not available!");
          }}
        >
          Download IOS File{" "}
        </Button>
      </div>

      <TracingBeamDemo />
    </main>
  );
}
