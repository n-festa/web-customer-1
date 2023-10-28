import Layout from '../layouts/main';
//import { useState, createRef, useEffect } from "react";
//import TimerContainer from '../components/time/TimerContainer';

const OTP = () => {
    return (
        <Layout>
            OTP
        </Layout>
    )
    /*
    async function resendOTP() {
        console.log("resendOTP");
    }

    const [time, setTime] = useState<number>(1);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const timeToDays = time * 60  * 1000;

    let countDownDate = new Date().getTime() + timeToDays;

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

      }, [time]);



    const numerOfInputs =  2;
    const [inputRefsArray] = useState(() =>
        Array.from({ length: numerOfInputs }, () => createRef())
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const [letters, setLetters] = useState(() =>
        Array.from({ length: numerOfInputs }, () => "")
    );

    const handleKeyPress = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex < numerOfInputs - 1 ? prevIndex + 1 : 0;
            const nextInput = inputRefsArray?.[nextIndex]?.current;
            nextInput.focus();
            nextInput.select();
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
                                
                            </div>
                         </div>
                    </div>
                    <div className="verification-code-input-field-parent content26">
                        <div className="verification-code-input-field">
                            <div className="input-with-label6">
                                <div className="input7">
                                    {inputRefsArray.map((ref, index) => {
                                        return (
                                            <input  ref={ref}  type="text"
                                                id={`box${index}-1`}
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
                                                    e.target.select();
                                                }}
                                                value={letters[index]}
                                                max={"1"}
                                            />
                                        );
                                      })}
                                </div>
                                <div className="input7">
                                    <div className="mega-input-field-base">
                                        <input className="text68 border-none text-center" placeholder="1" />
                                    </div>
                                    <div className="mega-input-field-base1 color-gray-300">
                                        <input className="text68 border-none text-center color-gray-300" placeholder="0" />
                                    </div>
                                    <div className="mega-input-field-base1">
                                        <input className="text68 border-none text-center" placeholder="0" />
                                    </div>
                                    <div className="mega-input-field-base1">
                                        <input className="text68 border-none text-center" placeholder="0" />
                                    </div>
                                    <div className="mega-input-field-base1">
                                        <input className="text68 border-none text-center" placeholder="0" />
                                    </div>
                                    <div className="mega-input-field-base1">
                                      <input className="text68 border-none text-center" placeholder="0" />
                                    </div>
                                </div>
                            </div>
                            <div className="hint-text6">This is a hint text to help user.</div>
                        </div>
                        <div className="button-parent">
                            <button className="button49">
                                <div className="text75" onClick={()=> resendOTP()}>Gửi lại mã OTP</div>
                            </button>
                            <div className="heading28 mt-2">
                                <TimerContainer  minutes={minutes}  seconds={seconds}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
    */
}
  
export default OTP
  