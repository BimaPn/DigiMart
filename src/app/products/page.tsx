'use client'

import { useState } from "react"

const page = () => {
    const [visible,setVisible] = useState<boolean>(false);
  return (
    <div className="w-[600px] aspect-square bg-light border mx-auto relative">
        <button onClick={() => setVisible(prev => !prev)} className="px-4 py-1 bg-dark text-light rounded-xl mx-auto block">Click to open</button>
        <p className={`origin-top transition-transform`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid blanditiis accusantium neque fuga error perspiciatis voluptates libero aliquam vitae at facilis quasi rerum, aspernatur reiciendis? Sapiente, ipsa ratione sunt quis dolores ullam aliquam vel libero enim deserunt nobis necessitatibus blanditiis est dignissimos inventore odio earum, nam a laborum quam facilis dolore eos? Rem excepturi possimus cumque fuga laborum! Rem nulla fuga beatae iste officiis? Rerum asperiores perferendis facilis blanditiis iure necessitatibus illo ut omnis voluptates eum aliquid nihil cupiditate sint quasi itaque iste aut, illum assumenda quod harum! Cumque dolor perferendis fugiat nobis non aliquam reiciendis deleniti? Maiores, nostrum!</p>
        <div onClick={() => setVisible(prev => !prev)} className={`${visible ? 'block bg-black/10' : 'hidden'} absolute inset-0 z-[998]`}></div>
        <div className={`w-1/5 bg-dark absolute top-0 bottom-0 left-0 ${visible ? 'translate-x-0' : '-translate-x-full'} sidebar-transition z-[999]`}>
        <button onClick={() => setVisible(prev => !prev)} className="px-4 py-1 bg-light text-dark rounded-xl mx-auto block">Close</button>

        </div>
        <div className="w-[200px] hover:w-[250px] aspect-square border border-dark dropdown-parent-transition">

        </div>
    </div>
  )
}

export default page