import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";

const Logo: React.FC = React.memo(() => (
  <Link href={"/"}>
    <Image src={logo as string} alt="logo" width={185} height={50} />
  </Link>
));

export default Logo;
