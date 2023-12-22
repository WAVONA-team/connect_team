import React from "react";
import Link from "next/link";

const Logo: React.FC = React.memo(() => (
  <Link className="flex items-center gap-4" href={"/"}>
    <div className="h-8 w-8 rounded border border-white" />

    <p className="text-xl text-white leading-6">ConnectTeam</p>
  </Link>
));

export default Logo;
