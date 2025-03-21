import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, LabelList, AreaChart } from 'recharts';
import { SavingsTrend } from '../../types';

interface LineChartComponentProps {
  savingsTrends: SavingsTrend[] | undefined;
}

export const LineChartComponent = ({ savingsTrends }: LineChartComponentProps) => {
  return <>
    {savingsTrends &&
      <div className="bg-purple-100 rounded-xl mr-10">
        <ResponsiveContainer width={660} height={400}>
          <AreaChart data={savingsTrends} margin={{ top: 10, right: 20, left: 1, bottom: 20 }}>
            <defs>
              <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d946ef" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#d946ef" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tickFormatter={(tick) => tick.substring(0, 3)} fontSize={15} />
            <YAxis domain={[0, 300]} fontSize={12} axisLine={false} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Area
              type="linear"
              dataKey="savings"
              fill="#d946ef"
              stroke="black"
              fillOpacity={0.1}
              strokeWidth={1}
              dot={{ fill: 'white', r: 4, stroke: 'magenta', strokeWidth: 1.5 }}
            >
              <LabelList dataKey="savings" position="top" fill="black" fontSize={11} />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>}
  </>
};