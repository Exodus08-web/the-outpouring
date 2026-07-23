function Experience() {

  const experiences = [
    {
      
      title: "Deep Worship",
      text: "A place of worship, praise and genuine encounters with God.",
    },
    {
      
      title: "Purpose",
      text: "Awakening purpose, direction and kingdom assignment.",
    },
    {
      
      title: "Encounters",
      text: "Prayer, healing, miracles and life-changing moments.",
    },
  ];


  return (

<section
className="
bg-gradient-to-b
from-black
to-[#090613]
px-5
py-12
text-white
"
>


<div className="mx-auto max-w-6xl">


<div className="text-center">


<p
className="
text-[10px]
uppercase
tracking-[0.4em]
text-[#d4af37]
"
>
The Experience
</p>


<h2
className="
mt-3
font-serif
text-3xl
"
>
What To Expect
</h2>


</div>




<div
className="
mt-8
grid
grid-cols-3
gap-3
"
>


{
experiences.map((item)=>(


<div
key={item.title}
className="
rounded-2xl
border
border-[#d4af37]/20
bg-white/[0.04]
p-3
text-center
backdrop-blur-xl
"
>


<div
className="
text-xl
"
>
{item.icon}
</div>


<h3
className="
mt-3
text-xs
font-bold
leading-tight
"
>
{item.title}
</h3>


<p
className="
mt-2
text-[10px]
leading-5
text-white/60
"
>
{item.text}
</p>


</div>


))
}


</div>



</div>


</section>

  );
}


export default Experience;