const Avatar = ({ isBot, isHeading }) => {
    const background = isBot
        ? 'from-blue-400 to-blue-600'
        : 'from-red-400 to-red-600'
    const heading = isHeading ? 'w-12 h-12 animate-pulse' : 'w-8 h-8'

    return (
        <div
            className={`${heading} bg-gradient-to-b ${background} rounded-full border-2 border-slate-50`}
        ></div>
    )
}

export default Avatar
