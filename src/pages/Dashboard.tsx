import { useEffect, useState } from "react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import fetchData from "@/services/fetchAwsData";
import { AwsSavingsData } from "@/types";

export const Dashboard = () => {
  const [data, setData] = useState<AwsSavingsData | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      if (result) setData(result);
    };

    getData();
  }, []);

  return <DashboardTemplate awsData={data} />;
};
