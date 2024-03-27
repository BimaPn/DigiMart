'use client'
import {useState} from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
const MoreDetail = () => {
  const [isDrop,setIsDrop] = useState<boolean>(false)
  return (
    <div>
        <button onClick={() => setIsDrop(prev => !prev)} className='w-full flexBetween border-t py-4 '>
            <span className='text-lg'>More Detail</span>
            < MdOutlineArrowForwardIos className={`transition-all text-base ${isDrop && 'rotate-90'}`}/>
        </button>
        <div className={`${isDrop ? 'h-full' : 'h-0'} dropdown-parent-transition overflow-hidden`}>
            <div className={`${isDrop ? 'traslate-y-0 ' : '-translate-y-full'} mt-2 mb-10 origin-top dropdown-transition`}>              
              <p className='whitespace-pre-wrap leading-7 text-base'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in, nisi eum laboriosam deserunt iure, maioreest at labore fugiat sint ullam. Corporis iusto beatae asperiores veritatis temporibus voluptatibus et perfofficiis molestias nihil necessitatibus. Excepturi molestiae in cupiditate autem. Corporis debitis hic aarchitecto quis enim totam cupiditate! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernaturcorporis nobis possimus, dolore corrupti quo veniam eum neque tempora soluta, atque ipsum ut eveniet officiicumque obcaecati omnis voluptatem ullam. Optio accusamus voluptatum neque labore aliquam voluptates magnireiciendis, veniam quisquam sint esse. Ab in quaerat iusto?Lorem ipsum dolor sit amet consectetur adipisiciFugiat non dolorum sequi possimus itaque quo neque hic facere velit ipsam doloremque quidem, inventortempora, dolores dicta cumque eum fuga exercitationem dolore sed! Voluptatibus doloremque corrupti consratione modi iste, neque illum dolorem tempore temporibus sed, eius vero dolor dolorum!
              </p>
            </div>
        </div>
    </div>
  )
}

export default MoreDetail