import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { SavingsByCategory } from "../../types";

const colors: string[] = ["#fc9f91", "#d591ff", "#9e91ff", "#78c8b9"];

interface PieChartComponentProps {
  data?: SavingsByCategory[] | null;
}

export const PieChartComponent = ({ data }: PieChartComponentProps) => {
  console.log("data:", data);

  const pieData =
    data && data.length > 0
      ? data.map((item, index) => ({
        name: item.service,
        value: item.savings,
        color: colors[index % colors.length],
      }))
      : [];

  return (
    <div className="flex justify-center items-center">
      {pieData.length > 0 ? (
        <PieChart width={400} height={290}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            startAngle={-420} // Rotate to the right
            endAngle={-40} // Ensures full circle with new starting point
            stroke="none"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      ) : (
        <p className="text-gray-600">No data available</p>
      )}
    </div>
  );
};
