import Image from 'next/image';

export default function work() {
  return (
      <div className="px-40 flex flex-1 justify-center py-5 min-h-screen bg-[#111418]">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
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
        
        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            BTL Marketing
          </h2>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          At desty events we have the best marketing strategies that are more direct & personalized focusing on direct group of customers ,which includes Brand Activations, Experiential Marketing,in store promotions ,Direct marketing,Guerrilla marketing, field marketing, trade shows & Exbitions
          </p>
          <Image src="/eventimage1.jpg" alt="Event Management" width={500} height={300} className="px-4 pb-3" />
        </section>

        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            ATL Marketing
          </h2>
          <Image src="/atl.jpg" alt="Brand Activations" width={500} height={300} className="px-4 pb-3" />
        </section>

       

        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Full service event management
          </h2>
          
          <Image src="/fullservice.jpg" alt="Event Coverage" width={500} height={300} className="px-4 pb-3" />
        </section>

        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Videograpy & photograpy
          </h2>
         
          <Image src="/eventimage4.jpg" alt="Event Coverage" width={500} height={300} className="px-4 pb-3" />
        </section>

        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Branding
          </h2>
         
          <Image src="/branding.jpg" alt="Event Coverage" width={500} height={300} className="px-4 pb-3" />
        </section>
        
      </div>
    </div>
  );
}