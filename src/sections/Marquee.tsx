import star from '../assets/images/star.svg'

const Marquee = () => {
  return (
    <>
      <div className="overflow-hidden bg-white text-black pb-28 lg:pb-44">

        {/* Row 1 */}
        <div className="whitespace-nowrap animate-marquee text-4xl sm:text-5xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            React.JS <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            Redux Toolkit <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            NODE.JS <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            Next.JS <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            GSAP Animation <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            Tailwind <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
          </span>
        </div>

        {/* Row 2 (reverse) */}
        <div className="whitespace-nowrap animate-marquee-reverse text-4xl sm:text-5xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            React.JS <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            Redux Toolkit <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            NODE.JS <img src={star} alt="" className="marquee-star2 w-[7vw]" />
            Next.JS  <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            GSAP Animation <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            Tailwind <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
          </span>
        </div>
        
      </div>
    </>
  )
}

export default Marquee