import React from 'react'
import  NumberBox  from './NumberBox'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";


const TimerContainer = () => {

    const [active] = useState(false);

    const [time] = useState<number>(0.2);
    const [minutes, setMinutes] = useState<number>(0.2);
    const [seconds, setSeconds] = useState<number>(0);

    const timeToDays = time * 60 * 1000;
    const countDownDate = new Date().getTime() + timeToDays;

    useEffect(() => {
            var updateTime = setInterval(() => {
                var now = new Date().getTime();
                var difference = countDownDate - now;
                var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

                setMinutes(newMinutes);
                setSeconds(newSeconds);

                if (difference <= 0) {
                    clearInterval(updateTime);
                    setMinutes(0);
                    setSeconds(0);
                }
            })

            return () => {
                clearInterval(updateTime);
            }
    }, []);


    if (minutes == 0 && seconds == 0){
        //console.log("het thoi gian");
        //setActive(true);
    }else{
        
    }


    //gui lai ma
    const { handleSubmit } = useForm();

    const ReSendOTP = async () => {
        console.log("data :"  );
    };


    return (
         <div className="button-parent">
            <form onSubmit={handleSubmit(ReSendOTP)}>
                <button className="button49" type="submit" disabled={!active}>
                    <div className="text75" >Gửi lại mã OTP</div>
                </button>
            </form>
            <div className="heading28 mt-2">
                <div className=" mt-2  rounded-xl">
                    <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
                        <NumberBox num={minutes} />
                        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</span>
                        <NumberBox num={seconds}  />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export  default TimerContainer;