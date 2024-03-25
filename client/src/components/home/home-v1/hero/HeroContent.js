"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Slider from "react-slick";

const HeroContent = () => {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    useTransform: false,
    pauseOnHover: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    useTransform: false,
    pauseOnHover: false,
    rtl: "bootom",
  };

  return (
    <div className="advance-search-tab mt70 mt30-md animate-up-3">
      <div className="row ">
        <div
          className="col-lg-6"
          style={{
            textAlign: "left",
          }}
        >
          <h3
            className="text-white "
            style={{
              marginTop: "100px",
            }}
          >
            Earn up to 10% per year by claiming your piece of property.
          </h3>
          <button>Buy Now</button>
        </div>
        <div className="col-lg-6">
          <div className="slider-container">
            <div className="d-flex">
              <div>
                <Slider {...settings}>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src="/images/home/slideImg1.png"
                      alt="Pic"
                    />
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src="/images/home/slideImg2.png"
                      alt="Pic"
                    />
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src="/images/home/slideImg3.png"
                      alt="Pic"
                    />
                  </div>
                </Slider>
              </div>
              <div className="mt-5">
                <Slider {...settings2}>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src="/images/home/slideImg1.png"
                      alt="Pic"
                    />
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src="/images/home/slideImg2.png"
                      alt="Pic"
                    />
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src="/images/home/slideImg3.png"
                      alt="Pic"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
