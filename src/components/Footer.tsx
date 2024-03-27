import BoxSection from "@/layouts/BoxSection"
import Link from "next/link"
import navigation from "@/assets/footerNav"
import socialMedia from "@/assets/socialMedia"
import NavList from "@/components/NavList"
import NewsLetter from "@/components/NewsLetter"
import company from "@/assets/companyInfo"
// icons
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { SlLocationPin } from "react-icons/sl"

const SocialMedia = ({className}:{className?:string}) => {
    return(
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
        <h1 className="font-bold text-3xl tracking-wide">{company.name}</h1>
        <div className="flex flex-col gap-3 text-sm mt-8 text-dark">
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
        <BoxSection parentClass="border-t border-semiLight pt-10">
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="basis-2/3 flex flex-col gap-12 ss:flex-row">
              {/* section info */}
              <CompanyInfo />

              {/* section shop and more info */}
              <div className="basis-1/2">
                <div className="flex flex-col xs:flex-row gap-8">
                  < NavList className="basis-1/2 transition-all" title="Shop" list={navigation.shop} />
                  < NavList className="basis-1/2 transition-all" title="More Info" list={navigation.moreInfo} />
                </div>
              </div>

            </div>
            {/* newsletter */}
            <div className="basis-1/3 ">
              < NewsLetter />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col sm:flex-row sm:justify-between gap-8 mb-6 mt-12">
            {/* term */}
            <div className="w-fit text-sm tracking-wide text-semiDark order-last sm:order-first">
              <span>
              © 2023 GadgetAja. All Rights Reserved. 
              <Link href={`term`} className="text-dark underline cursor-pointer">Term of Use</Link>
               & 
              <Link href={`policy`} className="text-dark underline cursor-pointer">Privacy Policy</Link></span>
            </div>
            {/* social media */}
            < SocialMedia />
          </div>
        </BoxSection>      
    </footer>
  )
}


export default Footer