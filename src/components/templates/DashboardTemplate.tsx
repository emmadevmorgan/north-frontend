import { AwsSavingsData, DetailedSaving, SavingsByCategory, SavingsTrend } from "@/types";
import { DashboardCharts } from "@/components/organisms/DashboardCharts";
import { DashboardOverview } from "@/components/organisms/DashboardOverview";

interface DashboardTemplateProps {
  awsData: AwsSavingsData | undefined;
}

export const DashboardTemplate = ({ awsData }: DashboardTemplateProps) => {
  const savingsByCategory: SavingsByCategory[] | undefined = awsData?.savingsByCategory
  const savingsTrend: SavingsTrend[] | undefined = awsData?.savingsTrends
  const detailedSavings: DetailedSaving[] | undefined = awsData?.detailedSavings

  if (!awsData) return

  return (
    <div>
      <header className="text-2xl pt-0 pl-4 drop-shadow-2xl text-black bg-gradient-to-r from-[#d591fe] to-[#ebd1fe] h-[70px] flex items-center">
        <img src="./north.svg" alt="Company Logo" className="h-8" />
      </header>
      <div className=" bg-purple-100 m-0 min-h-screen">
        <DashboardOverview
          savingsByCategory={savingsByCategory}
          overview={awsData.overview}
        />
        <DashboardCharts savingsTrend={savingsTrend} detailedSaving={detailedSavings} />
      </div>
    </div>
  )
};