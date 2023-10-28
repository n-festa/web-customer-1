/*import Layout from '../layouts/main';
import { useState, createRef, useEffect } from "react";
import TimerContainer from '../components/time/TimerContainer';
import { useRouter } from "next/router";
//import { useForm } from "react-hook-form";
import { postData } from '../utils/services'; 
import { server } from '../utils/server'; 
import Footer from '../components/footer';

/*
type authenticateOTP = {
    phoneNumber: string;
    inputOTP : string;
}
*/


const PhoneVerification = () => {}
export default PhoneVerification

/*
    // time 
    const [minutes] = useState<number>(1);
    const [seconds] = useState<number>(0);


    const router = useRouter();
    //phoneNumber ( state tu /login )
    const phoneNumber = router.query.phoneNumber
   
    // show 6 input
    const numberOfInputs =  6;
    const [inputRefsArray] = useState(() =>
        Array.from({ length: numberOfInputs }, () => createRef())
    );
  //currentIndex  
    const [ currentIndex, setCurrentIndex] = useState(0);
    let [inputOTP] = useState("");
    const [letters, setLetters] = useState(() =>
        Array.from({ length: numberOfInputs }, () => "")
    );

    const handleKeyPress = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex < numberOfInputs - 1 ? prevIndex + 1 : 0;
            const nextInput:any = inputRefsArray?.[nextIndex]?.current;
            const currentInput = nextInput.value;
         //   console.log(currentInput);
            inputOTP = inputOTP.concat(currentInput);
            if(nextIndex !== 0){
                nextInput.focus();
                nextInput.select();
            }else{
                nextInput.blur();
                authenticateOTP(phoneNumber,inputOTP);
            }
            
            return nextIndex;
        });
    };

    useEffect(() => {
        if (inputRefsArray?.[0]?.current) {
          inputRefsArray?.[0]?.current?.focus();
        }

        window.addEventListener("keyup", handleKeyPress, false);
        return () => {
          window.removeEventListener("keyup", handleKeyPress);
        };
    }, []);
  
    const authenticateOTP= async(phoneNumber:string,inputOTP: string)  =>{
        console.log("phoneNumber: " + phoneNumber);
        console.log("inputOTP:" + inputOTP);
        const res = await postData(`${server}auth/authenticateOTP`, {
            phoneNumber: phoneNumber,
            inputOTP:inputOTP
        });

        if(res.status === "success"){
            router.push( '/additional-sign-up-info');
        }
    }


    return (
        <Layout>
            <div className="sign-up otp">
                <div className="content26">
                    <div className="heading-and-supporting-text3 title">
                        <div className="title">
                            <b className="heading26 text-color text-start">Xác nhận mã OTP</b>
                            <div className="heading27 text-start mt-2">
                                <span >Nhập mã OTP 6 chữ số được gửi tới số điện thoại bạn đăng ký. </span> 
                                <br/>
                                <span>Mã OTP chỉ có hiệu lực trong vòng <b>2 phút</b> .</span>
                                <span className="d-none">{currentIndex} </span>
                            </div>
                         </div>
                    </div>
                    <div className="verification-code-input-field-parent content26">
                        <div className="verification-code-input-field">
                            <div className="input-with-label6">
                                <div className="input7">
                                    {inputRefsArray.map((ref: any, index) => {
                                        return (
                                            <div className="mega-input-field-base1">
                                                <input className="text68 border-none text-center" 
                                                key={index} 
                                                ref={ref}  
                                                type="text"
                                                id={`box${index}-1`}   placeholder="0" 
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    setLetters((letters) =>
                                                        letters.map((letter, letterIndex) =>
                                                            letterIndex === index ? value : letter,
                                                        )
                                                    );
                                                }}
                                                onClick={(e) => {
                                                    setCurrentIndex(index);
                                              //      e.target.select();
                                                }}
                                                value={letters[index]}
                                                  /*  max={"1"} 
                                                />
                                            </div>
                                          
                                        );
                                      })}
                                </div>

                           
                            </div>
                            <div className="hint-text6">This is a hint text to help user.</div>
                        </div>
                        <TimerContainer minutes={minutes} seconds={seconds} />
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}
  
export default PhoneVerification
  */