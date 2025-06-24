import Image from 'next/image'

const PartnersSection = () => {
  const partners = [
    "/nrgradio.jpg",
    "/multimedia.jpg",
    "/cooperative.jpg",
    "/cuuea1.jpg"
  ]

  const aspiringPartners = [
    "/kbl.jpg",
    "/22bet.jpg",
    "/cocacola.jpeg",
    "/africanazarene.jpg"
  ]

  return (
    <>
      {/* Our Partners Section */}
      <div className="w-full">
        <h2 className="text-white text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-1 sm:px-4 pb-3 pt-4 sm:pt-5">
          Our Partners
        </h2>
        {/* Mobile: 2 columns, Small devices: 3 columns, Medium+: 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 p-1 sm:p-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Aspiring Campus Partners Section */}
      <div className="w-full">
        <h2 className="text-white text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-1 sm:px-4 pb-3 pt-4 sm:pt-5">
          Aspiring Campus Partners
        </h2>
        {/* Mobile: 2 columns, Small devices: 3 columns, Medium+: 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 p-1 sm:p-4">
          {aspiringPartners.map((partner, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={partner}
                  alt={`Aspiring partner ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PartnersSection