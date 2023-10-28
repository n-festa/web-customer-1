//import { useForm } from "react-hook-form";
import TimerContainer   from '../time/TimerContainer';
import { useState,useEffect,createRef } from "react";

type StepType = {
    onChange : any,
    phone: string
}

const PhoneVerificationComponent = ({phone,onChange}: StepType) => {
    
    // show 6 input
    const numberOfInputs =  6;
    const [inputRefsArray] = useState(() =>
        Array.from({ length: numberOfInputs }, () => createRef())
    );
    const [ currentIndex, setCurrentIndex] = useState(0);
    let [inputOTP] = useState("");
    let phoneNumber = phone as string;

    const [letters, setLetters] = useState(() =>
        Array.from({ length: numberOfInputs }, () => "")
    );

    const handleKeyPress = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex < numberOfInputs - 1 ? prevIndex + 1 : 0;
            const nextInput:any = inputRefsArray?.[nextIndex]?.current;

            if(nextIndex !== 0){
                nextInput.focus();
                nextInput.select();
            }else{
                const phone_value:any = document.getElementsByName('phone-value') ;
                phone_value.forEach((e: HTMLInputElement) => {
                    inputOTP = inputOTP.concat(e.value);
                })
                console.log(inputOTP)
                nextInput.blur();
                authenticateOTP(phoneNumber,inputOTP);
            }
            
            return nextIndex;
        });
    };

    useEffect(() => {
        if (inputRefsArray?.[0]?.current) {
          //  inputRefsArray?.[0]?.current?.focus?.();
        }

        window.addEventListener("keyup", handleKeyPress, false);
        return () => {
          window.removeEventListener("keyup", handleKeyPress);
        };
    }, []);


    const authenticateOTP= async(phoneNumber:string,inputOTP: string)  =>{
        console.log("phoneNumber: " + phoneNumber);
        console.log("inputOTP:" + inputOTP);
        /*
        const res = await postData(`${server}auth/authenticateOTP`, {
            phoneNumber: phoneNumber,
            inputOTP:inputOTP
        });

        if(res.status === "success"){
            router.push( '/additional-sign-up-info');
        }
        */

        onChange(3);
    }


    return (
        <div className="sign-up otp">
            <div className="content26">
                <div className="heading-and-supporting-text3 title">
                    <div className="title">
                        <b className="heading26 text-color text-start">Xác nhận mã OTP</b>
                        <div className="heading27 text-start mt-2">
                            <span >Nhập mã OTP 6 chữ số được gửi tới số điện thoại bạn đăng ký. </span> 
                            <br/>
                            <span>Mã OTP chỉ có hiệu lực trong vòng <b>2 phút</b> .</span>
                        </div>
                    </div>
                </div>
                <div className="verification-code-input-field-parent content26">
                    <div className="verification-code-input-field">
                        <div className="input-with-label6">
                            <div className="input7" id={`${currentIndex}`}>
                                {inputRefsArray.map((ref: any, currentIndex) => {
                                    return (
                                        <div className="mega-input-field-base1">
                                            <input className="text68 border-none text-center" 
                                            name="phone-value"
                                            key={currentIndex} 
                                            ref={ref}  
                                            type="text"
                                            id={`box${currentIndex}-1`}   
                                            placeholder="0" 
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                setLetters((letters) =>
                                                    letters.map((letter, letterIndex) =>
                                                        letterIndex === currentIndex ? value : letter,
                                                    )
                                                );
                                            }}
                                            onClick={() => {
                                                setCurrentIndex(currentIndex);
                                            }}
                                            value={letters[currentIndex]}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <TimerContainer />
                </div>
            </div>
        </div>

    )
}


export default PhoneVerificationComponent
  