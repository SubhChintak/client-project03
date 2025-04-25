
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Bone, 
  Pill, 
  Eye, 
  Baby, 
  Ear,
  UserRound,
  Brain,
  Smile,
  HeartPulse 
} from "lucide-react";
import { motion } from 'framer-motion';

interface Specialty {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const specialties: Specialty[] = [
  {
    id: "medicine",
    name: "General Medicine",
    icon: <Pill className="h-8 w-8" />,
  },
  {
    id: "orthopedic",
    name: "Orthopedic",
    icon: <Bone className="h-8 w-8" />,
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    icon: <Stethoscope className="h-8 w-8" />,
  },
  {
    id: "ophthalmology",
    name: "Eye Specialist",
    icon: <Eye className="h-8 w-8" />,
  },
  {
    id: "gynecology",
    name: "Gynaecologist",
    icon: <UserRound className="h-8 w-8" />,
  },
  {
    id: "dental",
    name: "Dentist",
    icon: <Smile className="h-8 w-8" />, 
  },
  {
    id: "pediatrics",
    name: "Child Specialist",
    icon: <Baby className="h-8 w-8" />,
  },
  {
    id: "ent",
    name: "ENT",
    icon: <Ear className="h-8 w-8" />,
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: <Brain className="h-8 w-8" />,
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: <HeartPulse className="h-8 w-8" />,
  },
  // {
  //   id: "medicine",
  //   name: "Medicine",
  //   icon: <Pill className="h-8 w-8" />,
  // },
  // {
  //   id: "orthopedic",
  //   name: "Orthopedic",
  //   icon: <Bone className="h-8 w-8" />,
  // },
  // {
  //   id: "gastroenterology",
  //   name: "Gastroenterology",
  //   icon: <Stethoscope className="h-8 w-8" />,
  // },
  // {
  //   id: "ophthalmology",
  //   name: "Eye Specialist",
  //   icon: <Eye className="h-8 w-8" />,
  // },
  // {
  //   id: "gynecology",
  //   name: "Gynaecologist",
  //   icon: <UserRound className="h-8 w-8" />,
  // },
  // {
  //   id: "dental",
  //   name: "Dentist",
  //   icon: <Smile className="h-8 w-8" />, 
  // },
  // {
  //   id: "pediatrics",
  //   name: "Child Specialist",
  //   icon: <Baby className="h-8 w-8" />,
  // },
  // {
  //   id: "ent",
  //   name: "ENT",
  //   icon: <Ear className="h-8 w-8" />,
  // },
  // {
  //   id: "neurology",
  //   name: "Neurology",
  //   icon: <Brain className="h-8 w-8" />,
  // },
  // {
  //   id: "cardiology",
  //   name: "Cardiology",
  //   icon: <HeartPulse className="h-8 w-8" />,
  // }
];

export default function SpecialtiesSection() {
  const navigate = useNavigate();

  const handleSpecialtyClick = (id: string) => {
    navigate(`/specialty/${id}`);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    // <section id="specialties" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
    <section id="specialties" className="py-20 bg-white dark:bg-black">

      <div className="container mx-auto px-4 sm:px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Medical <span className="text-lime-600 dark:text-lime-400">Specialties</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the right specialist for your healthcare needs. We connect you with experienced doctors across various medical specialties.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.id}
              variants={item}
              onClick={() => handleSpecialtyClick(specialty.id)}
              // className="bg-gradient-to-br from-healthcare-100 to-healthcare-300 dark:from-healthcare-800 dark:to-healthcare-600 rounded-xl shadow-lg hover:shadow-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1 border border-healthcare-100 dark:border-healthcare-700"

              className="bg-gradient-to-br  from-lime-950 to-lime-900 dark:from-lime-950 dark:to-lime-900 border border-lime-800 dark:border-lime-800 rounded-xl shadow-lg hover:shadow-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1"


            >
              {/* <div className="bg-healthcare-200 dark:bg-healthcare-700 text-healthcare-600 dark:text-healthcare-300 p-4 rounded-full mb-4"> */}


              <div className="bg-lime-900 text-lime-400 p-4 rounded-full mb-4">
                {specialty.icon}
              </div> 
              {/* <h3 className="font-semibold text-gray-900 dark:text-white text-center"> */}
              <h3 className="font-semibold text-white text-center">
                {specialty.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
