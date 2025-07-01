import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { ImAirplane } from "react-icons/im";
import { FaBookReader } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { FaCarCrash } from "react-icons/fa";
import { GiGardeningShears } from "react-icons/gi";
import { motion } from "motion/react"
const MeetOurParents = () => {
  return (
    <div>
        <motion.h1 
        className="text-5xl font-serif"
        animate={{ color: ["#FF0080", "#FFD700", "#00FFFF", "#FF0080"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        Meet Our partners
      </motion.h1>
      <div className="mt-10 grid grid-cols-3 gap-10 mb-30">
        <div className="flex gap-5 p-5 border-2 items-center">
          <div>
            <FaLaptopCode size={100} />
          </div>
          <div>
            <h1 className="text-4xl font-semibold font-serif mb-5">TechNova</h1>
            <h1>
              A leading software development company specializing in AI and
              cloud solutions
            </h1>
          </div>
        </div>

        <div className="flex gap-5 p-5 border-2 items-center">
          <div>
            <MdHealthAndSafety size={100} />
          </div>
          <div>
            <h1 className="text-4xl font-semibold font-serif mb-5">
              HealthPlus
            </h1>
            <h1>
              Innovators in healthcare technology improving patient care
              globally
            </h1>
          </div>
        </div>

        <div className="flex gap-5 p-5 border-2 items-center">
          <div>
            <ImAirplane size={100} />
          </div>
          <div>
            <h1 className="text-4xl font-semibold font-serif mb-5">
              TravelMate
            </h1>
            <h1>
              Your reliable partner in travel and tourism services across
              continents
            </h1>
          </div>
        </div>

        <div className="flex gap-5 p-5 border-2 items-center">
          <div>
            <SlEnergy size={100} />
          </div>
          <div>
            <h1 className="text-4xl font-semibold font-serif mb-5">
              GreenLeaf Energy
            </h1>
            <h1>
              Provider of sustainable and renewable energy solutions worldwide
            </h1>
          </div>
        </div>
        <div className="flex gap-5 p-5 border-2 items-center">
          <div>
            <GiGardeningShears size={100} />
          </div>
          <div>
            <h1 className="text-4xl font-semibold font-serif mb-5">
              GardenHUb
            </h1>
            <h1>Professional garden design and maintenance services.</h1>
          </div>
        </div>

        <div className="flex gap-5 p-5 border-2 items-center">
          <div>
            <FaCarCrash size={100} />
          </div>
          <div>
            <h1 className="text-4xl font-semibold font-serif mb-5">
              TutoCare Pro
            </h1>
            <h1>Expert automotive maintenance and repair services</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurParents;
