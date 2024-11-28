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
        <div className="min-h-svh bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col justify-center items-center p-4">
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
