import { useEffect, useState } from 'react'
import { HeroData, FeaturedProducts, LatestProductTabHeaders, LatestProducts, Offers, TrendingProducts, TrendingExtraProducts } from '../../data/MockData'
import { SlideRight } from '../../utils/animation'
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import FeaturedCard from '../../components/featured-card/FeaturedCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import LatestProductCard from '../../components/latest-product-card/LatestProductCard'
import OfferCard from '../../components/offer-card/OfferCard'
import TrendingProductsCard from '../../components/trending-products-card/TrendingProductsCard'
import { Link } from 'react-router-dom'
import TrendingProductsExtraCard from '../../components/trending-products-extra-card/TrendingProductsExtraCard'


const Home = () => {

    const [activeData, setActiveData] = useState(HeroData[0])
    const [currentIndex, setCurrentIndex] = useState(0);

    const [activeTab, setActiveTab] = useState(LatestProductTabHeaders[0])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndev) => (prevIndev + 1) % HeroData.length);
        }, 3000);
        return () => clearInterval(interval);
    },[currentIndex])

    useEffect(() => {
        setActiveData(HeroData[currentIndex])
    },[currentIndex])

    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return(
          <div onClick={onClick} >
            <IoIosArrowForward class="custom-arrow-next" style={{color:"black"}}/>
          </div>
        )
    }
      
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return(
          <div onClick={onClick} >
            <MdOutlineArrowBackIos class="custom-arrow-prev" style={{color:"black"}}/>
          </div>
        )
      }

    let settings = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>

        <div className='bg-[#F2F0FF] relative'>
            <img src="/images/lamp.svg" className='absolute top-[-85px] left-[-60px] hidden xl:block' alt="" />
            <section className='flex md:justify-between items-center flex-col md:flex-row h-screen md:h-[650px] relative max-w-[1600px] mx-auto px-[4rem] gap-5'>
                <div className='py-14 md:pb-0 md:pt-[6rem] lg:w-[45%] md:w-[70%] w-[98%]'>
                    <div className='text-center md:text-left'>
                        <AnimatePresence mode='wait'>
                            <motion.p
                                className='text-[#FB2E86] text-sm lg:text-[16px] capitalize'
                                key={activeData.id}
                                variants={SlideRight(0.2)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                transition={{ ease: easeInOut, duration: 0.5 }}
                            >
                                {activeData.subtitle}
                            </motion.p>
                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                            <motion.h1
                                className='text-3xl lg:text-4xl xl:text-5xl font-bold xl:leading-[65px] my-3 capitalize'
                                key={activeData.id}
                                variants={SlideRight(0.4)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                transition={{ ease: easeInOut, duration: 0.5 }}
                            >
                                {activeData.title}
                            </motion.h1>
                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                            <motion.p
                                className='text-[#8A8FB9] text-sm lg:text-[16px]'
                                key={activeData.id}
                                variants={SlideRight(0.6)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                transition={{ ease: easeInOut, duration: 0.5 }}
                            >
                                {activeData.description}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
                <div className='relative'>
                    <AnimatePresence>
                        <motion.img
                            src={activeData.image} alt="" className='lg:w-[500px] md:w-[300px] w-[400px] relative z-10'
                            key={activeData.id}
                            variants={SlideRight(0.4)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        />
                    </AnimatePresence>
                    <p className='text-[300px] absolute top-0 left-1/2 -translate-x-1/2  -translate-y-1/2 text-white/20 font-extrabold'>{activeData.modal}</p>
                </div>
            </section>
        </div>
        <section className='mt-[7rem] max-w-[1200px] mx-auto px-10 md:px-0'>
            <h1 className='text-center text-[#1A0B5B] font-bold text-[40px]'>Featured Products</h1>
            <div className='mt-[2rem] flex items-center justify-center'>
            <Swiper
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                    loop={true}
                    speed={3000}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={{nextEl: ".next-button", prevEl:".prev-button"}}
                    pagination={false}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                {
                    FeaturedProducts.map(card => {
                            return(
                                <SwiperSlide key={card.id}>
                                    <FeaturedCard card={card}/>
                                </SwiperSlide>
                            )
                    })
                }
            </Swiper>
            </div>
        </section>

        <section className='mt-[7rem] max-w-[1200px] mx-auto px-10 md:px-0'>
            <h1 className='text-center text-[#1A0B5B] font-bold text-[40px]'>Latest Products</h1>
            <div className='flex items-center justify-center mt-4 text-[#151875] gap-10'>
                {
                    LatestProductTabHeaders.map(header => {
                        return(
                            <p className={activeTab === header ? 'text-[#FB2E86] underline cursor-pointer' : 'cursor-pointer'} onClick={() => setActiveTab(header)}>{header}</p>
                        )
                    })
                }
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                {
                    LatestProducts.filter(product => activeTab === "All" || product.category === activeTab).map(product => {
                        return(
                            <LatestProductCard product={product}/>
                        )
                    })
                }
            </div>
        </section>

        <section className='mt-[7rem] max-w-[1200px] mx-auto px-10 md:px-0'>
            <h1 className='text-center text-[#1A0B5B] font-bold text-[40px]'>What Shopex Offer!</h1>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-[2rem]'>
                {
                    Offers.map(offer => {
                        return (
                            <OfferCard offer={offer}/>
                        )
                    })
                }
            </div>
        </section>

        <section className='bg-[#F1F0FF] mt-[7rem]'>
            <div className='max-w-[1200px] mx-auto px-10 md:px-0 flex items-center justify-center'>
                <img src="/images/cushion.png" alt="" className='w-[400px]'/>
                <div className='w-[450px]'>
                    <h1 className='text-[#151875] text-[28px]'>Unique Features Of leatest & Trending Poducts</h1>
                    <ul className='text-[#ACABC3] text-[14px] my-7'>
                        <li className='flex items-center gap-2'> <span className='bg-[#F52B70] p-1 rounded-full'></span> All frames constructed with hardwood solids and laminates</li>
                        <li className='flex items-center gap-2 my-2'> <span className='bg-[#2B2BF5] p-1 rounded-full'></span> Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
                        <li className='flex items-center gap-2'> <span className='bg-[#2BF5CC] p-1 rounded-full'></span> Arms, backs and seats are structurally reinforced</li>
                    </ul>
                    <div className='flex items-center gap-3'>
                        <button className='bg-[#FB2E86] text-white py-[9px] px-8 rounded-[2px]'>Add To Cart</button>
                        <div className='text-[#151875] text-[14px]'>
                            <p>B&B Italian Sofa</p>
                            <p className='font-[300]'>$32.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='mt-[7rem] max-w-[1200px] mx-auto px-10 md:px-0'>
            <h1 className='text-center text-[#1A0B5B] font-bold text-[40px]'>Trending Products</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    TrendingProducts.map(card => {
                        return(
                            <TrendingProductsCard card={card}/>
                        )
                    })
                }
            </div>
            <div className='grid grid-cols-3 mt-6 gap-[4rem]'>
                <div className='bg-[#FFF6FB] w-[400px] p-5'>
                    <div>
                        <h3 className='text-[#151875] text-[22px]'>23% off in all products</h3>
                        <Link to="#" className='underline text-[#FB2E86]'>Shop Now</Link>
                    </div>
                    <img src="/images/clock.png" alt="" />
                </div>
                <div className='bg-[#EEEFFB] w-[400px] p-5'>
                    <div>
                        <h3 className='text-[#151875] text-[22px]'>23% off in all products</h3>
                        <Link to="#" className='underline text-[#FB2E86]'>View Collection</Link>
                    </div>
                    <img src="/images/clock.png" alt="" />
                </div>
                <div className='grid gap-4'>
                    {
                        TrendingExtraProducts.map(item => {
                            return (
                                <TrendingProductsExtraCard item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home