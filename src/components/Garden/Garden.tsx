import { React } from "react";
import { motion } from "framer-motion";

import { Ground } from "../Ground/Ground";
import { OverlappingGroups } from "../OverlappingGroups/OverlappingGroups";
import { Sky } from "../Sky/Sky";

import { TMixBlendMode } from "../../types";

import "./Garden.css";

interface IGardenProps {
  groups: React.ReactNode[];
  hasGround?: boolean;
  hasGroundDecoration?: boolean;
  hasSky?: boolean;
  isGrowthStaggered?: boolean;
  mixBlendMode?: TMixBlendMode;
}

export const Garden = ({
  groups,
  hasGround,
  hasGroundDecoration,
  hasSky,
  isGrowthStaggered = false,
  mixBlendMode,
}: IGardenProps) => {
  return (
    <div>
      <motion.div
        initial={false}
        animate={hasSky ? { y: 0, opacity: 1 } : { y: "-30vh", opacity: 0 }}
      >
        <Sky color={"var(--color-sky-circle)"} />
      </motion.div>

      <motion.div
        className="gardenContainer"
        initial={false}
        animate={hasGround ? { y: 0 } : { y: "10vh" }}
      >
        <div className="gardenGroups" style={{ mixBlendMode }}>
          <OverlappingGroups
            groups={groups}
            isGrowthStaggered={isGrowthStaggered}
          />
        </div>

        <div className="gardenGround">
          <Ground
            backgroundColor={`var(--ground)`}
            hasDecoration={hasGroundDecoration}
          />
        </div>
      </motion.div>
    </div>
  );
};
