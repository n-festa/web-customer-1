import Layout from '../layouts/main';
//import { useState } from 'react';
//import Link from 'next/link';
//import { useForm } from "react-hook-form";
//import { server } from '../utils/server'; 
//import { postData } from '../utils/services'; 
//import { useRouter } from "next/router";
//import { saveState } from '../utils/localstorage';
//import { useState , useEffect} from 'react';
//import TimerContainer from '../components/time/TimerContainer';
//import BMI from '../components/BMI/index';
/*
type LoginMail = {
    email: string;
    password: string;
}*/

const LoginPage = () => {
  /*
    const onSubmit = async (data: LoginMail) => {
        console.log(data);
    };
    */


    return (
        <Layout>
            <div className="sign-up">
                <div className="image-login-page">
                    <div className="image-login-page-child"></div>
                    <img
                      className="ed7ea3501-60662771e1f786b292c5-icon"
                      alt=""
                      src="/images/6387ed7ea3501-60662771e1f786b292c592665a3c4aeetransformed-3@2x.png"
                    />
                </div>
                <div className="content26">
                <div className="title">
                  <div className="title">
                    <b className="heading26">Đặt ngay bữa ăn ngon & lành của riêng bạn!</b>
                  </div>
                </div>
                <div className="input-field-parent">
                  <div className="input-field4">
                    <div className="input-with-label6">
                      <div className="label6">Điền số điện thoại của bạn</div>
                      <div className="input-field5">
                        <div className="input-with-label6">
                          <div className="label7">Phone number</div>
                          <div className="input7">
                            <div className="dropdown1">
                              <img className="vn-icon2" alt="" src="./public/vn1.svg" />

                              <img
                                className="chevron-down-icon3"
                                alt=""
                                src="./public/chevrondown2.svg"
                              />
                            </div>
                            <div className="text-input1">
                              <div className="text68">
                                <b>+84</b>
                                <span> (555) 000-0000</span>
                              </div>
                              <img
                                className="help-icon4"
                                alt=""
                                src="./public/help-icon2.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="hint-text6">This is a hint text to help user.</div>
                      </div>
                    </div>
                    <div className="hint-text7">
                      Chúng tôi sẽ gửi tới số điện thoại bạn đăng ký mã số OTP để kích
                      hoạt tài khoản
                    </div>
                  </div>
                  <div className="button49">
                    <img
                      className="placeholder-icon91"
                      alt=""
                      src="./public/placeholder16.svg"
                    />

                    <div className="text69">Tiếp tục</div>
                    <img
                      className="placeholder-icon91"
                      alt=""
                      src="./public/placeholder16.svg"
                    />
                  </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}
  
export default LoginPage
  