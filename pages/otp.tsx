import Layout from '../layouts/main';
//import { useState } from 'react';
//import { server } from '../utils/server'; 
//import { postData } from '../utils/services'; 
//import { useRouter } from "next/router";
//import { saveState } from '../utils/localstorage';
//import { useState , useEffect} from 'react';
//import TimerContainer from '../components/time/TimerContainer';
//import BMI from '../components/BMI/index';

const LoginPage = () => {
    return (
        <Layout>
             <div className="otp">
                <div className="content26">
                    <div className="heading-and-supporting-text3">
                        <div className="title">
                            <b className="heading26">Xác nhận mã OTP</b>
                            <div className="heading27">
                              <span
                                >Nhập mã OTP 6 chữ số được gửi tới số điện thoại bạn đăng ký. Mã
                                OTP chỉ có hiệu lực trong vòng
                              </span>
                              <b>2 phút</b>
                              <span>.</span>
                            </div>
                         </div>
                    </div>
                    <div className="verification-code-input-field-parent">
                      <div className="verification-code-input-field">
                        <div className="input-with-label6">
                          <div className="label6">Secure code</div>
                          <div className="input7">
                            <div className="mega-input-field-base">
                              <div className="text68">1</div>
                            </div>
                            <div className="mega-input-field-base1">
                              <div className="text68">0</div>
                            </div>
                            <div className="mega-input-field-base1">
                              <div className="text68">0</div>
                            </div>
                            <div className="text71">-</div>
                            <div className="mega-input-field-base1">
                              <div className="text68">0</div>
                            </div>
                            <div className="mega-input-field-base1">
                              <div className="text68">0</div>
                            </div>
                            <div className="mega-input-field-base1">
                              <div className="text68">0</div>
                            </div>
                          </div>
                        </div>
                        <div className="hint-text6">This is a hint text to help user.</div>
                      </div>
                      <div className="button-parent">
                        <div className="button49">
                          <img
                            className="placeholder-icon91"
                            alt=""
                            src="./public/placeholder16.svg"
                          />

                          <div className="text75">Gửi lại mã OTP</div>
                          <img
                            className="placeholder-icon91"
                            alt=""
                            src="./public/placeholder16.svg"
                          />
                        </div>
                        <div className="heading28">01:23</div>
                      </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
  
export default LoginPage
  