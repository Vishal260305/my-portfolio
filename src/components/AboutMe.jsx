import React from "react";
import { Zap, Code2, Globe, Award, BookUser } from "lucide-react";
import ProfileImg from "../assets/profile.jpg"; // apna profile image yahan import kar lena

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a23] text-white flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>

      <div className="flex flex-col md:flex-row items-start max-w-6xl w-full gap-12 bg-[#0f0f2d] p-8 rounded-2xl shadow-lg">
        
        {/* Left Side - Image */}
        <div className="flex-shrink-0 h-full">
          <img
            src={ProfileImg}
            alt="Profile"
            className="rounded-2xl w-72 h-full object-cover border-2 border-purple-500 shadow-lg"
            style={{ minHeight: '100%' }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1">
          <div className="bg-gradient-to-r from-[#5f00ff] to-[#7f00ff] p-1 rounded-md mb-6">
            <h3 className="text-2xl font-semibold text-center text-white bg-[#0f0f2d] p-3 rounded-md">
              Overview
            </h3>
          </div>

          <div className="space-y-6">
            {/* Point 1 */}
            <div className="flex items-start gap-4">
              <Zap className="text-blue-400 w-6 h-6 mt-1" />
              <p className="text-gray-300">
                I am a Final Year Undergrad at Malaviya National Institute of Technology, Jaipur in Electronics and Communication Engineering.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-4">
              <Code2 className="text-blue-400 w-6 h-6 mt-1" />
              <p className="text-gray-300">
                I have good problem solving skills. I have solved 800+ DSA problems across LeetCode , GFG and various other platforms.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-4">
              <Globe className="text-blue-400 w-6 h-6 mt-1" />
              <p className="text-gray-300">
                I am into Web Development also. I have developed various projects to demonstrate my knowledge on the same.
              </p>
            </div>

            {/* Point 4 */}
            <div className="flex items-start gap-4">
              <BookUser className="text-blue-400 w-6 h-6 mt-1" />
              <p className="text-gray-300">
                Besides this I have a good academic record with a 8.5+ CGPA and also in-depth knowledge of OOPs, Operating Systems and DBMS. 
              </p>
            </div>

            {/* Point 5 */}
            <div className="flex items-start gap-4">
              <Award className="text-blue-400 w-6 h-6 mt-1" />
              <p className="text-gray-300">
                I am NTSE Scholar 2020 and also achieved AIR 3033 in KVPY SX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
