import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex">
      <Image src={"/logo.png"} height={60} width={40} alt="logo" />
      <h3 className="text-green-400 text-xl font-bold">Bingo</h3>
    </div>
  );
};

export default Logo;
