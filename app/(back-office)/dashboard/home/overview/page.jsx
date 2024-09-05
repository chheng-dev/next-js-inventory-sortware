import React from 'react'
import SalesOverview from "../../../../../components/dashboard/home/SalesOverview";
import ProductDetailOverview from '../../../../../components/dashboard/home/ProductDetailOverview';
import OrderOverview from '../../../../../components/dashboard/home/OrderOverview';
import SaleOrderSummary from '../../../../../components/dashboard/home/SaleOrderSummary';


function Dashboard() {
  return (
    <div className='dashboard-section mt-6 p-6'>
      <SalesOverview />      
      <ProductDetailOverview />
      <OrderOverview />
      <SaleOrderSummary />
    </div>
  )
}

export default Dashboard
