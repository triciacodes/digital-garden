import { motion } from "framer-motion";

import "./OverlappingGroups.css";

interface IOverlappingGroupsProps {
  groups: React.ReactNode[];
  isGrowthStaggered?: boolean;
}

const variantsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerDirection: -1,
      staggerChildren: 0.4,
    },
  },
};

const variantsItem = {
  hidden: { y: "100%" },
  show: { y: 0 },
};

export const OverlappingGroups = ({
  groups,
  isGrowthStaggered = false,
}: IOverlappingGroupsProps) => {
  return (
    <motion.div
      className="overlappingGroupsContainer"
      variants={variantsContainer}
      initial={isGrowthStaggered ? "hidden" : "show"}
      animate={isGrowthStaggered ? "show" : ""}
    >
      {groups.map(
        (group): React.ReactNode => (
          <motion.div className="group" variants={variantsItem}>
            {group}
          </motion.div>
        )
      )}
    </motion.div>
  );
};
