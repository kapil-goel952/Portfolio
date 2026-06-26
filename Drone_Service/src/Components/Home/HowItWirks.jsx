import React from "react";

const steps = [
  {
    number: "01",
    icon: "/images/inspection.png",
    title: "Field Inspection",
    description:
      "We understand your field and crop requirements.",
  },
  {
    number: "02",
    icon: "/images/planning.png",
    title: "Route Planning",
    description:
      "AI-powered planning for efficient spraying.",
  },
  {
    number: "03",
    icon: "/images/drone.png",
    title: "Drone Spraying",
    description:
      "Precision spraying with advanced drone technology.",
  },
  {
    number: "04",
    icon: "/images/report.png",
    title: "Report & Support",
    description:
      "Detailed report and post-service support.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-20">

      <div className="max-w-362.5 mx-auto px-6">

        {/* Heading */}

        <p className="uppercase tracking-widest text-green-700 text-sm font-semibold">
          How It Works
        </p>

        <h2 className="text-4xl font-bold mt-2 text-gray-900">
          Simple Process, Powerful Results
        </h2>

        {/* Steps */}

        <div className="mt-16 flex flex-wrap justify-between items-start gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center w-62.5 mx-auto"
            >

              {/* Step Number */}

              <div className="w-10 h-10 rounded-full bg-green-800 text-white font-bold flex items-center justify-center text-sm mb-6">
                {step.number}
              </div>

              {/* Connector */}

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[72%] w-42.5 border-t border-dashed border-gray-300"></div>
              )}

              {/* Icon */}

              <div className="w-20 h-20 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center">

                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                />

              </div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}

              <p className="mt-3 text-gray-500 text-sm leading-6">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;