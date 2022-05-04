import { useState } from "react";
import { CloseButton } from "../CloseButton";
import urlBugImage from "../../assets/bug.svg"
import urlIdeaImage from "../../assets/idea.svg"
import urlThoughtImage from "../../assets/thought.svg"
import { FeedBakcTypeStep } from "./step/FeedbackTypeStep";
import { FeedBakcContentStep } from "./step/FeedbackContentStep";
import { FeedbacksuccessStep } from "./step/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: urlBugImage,
            alt: "Imagem de um inseto.",
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: urlIdeaImage,
            alt: "Imagem de um lâmpada.",
        }
    },
    THOUGHT: {
        title: "Outro",
        image: {
            source: urlThoughtImage,
            alt: "Imagem de um balão de pensammento.",
        }
    },
};

export type FeedBakcType = keyof typeof feedbackTypes;

export function WidgetForm(){


    const [feedbackSelected, setFeedbackSelected] = useState<FeedBakcType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function restartFeedback(){
        setFeedbackSent(false);
        setFeedbackSelected(null);
    }

    return(
        <div className="bg-darkGray-500 p-4 rounded-2xl relative mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ?
                <FeedbacksuccessStep onSelectRestartButton={restartFeedback}/> 
            :
            <>
                {!feedbackSelected ? 
                    <FeedBakcTypeStep onFeedbackChange={setFeedbackSelected} /> 
                :
                    <FeedBakcContentStep feedbackSelectedType={feedbackSelected} onSelectRestartButton={restartFeedback} onSendFeedback={()=> setFeedbackSent(true)} />
                }
            </>
            }

            <footer>
                <span className="text-xs text-[#A1A1AA]">
                    Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/HeldersSanto" target="_blank">Helder Santos</a> com <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a>
                </span>
            </footer>
            
        </div>
    )
}