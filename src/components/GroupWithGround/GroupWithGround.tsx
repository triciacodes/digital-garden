import { FloralGroup } from "../FloralGroup/FloralGroup";
import { Ground } from "../Ground/Ground";

import "./GroupWithGround.css";

interface IGroupWithGroundProps {
  color: string;
  gap: number;
  quantity: number;
  svg: React.ReactNode;
}

export const GroupWithGround = ({
  color,
  gap,
  quantity,
  svg,
}: IGroupWithGroundProps) => {
  return (
    <div className="groupWithGroundContainer">
      <FloralGroup color={color} gap={gap} quantity={quantity} svg={svg} />
      <Ground backgroundColor={`var(--ground)`} />
    </div>
  );
};
