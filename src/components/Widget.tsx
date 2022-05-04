import { ChatTeardropDots } from "phosphor-react"
import {Popover} from "@headlessui/react"
import { WidgetForm } from "./WidgetForm"

export function Widget(){
    return(
        <Popover className="absolute bottom-3 right-3 md:bottom-6 md:right-6 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            <Popover.Button className="bg-roxo-500 text-white px-3 h-14 flex items-center rounded-full group">
                <ChatTeardropDots className="w-8 h-8" weight="regular" />
                <span className="overflow-hidden max-w-0 group-hover:max-w-xs text-base transition-all duration-500 ease-linear">
                    <span className="px-1"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}