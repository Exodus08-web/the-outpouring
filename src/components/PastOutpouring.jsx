import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = import.meta.glob(
  "../assets/images/past-events/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const gallery = Object.values(images);

function PastOutpouring() {
  return (
    <section className="overflow-hidden bg-black py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm uppercase tracking-[0.45em] text-red-500">
          OUR JOURNEY
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Past Outpouring Moments
        </h2>

        <p className="mt-6 max-w-2xl text-gray-300">
          Every gathering has left lives transformed.
          Swipe through unforgettable moments from previous
          Outpouring meetings.
        </p>

      </div>

      <Swiper
        modules={[Autoplay]}
        className="mt-16"
        loop={true}
        centeredSlides={true}
        speed={1200}
        spaceBetween={24}
        grabCursor={true}
        allowTouchMove={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3.5,
          },
        }}
      >

        {gallery.map((image, index) => (

          <SwiperSlide key={index}>

            <div
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-red-900/30
                bg-zinc-900
              "
            >

              <img
                src={image}
                alt={`Outpouring ${index + 1}`}
                className="
                  h-[520px]
                  w-full
                  object-cover
                  duration-700
                  group-hover:scale-110
                "
              />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      <style>{`

        .swiper{
          overflow:visible;
        }

        .swiper-slide{
          transition:all .45s ease;
          opacity:.45;
          transform:scale(.84);
        }

        .swiper-slide-active{
          opacity:1;
          transform:scale(1);
          z-index:10;
        }

        .swiper-slide-prev,
        .swiper-slide-next{
          opacity:.75;
          transform:scale(.92);
        }

        .swiper-slide img{
          border-radius:30px;
          transition:.7s;
        }

        .swiper-slide-active img{
          box-shadow:
            0 20px 70px rgba(180,20,20,.35),
            0 0 35px rgba(255,180,0,.15);
        }

      `}</style>

    </section>
  );
}

export default PastOutpouring;