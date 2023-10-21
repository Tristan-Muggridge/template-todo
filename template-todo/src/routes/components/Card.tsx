
interface CardProps {
    children: React.ReactNode, 
    className?: string
    onClick?: () => void
}

export default ({children, className, onClick}: CardProps) => (
    <div
        onClick={onClick} 
        className={`
            bg-neutral-600 text-neutral-300 
            rounded-md p-2 w-full shadow-md shadow-black ${className}
            ${onClick ? 'cursor-pointer hover:bg-neutral-700 transition-all duration-200' : ''}
            `}>
        {children}
    </div>
)