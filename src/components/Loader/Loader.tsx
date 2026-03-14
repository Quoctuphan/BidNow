export default function Loader({isLoading = false, width= ''} : {isLoading: boolean, width?: string}) {
    if (!isLoading) return null;
    return (
            <div className="bg-white/50 z-50 absolute inset-0 flex justify-center items-center">
            <div className={`
                loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce 
                aspect-square flex justify-center items-center text-yellow-700 font-bold
                ${width || 'w-[2.5vw]'} 
            `}>$</div>
            </div>
    )
}