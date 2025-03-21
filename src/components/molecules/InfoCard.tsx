import { Card } from "../atoms/Card";
import { Typography } from "../atoms/Typography";
interface InfoCardProps { title: string; value: string | number; icon: React.ReactNode; }
export const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => (
  <Card>
    <div className="flex items-center text-lg gap-3">
      {icon}
      <div>
        <Typography text={title} />
        <Typography text={String(value)} className="text-xl font-semibold" />
      </div>
    </div>
  </Card>
);