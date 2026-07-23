import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function AboutMission() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
  const { data, error } = await supabase
    .from("website_content")
    .select("about_sent_man")
    .eq("id", 1)
    .single();

  if (error) {
    console.log(error);
    return;
  }

  console.log("ABOUT SENT MAN DATA:", data);

  setContent(data);
}

  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 text-white">

      {/* Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <p className="text-center text-xs uppercase tracking-[0.4em] text-[#d4af37]">
          Our Mandate
        </p>


        <div className="
          mt-10
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
          md:p-10
        ">

          <div className="
            grid
            gap-10
            md:grid-cols-2
          ">


            {/* LEFT */}
            <div className="md:pr-8">

              <h2 className="
                text-3xl
                font-black
                text-white
                md:text-4xl
              ">
                THE SENT NETWORK
              </h2>


              <p className="
                mt-5
                text-sm
                leading-7
                text-white/70
                md:text-base
              ">
                The Sent Network is an interdenominational movement birthed
                with the mandate to equip and groom the end time armies for
                purpose discovery and maximum delivery.
              </p>


              <p className="
                mt-5
                text-sm
                leading-7
                text-white/70
                md:text-base
              ">
                Through gatherings, teachings, and spiritual encounters, we
                raise believers who are prepared to walk in purpose and impact
                their generation for Christ.
              </p>


            </div>



            {/* RIGHT */}
            <div className="
              border-t
              border-white/10
              pt-10

              md:border-t-0
              md:border-l
              md:pl-10
              md:pt-0
            ">


              <h2 className="
                text-3xl
                font-black
                text-[#d4af37]
                md:text-4xl
              ">
                THE SENT MAN
              </h2>


              <p className="
                mt-5
                text-sm
                leading-7
                text-white/70
                md:text-base
              ">
                {content?.about_sent_man}
              </p>


            </div>


          </div>


        </div>

      </div>

    </section>
  );
}

export default AboutMission;