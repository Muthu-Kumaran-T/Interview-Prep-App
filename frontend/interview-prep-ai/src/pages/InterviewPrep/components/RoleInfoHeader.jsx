import React from 'react';
import { LuArrowLeft } from 'react-icons/lu';

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onBackClick,
}) => {
  return (
    <div className="bg-white relative border-b border-gray-200">
      {/* ✨ CHANGE HERE: The horizontal padding (px-...) has been removed from this div */}
      <div className="container mx-auto">
        {/* Main flex container for back button and content */}
        <div className="flex items-start py-4">
          
          {/* Back Button */}
          {onBackClick && (
            <button
              onClick={onBackClick}
              className="p-2 mr-2 md:mr-4 mt-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <LuArrowLeft className="text-xl text-gray-700" />
            </button>
          )}

          {/* This div now holds all your original header content */}
          <div className="flex-grow">
            <div className="flex flex-col justify-center relative z-10">
              <div className="flex items-start">
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-medium">{role}</h2>
                      <p className="text-sm text-medium text-gray-900 mt-1">
                        {topicsToFocus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-4">
                <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
                  Experience: {experience} {experience == 1 ? 'Year' : 'Years'}
                </div>
                <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
                  {questions} Q&A
                </div>
                <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
                  Last Updated: {lastUpdated}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This decorative element can remain as is */}
      <div className="w-[40vw] md:w-[30vw] h-full flex items-center justify-center bg-white overflow-hidden absolute top-0 right-0 z-0">
        <div className="w-16 h-16 bg-lime-400 blur-[65px] animate-blob1" />
        <div className="w-16 h-16 bg-teal-400 blur-[65px] animate-blob2" />
        <div className="w-16 h-16 bg-cyan-300 blur-[45px] animate-blob3" />
        <div className="w-16 h-16 bg-fuchsia-200 blur-[45px] animate-blob1" />
      </div>
    </div>
  );
};

export default RoleInfoHeader;