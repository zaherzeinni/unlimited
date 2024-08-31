import React from 'react'
import Image from 'next/legacy/image'
export default function Loader() {
  return (
    <div className='h-screen1 h-screen-80 w-full relative'>
        <Image src='/unlmtdLogoAniamtionV5.gif' alt='preloader' layout='fill' objectFit='fit'     
        className='  !object-center sm:w-full sm:h-full   '  />
    </div>
  )
}
