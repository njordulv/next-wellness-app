'use client'

import React, { Component } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { IoStarSharp } from 'react-icons/io5'
import { SiTrustpilot } from 'react-icons/si'
import { testimonials } from '@Data/testimonials'
import './css/slick.scss'
import './css/slick-theme.scss'

export default class TestimonialSlider extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '50px',
      slidesToShow: 1,
      speed: 700,
      autoplay: true,
      pauseOnHover: false,
      nav: true,
      dots: true,
      arrows: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            centerPadding: '30px',
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '20px',
          },
        },
      ],
    }

    const stars = Array(5).fill()

    return (
      <>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className="slide-item" key={testimonial.id}>
              <div className="slide-inner">
                <div className="relative flex flex-col items-center gap-3 sm:flex-row">
                  <Image
                    src={testimonial.image}
                    width={50}
                    height={50}
                    sizes="50x50"
                    alt="testimonial-image"
                    priority={false}
                  />
                  <span className="relative flex items-center right-0 top-0 gap-1 sm:absolute">
                    <SiTrustpilot className="text-[17px] text-customGreen" />
                    Trustpilot
                  </span>
                  <div className="flex flex-col items-center gap-2 sm:items-start">
                    <h4>{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {stars.map((_, index) => (
                        <IoStarSharp key={index} className="text-orange" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-[16px]">{testimonial.message}</div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    )
  }
}
