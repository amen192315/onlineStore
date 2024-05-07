import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import './Slider.scss'

const Slider = ({slideData}) => {
    const [activeThumb, setActiveThumb] = useState()
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div className="flexInModal">
        <div>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null}}
                className='product-image-slider'
            >
                {
                    slideData.map((slide) => {
                        return(
                            <SwiperSlide key={slide}>
                                <img src={slide.img} alt={slide.title}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Swiper     
                loop={true}
                onSwiper={setActiveThumb}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className='product-image-slider-slider-thumbs'
            >
                {
                    slideData.map((slide) => {
                        return(
                            <SwiperSlide key={slide}>
                                <div className="product-image-slider-slider-thumbs-wrapper">
                                    <img src={slide.img} alt={slide.title}/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
        <div>
            <div className='modalTitle'>
                <div className='articleInModal'>
                    <p>Артикул: 879876</p>
                    <p>В наличии: <span>13 шт</span></p>
                </div>
                <h1>
                    Женские кроссовки Puma Force 1 Shadow
                </h1>
            </div>
         <div className='starRating'>{[...Array(5)].map((star,index) => {
            const currentlyRating = index + 1
            return(
                <label>
                    <input
                         type='radio'
                         name='rating'
                         value={currentlyRating}
                         onClick={() => setRating(currentlyRating)}
                    />
                    <FaStar 
                        size={24} 
                        className='star'
                        color={currentlyRating <= (hover || rating) ? "#F14F4F" : "#e4e5e9"}
                        onMouseEnter={() => setHover(currentlyRating)}
                        onMouseLeave={() => setHover(null)}
                        />
                </label>
            ) 
        })}</div>

            <div className='modalSize'>
                <p>Выберите размер</p>
                <div className='btnFlex'>
                    <button>36</button>
                    <button>37</button>
                    <button>38</button>
                    <button>39</button>
                    <button>40</button>
                </div>
                <div className='modalPrice'>
                    <h2>19 789 ₽</h2>
                    <p>20 578 ₽</p>
                </div>
                <div className="modalBtn">
                    <button>Заказать</button>
                </div>
                <div className="flexOnThreeCheck">
                    <div className="flexOnCheck">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B2B5BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        <p>Бесплатная доставка до двери</p>
                    </div>
                    <div className="flexOnCheck">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B2B5BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        <p>Бесплатная доставка до двери</p>
                    </div>
                    <div className="flexOnCheck">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B2B5BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        <p>Бесплатная доставка до двери</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default Slider
