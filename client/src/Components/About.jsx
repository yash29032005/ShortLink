import {
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: <ChartBarIcon className="h-6 w-6 text-white" />,
      title: "Advanced Analytics",
      description:
        "Track clicks, locations, devices, and more with detailed analytics dashboard.",
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6 text-white" />,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee for your links.",
    },
    {
      icon: <BoltIcon className="h-6 w-6 text-white" />,
      title: "Lightning Fast",
      description:
        "Global CDN ensures your shortened links redirect instantly anywhere in the world.",
    },
  ];

  return (
    <div
      id="about"
      className="bg-black text-white flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div className="flex-1 flex justify-center flex-col">
        <h1 className="md:text-4xl text-3xl font-bold text-center">
          Why Choose ShortLink?
        </h1>
        <p className="text-gray-300 text-center mt-4">
          More than just a URL shortener
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-xl shadow-sm border border-gray-500 p-6 mb-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
