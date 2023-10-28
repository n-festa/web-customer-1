import Link from "next/link";


const NavigationButtons = () =>{
    return (
        <div className="absolute bottom-[100px] flex gap-80">
            <Link href={back}>
            <button className="px-2 py-1 border-2 rounded-lg text-[18px] lg:text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500">
              Back
            </button>
            </Link>
            
        </div>
    )
}

export default NavigationButtons
