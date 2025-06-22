import Link from 'next/link'

// components/EventsSection.js
const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Summer Music Fest",
      description: "A weekend of music and fun",
      image: "/banner10.jpeg"
    },
    {
      id: 2,
      title: "Campus Tour 2024",
      description: "Engaging students across campuses",
      image: "/banner8.jpeg"
    },
    {
      id: 3,
      title: "Rongai Festival",
      description: "The ultimate festival experience",
      image: "/banner6.jpeg"
    }
  ]

  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Upcoming Major Events
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {events.map((event) => (
            <div key={event.id} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                style={{ backgroundImage: `url("${event.image}")` }}
              />
              <div>
                <p className="text-white text-base font-medium leading-normal">{event.title}</p>
                <p className="text-[#9dabb8] text-sm font-normal leading-normal">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex px-4 py-3 justify-center">
        <Link href="/portfolio">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#293038] hover:bg-[#3a4148] active:bg-[#1f252a] transition-colors duration-200 text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">View All Upcoming Events</span>
          </button>
        </Link>
      </div>
    </>
  )
}

export default EventsSection