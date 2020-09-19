import { Carousel } from './Carousel'
import Slider from 'react-slick'
import React, { Component } from 'react'
import Link from 'next/link'

export function CarouselItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    sliderToScroll: 3,
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="pt-20 mb-20">
        <h1 className="text-5xl font-semibold ">
          O MELHOR EQUIPAMENTO PARA GINÁSTICA
        </h1>
      </div>

      <div className="container w-screen mx-auto ">
        <Slider {...settings}>
          <div>
            <Carousel
              imgSrc="bola.png"
              desc="BOLA MEDICINAL DE 8 KG"
              price="$59,00"
            />
          </div>
          <div>
            <Carousel
              imgSrc="alteres.png"
              desc="HALTERES AJUSTAVEIS COM PLACAS DURAVEIS"
              price="$89,00"
            />
          </div>
          <div>
            <Carousel
              imgSrc="alteres2.png"
              desc="HALTERES AJUSTAVEIS DE 2 KG"
              price="$99,00"
            />
          </div>
          <div>
            <Carousel
              imgSrc="bola.png"
              desc="BOLA MEDICINAL DE 8 KG"
              price="$59,00"
            />
          </div>
          <div>
            <Carousel
              imgSrc="bola.png"
              desc="BOLA MEDICINAL DE 8 KG"
              price="$59,00"
            />
          </div>

          <div>
            <Carousel
              imgSrc="bola.png"
              desc="BOLA MEDICINAL DE 8 KG"
              price="$59,00"
            />
          </div>
          <div>
            <Carousel
              imgSrc="bola.png"
              desc="BOLA MEDICINAL DE 8 KG"
              price="$59,00"
            />
          </div>
          <div>
            <Carousel
              imgSrc="bola.png"
              desc="BOLA MEDICINAL DE 8 KG"
              price="$59,00"
            />
          </div>
          <div>
            <Carousel
              imgSrc="bola.png"
              desc="BOLA MEDICINAL DE 8 KG"
              price="$59,00"
            />
          </div>
          <div>
            <Carousel
              imgSrc="bola.png"
              desc="BOLA MEDICINAL DE 8 KG"
              price="$59,00"
            />
          </div>
        </Slider>
      </div>
      <div className="pt-20 pb-20">
        <Link href="shop">
          <a>
            <button className="border-b-2 ">MAIS</button>
          </a>
        </Link>
      </div>
    </div>
  )
}
