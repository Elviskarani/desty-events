
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import PatnersSection from './components/Patners';
import ServicesComponent from "./components/ServicesComponent";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Mobile responsive padding - removes the fixed px-40 */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-40 flex flex-1 justify-center py-3 sm:py-4 md:py-5">
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