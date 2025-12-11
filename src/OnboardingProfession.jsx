import { useState } from "react";

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);

  const goNext = () => {
    if (step < 3) {
      setStep(step + 1);
      setSelected(null);
    }
  };

  const skip = () => {
    setStep(3);
    setSelected(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 relative">

      {/* Skip Button */}
      <button 
        className="absolute top-6 right-6 text-blue-500 font-medium"
        onClick={skip}
      >
        Skip
      </button>

      {/* Progress Bar */}
      <div className="flex justify-center gap-6 mb-10">
        {[1,2,3].map((n) => (
          <div
            key={n}
            className={`
              h-2 w-32 rounded-lg 
              ${step === n ? "bg-blue-600" : "bg-gray-300"}
            `}
          />
        ))}
      </div>

      {/* RENDER DIFFERENT SCREENS */}
      {step === 1 && <ProfessionScreen selected={selected} setSelected={setSelected} />}
      {step === 2 && <GoalScreen selected={selected} setSelected={setSelected} />}
      {step === 3 && <ThemeScreen selected={selected} setSelected={setSelected} />}

      {/* NEXT BUTTON */}
      {step < 3 && (
        <div className="mt-12 flex justify-center">
          <button
            disabled={selected === null}
            onClick={goNext}
            className="px-10 py-3 border border-blue-400 rounded-xl text-blue-600 font-semibold 
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
    { title: "Creative & Design", desc: "Designer, architect, photographer" },
    { title: "Business & Consulting", desc: "Banker, consultant, analyst" },
    { title: "Tech & Developers", desc: "Software engineer, IT specialist" },
    { title: "Communications & Editorial", desc: "Journalist, writer, blogger" },
    { title: "Education & Service", desc: "Teacher, trainer, counselor" },
    { title: "Scientific & Research", desc: "Doctor, pharmacist, biologist" }
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-semibold mb-12">
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
              ${selected === index ? "ring-4 ring-blue-400" : ""}
            `}
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------- STEP 2 ------------------------------- */

function GoalScreen({ selected, setSelected }) {
  const goals = [
    { title: "Getting hired", desc: "Designed to impress hiring managers" },
    { title: "Attract Clients", desc: "Showcase your services & testimonials" },
    { title: "Personal brand", desc: "A flexible site for sharing bio & projects" },
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-semibold mb-8">
        What is your primary goal for building this portfolio?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {goals.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`
              cursor-pointer p-8 bg-white border border-gray-300 
              rounded-xl text-center shadow-sm transition hover:scale-[1.02]
              ${selected === index ? "border-blue-500 ring-2 ring-blue-300" : ""}
            `}
          >
            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------- STEP 3 ------------------------------- */

function ThemeScreen({ selected, setSelected }) {
  const themes = [
    { title: "Minimalist", desc: "Clean lines, whitespace, readability." },
    { title: "Bold", desc: "Vibrant colors, strong typography." },
    { title: "Professional", desc: "Structured, detail-focused." },
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-semibold mb-2">
        What aesthetic or theme will you be using?
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Pick a theme to define your typography, color palette, and layout.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <p className="text-sm opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-10 py-3 border border-blue-400 rounded-xl text-blue-600 font-semibold">
          Finish
        </button>
      </div>
    </>
  );
}
