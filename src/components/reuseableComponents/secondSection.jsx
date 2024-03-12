import React from 'react'
import Car from '../../assets/car.png'
import IconSecond from '../../assets/icon-2.png'
import IconThird from '../../assets/icon-3.png'
import IconFour from '../../assets/icon-4.png'
import BgImg from '../../assets/bgImg.png'

const secondSection = () => {
  return (
    <section className='second-section'>
        <div className='row-first'>
            <div className='container-row'> 
                                            {/* first contaner with image */}
                <div className='con-1'>
                    <img src={Car} alt="car-icon"/>
                </div>
                                            {/* 2 nd contaner icon */}
                <div className='con-icon'>
                    <div className='img-area'>
                        <img src={IconSecond} alt="icon" />
                    </div>
                    <p className='hedding-con'>RETURN FARE, NOT FAIR</p>
                    <p className='para-con'>WHY PAY FOR RETURN JOURNEY WHEN YOU ARE TRAVELLING ONE-WAY? NOW GET DISCOUNTED AC TAXI AT 
                        JUST HALF OF THE ROUND TRIP COST FOR YOUR ONE-WAY TRAVEL.</p>
                </div>
                                            {/* 3rd container icon */}
                <div className='con-icon'>
                  <div className='img-area'>
                        <img src={IconThird} alt="icon" />
                    </div>
                    <p className='hedding-con'>GPS BASED BILLING SYSTEM</p>
                    <p className='para-con'>LUCKNOW | GORAKHPUR | VARANASI | LUCKNO ALLAHABAD | BAREILLY</p>
                </div>
                                            {/* 4th contanerr icon */}
                <div className='con-icon'>
                <div className='img-area'>
                        <img src={IconFour} alt="icon" />
                    </div>
                    <p className='hedding-con'>NOW AVAILABLE ROUTES ARE!</p>
                    <p className='para-con'>LUCKNOW | GORAKHPUR | VARANASI | LUCKNO ALLAHABAD | BAREILLY</p>
                </div>
            </div>
            <p className='bottam-p'>Discover Affordable Travel With Our Seamless Intercity Car Rentals in India - Where Excellence Meets
                 Affordability With Standardized Rates In Every City. Unleash Your Journey!</p>
        </div>

                                    {/* 2nd column */}
<div className='col-2'>
  <div className="image-container">
    <img src={BgImg} alt="background-img" />
    <div className="text-overlay">
      <h2>WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR ONE-WAY JOURNEY?</h2>
      <p>Our Oneway Cab Service Is Cheaper Than AC Bus And 2 Tier AC Train Ticket Fares, It Reduces Your Travel Time 
        And You Travel At Your Own Private Space Also To Enjoy Your Journey. Our One Way Taxi Will Come At Your Doorstep
         And Take You To Your Desired Destination. So Book You Oneway Cab From Lucknow To Gorakhpur Or 
         Varanasi To Bareilly.Take You To Your Desired Destination. So Book You Oneway Cab From Lucknow To Gorakhpur Or 
         Varanasi To Bareilly.</p>
         <span className='read'><a href="/">Read More</a></span>
    </div>
  </div>
</div>

</section>
  )
}

export default secondSection