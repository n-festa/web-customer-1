import React from 'react'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {postData } from '../../utils/services'; 
import { server } from '../../utils/server'; 


interface TimerType {
  phone: string;
}
 
const TimerContainer = ({phone}:TimerType) => {
    const [active,setActive] = useState(false);
    const [isEnded, setIsEnded] = useState(false);

    const COUNTDOWN_INICIAL_TIME_IN_SECONDS =  10 // 1 minutes
    const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INICIAL_TIME_IN_SECONDS);
    useEffect(() => {
        if (secondsAmount <= 0 && !isEnded) {
            setIsEnded(true);
            setActive(true);
            //alert("Finalizado.");
            return;
        }
        setTimeout(() => {
            setSecondsAmount(state => state - 1);
            setIsEnded(false);
        }, 1000);
           
    }, [secondsAmount ]);
    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;

    //gui lai ma
    const { handleSubmit } = useForm();

    const ReSendOTP = async () => {
        await postData(`${server}auth/requestOTP`, {
            phoneNumber: phone,
        });


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
                        <span id="minutes">{String(minutes).padStart(2, "0")}</span>
                      <span>:</span>
                      <span id="seconds">{String(seconds).padStart(2, "0")}</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export  default TimerContainer;