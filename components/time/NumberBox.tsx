import React from 'react';

interface numProp{
    num:string|number,
}

const NumberBox = ({num} : numProp)  =>{
    return(
        <span>
            {num}
        </span>
        
    )

}

export default NumberBox;