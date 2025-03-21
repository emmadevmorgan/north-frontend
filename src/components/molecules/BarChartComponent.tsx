import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { DetailedSaving } from "@/types";
import dayjs from "dayjs";

interface BarChartComponentProps {
  detailedSaving: DetailedSaving[] | undefined;
}

const colors: Record<string, string> = {
  EC2: "#d591fe",
  S3: "#8A8AFF",
  RDS: "#8FC1A9",
  Lambda: "#F4A79D",
};

interface TransformedData {
  date: string;
  [key: string]: string | number;
}

const transformData = (detailedSaving: DetailedSaving[] | undefined): TransformedData[] =>
  detailedSaving?.reduce<TransformedData[]>((acc, { date, service, amount }) => {
    let entry = acc.find((item) => item.date === dayjs(date, 'YYYY-MM-DD').format('MMM-DD'));

    if (!entry) {
      entry = { date: dayjs(date, 'YYYY-MM-DD').format('MMM-DD') };
      acc.push(entry);
    }

    entry[service] = amount;
    return acc;
  }, []) || [];

export const BarChartComponent = ({ detailedSaving }: BarChartComponentProps) => {
  const data = transformData(detailedSaving);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
        <XAxis dataKey="date" fontSize={15} />
        <YAxis axisLine={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="EC2" stackId="a" fill={colors.EC2} radius={[10, 10, 0, 0]} />
        <Bar dataKey="S3" stackId="a" fill={colors.S3} radius={[10, 10, 0, 0]} />
        <Bar dataKey="RDS" stackId="a" fill={colors.RDS} radius={[10, 10, 0, 0]} />
        <Bar dataKey="Lambda" stackId="a" fill={colors.Lambda} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
