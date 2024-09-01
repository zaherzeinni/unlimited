import React from 'react'
import Image from 'next/legacy/image'
export default function Loader() {
  return (
    <div className=' h-screen-80 sm:h-screen w-full relative'>
        <Image src='/unlmtdLogoAniamtionV5.gif' alt='preloader' layout='fill' objectFit='fit'     
        className='  !object-center sm:w-full sm:h-full   '  />
    </div>
  )
}
