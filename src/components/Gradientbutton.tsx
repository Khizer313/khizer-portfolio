type GradientButtonProps = {
  text: string;
  link: string;
  className: string
};


const GradientButton: React.FC<GradientButtonProps> = ({text, link, className=''}) => {
  return (
    <>
        <a href={link} className={`btn uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-2 lg:py-3 rounded-full max-sm:text-lg ${className} `}>{text}</a>
    </>
  )
}

export default GradientButton