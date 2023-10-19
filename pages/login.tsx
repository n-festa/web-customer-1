import Layout from '../layouts/main';
//import { useState } from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 
import { useRouter } from "next/router";
import { saveState } from '../utils/localstorage';
import { useState , useEffect} from 'react';
import TimerContainer from '../components/time/TimerContainer';
import BMI from '../components/BMI/index';

type LoginMail = {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
  //  const errors = useState();
    console.log(errors);

    const onSubmit = async (data: LoginMail) => {
        const res = await postData(`${server}/api/v1/login`, {
            email: data.email,
            password: data.password
        });

        console.log(res);
        if(res.type !== "success"){
            console.log("errer");
        }else{
            saveState("userLogIn", res.data.result);
            router.push('/products');
        }
    };
    //, setTime , newTime
    const [time] = useState<number>(2);
  //  const [days, setDays] = useState<number>(0);
   // const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    //message,
    //const [ setMessage] = useState<string>("");

    const timeToDays = time * 60 * 1000;

    let countDownDate = new Date().getTime() + timeToDays;


    useEffect(() => {
        var updateTime = setInterval(() => {
        var now = new Date().getTime();

        var difference = countDownDate - now;

      //  var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
       // var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

       // setDays(newDays);
       // setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);


        if (difference <= 0) {
            clearInterval(updateTime);
          //  setMessage("The Launch Has Started");
          //  setDays(0);
           // setHours(0);
            setMinutes(0);
            setSeconds(0);
        }
        })

        return () => {
        clearInterval(updateTime);
        }

    }, [time]);

    /*
    const handleClick = () =>{
        setTime(newTime);
        console.log(time);
        setNewTime(0);
    }
   


    const handleChange =(e:any) =>{
        let inputTime = e.target.value;
        setNewTime(inputTime);
    }
     */

    return (
        <Layout>
            <section className="form-page">
                <div className="container">
                    <div className="back-button-section">
                        <Link href="/products">
                            <a><i className="icon-left"></i> Back to store</a>
                        </Link>
                    </div>

                    <div className="form-block">
                        <h2 className="form-block__title">Log in</h2>
                        <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form__input-row">
                                <input  className="form__input"    placeholder="email" 
                                    type="text"    name="email"
                                    ref={register({
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                      })}
                                />

                                {errors.email && errors.email.type === 'required' && 
                                    <p className="message message--error">This field is required</p>
                                }

                                {errors.email && errors.email.type === 'pattern' && 
                                    <p className="message message--error">Please write a valid email</p>
                                }
                            </div>
                          
                            <div className="form__input-row">
                                <input  className="form__input"   type="password" 
                                    placeholder="Password"    name="password"
                                    ref={register({ required: true })}
                                />
                                {errors.password && errors.password.type === 'required' && 
                                    <p className="message message--error">This field is required</p>
                                }
                            </div>

                            <div className="form__info">
                                <div className="checkbox-wrapper">
                                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                                    <input 
                                      type="checkbox" 
                                      name="keepSigned" 
                                      id="check-signed-in" 
                                      ref={register({ required: false })}
                                    />
                                    <span className="checkbox__check"></span>
                                    <p>Keep me signed in</p>
                                  </label>
                                </div>
                                <a href="/forgot-password" className="form__info__forgot-password">Forgot password?</a>
                            </div>

                            <div className="form__btns">
                                <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
                                <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
                            </div>

                            <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign in</button>

                            <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
                        </form>
                        <TimerContainer
                            minutes={minutes}
                            seconds={seconds}
                        />
                        <BMI height={162} weight={70} />
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}
  
export default LoginPage
  