import React from 'react';

interface numProp{
    num:string|number,
    unit:string,
    flip : boolean,
}

const NumberBox = ({num, unit, flip} : numProp)  =>{
    return(
        <div className='flex'>
            <div className='text-5xl'>
                {num}
            </div>
            <div className={`absolute  w-full h-1/2 top-0  rounded-t-lg z-5 ${flip ? 'animate-flip bg-rose-200' : 'bg-transparent'}`}></div>
            <p> {unit}</p>
        </div>
    )

}

export default NumberBox;