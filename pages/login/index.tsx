import Layout from '../../layouts/main';
import Footer from '../../components/footer';
import LoginComponent   from '../../components/steps/LoginComponent';
import PhoneVerificationComponent   from '../../components/steps/PhoneVerificationComponent';
import Additional   from '../../components/steps/Additional';
import RegistrationSuccess   from '../../components/steps/RegistrationSuccess';
import { useState } from "react";


function ActiveStepFormComponent() {
    const [step,setStep] = useState<number>(1);
    const [phone,setPhone] = useState<string>("");
    const [height,setHeight] = useState<number>(0);
    const [weight,setWeight] = useState<number>(0);
    switch (step) {
        case 1:
            return <LoginComponent onChange={setStep} setPhone={setPhone}/>;
        case 2:
            return <PhoneVerificationComponent phone={phone} onChange={setStep}/>;
        case 3:
            return <Additional onChange={setStep} setHeight={setHeight} setWeight={setWeight} />;;
        case 4:
            return <RegistrationSuccess height={height} weight={weight}/>; 

       
        default:
          return null;
    }
}


const LoginPage1 = () =>{ 
    //setStep
    return (
        <Layout>
            <ActiveStepFormComponent  />
            <Footer />
        </Layout>
    )
}

export default LoginPage1