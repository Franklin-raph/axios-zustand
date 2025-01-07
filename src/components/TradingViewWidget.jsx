"use client"

import BtnLoader from '../../components/btnLoader/BtnLoader';
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Pathway = () => {

    const { id } = useParams()

    const [coinsData, setCoinsData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    async function getCoinsData(){
        setLoading(true)
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`)
        console.log(res, res.data);
        setCoinsData(prev => [...prev, ...res.data])
        setLoading(false)
    }

    useEffect(() => {
        getCoinsData()
    },[page])

    function handleScroll(){
        setLoading(true)
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <div className="w-[82.5%] px-8 py-6 mx-auto relative top-[8.5rem] left-1/2 transform -translate-x-1/2">
        {
            <div className='flex items-center justify-between'>
                <p className='teext-[#131314] text-[24px] font-[700] capitalize'>{id} Pathway</p>
                <p className='bg-[#131314] text-white px-5 py-1 rounded-[4px] text-[14px]'> <span className='text-[22px] mr-3'>+</span> Add Course</p>
            </div>
        }
        <div className='my-10'>
            <p className='text-[#131314] text-[18px] font-[600] mb-3'>Courses</p>
            <div className='grid grid-cols-4 gap-4'>
                {
                    coinsData && coinsData.map((coin, index) => (
                        <div key={index} className='flex flex-col items-center gap-4 text-center mb-1 bg-gray-200 rounded-[5px] py-4'>
                            <img src={coin.image} alt={coin.name} className='w-[40px] h-[40px]' />
                            <div className='text-[#131314]'>
                                <p>{coin.name}</p>
                                <p className='font-[600] mt-1'>${coin.current_price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                loading &&
                <div className='flex justify-center items-center mx-auto w-[200px] h-[200px]'>
                    <BtnLoader />
                </div>
            }
        </div>
        
    </div>
  )
}

export default Pathway