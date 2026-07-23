import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {

  const socials = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/the_sent_network?igsh=MXMwaG50Z3U2NzB5Mg%3D%3D&utm_source=qr",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/share/1Brj8sr1hy/?mibextid=wwXIfr",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      link: "https://www.tiktok.com/@thesentnetwork01?_r=1&_t=ZS-98CtTyiZH7t",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      link: "https://youtube.com/@thesentnetwork?si=A1SwSQG94dDkqPJg",
    },
    {
      name: "Telegram",
      icon: FaTelegramPlane,
      link: "https://t.me/Thesentnetwork",
    },
  ];


  return (
    <footer
    id="connect"
      className="
      bg-gradient-to-b
      from-[#120823]
      to-[#090613]
      border-t
      border-white/10
      py-16
      text-white
      "
    >

      <div className="
      mx-auto
      max-w-6xl
      px-5
      text-center
      ">


        <p
        className="
        text-xs
        uppercase
        tracking-[0.4em]
        text-[#d4af37]
        "
        >
          Connect With Us
        </p>


        <h2
        className="
        mt-4
        font-serif
        text-3xl
        md:text-4xl
        "
        >
          Stay Connected With TSN
        </h2>


        <p
        className="
        mx-auto
        mt-4
        max-w-md
        text-sm
        leading-6
        text-white/60
        "
        >
          Follow us and stay updated with what God is doing through The Sent Network.
        </p>



        <div
        className="
        mt-8
        flex
        flex-wrap
        justify-center
        gap-4
        "
        >

        {
          socials.map((social)=>{

            const Icon = social.icon;

            return (

              <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/5
              text-white
              transition-all
              duration-300
              hover:scale-110
              hover:border-[#d4af37]
              hover:text-[#d4af37]
              "
              >

                <Icon size={22}/>

              </a>

            );

          })
        }

        </div>



        <div
        className="
        mt-10
        border-t
        border-white/10
        pt-6
        text-xs
        text-white/40
        "
        >
          © {new Date().getFullYear()} The Sent Network. All rights reserved.
        </div>


      </div>


    </footer>
  );
}

export default Footer;