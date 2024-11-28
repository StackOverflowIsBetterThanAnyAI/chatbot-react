import Avatar from './Avatar'
import Message from './Message'
import { ContextChatMessages } from '../App'
import { useContext, useEffect, useRef } from 'react'

const ChatContainer = () => {
    const contextChatMessages = useContext(ContextChatMessages)
    if (!contextChatMessages) {
        throw new Error(
            'ContextChatMessages must be used within a ContextChatMessages.Provider'
        )
    }

    const chatRef = useRef(null)

    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight
    }, [contextChatMessages])

    return (
        <div className="w-full max-w-lg min-h-96 h-96 flex flex-col bg-gradient-to-b from-zinc-200 to-zinc-300 rounded-t-xl">
            <div className=" w-full flex justify-center items-center self-start gap-2 p-2 bg-gradient-to-b from-zinc-300 to-zinc-400 rounded-t-xl">
                <Avatar isBot isHeading />
                <span className="font-semibold text-base sm:text-lg">
                    AI ChatBot
                </span>
            </div>
            <div
                className="flex flex-col gap-2 p-2 overflow-y-auto scroll-smooth"
                ref={chatRef}
            >
                {contextChatMessages[0].map((item, index) => {
                    return (
                        <Message isFromBot={item.isFromBot} key={index}>
                            {item.message}
                        </Message>
                    )
                })}
            </div>
        </div>
    )
}

export default ChatContainer
