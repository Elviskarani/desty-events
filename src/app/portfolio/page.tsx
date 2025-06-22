"use client";

import React from 'react';

// Client logos data
const clientLogos = [
  "/nrgradio.jpg",
  "/multimedia.jpg",
  "/cooperative.jpg",
  "/cuuea1.jpg",
  "/africanazarene.jpg"
];

// Past events data
const pastEvents = [
  {
    eventName: "Multimedia University Cultural Week",
    client: "Multimedia University",
    year: "2025"
  },
  {
    eventName: "Miss & Mr USIU",
    client: "USIU",
    year: "2024"
  },
  {
    eventName: "Africa Nazarene Cultural Week",
    client: "Africa Nazarene",
    year: "2024"
  },
  {
    eventName: "Rongai festival",
    client: "R0ngai",
    year: "2024"
  },
  {
    eventName: "GenZ festival",
    client: "Gen-Z",
    year: "2024"
  }
];

// Upcoming events data
const upcomingEvents = [
  {
    eventName: "TUK Campus Festival",
    client: "Technical University of Kenya (TUK)",
    date: "12th September"
  },
  {
    eventName: "Freshers Night Club Experience",
    client: "Multiple Campuses",
    date: "19th September"
  },
  {
    eventName: "Multimedia University Campus Festival",
    client: "Multimedia University",
    date: "26th September"
  },
  {
    eventName: "Final Campus Festival",
    client: "26 Universities",
    date: "29th September"
  },
  {
    eventName: "UoN Campus Festival",
    client: "University of Nairobi (UoN)",
    date: "10th October"
  },
  {
    eventName: "Moi University Campus Festival",
    client: "Moi University",
    date: "17th October"
  },
  {
    eventName: "Maseno University Campus Festival",
    client: "Maseno University",
    date: "24th October"
  },
  {
    eventName: "Mmust Campus Festival",
    client: "Masinde Muliro University of Science and Technology (Mmust)",
    date: "31st October"
  },
  {
    eventName: "MKU Campus Festival",
    client: "Mount Kenya University (MKU)",
    date: "14th November"
  }
];

// Event highlights data
const eventHighlights = [
  {
    image: "/banner10.jpeg",
    title: "Campus Music Fest",
    description: "A vibrant music festival at TUK University."
  },
  {
    image: "/banner6.jpeg",
    title: "Corporate Product Launch",
    description: "A successful product launch for Tech Innovators Inc."
  },
  {
    image: "/banner3.jpeg",
    title: "University Cultural Week",
    description: "A memorable cultural week."
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#111418]">
      {/* Use responsive padding: px-4 on mobile, sm:px-6 on small screens, lg:px-8 on large screens */}
      <div className="px-4 sm:px-6 lg:px-8 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-full max-w-5xl">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex w-full flex-col gap-3">
              <p className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight">
                Our Valued Clients & Projects
              </p>
              <p className="text-[#9dabb8] text-sm font-normal leading-normal">
                Our work turns visions into reality, curating experiences that leave lasting impressions.
              </p>
            </div>
          </div>



          {/* Upcoming Events Table */}
          <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Upcoming Events
          </h2>
          <div className="px-4 py-3">
            {/* Added overflow-x-auto to make table scrollable on small screens */}
            <div className="overflow-x-auto rounded-xl border border-[#3c4753] bg-[#111418]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1c2126]">
                    <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                      Event Name
                    </th>
                    <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                      Client/University
                    </th>
                    <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingEvents.map((event, index) => (
                    <tr key={index} className="border-t border-t-[#3c4753]">
                      <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal whitespace-nowrap">
                        {event.eventName}
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9dabb8] text-sm font-normal leading-normal whitespace-nowrap">
                        {event.client}
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9dabb8] text-sm font-normal leading-normal whitespace-nowrap">
                        {event.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Past Events Table */}
          <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Key Past Events
          </h2>
          <div className="px-4 py-3">
            {/* Added overflow-x-auto to make table scrollable on small screens */}
            <div className="overflow-x-auto rounded-xl border border-[#3c4753] bg-[#111418]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1c2126]">
                    <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                      Event Name
                    </th>
                    <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                      Client/University
                    </th>
                    <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pastEvents.map((event, index) => (
                    <tr key={index} className="border-t border-t-[#3c4753]">
                      <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal whitespace-nowrap">
                        {event.eventName}
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9dabb8] text-sm font-normal leading-normal whitespace-nowrap">
                        {event.client}
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9dabb8] text-sm font-normal leading-normal whitespace-nowrap">
                        {event.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Client Logos Section */}
          <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Clientele
          </h2>
          {/* This div is updated for the new responsive grid layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: `url("${logo}")` }}
                />
              </div>
            ))}
          </div>

          {/* Event Highlights Section */}
          <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Event Highlights
          </h2>
          {/* Changed to a grid layout that's responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {eventHighlights.map((highlight, index) => (
              <div key={index} className="flex flex-col gap-4 rounded-lg">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: `url("${highlight.image}")` }}
                />
                <div>
                  <p className="text-white text-base font-medium leading-normal">
                    {highlight.title}
                  </p>
                  <p className="text-[#9dabb8] text-sm font-normal leading-normal">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}