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
    const [isProcessing, setIsProcessing] = useState(false)

    const fetchAnswer = async (textInput) => {
        try {
            const response = await fetch(
                `http://localhost:8080/answers?question="${textInput}"`
            )
            if (!response.ok) throw new Error('no valid response')

            const answer = await response.text()
            if (!answer) throw new Error('no valid answer')

            return answer
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

        setTextInput('')

        setIsProcessing((prev) => (prev = true))

        const answer = await fetchAnswer(textInput)

        setContextChatMessage((prevMessages) => [
            ...prevMessages,
            { message: answer, isFromBot: true },
        ])

        setIsProcessing((prev) => (prev = false))
    }

    const handleKeyDown = (e) => {
        if (e.key !== 'Enter') return
        !e.shiftKey && e.preventDefault()
        textInput && !e.shiftKey && handleClick()
    }

    return (
        <div className="flex w-full max-w-lg min-h-12">
            <textarea
                className="bg-zinc-400 p-2 w-5/6 hover:bg-stone-450 active:bg-zinc-400 text-sm sm:text-base"
                placeholder="What drinks do you offer?"
                rows={2}
                onChange={!isProcessing ? handleChange : undefined}
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
