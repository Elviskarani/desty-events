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
            Event Management & Marketing
          </h2>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            Application of project management to the creation and development of events such as Concerts, Festivals, Corporate Events, Campus Events, Conferences,
            Weddings. We handle every detail, from concept to execution, ensuring a seamless and memorable event.
          </p>
          <Image src="/eventimage1.jpg" alt="Event Management" width={500} height={300} className="px-4 pb-3" />
        </section>

        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Experiential Marketing & Brand Activations
          </h2>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our well-experienced team brings brands to life via well experiences on both grounds & our large social media platforms forming long-term emotional connections.
            We create immersive brand experiences that resonate with your target audience, driving engagement and loyalty.
          </p>
          <Image src="/eventimage2.jpg" alt="Brand Activations" width={500} height={300} className="px-4 pb-3" />
        </section>

        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Event Audiovisual Services
          </h2>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            At Desty Events Kenya, we understand the vital role that audiovisual equipment plays in creating immersive and impactful event experiences. With state-of-the-art
            equipment and a team of experienced professionals, we are your trusted partners in delivering flawless audiovisual solutions that elevate your events to the next
            level. Our services include sound systems, lighting, video projection, and stage design.
          </p>
          <Image src="/eventimage3.jpg" alt="Audiovisual Services" width={500} height={300} className="px-4 pb-3" />
        </section>

        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Event Coverage
          </h2>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our Event Coverage service ensures every important moment of your event is captured & shared with impact. We provide professional photography and videography
            services to document your event, creating lasting memories and promotional content.
          </p>
          <Image src="/eventimage4.jpg" alt="Event Coverage" width={500} height={300} className="px-4 pb-3" />
        </section>

        <section className="service-section">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Other Event Service Providers
          </h2>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            We collaborate with a network of trusted event service providers, including catering, security, transportation, and venue management, to ensure a comprehensive and
            successful event.
          </p>
        </section>
      </div>
    </div>
  );
}