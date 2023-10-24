import Layout from '../layouts/main';
//import TimerContainer from '../components/time/TimeContainer';

const OTP = () => {

    async function resendOTP() {
        console.log("resendOTP");
    }

    /*
    async function stepToAnotherInput(){
        console.log("stepToAnotherInput");
    }
*/

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
                                <span>Mã  OTP chỉ có hiệu lực trong vòng <b>2 phút</b> .</span>
                            </div>
                         </div>
                    </div>
                    <div className="verification-code-input-field-parent content26">
                        <div className="verification-code-input-field">
                            <div className="input-with-label6">
                                <div className="input7">
                                    <div className="mega-input-field-base">
                                    <input className="text68 border-none text-center" placeholder="1" />
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
                            <div className="heading28 mt-2">01:23</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
  
export default OTP
  