// pages/index.js or app/page.js
"use client";
import Image from 'next/image';


import React from 'react'

const teamMembers = [
  {
    name: 'Desty.',
    role: 'Lead Event Planner',
    image: '/placeholder.jpg'
  },
  {
    name: 'person 2.',
    role: 'lead event planner',
    image: '/placeholder.jpg'
  },
  {
    name: 'person 3.',
    role: 'Creative Director',
    image: '/placeholder.jpg'
  }
]

const awards = [
  {
    title: "Event Organizers of the Year",
    event: "POKA AWARDS 2023",
    year: "2023"
  },
  {
    title: "East Africa Event Organizers of the Year",
    event: "E360 Awards",
    year: "2024"
  }
]

export default function DestyEventsPage() {
  const handleExploreServices = () => {
    // Add your navigation logic here
    console.log('Explore Services clicked')
  }

  return (
    <div className="min-h-screen bg-[#111418]">
      <div className="px-4 sm:px-8 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

          {/* Hero Section */}
          <div className="p-0 sm:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/banner3.jpeg")'
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Crafting Unforgettable Event Experiences
                </h1>
                <h2 className="text-white text-sm sm:text-base font-normal leading-normal max-w-2xl">
                  Desty Events aims to be the go-to digital companion for event experiences in Kenya and beyond. We don't just plan events—we craft experiences that people remember.
                </h2>
              </div>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#1672ce] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base hover:bg-blue-700 transition-colors"
                onClick={handleExploreServices}
              >
                <span className="truncate">Explore Our Services</span>
              </button>
            </div>
          </div>

          {/* About Us Section */}
          <section>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              About Us
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              With a wealth of experience in event management and marketing, our dedicated team transforms visions into reality, curating unforgettable experiences tailored to your unique needs. Driven by innovation and creativity, we stay at the forefront of industry trends. Our extensive reach spans over 27 campuses across the nation, including USIU, Multimedia University, Moi University, Technical University of Kenya, Catholic University of Kenya, Cooperative University, and many more.
            </p>
          </section>

          {/* Our Expertise Section */}
          <section>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Expertise
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              We specialize in creating memorable events, from major concerts and festivals like GenZ festivals and Rongai festival to corporate events and private celebrations. Our expertise ensures every detail is meticulously planned and executed, delivering exceptional results.
            </p>
          </section>

          {/* Awards & Recognition Section */}
          <section>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Awards & Recognition
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 px-4">
              <div className="flex-1">
                <p className="text-white text-base font-normal leading-normal pb-4">
                  Our commitment to excellence has earned us prestigious recognition in the event management industry. We are proud of our achievements and continuously strive to exceed expectations.
                </p>

                {/* Awards List */}
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="bg-[#1a1f24] rounded-lg p-4 border border-[#2a3038]">
                      <h3 className="text-[#1672ce] text-lg font-semibold leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-white text-sm font-medium">
                        {award.event} - {award.year}
                      </p>
                    </div>
                  ))}

                  <div className="bg-[#1a1f24] rounded-lg p-4 border border-[#2a3038]">
                    <h3 className="text-[#1672ce] text-lg font-semibold leading-tight">
                      Multiple Nominations
                    </h3>
                    <p className="text-white text-sm font-medium">
                      More than 6 times nominated for Event Organizers of the Year across major industry awards
                    </p>
                  </div>
                </div>
              </div>

              {/* Award Image */}
              <div className="flex-shrink-0 lg:w-80">
                <div className="w-full h-64 lg:h-80 bg-[#1a1f24] rounded-lg border border-[#2a3038] overflow-hidden">
                  <Image
                    src="/awardimage.jpeg"
                    alt="Award Recognition"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Meet Our Team Section */}
          <section>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col gap-3 text-center pb-3">
                  <div className="px-4">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full max-w-[200px] mx-auto"
                      style={{ backgroundImage: `url("${member.image}")` }}
                    />
                  </div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">{member.name}</p>
                    <p className="text-[#9dabb8] text-sm font-normal leading-normal">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Values Section */}
          <section>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Values
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Desty Events, we are driven by a passion for creativity, innovation, and excellence. We believe in building strong relationships with our clients, understanding their goals, and delivering events that leave a lasting impression. Our values guide us in every project we undertake, ensuring exceptional service and unforgettable experiences.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}