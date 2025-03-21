import { InfoCard } from "@/components/molecules/InfoCard";
import { PieChartComponent } from "@/components/molecules/PieChartComponent";
import { Typography } from "@/components/atoms/Typography";
import { AwsSavingsOverview, SavingsByCategory } from "@/types";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";

interface DashboardOverviewProps {
  savingsByCategory: SavingsByCategory[] | undefined;
  overview: AwsSavingsOverview
}

export const DashboardOverview = ({ savingsByCategory, overview }: DashboardOverviewProps) => {
  if (!overview && !savingsByCategory) return;

  return (
    <div className="ml-[50px] pt-[25px]">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <div className="grid grid-rows-1">
            <div className="row-span-1"></div>
            <div className="row-span-1">
              <Typography text="Overview" className="text-4xl my-5 font-medium" />
              <div className="grid grid-cols-3 gap-4">
                <InfoCard title="Total Savings" value={overview.totalSavings} icon={<DollarSign />} />
                <InfoCard title="Current Month Savings" value={overview.currentMonthSavings} icon={<Calendar />} />
                <InfoCard title="Percentage Change" value={overview.percentageChange} icon={<TrendingUp />} />
              </div>
            </div>
            <div className="row-span-1"></div>
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <PieChartComponent data={savingsByCategory} />
        </div>
      </div>
    </div>
  );
};