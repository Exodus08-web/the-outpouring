import { useEffect, useState } from "react";

function Countdown() {

  const eventDate = new Date("July 30, 2026 19:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(eventDate - Date.now());


  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(eventDate - Date.now());
    }, 1000);


    return () => clearInterval(timer);

  }, []);



  const calculateTime = () => {

    const totalSeconds = Math.max(
      Math.floor(timeLeft / 1000),
      0
    );


    return {
      days: Math.floor(totalSeconds / 86400),

      hours: Math.floor(
        (totalSeconds % 86400) / 3600
      ),

      minutes: Math.floor(
        (totalSeconds % 3600) / 60
      ),

      seconds: totalSeconds % 60,
    };

  };


  const {
    days,
    hours,
    minutes,
    seconds
  } = calculateTime();



  const countdown = [
    ["Days", days],
    ["Hours", hours],
    ["Minutes", minutes],
    ["Seconds", seconds],
  ];



  return (

<section
id="countdown"
className="
relative
-mt-10
z-20
rounded-t-[35px]
overflow-hidden
bg-gradient-to-b
from-[#090613]
to-black
px-5
py-14
text-white
"
>


<div
className="
absolute
left-1/2
top-0
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
font-bold
uppercase
tracking-[0.4em]
text-[#d4af37]
"
>
The Outpouring 2026
</p>



<h2
className="
mt-4
font-serif
text-3xl
leading-tight
md:text-5xl
"
>
A Divine Encounter Awaits
</h2>



<p
className="
mt-3
text-sm
text-white/60
"
>
July 30th • 7:00 PM
</p>




<div
className="
mt-8
grid
grid-cols-4
gap-2
"
>


{
countdown.map(([label,value])=>(


<div
key={label}
className="
rounded-2xl
border
border-[#d4af37]/20
bg-white/[0.05]
p-3
backdrop-blur-xl
"
>


<h3
className="
text-2xl
font-black
text-[#f3e098]
md:text-5xl
"
>
{String(value).padStart(2,"0")}
</h3>


<p
className="
mt-1
text-[9px]
uppercase
tracking-widest
text-white/50
"
>
{label}
</p>


</div>


))
}



</div>




<div
className="
mt-8
inline-flex
rounded-full
border
border-[#d4af37]/30
bg-[#d4af37]/10
px-5
py-2
text-xs
font-semibold
text-[#f3e098]
"
>
Prepare Your Heart 
</div>



</div>


</section>

  );
}


export default Countdown;