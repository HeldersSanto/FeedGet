import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import {feedbackTypes, FeedBakcType} from ".."
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackSelectedTypeProps {
    feedbackSelectedType: FeedBakcType,
    onSelectRestartButton: () => void,
    onSendFeedback: () => void
}

export function FeedBakcContentStep({feedbackSelectedType, onSelectRestartButton, onSendFeedback}: FeedbackSelectedTypeProps){
    const feedbackTypeInfo = feedbackTypes[feedbackSelectedType];
    const [screenshot, setScreeshot] = useState<String | null>(null)
    const [comment, setComment] = useState<String>("")

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        console.log({
            screenshot,
            comment
        })
        onSendFeedback()
    }

    return(
        <>
            <header>
                <button 
                type="button"
                onClick={onSelectRestartButton} 
                className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>
                <span className="text-xl leading-6 flex flex-row items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
        
        <form onSubmit={handleSubmit} className="my-4 w-full">
            <textarea  className="min-w-[340px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-2 border-zinc-600 bg-transparent rounded-md hover:border-roxo-500 transition-colors focus:border-roxo-500 focus: outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
            placeholder="Nos conte com detalhes o que está acontencendo..."
            onChange={e => setComment(e.target.value)}
            />

            <footer className="flex gap-2 mt-2">
                <ScreenshotButton onScreenshotTook={setScreeshot} screenshot={screenshot} />

                <button 
                disabled={comment.length === 0}
                type="submit" 
                className="p-2 bg-roxo-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-roxo-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkGray-500 focus:ring-roxo-300 disabled:opacity-50 disabled:hover:bg-roxo-500">
                    Enviar feedback
                </button>
            </footer>
        </form>
        </>
    );
}