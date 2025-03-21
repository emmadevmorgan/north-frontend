import { DetailedSaving, SavingsTrend } from "@/types";
import { BarChartComponent } from "@/components/molecules/BarChartComponent";
import { LineChartComponent } from "@/components/molecules/LineChartComponent";

interface DashboardChartsProps {
  savingsTrend: SavingsTrend[] | undefined;
  detailedSaving: DetailedSaving[] | undefined
}

export const DashboardCharts = ({ savingsTrend, detailedSaving }: DashboardChartsProps) => (
  < div className="grid grid-cols-2 mt-3" >
    {savingsTrend && <BarChartComponent detailedSaving={detailedSaving} />}
    {detailedSaving && <LineChartComponent savingsTrends={savingsTrend} />}
  </div >
)