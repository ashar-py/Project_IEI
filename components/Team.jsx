import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EventTeam from "./EventTeam";
import CreativeTeam from "./CreativeTeam";
import MediaTeam from "./MediaTeam";
import TechTeam from "./TechTeam";
import SponsorTeam from "./SponsorTeam";

export function Heading({ heading, active }) {
  return (
    <div
      className={`sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r ${
        heading === active || heading === "Core Team"
          ? "text-white"
          : "text-gray-500"
      } after:from-yellow-300 after:to-yellow-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-16`}
    >
      {heading}
    </div>
  );
}

export function TeamCard({ id, category, title, image, ihref, fhref, lhref }) {
  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full border-2 border-gray-200 bg-[#333] text-center border-opacity-60 rounded-lg overflow-hidden">
        <div className="flex justify-center overflow-hidden relative rounded-lg mx-auto ">
          <img
            className="w-full object-cover object-center"
            src={image}
            alt="team"
          />
        </div>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {title}
          </h1>
        </div>
        <div className=" flex gap-4 justify-center mb-4">
          <a href={ihref}>
            <Image
              src="/follow/instagram.png"
              height={36}
              width={36}
              alt="instagram"
            />
          </a>

          <a href={fhref}>
            <Image
              src="/follow/gmail.png"
              height={36}
              width={36}
              alt="facebook"
            />
          </a>

          <a href={lhref}>
            <Image
              src="/follow/twitter.png"
              height={36}
              width={36}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

const DisplayTeam = ({ active }) => {
  if (active === "Event Team") {
    return <EventTeam />;
  }
  if (active === "Creative Team") {
    return <CreativeTeam />;
  }
  if (active === "Media Team") {
    return <MediaTeam />;
  }
  if (active === "Tech Team") {
    return <TechTeam />;
  }
  if (active === "Sponsor Team") {
    return <SponsorTeam />;
  }
};

const Team = () => {
  const [activeTab, setActiveTab] = useState("Event Team");
  console.log(activeTab);
  return (
    <div className="relative top-12">
      <Heading heading="Core Team" />
      <div className="text-gray-600 body-font">
        <div className="container px-4 mt-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <TeamCard
              id="1"
              category="President"
              title="AYUSH RAJ"
              image="/team/team1.jpg"
              ihref="https://www.instagram.com/_shabdaan_/"
              fhref="ayushraj1721@gmail.com"
              lhref="https://www.linkedin.com/in/ayush-raj-823594234"
            />
            <TeamCard
              id="2"
              category="VICE PRESIDENT"
              title="SHRUTI MAHESHWARI"
              image="/team/team2.jpg"
              ihref="https://www.instagram.com/shruti.malpani/"
              fhref="https://www.facebook.com"
              lhref="https://www.linkedin.com/in/shruti-maheshwari-65b28121b"
            />
            <TeamCard
              id="3"
              category="SECRETARY"
              title="KRITI SHEKHAR"
              image="/team/team3.jpg"
              ihref="https://www.instagram.com/its_krits_2107/"
              fhref="kritishekhar2112@gmail.com"
              lhref="https://www.linkedin.com/in/kriti-shekhar-a7376223a"
            />
            <TeamCard
              id="1"
              category="JOINT SECRETARY"
              title="SILVE JAISWAL"
              image="/team/team4.jpg"
              ihref="https://www.instagram.com/silvejaiswal/"
              fhref="silvejaiswal23@gmail.com"
              lhref="https://twitter.com"
            />
            <TeamCard
              id="2"
              category="TREASURER"
              title="RITWIK RAJ"
              image="/team/team5.jpg"
              ihref="https://www.instagram.com/ig_aritwik17/"
              fhref="https://www.facebook.com"
              lhref="https://twitter.com"
            />
            <TeamCard
              id="3"
              category="SPOKESPERSON"
              title="NUPUR KARJEE"
              image="/team/team6.jpg"
              ihref="https://www.instagram.com/nupur_karjee/"
              fhref="https://www.facebook.com"
              lhref="https://twitter.com"
            />
            <TeamCard
              id="1"
              category="LENSMAN"
              title="AYUSH KUMAR"
              image="/team/team7.jpg"
              ihref="https://www.instagram.com/being_ayush_1998/"
              fhref="https://www.facebook.com"
              lhref="https://twitter.com"
            />
          </div>
        </div>
        <div className="flex justify-center gap-12 px-6 flex-wrap mb-24">
          <button
            className="cursor-pointer"
            onClick={() => setActiveTab("Event Team")}
          >
            <Heading active={activeTab} heading="Event Team" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setActiveTab("Creative Team")}
          >
            <Heading active={activeTab} heading="Creative Team" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setActiveTab("Media Team")}
          >
            <Heading active={activeTab} heading="Media Team" />
          </button>
          <buttton
            className="cursor-pointer"
            onClick={() => setActiveTab("Tech Team")}
          >
            <Heading active={activeTab} heading="Tech Team" />
          </buttton>
          <buttton
            className="cursor-pointer"
            onClick={() => setActiveTab("Sponsor Team")}
          >
            <Heading active={activeTab} heading="Sponsor Team" />
          </buttton>
        </div>
        <DisplayTeam active={activeTab} />
      </div>
    </div>
  );
};

export default Team;
