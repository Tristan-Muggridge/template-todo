export default ({children, className}:{children: React.ReactNode, className?: string}) => (
    <div className={`bg-neutral-600 text-neutral-300 rounded-md p-2 w-full shadow-md shadow-black ${className}`}>
        {children}
    </div>
)