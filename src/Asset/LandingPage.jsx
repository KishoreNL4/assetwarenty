import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./LandingPage.css";
import { EffectCoverflow, Pagination , Mousewheel } from "swiper";
import Topbar from "../components/Repeated/Topbar";
import Bottom from "../components/Repeated/Bottom";
import "../components/Repeated/Box.css";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate()
  return (
    
    // <div style={{backgroundColor:"#4682B4"}}>
    <div>
      <div>
        <Topbar />
      </div>
      <br/>
    <div className="background">

      <br/><br/>



    <div className="A1">
    
          <button onClick = {() => navigate('Products')} className="bt1">Products</button> 
       
          <button onClick = {() => navigate('Dealers')} className="bt1">Dealers</button>
       
          <button className="bt1">Enroll</button>
       
        </div>

    
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"5"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          Mousewheel : true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.hdcarwallpapers.com/thumbs/2022/tesla_model_3_4k_8k-t2.jpg" alt='Tesla' /></SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1623993308369-017255b87e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cmljJTIwc2Nvb3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt='Hover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVub3ZvJTIwbGVnaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt='Lenova Legion' />
          </SwiperSlide>
        <SwiperSlide>
         <img src="https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt='Air Pods' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/1286099765/photo/close-up-of-hand-touching-smartwatch-with-health-app-on-the-screen-gadget-for-fitness-active.jpg?b=1&s=170667a&w=0&k=20&c=A0YNaMmsg0qrp3tr6UNwNt7CxFP6VUsaSB5PTLpZXR4=" alt='Smart Watch' />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBsYXlzdGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt='Joy Stick' />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://i.pinimg.com/474x/9f/c3/31/9fc33175c333a6f92bc5e269ca5a6813.jpg" alt='Joy Stick' />
       </SwiperSlide>
        </Swiper>
       <br/>
      </>
      <div>
        <div className="box-cont-A"><br/>
        <h1 className="A2">Asset Warranty</h1>
        
        <p className="A3">Asset Warranty is a blockchain-based aapplication to manage product details and ownership transfers for manufacturers, retailers, and customers. The platform securely stores product information on the blockchain and updates ownership information when a customer purchases a product. The unique QR code allows easy verification of a product's originality and ownership. The solution aims to transform the product management industry by providing an efficient and transparent system for managing product details and ownership transfers.</p>
        <br/></div>

        <br/><br/>
        </div>
       <div>
          <Bottom />
        </div>
        </div>
      
    </div>

  );
  
}


export default LandingPage;
