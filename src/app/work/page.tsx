import Image from 'next/image';

// Services data array
const servicesData = [
  {
    id: 1,
    title: "BTL Marketing",
    description: "At desty events we have the best marketing strategies that are more direct & personalized focusing on direct group of customers, which includes Brand Activations, Experiential Marketing, in store promotions, Direct marketing, Guerrilla marketing, field marketing, trade shows & Exhibitions",
    image: "/eventimage1.jpg",
    alt: "Event Management"
  },
  {
    id: 2,
    title: "ATL Marketing",
    description: null,
    image: "/atl.jpg",
    alt: "Brand Activations"
  },
  {
    id: 3,
    title: "Full service event management",
    description: null,
    image: "/fullservice.jpg",
    alt: "Event Coverage"
  },
  {
    id: 4,
    title: "Videography & Photography",
    description: null,
    image: "/eventimage4.jpg",
    alt: "Event Coverage"
  },
  {
    id: 5,
    title: "Branding",
    description: null,
    image: "/branding.jpg",
    alt: "Event Coverage"
  },
  {
    id: 6,
    title: "Audio Visual & Event Equipment Hire",
    description: "At Desty Events, we bring your event to life with cutting-edge audio visual and event equipment solutions that guarantee impact, style, and unforgettable moments. Whether it's a high-energy concert, elegant wedding, corporate activation, or campus festival — we've got you fully covered.",
    image: "/audiovisual.jpeg",
    alt: "Event Coverage"
  },
  {
    id: 7,
    title: "Line Array Sound Systems",
    description: "Clear, powerful sound coverage for any audience size. Professional PA & Sound Systems – Crystal-clear audio for concerts, conferences & celebrations",
    image: "/linearray.jpeg",
    alt: "Event Coverage"
  },
  {
    id: 8,
    title: "Modern Stage Setups",
    description: "Strong, stylish stages for performances and presentations. We both have stage boards and glass stage",
    image: "/eventimage1.jpg",
    alt: "Event Coverage"
  },
  {
    id: 9,
    title: "LED & Plasma Screens",
    description: "Vibrant, high-resolution display screens for branding, live feeds, and visuals",
    image: "/Ledscreen.jpeg",
    alt: "Event Coverage"
  },
  {
    id: 10,
    title: "Lighting Systems",
    description: "Smart, ambient, and show lighting to set the perfect mood. This includes Moving Heads, LED Parcans, Flood lights, Stage spotlights, laser lights, strobe lights & up lighting. Fog machine to enhance the visual experience of the event. Spark machine for added dramatic effects.",
    image: "/lightingsystem.jpeg",
    alt: "Event Coverage"
  },
  {
    id: 11,
    title: "Event Structures & Decore",
    description: "Tents of All Types – From classic to custom tents for all event sizes. Dome Tents – Eye-catching, spacious, and weather-proof domes for premium events. Event Décor – Stylish themed décor and installations to match your brand, mood, or celebration. Furniture & Accessories – VIP lounges, cocktail setups, stage backdrops, and more.",
    image: "/eventdecore.jpeg",
    alt: "Event Coverage"
  },
];

export default function Work() {
  return (
    <div className="px-2 sm:px-8 md:px-16 lg:px-32 xl:px-40 flex flex-1 justify-center py-5 min-h-screen bg-[#111418]">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight">
              Our Services
            </p>
            <p className="text-[#9dabb8] text-sm font-normal leading-normal">
              We turn visions into reality, curating experiences that leave lasting impressions.
            </p>
          </div>
        </div>

        {/* Services Sections - Mapped from data */}
        {servicesData.map((service) => (
          <section key={service.id} className="service-section">
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              {service.title}
            </h2>
            
            {/* Conditional rendering of description */}
            {service.description && (
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                {service.description}
              </p>
            )}
            
            <Image 
              src={service.image} 
              alt={service.alt} 
              width={500} 
              height={300} 
              className="px-4 pb-3" 
            />
          </section>
        ))}
      </div>
    </div>
  );
}