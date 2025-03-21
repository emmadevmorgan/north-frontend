import React from "react";

interface IconProps { icon: React.ReactNode; }
export const Icon: React.FC<IconProps> = ({ icon }) => <span className="text-xl">{icon}</span>;
