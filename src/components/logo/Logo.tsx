import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/images/logo.svg';
const Logo: React.FC = React.memo(() => (
  <Link className="flex items-center gap-4" href={"/"}>
    <Image src={logo as string} alt="logo" width={50} height={50} />
    <p className="text-xl text-white leading-6 font-bold">ConnectTeam</p>
  </Link>
));

export default Logo;
