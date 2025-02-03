import React from "react";

const Badge = ({ badgeT, className }) => {
  return (
    <div
      className={`py-[12px] px-[30px] bg-black text-white text-sm font-bold ${className}`}
    >
      {badgeT}
    </div>
  );
};

export default Badge;
