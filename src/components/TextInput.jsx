import { useContext, useState } from 'react'
import Button from './Button'
import { ContextChatMessages } from '../App'

const TextInput = () => {
    const [contextChatMessages, setContextChatMessage] =
        useContext(ContextChatMessages)
    if (!contextChatMessages) {
        throw new Error(
            'ContextChatMessages must be used within a ContextChatMessages.Provider'
        )
    }

    const [textInput, setTextInput] = useState('')

    const fetchAnswer = async (textInput) => {
        try {
            const response = fetch('')
            if (!response.ok) throw new Error('no valid response')
            return 'Hello World!'
        } catch (Error) {
            console.error(Error)
            return 'Unfortunatelly, I cannot process your question.'
        }
    }

    const handleChange = (e) => {
        setTextInput(e.target.value)
    }

    const handleClick = async () => {
        setContextChatMessage((prevMessages) => [
            ...prevMessages,
            { message: textInput, isFromBot: false },
        ])

        const answer = await fetchAnswer(textInput)

        setContextChatMessage((prevMessages) => [
            ...prevMessages,
            { message: answer, isFromBot: true },
        ])

        setTextInput('')
    }

    const handleKeyDown = (e) => {
        if (e.key !== 'Enter') return
        !e.shiftKey && e.preventDefault()
        textInput && !e.shiftKey && handleClick()
    }

    return (
        <div className="flex w-full max-w-lg min-h-12">
            <textarea
                className="bg-zinc-400 p-2 w-5/6 hover:bg-stone-450 active:bg-zinc-400"
                placeholder="What drinks do you offer?"
                rows={2}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={textInput}
            ></textarea>
            <Button disabled={!textInput.length} onclick={handleClick}>
                Send
            </Button>
        </div>
    )
}

export default TextInput
