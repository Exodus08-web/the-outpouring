import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function PartnerSection() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    const { data, error } = await supabase
      .from("website_content")
.select("partnership_text")
.eq("id", 1)
.single()

    if (error) {
      console.log(error);
      return;
    }

    setContent(data);
  }


  return (
    <section
    id="partnership"
      className="
      bg-gradient-to-b
      from-[#090613]
      to-black
      px-4
      py-12
      text-white
      "
    >

      <div className="mx-auto max-w-5xl">


        {/* HEADER */}

        <div className="text-center">

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-[#d4af37]
            "
          >
            Giving & Partnership
          </p>


          <h2
            className="
            mt-3
            font-serif
            text-2xl
            md:text-4xl
            "
          >
            Support The Vision
          </h2>


          <p
            className="
            mx-auto
            mt-3
            max-w-md
            text-xs
            leading-5
            text-white/60
            "
          >
            Together, we can spread the gospel, raise believers and impact
            lives for Christ.
          </p>


        </div>




        {/* CARDS */}

        <div
          className="
          mt-8
          grid
          grid-cols-2
          gap-3
          "
        >




          {/* GIVING CARD */}


          <div
            className="
            rounded-3xl
            border
            border-[#d4af37]/30
            bg-[#d4af37]/10
            p-4
            "
          >

            <p
              className="
              text-[9px]
              uppercase
              tracking-widest
              text-[#e5c158]
              "
            >
              Giving
            </p>


            <h3
              className="
              mt-3
              font-serif
              text-lg
              "
            >
              Sow A Seed
            </h3>



            <p
              className="
              mt-3
              text-[11px]
              leading-5
              text-white/70
              "
            >
              "God loves a cheerful giver."
              <br />

              <span className="text-white/40">
                2 Corinthians 9:7
              </span>
            </p>



            <div
              className="
              mt-4
              rounded-2xl
              bg-black/30
              p-3
              "
            >

              <p
                className="
                text-[9px]
                text-white/40
                "
              >
                Account Details
              </p>


              <p
                className="
                mt-2
                text-[11px]
                font-bold
                text-[#f3e098]
                "
              >
                Bank: Moniepoint MFB
              </p>


              <p
                className="
                mt-1
                text-[11px]
                font-bold
                text-[#f3e098]
                "
              >
                Acc: 9047790963 
              </p>


              <p
                className="
                mt-1
                text-[10px]
                text-white/50
                "
              >
                The Sent Network owned by Emmanuel Adio 
              </p>


            </div>


          </div>






          {/* PARTNERSHIP CARD */}


          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.05]
            p-4
            "
          >


            <p
              className="
              text-[9px]
              uppercase
              tracking-widest
              text-[#d4af37]
              "
            >
              Partnership
            </p>



            <h3
              className="
              mt-3
              font-serif
              text-lg
              "
            >
              Join The Vision
            </h3>




            <p
              className="
              mt-3
              text-[11px]
              leading-5
              text-white/70
              "
            >

              {content?.partnership_text ||
              "Stand with us as we take the message of Christ across nations."}

            </p>




            <a
              href="https://wa.me/2349047790963?text=Hello%20I%20would%20like%20to%20partner%20with%20The%20Sent%20Network"
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-5
              inline-flex
              rounded-full
              bg-[#d4af37]
              px-4
              py-2
              text-[10px]
              font-bold
              text-black
              "
            >
              WhatsApp →
            </a>


          </div>



        </div>


      </div>


    </section>
  );
}

export default PartnerSection;