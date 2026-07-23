import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Healing() {

const [form,setForm]=useState({
name:"",
title:"",
testimony:"",
});

const [loading,setLoading]=useState(false);

const [success,setSuccess]=useState(false);
async function submitTestimony(){

if(
!form.name ||
!form.title ||
!form.testimony
){

alert("Please complete all fields.");

return;

}

setLoading(true);

const { error } = await supabase

.from("testimonies")

.insert({

name:form.name,

title:form.title,

testimony:form.testimony,

approved:false,

});

setLoading(false);

if(error){

alert(error.message);

return;

}

setSuccess(true);

setForm({

name:"",
title:"",
testimony:"",

});

setTimeout(()=>{

setSuccess(false);

},5000);

}

return(

<section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#090613] via-[#120c26] to-[#090613] text-white">

{/* GOLD GLOW */}

<div className="
absolute
left-1/2
top-24
-h-translate-x-1/2
h-[300px]
w-[300px]
-translate-x-1/2
rounded-full
bg-[#d4af37]/10
blur-[120px]
"/>

<div className="relative z-10 mx-auto max-w-md px-5 py-12">

{/* BACK */}

<Link
to="/"
className="
inline-flex
items-center
gap-2
rounded-full
border
border-white/10
bg-white/5
px-4
py-2
text-sm
transition
hover:border-[#d4af37]/40
"
>
← Back Home
</Link>

{/* HERO */}

<div className="mt-12 text-center">

<p className="
text-[11px]
font-bold
uppercase
tracking-[0.35em]
text-[#d4af37]
">
Healing & Testimonies
</p>

<h1 className="
mt-5
font-serif
text-4xl
leading-tight
">
Every Testimony
<br/>

<span className="italic text-[#f3e098]">
Gives Glory To Jesus
</span>

</h1>

<p className="
mt-7
text-sm
leading-7
text-white/70
">

"And they overcame him by the blood of the Lamb and by the word of their testimony."

</p>

<p className="
mt-2
text-[#d4af37]
text-sm
font-semibold
">

Revelation 12:11

</p>

</div>

{/* MINI CARDS */}

<div className="
mt-10
grid
grid-cols-2
gap-3
">

<div className="
rounded-3xl
border
border-white/10
bg-white/5
p-5
backdrop-blur-xl
">

<div className="text-3xl">
❤️
</div>

<h3 className="
mt-3
font-serif
text-lg
">
Received Healing?
</h3>

<p className="
mt-2
text-xs
leading-6
text-white/60
">
Jesus still heals today.
Share what He has done.
</p>

</div>

<div className="
rounded-3xl
border
border-[#d4af37]/30
bg-[#d4af37]/10
p-5
backdrop-blur-xl
">

<div className="text-3xl">
🙌
</div>

<h3 className="
mt-3
font-serif
text-lg
">
Share Your Story
</h3>

<p className="
mt-2
text-xs
leading-6
text-white/70
">
Your testimony can strengthen someone else's faith.
</p>

</div>

</div>

{/* FORM */}

<div className="
mt-10
rounded-[32px]
border
border-white/10
bg-white/[0.05]
p-6
backdrop-blur-xl
">

<h2 className="
font-serif
text-2xl
">
Share Your Testimony
</h2>

<p className="
mt-3
text-sm
leading-7
text-white/60
">
Every testimony is prayerfully reviewed before being published to encourage others.
</p>

<input

type="text"

placeholder="Full Name"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value,

})

}

className="
mt-8
w-full
rounded-2xl
border
border-white/10
bg-black/20
p-4
outline-none
placeholder:text-white/30
focus:border-[#d4af37]
"
/>

<input

type="text"

placeholder="Testimony Title"

value={form.title}

onChange={(e)=>

setForm({

...form,

title:e.target.value,

})

}

className="
mt-4
w-full
rounded-2xl
border
border-white/10
bg-black/20
p-4
outline-none
placeholder:text-white/30
focus:border-[#d4af37]
"
/>

<textarea

rows={8}

placeholder="Tell us what Jesus did..."

value={form.testimony}

onChange={(e)=>

setForm({

...form,

testimony:e.target.value,

})

}

className="
mt-4
w-full
resize-none
rounded-2xl
border
border-white/10
bg-black/20
p-4
outline-none
placeholder:text-white/30
focus:border-[#d4af37]
"
/>

<button

onClick={submitTestimony}

disabled={loading}

className="
mt-8
w-full
rounded-full
bg-[#d4af37]
py-4
font-bold
text-black
transition
hover:scale-[1.02]
disabled:opacity-50
"

>

{loading ? "Submitting..." : "Share My Testimony"}

</button>
{

success && (

<div
className="
mt-6
rounded-2xl
border
border-green-500/30
bg-green-500/10
p-5
text-center
"
>

<p className="text-lg">

🎉 Thank you!

</p>

<p className="mt-2 text-sm leading-7 text-white/70">

Your testimony has been received successfully.

It will be reviewed by our team before it appears on the website.

Thank you for giving glory to Jesus Christ.

</p>

</div>

)
}

</div>

</div>

</section>

);

}

export default Healing;