import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { ImAirplane } from "react-icons/im";
import { SlEnergy } from "react-icons/sl";
import { FaCarCrash } from "react-icons/fa";
import { GiGardeningShears } from "react-icons/gi";
import { motion } from "motion/react";

const partners = [
  {
    Icon: FaLaptopCode,
    name: "TechNova",
    desc: "A leading software development company specializing in AI and cloud solutions",
    color: "text-pink-400",
    bg: "bg-pink-100/20",
  },
  {
    Icon: MdHealthAndSafety,
    name: "HealthPlus",
    desc: "Innovators in healthcare technology improving patient care globally",
    color: "text-green-400",
    bg: "bg-green-100/20",
  },
  {
    Icon: ImAirplane,
    name: "TravelMate",
    desc: "Your reliable partner in travel and tourism services across continents",
    color: "text-blue-400",
    bg: "bg-blue-100/20",
  },
  {
    Icon: SlEnergy,
    name: "GreenLeaf Energy",
    desc: "Provider of sustainable and renewable energy solutions worldwide",
    color: "text-yellow-400",
    bg: "bg-yellow-100/20",
  },
  {
    Icon: GiGardeningShears,
    name: "GardenHub",
    desc: "Professional garden design and maintenance services.",
    color: "text-emerald-400",
    bg: "bg-emerald-100/20",
  },
  {
    Icon: FaCarCrash,
    name: "TutoCare Pro",
    desc: "Expert automotive maintenance and repair services",
    color: "text-red-400",
    bg: "bg-red-100/20",
  },
];

const MeetOurParents = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-gray-900 text-gray-300 rounded-xl shadow-xl">
      <motion.h1
        className="text-5xl font-serif font-bold text-center mb-16 select-none"
        animate={{ color: ["#FF0080", "#FFD700", "#00FFFF", "#FF0080"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        Meet Our Partners
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {partners.map(({ Icon, name, desc, color, bg }) => (
          <div
            key={name}
            className={`flex flex-col items-center text-center rounded-3xl p-8 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg ${bg}`}
          >
            <Icon size={100} className={`${color} mb-6 drop-shadow-lg`} />
            <h2 className="text-3xl font-semibold font-serif mb-3 text-white">
              {name}
            </h2>
            <p className="text-gray-300 max-w-xs">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurParents;
