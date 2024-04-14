import OrderListContent from "@/components/OrderListContent"
import CancelledBadge from "@/components/badge/CancelledBadge"
import FinishedBadge from "@/components/badge/FinishedBadge"
import OnDeliveryBadge from "@/components/badge/OnDeliveryBadge"

const page = () => {
  return (
    <div className="w-full mb-16">
      <span className="inline-block font-medium text-2xl mb-3">Order List</span>
      <OrderListContent /> 
    </div>
  )
}

export default page 
