import { ReactNode } from "react"
//import NavigationButtons  from "./NavigationButtons"

type StepProps = {
  children: ReactNode
  back?: string
  next?: string
  home?: boolean
}


const Step = ({ children}: StepProps) =>{
    return (
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          {children}
        </div>
    )
}

export default Step
