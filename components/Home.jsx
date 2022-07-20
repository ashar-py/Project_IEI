import Image from "next/image";
import Contact from "./ContactUs";
import Testimonials from "./Testimonials";
import AboutSlider from "./AboutSlider";

const Front = () => {
  return (
    <div className="relative flex flex-col items-center px-8 h-[56rem] justify-center">
      <div className="absolute h-full w-full inset-0 -z-1">
        <Image src="/bg.webp" alt="cover" layout="fill" objectFit="cover" />
      </div>

      <div className="relative flex justify-center flex-col items-center gap-10">
        <div className="relative h-72 w-72 rounded-full flex justify-center items-center ">
          <div className="absolute w-56 h-56 bg-black rounded-full shadow-md"></div>
          <Image
            src="/logo-home.webp"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative border-[12px] border-[#000] p-6">
          <div className="md:text-6xl text-4xl staatlich font-bold bg-yellow-400 p-4 text-center tracking-wider">
            Welcome to BIZWIT
          </div>
        </div>
      </div>

      <div className="relative my-12 text-center text-white px-8 max-w-xl">
        <div className="text-3xl staatlich">
          “Be a Bizwitian, not for years but for life”
        </div>
        <div className="mt-8">
        ये दिल मांगे मोर! If you are too keen about more and more things in
        your life, BIZWIT is the right place to be. Here we are up for,
        cherishing the good souls into the perfect ones with lots of fun
        factors.
      </div>
      </div>
    </div>
  );
};

function WhyUs() {
  return (
    <div className="relative h-max overflow-hidden" id="about">
      <div className="w-full absolute h-full">
        <img
          src="/about-bg.webp"
          alt="about cover"
          className="w-full h-full block"
        />
      </div>
      <div className="relative flex py-12 px-6 h-full flex-col gap-4 md:flex-row">
        <div className="relative text-justify bg-[#111] text-white p-8 rounded-md md:w-1/2 xl:w-auto">
          <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
            About Us
          </div>
          <div className="relative mt-16 max-w-7xl">
            BIZWIT is one of the prestigious society of BIT, Lalpur that leads
            us to learn and explore new things including the fun factor with
            itself. We appreciate every skill of yours and try to enhance it.
            Bizwit society surely adds up life to your years in BIT. Bizwit is
            essentially involved in event management,that strives towards
            excellence with constant team efforts. We are a team that believes
            it&apos;s the miniscule details at work that matters the most. As we
            know the capacity to learn is a gift,the ability to learn is a
            skill, and the willingness to learn is a choice. Bizwit society
            gives you a large number of opportunities to enhance your skills.
            Bizwit lets you explore your talents in any field which you are
            interested in may be it is event management, technical skills,
            creative skills, marketing, social media management and many more. A
            team that consists of various talented individuals.
          </div>
        </div>
        <div className="relative md:w-1/2 w-full flex rounded-md overflow-hidden justify-center items-center">
          <AboutSlider/>
        </div>
      </div>
    </div>
  );
}

const Vision = () => {
  return (
    <div className="relative h-max overflow-hidden">
      <div className="w-full absolute h-full">
        <img src="/bg.webp" alt="cover" className="w-full h-full block" />
      </div>
      <div className="relative flex py-12 px-6 h-full flex-col gap-4 md:flex-row">
        <div className="relative text-justify bg-[#111] text-white p-8 rounded-md max-w-4xl mx-auto">
          <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
            Our Vision
          </div>
          <div className="relative mt-16">
            A society that transcends creativity and motivation at all stages of
            performance. It is to add value to both the team and an individual.
            We believe that every individual possess a talent worth appreciating
            and bizwit makes sure one&apos;s talent should never be left unnosced.
            Bizwit a society where you can nurture yourself and identify your
            true inner potential. We give you a platform to develop the latent
            leadership qualities inside you.
          </div>
        </div>
      </div>
    </div>
  );
};

function FunNLearn() {
  return (
    <div className="relative h-max overflow-hidden">
    <div className="w-full absolute h-full">
      <img src="/about-bg.webp" alt="cover" className="w-full h-full block" />
    </div>
    <div className="relative flex py-12 px-6 h-full flex-col gap-4 md:flex-row">
      <div className="relative text-justify bg-[#111] text-white p-8 rounded-md max-w-6xl mx-auto">
        <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
          Fun and Learn
        </div>
        <div className="relative mt-16 flex flex-col items-center md:flex-row gap-8 md:items-stretch w-full">
          <div className="md:w-1/2 bg-yellow-500 text-black p-8 rounded-md">
          <div className="text-4xl text-black uppercase text-center staatlich relative w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mb-2">
          Why BIZWIT?
        </div>
            As a member of Bizwit you get the opportunity to find and build your strength. You get to try out marketing, digital marketing, social media management, sponsorship, creative writing and what not!And decide what suits you the best. Not only this will help you find yourself but will also help you in career building.Moreover you get close guidance from the seniors including internships, notes and even career advice.
          </div>
          <div className='md:w-1/2 bg-yellow-500 text-black p-8 rounded-md'>
          <div className="text-4xl text-black uppercase text-center staatlich relative w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mb-2">
          BIZWIT IS FUN!
        </div>
          Bizwit members sure know how to party and give you the perfect taste of college life.We have organised very entertaining outings, freshers and even meet-ups in the past that you would sure not like to miss. <br></br>
          P.S. If this wasn&apos;t convincing enough, we do offer black t-shirts as well
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

function Sponsor() {
  return (
    <div className="relative h-max overflow-hidden">
      <div className="w-full absolute h-full">
        <img src="/bg.webp" alt="cover" className="w-full h-full block" />
      </div>
      <div className="relative flex py-12 px-6 h-full flex-col gap-4 md:flex-row">
        <div className="relative text-justify bg-[#111] text-white p-8 rounded-md max-w-4xl mx-auto">
          <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
            Want to Sponsor Us?
          </div>
          <div className="relative mt-16 flex justify-center">
            <a className="staatlich text-3xl py-4 px-8 bg-yellow-500 text-black rounded-md cursor-pointer" href="https://forms.gle/SAkKw3spP7ZBCZB79">Click here</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Testimonial() {
  return (
    <div className="relative h-max overflow-hidden">
      <div className="w-full absolute h-full">
        <img
          src="/about-bg.webp"
          alt="about cover"
          className="w-full h-full block"
        />
      </div>
      <div className="relative py-12 px-6">
        <div className="relative bg-[#111] p-8 rounded-md">
          <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mb-16">
            Testimonials
          </div>
          <div>
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Front />
      <WhyUs />
      <Vision />
      <FunNLearn/>
      <Sponsor />
      <Testimonial />
      <Contact />
    </div>
  );
}
