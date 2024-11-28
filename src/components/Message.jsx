import Avatar from './Avatar'

const Message = ({ isFromBot, children }) => {
    const direction = isFromBot ? 'self-start' : 'self-end flex-row-reverse'

    const background = isFromBot
        ? 'bg-blue-300 rounded-r-md pr-4'
        : 'bg-red-400 rounded-l-md pl-4'

    return (
        <div className={`flex gap-2 items-center ${direction}`}>
            <Avatar isBot={isFromBot} />
            <div
                className={`w-fit p-2 min-w-16 ${background} text-sm sm:text-base`}
            >
                {children}
            </div>
        </div>
    )
}

export default Message
