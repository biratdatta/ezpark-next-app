"use client"

import React from 'react'
//@ts-expect-error{error}
import Slider from 'react-slick'
import Image from "next/image"
import icon from "@/app/icons/6-removebg-preview.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const reviews = [
  {
    text: "“Using this platform has been a game-changer for me. It’s so intuitive and efficient—I’ve saved so much time and effort. Highly recommended!”",
    name: "Rahul Yadav",
    role: "Student",
    image: icon,
  },
  {
    text: "“As a developer, I appreciate the seamless functionality and advanced features. It’s exactly what I needed to streamline my work and stay organized.”",
    name: "Pooja Sharma",
    role: "Developer",
    image: icon,
  },
  {
    text: "“This platform offers a perfect blend of creativity and usability. It’s been a valuable tool in enhancing my productivity and delivering better designs.”",
    name: "Ankit Singh",
    role: "Designer",
    image: icon,
  },
];


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-40deg] bg-white shadow-xl shadow-indigo-600/10  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
 
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>{review.text}</p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                    alt=""
                    src={review.image}
                    className="mx-auto h-10 w-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">{review.role}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
