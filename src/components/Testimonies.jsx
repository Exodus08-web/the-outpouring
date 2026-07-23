import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


function Testimonies() {

  const [testimonies, setTestimonies] = useState([]);


  useEffect(() => {

    async function fetchTestimonies(){

      const { data, error } = await supabase
        .from("testimonies")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });


      if(error){
        console.log(error);
        return;
      }


      setTestimonies(data || []);

    }


    fetchTestimonies();

  }, []);



  return (
    <section
      id="testimonies"
      className="bg-gradient-to-b from-[#140b2f] via-[#0e0722] to-[#090613] py-24 font-sans antialiased text-slate-100"
    >

      <div className="mx-auto max-w-7xl px-5">

        <p className="text-center text-xs font-bold uppercase tracking-[0.4em] text-[#e5c158] opacity-90">
          — Testimonies —
        </p>


        <h2 className="mt-4 text-center font-serif text-4xl font-normal tracking-tight text-white md:text-5xl lg:text-6xl">
          Lives Are Being{" "}
          <span className="italic font-light text-[#f3e098]">
            Transformed
          </span>
        </h2>


        <p className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg leading-relaxed font-light text-slate-300/80">
          Every testimony is a reminder that Jesus Christ is still saving,
          healing, restoring, delivering, and changing lives.
        </p>



        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1.1}
          breakpoints={{
            768:{slidesPerView:1.35},
            1024:{slidesPerView:1.6},
          }}
          autoplay={{
            delay:5000,
            disableOnInteraction:false,
          }}
          pagination={{
            clickable:true,
          }}
          loop={testimonies.length > 2}
          watchOverflow={true}
          className="mt-16 pb-16"
        >


        {testimonies.map((item)=>(

          <SwiperSlide key={item.id} className="h-auto">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg h-[620px] overflow-y-auto">


              <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-[#e5c158]">
                {item.title}
              </h3>


              <p className="mt-6 whitespace-pre-line text-sm md:text-base leading-relaxed text-slate-200/85">
                {item.testimony}
              </p>



              {item.name && (

                <div className="mt-8 border-t border-white/10 pt-6">

                  <p className="font-serif italic text-base text-[#f3e098]">
                    — {item.name}
                  </p>

                </div>

              )}


            </div>

          </SwiperSlide>

        ))}


        </Swiper>


      </div>

    </section>
  );
}


export default Testimonies;