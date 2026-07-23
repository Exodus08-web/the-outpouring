import { useState } from "react";
import { Link } from "react-router-dom";

function NextSteps() {

  const [activeStep, setActiveStep] = useState(0);


  const cards = [
    {
      icon: "❤️",
      title: "New Convert",
      description:
        "Begin your journey with Christ and grow with a family of believers.",
      link: "/new-convert",
    },

    {
      icon: "🤝",
      title: "Mentorship",
      description:
        "Grow through discipleship, accountability and godly community.",
      link: "/mentorship",
    },

    {
      icon: "🩺",
      title: "Healing & Testimony",
      description:
        "Share your testimony and celebrate what God has done.",
      link: "/healing",
    },
  ];



  function nextCard() {
    setActiveStep(
      (activeStep + 1) % cards.length
    );
  }



  return (

<section
id="next-steps"
className="
relative
overflow-hidden
bg-gradient-to-b
from-[#090613]
to-[#120c26]
px-5
py-14
text-white
"
>


<div
className="
absolute
left-1/2
top-20
h-72
w-72
-translate-x-1/2
rounded-full
bg-[#d4af37]/10
blur-[100px]
"
/>



<div className="
relative
mx-auto
max-w-5xl
text-center
">


<p
className="
text-[10px]
uppercase
tracking-[0.4em]
text-[#d4af37]
"
>
Take Your Next Step
</p>


<h2
className="
mt-3
font-serif
text-3xl
"
>
Your Faith Journey Matters
</h2>


<p
className="
mt-4
text-sm
leading-6
text-white/60
"
>
Wherever you are in your walk with Christ,
there is a place for you.
</p>





<div
className="
relative
mx-auto
mt-10
h-[330px]
max-w-sm
"
>


{
cards.map((card,index)=>{


const position =
(index - activeStep + cards.length)
% cards.length;



return (

<div
key={card.title}

onClick={() => {

if(position !== 0){

setActiveStep(index);

}

}}

className={`
absolute
left-1/2
top-0
w-[85%]
-translate-x-1/2
rounded-[35px]
border
p-7
text-center
backdrop-blur-xl
transition-all
duration-500

${
position === 0

?

`
z-30
scale-100
cursor-pointer
border-[#d4af37]/50
bg-gradient-to-br
from-[#d4af37]/20
to-white/[0.05]
`

:

position === 1

?

`
translate-x-[15%]
z-20
scale-90
opacity-60
border-white/10
bg-white/[0.04]
cursor-pointer
`

:

position === cards.length - 1

?

`
translate-x-[-115%]
z-20
scale-90
opacity-60
border-white/10
bg-white/[0.04]
cursor-pointer
`

:

`
opacity-0
pointer-events-none
`

}

`}
>



<div
className="
text-4xl
"
>
{card.icon}
</div>


<h3
className="
mt-5
font-serif
text-2xl
"
>
{card.title}
</h3>


<p
className="
mt-4
text-sm
leading-6
text-white/70
"
>
{card.description}
</p>



{
position === 0 && (

<Link

to={card.link}

className="
mt-6
inline-flex
rounded-full
bg-[#d4af37]
px-6
py-3
text-xs
font-bold
uppercase
tracking-widest
text-black
"
>

Continue →

</Link>

)

}



</div>


)

})

}


</div>





<div
className="
mt-2
flex
justify-center
gap-2
"
>

{
cards.map((_,index)=>(

<button

key={index}

onClick={() =>
setActiveStep(index)
}

className={`
h-2
rounded-full
transition-all

${
activeStep === index
?
"w-8 bg-[#d4af37]"
:
"w-2 bg-white/30"
}

`}

/>

))

}

</div>




</div>



</section>

  );
}


export default NextSteps;