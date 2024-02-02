
import { Suspense } from "react";
import { fetchLatestInvoices } from "../lib/data";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "../ui/skeletons";

export default async function DashboardPage() {
  //const revenue = await fetchRevenue()
  //const latestInvoices = await fetchLatestInvoices()
  return (
    <main>
      <p>🚧Estamos currando en la dashboard🚧</p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices/>
        </Suspense>
        
       
      </div>
    </main>
  )
}