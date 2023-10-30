import React from 'react';

interface BMIType{
    height: number,
    weight : number,
}

const BMI = ({height, weight} : BMIType) => {
    const BMIindex = (weight/ (height * height) * 10000).toFixed(2);
    const result_bmi ="";
    if( BMIindex < 16){
        result_bmi = "Gầy độ 3";
    }else if( 16 < BMIindex && BMIindex <17){
        result_bmi = "Gầy độ 2";
    }else if( 17< BMIindex && BMIindex <18.5){
        result_bmi = "Gầy độ 1";
    }else if( 18.5 < BMIindex && BMIindex <25){
        result_bmi = "Binh thuong";
    }else if( 25 < BMIindex && BMIindex <30){
        result_bmi = "Thừa cân";
    }else if( 30 < BMIindex && BMIindex <35){
        result_bmi = "Béo phì độ 1";
    }else if( 35 < BMIindex && BMIindex <40){
        result_bmi = "Béo phì độ 2";
    }else if( 40 < BMIindex){
        result_bmi = "Béo phì độ 3";
    }





    console.log(result_bmi);

    return (
        <div className="ch-s-bmi-parent">
            <div className="ch-s-bmi font-size24">Chỉ số BMI</div>
                <div className="data-parent">
                    <div className="data position-relative">
                    <div className="data-child"></div>
                    <div className="div5">{BMIindex}</div>
                </div>
                <div className="cn-i">{result_bmi}</div>
            </div>
        </div>
    )
};

export default BMI;