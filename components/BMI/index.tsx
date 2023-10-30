import React from 'react';

interface BMIType{
    height: number,
    weight : number,
}

const BMI = ({height, weight} : BMIType) => {
    const BMIindex = (weight/ (height * height) * 10000).toFixed(2);
    return (
        <div className="ch-s-bmi-parent">
            <div className="ch-s-bmi font-size24">Chỉ số BMI</div>
                <div className="data-parent">
                    <div className="data position-relative">
                    <div className="data-child"></div>
                    <div className="div5">{BMIindex}</div>
                </div>
                <div className="cn-i">Cân đối</div>
            </div>
        </div>
    )
};

export default BMI;