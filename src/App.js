import { createContext, useState } from 'react'
import ChatContainer from './components/ChatContainer'
import TextInput from './components/TextInput'

export const ContextChatMessages = createContext(undefined)

const App = () => {
    const [contextChatMessages, setContextChatMessages] = useState([
        { message: 'Hello AI!', isFromBot: false },
        { message: 'Hello World!', isFromBot: true },
    ])

    return (
        <div className="h-svh flex flex-col justify-center items-center">
            <ContextChatMessages.Provider
                value={[contextChatMessages, setContextChatMessages]}
            >
                <ChatContainer />
                <TextInput />
            </ContextChatMessages.Provider>
        </div>
    )
}

export default App
