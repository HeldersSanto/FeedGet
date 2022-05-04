import {feedbackTypes, FeedBakcType} from ".."
import { CloseButton } from "../../CloseButton";

interface onFeedbackChangePorps {
    onFeedbackChange: (type: FeedBakcType) => void;
};
export function FeedBakcTypeStep({onFeedbackChange}:onFeedbackChangePorps){
    return(
        <>
            <header>
                <span className="text-xl leading-6">
                    Deixe seu Feedback
                </span>
                <CloseButton />
            </header>
            <div className="w-full py-8 flex gap-2">
                {Object.entries(feedbackTypes).map(([key, value])=>{
                    return(
                        <button 
                            className="w-24 flex items-center flex-col px-2 py-4 bg-[#27272A] rounded-lg gap-2 border-2 border-transparent hover:border-roxo-500 transition-colors focus:border-roxo-500 focus: outline-none resize-none"
                            key={key}
                            onClick={() => onFeedbackChange(key as FeedBakcType)}
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span className="text-sm leading-6">{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    );
}