import React, { useState } from "react";

function AboutOutpouring() {
    const [activeCard, setActiveCard] = useState(0);
    const experiences = [
  {
    title: "🔥 Power Manifestation",
    text: "Showcasing God's power through prophetic ministry, healings, deliverance and miracles.",
  },
  {
    title: "🙌 Deep Fellowship",
    text: "Worship, teachings and prophetic sounds that draw believers deeper into Christ.",
  },
  {
    title: "🛡 Raising An Army",
    text: "Raising a pure-hearted generation equipped to carry God's presence from schools to nations.",
  },
];
  const movementSteps = [
    "Schools to Schools",
    "Campuses to Campuses",
    "State to State",
    "City to City",
    "Nations to Nations",
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#090613] via-[#120c26] to-[#1b1236] px-5 py-16 text-white">

      {/* Glow */}
      <div className="
        absolute
        left-1/2
        top-1/3
        -z-10
        h-[300px]
        w-[300px]
        -translate-x-1/2
        rounded-full
        bg-[#d4af37]/10
        blur-[100px]
      " />


      <div className="mx-auto max-w-6xl">


        {/* HEADER */}

        <div className="text-center">


          <span className="
            inline-flex
            rounded-full
            border
            border-[#d4af37]/30
            bg-[#d4af37]/10
            px-4
            py-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-[#e5c158]
          ">
            The Outpouring
          </span>


          <h2 className="
            mt-6
            font-serif
            text-3xl
            font-normal
            leading-tight
            md:text-5xl
          ">
            What is
            <br />
            <span className="italic text-[#f3e098]">
              The Outpouring?
            </span>
          </h2>
        </div>
        {/* MANDATE CARD */}

        <div className="
          mt-10
          rounded-3xl
          border
          border-[#d4af37]/20
          bg-white/[0.05]
          p-6
          backdrop-blur-xl
        ">


          <div className="
            mb-5
            inline-flex
            rounded-full
            bg-[#d4af37]
            px-3
            py-1
            text-[9px]
            font-black
            uppercase
            tracking-widest
            text-black
          ">
            Divine Mandate
          </div>


          <p className="
            font-serif
            text-lg
            leading-8
            text-white/90
            md:text-2xl
          ">

            The Outpouring is a move of God given to{" "}

            <span className="text-[#e5c158]">
              The Sent Man
            </span>

            {" "}
            to set young people on fire, restore lost hunger , deliver the opressed ,heal the sick and raise a puritant army in every mountain of influence.

          </p>


          <div className="
            mt-5
            border-t
            border-white/10
            pt-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-white/40
          ">
            Revival • Restoration • Purpose
          </div>


        </div>





        {/* EXPERIENCE CARDS */}

        <div className="mt-16">


          <p className="
            text-center
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
            text-[#e5c158]
          ">
            The Experience
          </p>



          <div className="
            relative
            mx-auto
            mt-10
            h-[300px]
            max-w-sm
          ">

<div className="relative mx-auto mt-10 h-[350px] max-w-sm">

{
experiences.map((item,index)=>{

const position =
(index - activeCard + experiences.length) % experiences.length;


return (

<div
key={item.title}
onClick={() =>
  position === 0 &&
  setActiveCard((activeCard + 1) % experiences.length)
}
className={`
absolute
left-0
w-full
cursor-pointer
rounded-3xl
border
p-7
backdrop-blur-xl
transition-all
duration-500

${
position === 0
?
"top-16 z-30 scale-100 cursor-pointer border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/20 to-white/[0.05]"
:
position === 1
?
"pointer-events-none top-8 left-2 z-20 scale-95 rotate-3 border-white/10 bg-white/[0.07]"
:
"pointer-events-none top-0 left-4 z-10 scale-90 rotate-[-5deg] border-white/10 bg-white/[0.04]"
}
`}
>

<h3 className="font-serif text-2xl">
{item.title}
</h3>


<p className="
mt-4
text-sm
leading-7
text-white/70
">
{item.text}
</p>


</div>

)

})
}

</div>

          </div>


        </div>





        {/* GLOBAL EXPANSION */}


        {/* GLOBAL EXPANSION */}

<div className="
mt-4
rounded-3xl
border
border-[#d4af37]/20
bg-gradient-to-br
from-[#d4af37]/10
via-white/[0.03]
to-transparent
p-5
text-center
backdrop-blur-xl
">

<p className="
text-[9px]
font-bold
uppercase
tracking-[0.35em]
text-[#e5c158]
">
The Movement
</p>


<h3 className="
mt-3
font-serif
text-xl
font-medium
">
From Campus To Nations
</h3>


<div className="
mt-5
flex
flex-wrap
justify-center
gap-2
">

{movementSteps.map((step)=>(

<span
key={step}
className="
rounded-full
border
border-[#d4af37]/30
bg-[#d4af37]/10
px-3
py-1.5
text-[10px]
font-medium
text-[#f3e098]
"
>
{step}
</span>

))}

</div>


<p className="
mt-5
text-xs
leading-6
text-white/60
">
A call for revival, transformation, and raising young
            believers who will boldly represent Christ in every
            sphere of influence.
</p>

        </div>



      </div>


    </section>
  );
}

export default AboutOutpouring;