import { useForm } from "react-hook-form";
import { server } from '../../utils/server'; 
import { useState } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'

type StepType = {
    onChange : any,
    setPhone: any
}

const LoginComponent = ({onChange,setPhone}: StepType) => {
   
    const { handleSubmit } = useForm();
   // const [value,setValue] = useState()
    const [value, setValue] = useState<string | undefined>();

    const onSubmit = async () => {
       // var phone = value.replace("+",'');
        var phone = value;
        console.log(phone);
        setPhone(phone);
        await fetch(`${server}auth/requestOTP`, {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
              phoneNumber: phone,
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json.status);
            if(json.status == "success"){
                setTimeout(() => {
                    onChange(2);
                }, 3000);
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="sign-up">
            <div className="image-login-page">
                <div className="image-login-page-child"></div>
                <img src="/images/login_image.png" alt="product" />
            </div>
            <div className="content26">
                <div className="title">
                    <b className="heading26">Đặt ngay bữa ăn ngon & lành của riêng bạn!</b>
                </div>
                <div className="input-field-parent">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-field4">
                            <div className="input-with-label6">
                                <div className="label6">Điền số điện thoại của bạn</div>
                                <div className="input-field5">
                                    <div className="input-with-label6">
                                        <div className="label7">Phone number</div>
                                       
                                           
                                            {/*
                                             <div className="input77">
                                            <div className="dropdown1">
                                                <img className="vn-icon2" alt="" src="/images/vn.png" />
                                                <img  className="chevron-down-icon3" alt="" src="/images/chevrondown1.svg"  />
                                            </div>
                                                <input placeholder="+84 (555) 000-0000" type="number" className="text-input1 border-none" name="phone"
                                                ref={register( { required: true, minLength: 10, maxLength: 11 ,
                                                        valueAsNumber: true,
                                                })}

                                            />
                                              </div>
                                            */}
                                            

                                            <PhoneInput
                                                className="input77"
                                                international
                                                defaultCountry="VN"
                                                value={value}
                                                onChange={setValue}
                                                /*
                                                onChange={(value: string) => {
                                                    console.log(value);
                                                }}*/
                                              />
                                    </div>
                              
                                    <div className="hint-text6">This is a hint text to help user.</div>
                                </div>


                            </div>
                            <div className="hint-text7">
                                Chúng tôi sẽ gửi tới số điện thoại bạn đăng ký mã số OTP để kích
                                hoạt tài khoản
                            </div>
                        </div>
                        <button className="button49 mt-3 "  type="submit">
                            <span className="text69"  >Tiếp tục</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default LoginComponent
  