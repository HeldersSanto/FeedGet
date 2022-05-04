import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "../Loading";

interface ScreenshotButtonProps{
    screenshot: String | null,
    onScreenshotTook: (screenshot: String | null) => void 
}

export function ScreenshotButton ({screenshot, onScreenshotTook}: ScreenshotButtonProps){

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function takeScreenshot(){
        setIsTakingScreenshot(true);
        const htmlImage = await html2canvas(document.querySelector("html")!);
        const base64 = htmlImage.toDataURL("image/png");
        onScreenshotTook(base64);
        setIsTakingScreenshot(false);
    }

    if(screenshot){
        return(
            <button 
            type="button"
            className="p-1 w-10 h-10 rounded-[4px] border-transparent flex items-end justify-end"
            onClick={()=>onScreenshotTook(null)}
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: "right bottom",
                backgroundSize: 180
            }}
            >
                <Trash weight="fill" />
            </button>
        )
    }
    return(
        <button 
        type="button"
        onClick={takeScreenshot}
        className="p-2 bg-zinc-800 rounded-[4px] border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkGray-500 focus:ring-roxo-300">
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" /> }
        </button>
    )
}