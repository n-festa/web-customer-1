import Footer from "../ui/footer";
import Banner from "@/components/landingPage/banner";
import Today from "@/components/landingPage/today";
import OrderStep from "@/components/landingPage/order-step";
import WhyChoose from "@/components/landingPage/why-choose";
import Testimonial from "@/components/landingPage/testimonial";
import Contact from "@/components/landingPage/contact";
import Download from "@/components/landingPage/download";


const LandingPage = () =>{
    return (
        <div>
            <Banner />
            <Today title="food_today" />
            <OrderStep />
            <WhyChoose />
            <Contact />
            <Download />
            <Footer />
        </div>
    )
}

export default LandingPage;