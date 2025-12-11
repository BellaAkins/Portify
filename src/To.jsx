import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Onboarding() {
  const [step, setStep] = useState(1);

  const Card = ({ title, description, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer bg-white shadow-sm rounded-2xl p-6 w-64 text-center border border-gray-200"
    >
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">{description}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-10 space-y-12">
      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center space-y-10">
          <h1 className="text-3xl font-bold text-slate-900 text-center">What is your primary goal for building this portfolio?</h1>

          <div className="flex space-x-6">
            <Card title="Getting hired" description="Designed to impress recruiters and hiring managers (ATS system)" onClick={() => setStep(2)} />
            <Card title="Attract Clients" description="Showcase services, pricing and client testimonials" onClick={() => setStep(2)} />
            <Card title="Personal brand" description="A flexible site to share thoughts, projects and bio" onClick={() => setStep(2)} />
          </div>

          <button className="mt-6 px-10 py-3 rounded-xl border border-sky-500 text-sky-600 hover:bg-sky-50" onClick={() => setStep(2)}>Next</button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center space-y-10">
          <h1 className="text-3xl font-bold text-slate-900 text-center">What aesthetic or theme will you be using?</h1>
          <p className="text-slate-500 text-center">Pick a theme to define your typography, color palette, and initial design structure.</p>

          <div className="flex space-x-6">
            <Card title="Minimalist" description="Clean lines, ample white space, high readability. Best for architects, writers." onClick={() => setStep(3)} />
            <Card title="Bold" description="Vibrant colors, strong typography, unique layout. Best for creatives, media." onClick={() => setStep(3)} />
            <Card title="Professional" description="Structured clear hierarchy, focusing on data and detail. Best for academics, law." onClick={() => setStep(3)} />
          </div>

          <button className="mt-6 px-10 py-3 rounded-xl border border-sky-500 text-sky-600 hover:bg-sky-50">Button</button>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center space-y-10">
          <h1 className="text-3xl font-bold text-slate-900 text-center">Will you be starting on a blank template?</h1>

          <div className="flex space-x-6">
            <Card title="Yes, I am starting with a blank Template" description="" onClick={() => alert("Start building with blank template")} />
            <Card title="No, I want to upload my CV / portfolio" description="" onClick={() => alert("Upload flow")} />
          </div>

          <button className="mt-6 px-10 py-3 rounded-xl border border-sky-500 text-sky-600 hover:bg-sky-50">Start Building</button>
        </motion.div>
      )}
    </div>
  );
}
