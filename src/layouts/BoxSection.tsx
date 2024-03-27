type BoxSectionT = {
    children : React.ReactNode,
    className ?: string,
    parentClass?:string,
    sectionColor?:string
}

const BoxSection = ({children,className,parentClass,sectionColor}:BoxSectionT) => {
    return(
    <section className={`${parentClass} w-full flexCenter px-3 sm:px-6`} style={{ backgroundColor: sectionColor }}>
        <div className={`boxWidth ${className}`}>
          {children}
        </div>
    </section>
    )
}
type HeaderT = {
    title:string,
    link?:string,
    className?:string
}
const Header = ({title,link,className}:HeaderT) => {
    return(
      <div className={`flexBetween mb-8 ${className}`}>
        <h1 className={`text-2xl font-bold`}>{title}</h1>
        {link && (
          <a href={link} className='font-bold'>View All</a>
        )}
      </div>
    )
  }
  
BoxSection.Header = Header
export default BoxSection
