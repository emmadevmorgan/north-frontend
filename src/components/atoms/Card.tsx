import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-[#e9d5f6] shadow-md p-4 rounded-lg">{children}</div>
);