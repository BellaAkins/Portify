import { div, h1 } from "framer-motion/client";

/*FIRST STEP*/
export default function ProfessionScreen({ selected, setSelected }) {
  const professions = [
    {
      title: "Creative & Design",
      description:
        "Graphic Designer, Architect, Photographer, Fashion Designer, Art Director",
    },
    {
      title: "Business & Consulting",
      description: "Banker, Consultant, Marketing Director, Business Analyst",
    },
    {
      title: "Tech & Developers",
      description:
        "Software Engineer, IT Specialist, Web Developer, Technical Writer",
    },
    {
      title: "Communications & Editorial",
      description:
        "Journalist, Content Strategist, Editor, Blogger, Social Media Manager",
    },
    {
      title: "Education & Service",
      description:
        "Teacher, Event Planner, Personal Trainer, Real Estate Agent, Counselor",
    },
    {
      title: "Scientific & Research",
      description:
        "Microbiologists, Lab Techs, Medical Doctors, Professors, Pharmacists",
    },
  ];

  return (
    <>
      <h1 className="text-center text-[2.5rem] font-semibold mb-14">
        What profession are you building for?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {professions.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`cursor-pointer p-6 rounded-xl shadow-md bg-[#1E3A5F] text-white 
              transition hover:scale-[1.02]
              ${selected === index ? "ring-4 ring-pink-400" : ""}
            `}
          >
            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <p className="text-sm ">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/*SECOND STEP*/
function GoalScreen({ selected, setSelected }) {
  const goals = [
    {
      title: "Getting hired",
      description:
        "Designed to impress recruiters and hiring managers (ATS system)",
    },
    {
      title: "Attract Clients",
      description: "Showcase services, pricing and client testimonials",
    },
    {
      title: "Personal brand",
      description: "A flexible site for sharing bio, projects, and blog",
    },
  ];

  return (
    <>
      <h1 className="text-center text-[2.5rem] font-semibold mb-14">
        What is your primary goal for building this portfolio?
      </h1>

      <div className="">
        {goals.map((item, index) => (
          <div
            className={`cursor-pointer p-6 rounded-xl shadow-md bg-[#1E3A5F] text-white 
              transition hover:scale-[1.02]
              ${selected === index ? "ring-4 ring-pink-400" : ""}
            `}
          >
            <h2 className="text-[1.75rem]"></h2>
            <p className=""></p>
          </div>
        ))}
      </div>
    </>
  );
}

/*THIRD STEP*/
function ThemeScreen({ selected, setSelected }) {
  const themes = [
    {
      title: "Minimalist",
      description:
        "Clean lines, ample white space, high readability. Best for architects, writers.",
    },
    {
      title: "Bold",
      description:
        "Vibrant colors, strong typography, unique layout. Best for creatives, media",
    },
    {
      title: "Professional",
      description:
        "Structured clear hierarchy, focusing on data and detail. Best for academics, law.",
    },
  ];

  return (
    <>
      <h1 className="text-center text-[2.5rem] font-semibold mb-12">
        What aesthetic or theme will you be using?
      </h1>
      <p>
        Pick a theme to define your typography, color palette, and initial
        design structure.
      </p>
      <div className="">
        {themes.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`
             cursor-pointer p-8 rounded-xl bg-[#1E3A5F] text-white shadow-md
              transition hover:scale-[1.02]
              ${selected === index ? "ring-4 ring-blue-400" : ""}
          `}
          >
            <h2 className="text-[1.75rem] font-semibold mb-3">{item.title}</h2>
            <p className="text-[1.2rem] font-light opacity-80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
