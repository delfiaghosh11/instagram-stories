import { useEffect } from "react";
import gsap from "gsap";
import { Swiper } from "swiper";

import "./story.css";

const Story = () => {
  const slider = new Swiper(".story__slider", {
    speed: 1,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: ".story__next",
      prevEl: ".story__prev",
    },
    pagination: {
      el: ".story__pagination",
      renderBullet:  (index:number , className:string) => {
        return (
          '<div class="' +
          className +
          '"> <div class="swiper-pagination-progress"></div> </div>'
        );
      },
    },
    on: {
      autoplayTimeLeft(swiper: any, time: number, progress: number) {
        let currentSlide = document.querySelectorAll(
          ".story__slider .swiper-slide"
        )[swiper.activeIndex];
        let currentBullet = document.querySelectorAll(
          ".story__slider .swiper-pagination-progress"
        )[swiper.realIndex];

        let fullTime;
        if (currentSlide instanceof HTMLElement) {
          fullTime = currentSlide.dataset.swiperAutoplay
            ? parseInt(currentSlide.dataset.swiperAutoplay)
            : ((swiper?.params?.autoplay) as any).delay;
        }

        let percentage =
          Math.min(
            Math.max(
              parseFloat(((((fullTime || 0) - time) * 100) / (fullTime || 0)).toFixed(1)),
              0
            ),
            100
          ) + "%";

        gsap.set(currentBullet, { width: percentage });
      },
      transitionEnd(swiper: any) {
        let allBullets = Array.from(
          document.querySelectorAll(
            ".story__slider .swiper-pagination-progress"
          )
        );
        let bulletsBefore = allBullets.slice(0, swiper.realIndex);
        let bulletsAfter = allBullets.slice(
          swiper.realIndex,
          allBullets.length
        );
        if (bulletsBefore.length) {
          gsap.set(bulletsBefore, { width: "100%" });
        }
        if (bulletsAfter.length) {
          gsap.set(bulletsAfter, { width: "0%" });
        }

        let activeSlide = document.querySelectorAll(
          ".story__slider .swiper-slide"
        )[swiper.realIndex];

        const video = activeSlide.querySelector("video");
        if (video) {
          video.currentTime = 0;
        }
      },
    },
  });

  useEffect(() => {
    slider.init()
  });

  return (
    <div className="story">
      <div className="story__slider swiper">
        <div className="story__wrapper swiper-wrapper">
          <div className="story__slide swiper-slide">
            <img src="https://picsum.photos/450/800" />
          </div>
          <div className="story__slide swiper-slide">
            <img src="https://picsum.photos/450/810" />
          </div>
        </div>

        <div className="story__prev swiper-button-prev"></div>
        <div className="story__next swiper-button-next"></div>

        <div className="story__pagination swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Story;
