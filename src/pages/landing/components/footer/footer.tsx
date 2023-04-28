import React from 'react'
import Logo from '../navbar/logo'
import instagramPic from './assets/instagrampic.png';
import linkedinPic from './assets/linkedinpic.png';
import phonePic from './assets/phonepic.png';


const Footer = () => {
  return (
    <>
        <div className='bg-[#080721] px-6 pt-7 pb-20'>
            <Logo />
            <div className='flex flex-wrap lg:flex-nowrap flex-col lg:flex-row gap-2 lg:gap-0 justify-around mt-12'>
                <div className='flex flex-col mb-6 lg:mb-0 gap-1 lg:gap-0'>
                    <a href="#" className='text-white text-base lg:text-lg'>Menu</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Marketplace</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Cart</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Gallery</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>About us</a>
                </div>
                <div className='flex flex-col mb-6 lg:mb-0 gap-1 lg:gap-0'>
                    <a href="#" className='text-white text-base lg:text-lg'>Company</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>About Us</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Why Choose us</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Pricing</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Testimonial</a>
                </div>
                <div className='flex flex-col mb-6 lg:mb-0 gap-1 lg:gap-0'>
                    <a href="#" className='text-white text-base lg:text-lg'>Resources</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Privacy Policy</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Terms and Condition</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Blog</a>
                </div>
                <div className='flex flex-col mb-6 lg:mb-0 gap-1 lg:gap-0'>
                    <a href="#" className='text-white text-base lg:text-lg'>Contacts</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>9C5P+CHM</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Cotonou</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>Artxchangecontact@gmail.com</a>
                    <a href="#" className='text-gray-400 text-base lg:text-lg'>About us</a>
                    <div className='mt-4 flex justify-start'>
                        <a href='#'>
                            <img className='w-6 h-6 mr-5' src={instagramPic} alt="instagram icon" />
                        </a>
                        <a href='#'>
                            <img className='w-6 h-6 mr-5' src={linkedinPic} alt="linkedin icon" />
                        </a>
                        <a href='#'>
                            <img className='w-6 h-6 mr-5' src={phonePic} alt="phone icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer