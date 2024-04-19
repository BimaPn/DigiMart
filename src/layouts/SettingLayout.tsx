import SettingSidebar, { MobileSettingNavigation } from "@/components/SettingSidebar"

const SettingLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="md:w-[1024px] w-full mx-auto flex justify-center gap-4 md:gap-12 mt-8 relative pb-32 sm:pb-36 ss:px-3 md:px-0">
      <aside className="w-fit md:w-[20%] sticky top-20 h-fit xs:block hidden px-4 md:px-0 border-r md:border-0">
        <SettingSidebar />
      </aside>
      <div className="w-full md:basis-[77%] px-3">
        <MobileSettingNavigation />
        {children}
      </div>
    </section>
  )
}

export default SettingLayout
