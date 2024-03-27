import {FaStar} from 'react-icons/fa'
type ratingsT = {
 className ?: string
 sold : number
}

const Ratings = ({className,sold}: ratingsT) => {
  return (
    <div className={`flex items-center justify-start mb-1 ${className}`}>
        {[1,2,3,4,5].map(itm =>
        <FaStar key={itm} className={`mr-1 w-3  text-dark`} />
        )}
    <span className={`ml-1`}>({sold})</span>
  </div>
  )
}

export default Ratings