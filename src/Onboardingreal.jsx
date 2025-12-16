import { useState } from "react";

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);

  const goNext = () => {
    if (step < 4) {
      setStep(step + 1);
      setSelected(null);
    }
  };

  const skip = () => {
    setStep(4);
    setSelected(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-16 py-10 relative">
      {/* Progress Bar */}
      <div className="flex justify-center gap-6 mb-10">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            onClick={() => {
              if (n <= step) {
                setStep(n);
                setSelected(null);
              }
            }}
            className={`h-2 w-58 rounded-lg cursor-pointer transition
        ${step === n ? "bg-[#1C3B5E]" : "bg-gray-300 hover:bg-gray-400"}
      `}
          />
        ))}
      </div>

      {/* Skip Button */}
      <button
        className="mt-4 block ml-auto w-fit text-white bg-[#1ABCFE] border-radius-[6px] rounded-md font-regular px-4 py-1"
        onClick={skip}
      >
        Skip
      </button>

      {/* STEP SCREENS */}
      {step === 1 && (
        <ProfessionScreen selected={selected} setSelected={setSelected} />
      )}
      {step === 2 && (
        <GoalScreen selected={selected} setSelected={setSelected} />
      )}
      {step === 3 && (
        <ThemeScreen selected={selected} setSelected={setSelected} />
      )}
      {step === 4 && <FinalScreen />}

      {/* NEXT BUTTON (hidden on last step) */}
      {step < 4 && (
        <div className="mt-12 flex justify-center">
          <button
            disabled={selected === null}
            onClick={goNext}
            className="px-25 py-3 border border-[#1ABCFE] rounded-xl text-[#1ABCFE] text-[1.2rem] font-semibold 
                     disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------- STEP 1 ------------------------------- */

function ProfessionScreen({ selected, setSelected }) {
  const professions = [
    {
      title: "Creative & Design",
      desc: "Graphic Designer, Architect, Photographer, Fashion Designer, Art Director",
    },
    {
      title: "Business & Consulting",
      desc: "Banker, Consultant, Marketing Director, Business Analyst",
    },
    {
      title: "Tech & Developers",
      desc: "Software Engineer, IT Specialist, Web Developer, Technical Writer",
    },
    {
      title: "Communications & Editorial",
      desc: "Journalist, Content Strategist, Editor, Blogger, Social Media Manager",
    },
    {
      title: "Education & Service",
      desc: "Teacher, Event Planner, Personal Trainer, Real Estate Agent, Counselor",
    },
    {
      title: "Scientific & Research",
      desc: "Microbiologists, Lab Techs, Medical Doctors, Professors, Pharmacists",
    },
  ];

  return (
    <>
      <h1 className="text-center text-[1.5rem] lg:text-[2.5rem] text-[#000000] font-semibold mb-12">
        What profession are you building for?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {professions.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`
              cursor-pointer p-6 rounded-xl shadow-md bg-[#1E3A5F] text-white 
              transition hover:scale-[1.02]
              ${selected === index ? "ring-4 ring-[#1ABCFE]" : ""}
            `}
          >
            <h2 className="text-center font-semibold mb-2 text-[1.25rem] ">
              {item.title}
            </h2>
            <p className="text-[1rem]   text-center opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------- STEP 2 ------------------------------- */

function GoalScreen({ selected, setSelected }) {
  const goals = [
    {
      title: "Getting hired",
      desc: "Designed to impress recruiters and hiring managers (ATS system)",
    },
    {
      title: "Attract Clients",
      desc: "Showcase services, pricing and client testimonials",
    },
    {
      title: "Personal brand",
      desc: "A flexible site to share thoughts, projects and bio",
    },
  ];

  return (
    <>
      <h1 className="text-center text-[1.5rem] lg:text-[2.5rem] text-[#000000] font-semibold mb-12">
        What is your primary goal for building this portfolio?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 ">
        {goals.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`
              cursor-pointer p-8 bg-white border border-[#1C3B5E]
              rounded-xl text-center shadow-sm transition hover:scale-[1.02] 
              ${
                selected === index
                  ? "border-blue-500 ring-2 ring-[#1ABCFE]"
                  : ""
              }
            `}
          >
            <h2 className="text-[#1C3B5E]text-center text-[1.5rem]  text-[#000000] font-semibold mb-12font-semibold mb-3 ">
              {item.title}
            </h2>
            <p className="text-[1rem] lg:text-[1.25rem]  text-center text-[#1C3B5E]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------- STEP 3 ------------------------------- */

function ThemeScreen({ selected, setSelected }) {
  const themes = [
    {
      title: "Minimalist",
      desc: "Clean lines, ample white space, high readability. Best for architects, writers.",
    },
    {
      title: "Bold",
      desc: "Vibrant colors, strong typography, unique layout Best for creatives, media.",
    },
    {
      title: "Professional",
      desc: "Structured clear hierarchy, focusing on data and detail. Best for academics, law.",
    },
  ];

  return (
    <>
      <h1 className="text-center text-[1.5rem] lg:text-[2.5rem] text-[#000000] font-semibold mb-12">
        What aesthetic or theme will you be using?
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Pick a theme to define your typography, color palette, and initial
        design structure.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {themes.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`
              cursor-pointer p-8 rounded-xl bg-[#1E3A5F] text-white text-center shadow-md
              transition hover:scale-[1.02]
              ${selected === index ? "ring-4 ring-[#1ABCFE]" : ""}
            `}
          >
            <h2 className="text-[#1C3B5E]text-center text-[1.5rem] font-semibold mb-12font-semibold mb-3">
              {item.title}
            </h2>
            <p className="text-[1rem] lg:text-[1.25rem]  text-center opacity-80">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------- STEP 4 (FINAL) ------------------------------- */

function FinalScreen() {
  const handleStart = () => {
    // Later replace with navigation:
    // navigate("/editor") OR router.push("/editor")
    alert("Redirecting to builder...");
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold mb-6">
        Will you be starting on a blank template?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
        <div
          onClick={() => alert("Start building with blank template")}
          className="cursor-pointer p-8 bg-white border border-gray-300 rounded-xl 
                     shadow-sm text-center hover:scale-[1.02] transition"
        >
          <h2 className="text-[2rem]  py-8 font-semibold mb-2 text-[#1C3B5E]">
            Yes, I am starting with a blank Template
          </h2>
        </div>

        <div
          onClick={() => alert("Upload CV / Portfolio")}
          className="cursor-pointer p-8 bg-white border border-gray-300 rounded-xl 
                     shadow-sm text-center hover:scale-[1.02] transition"
        >
          <h2 className="text-[2rem] py-8 font-semibold mb-2 text-[#1C3B5E]">
            No, I want to upload my CV / portfolio
          </h2>
        </div>
      </div>

      {/* START BUILDING BUTTON */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleStart}
          className="px-10 py-2 border border-[#1ABCFE]  text-[#1ABCFE] text-[1.5rem] rounded-xl font-semibold 
                      hover:bg-white transition"
        >
          Start Building
        </button>
      </div>
    </>
  );
}
