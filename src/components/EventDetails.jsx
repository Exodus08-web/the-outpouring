function EventDetails() {
  return (
    <section className="bg-black px-5 py-12 text-white">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p className="
          text-[10px]
          uppercase
          tracking-[0.4em]
          text-[#d4af37]
          ">
            Gather With Us
          </p>

          <h2 className="
          mt-3
          font-serif
          text-3xl
          ">
            Event Details
          </h2>

        </div>
<div className="relative mt-8 mx-auto max-w-sm h-[330px]">


{/* BACK CARD */}

<div
className="
absolute
top-0
left-6
right-6
rounded-[30px]
border
border-white/10
bg-white/[0.04]
p-6
h-[220px]
rotate-3
opacity-60
"
>

<div className="text-center">

<p className="
text-[10px]
uppercase
tracking-widest
text-white/40
">
Upcoming Event
</p>

<div className="mt-4 text-3xl">
🔒
</div>


<h3 className="
mt-3
font-serif
text-2xl
">
The Outpouring 2027
</h3>


<p className="
mt-2
text-sm
text-white/50
">
Coming Soon
</p>

</div>

</div>





{/* FRONT CARD */}

<div
className="
absolute
bottom-0
left-0
right-0
rounded-[30px]
border
border-[#d4af37]/30
bg-gradient-to-br
from-[#d4af37]/20
to-white/[0.05]
p-6
backdrop-blur-xl
z-10
"
>


<h3
className="
font-serif
text-2xl
text-[#f3e098]
"
>
The Outpouring 2026
</h3>



<div
className="
mt-6
grid
grid-cols-3
gap-3
text-center
"
>

<div className="rounded-2xl bg-white/5 p-3">
<p className="mt-2 text-xs">
July 30th
</p>
</div>


<div className="rounded-2xl bg-white/5 p-3">
<p className="mt-2 text-xs">
7:00 PM
</p>
</div>


<div className="rounded-2xl bg-white/5 p-3">
<p className="mt-2 text-xs">
Chapel Hall
<br/>
UI
</p>
</div>


</div>



<p className="
mt-5
text-center
text-xs
text-white/50
">
University of Ibadan, Ibadan Nigeria
</p>



</div>


</div>


      </div>


    </section>
  );
}


export default EventDetails;