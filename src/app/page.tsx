
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import PatnersSection from './components/Patners';
import ServicesComponent from "./components/ServicesComponent";
import Head from 'next/head'


export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden">
     
<Head>
  <title>Desty Events</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?display=swap&family=Be+Vietnam+Pro:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://desty-events.vercel.app/" />
  <meta property="og:title" content="Desty Events" />
  <meta property="og:description" content="We craft experiences that people remember" />
  <meta property="og:image" content="https://desty-events.vercel.app/destyeventsblack.jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/jpeg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://desty-events.vercel.app/" />
  <meta name="twitter:title" content="Desty Events" />
  <meta name="twitter:description" content="We craft experiences that people remember" />
  <meta name="twitter:image" content="https://desty-events.vercel.app/destyeventsblack.jpeg" />

  {/* General meta tags */}
  <meta name="description" content="We craft experiences that people remember" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
      <div className="layout-container flex h-full grow flex-col">
        {/* Mobile responsive padding - removes the fixed px-40 */}
        <div className="px-1 sm:px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-40 flex flex-1 justify-center py-3 sm:py-3 md:py-5">
          {/* Mobile responsive content container */}
          <div className="layout-content-container flex flex-col w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[960px] flex-1">
            <Hero />
            <EventsSection />
            <PatnersSection />
            <ServicesComponent />
          </div>
        </div>
      </div>
    </div>
  );
}