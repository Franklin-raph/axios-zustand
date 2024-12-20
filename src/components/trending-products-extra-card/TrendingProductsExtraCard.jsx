import React from 'react'

const TrendingProductsExtraCard = ({item}) => {
  return (
        <div className='flex items-center gap-5 text-[#151875]'>
            <div className='bg-[#F5F6F8] h-[100px] w-[100px]'>
                <img src={item.image} alt="" />
            </div>
            <div>
                <h2>{item.title}</h2>
                <p className='line-through'>${item.price}</p>
            </div>
        </div>
  )
}

export default TrendingProductsExtraCard