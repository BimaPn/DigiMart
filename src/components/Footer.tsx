import BoxSection from "@/layouts/BoxSection"
import Link from "next/link"
import navigation from "@/assets/footerNav"
import socialMedia from "@/assets/socialMedia"
import FooterNavList from "@/components/FooterNavList"
import NewsLetter from "@/components/NewsLetter"
import company from "@/assets/companyInfo"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { SlLocationPin } from "react-icons/sl"

const SocialMedia = ({className}:{className?:string}) => {
  return (
    <div className={`flex items-center gap-8 ${className}`}>
      {socialMedia.map(item => (
        <Link key={item.link} href={item.link} className="text-3xl">{item.icon}</Link>
      ))}
    </div>
  )
}
const CompanyInfo = () => {
    return(
      <div className="basis-1/2 font-roboto tracking-wide">
        <h1 className="font-bold text-2xl xs:text-3xl tracking-wide">{company.name}</h1>
        <div className="flex flex-col gap-3 text-sm mt-5 xs:mt-8 text-dark">
          <div className="flex gap-2">
            < BsTelephone className="text-[16px]" />
            <span>{company.phone_number}</span>
          </div>
          <div className="flex gap-2">
            < AiOutlineMail className="text-[16px] "/>
            <span>{company.email}</span>
          </div>
          <div className="flex gap-2">
            < SlLocationPin className="text-[16px]" />
            <span>{company.address}</span>
          </div>
        </div>
      </div>
    )
}

const Footer = ({className}:{className ?:string}) => {
  return (
    <footer className={className}>
      <BoxSection parentClass="border-t border-semiLight pt-6 xs:pt-10">
        <div className="flex gap-5 xs:gap-8 flex-col md:flex-row">
          <div className="basis-2/3 flex flex-col gap-5 xs:gap-12 ss:flex-row">
            <CompanyInfo />
            <div className="basis-1/2">
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-8">
                <FooterNavList className="basis-1/2 transition-all" title="Shop" list={navigation.shop} />
                <FooterNavList className="basis-1/2 transition-all" title="Navigations" list={navigation.moreInfo} />
              </div>
            </div>

          </div>
          <div className="basis-1/3 ">
            < NewsLetter />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row sm:justify-between gap-8 mb-6 mt-8 xs:mt-12">
          <div className="w-fit text-sm tracking-wide text-semiDark order-last sm:order-first text-center xs:text-start">
            <span>
            © 2024 Roboton. All Rights Reserved. 
            <span className="text-dark underline cursor-pointer px-[6px]">Term of Use</span>
             & 
            <span className="text-dark underline cursor-pointer px-[6px]">Privacy Policy</span></span>
          </div>
          < SocialMedia />
        </div>
      </BoxSection>      
    </footer>
  )
}


export default Footer
