import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  isDisabled?: boolean;
  link?: string;
  title: string;
  number?: number;
};

const DropDownLink: React.FC<Props> = React.memo(
  ({ image, isDisabled, link, title, number }) => (
    <>
      {!link || isDisabled ? (
        <div className=" flex h-12 w-96 flex-row items-center gap-2 bg-secondary-cadet-grey px-5 py-3 text-onPrimary-lavender">
          <Image
            src={image}
            alt={title}
            width={36}
            height={36}
            className=" rounded-full "
          ></Image>
          <p>{title}</p>
          <div className=" rounded-full bg-accent-green-yellow px-2 text-black">
            <p>{number}</p>
          </div>
        </div>
      ) : (
        <Link
          href={link}
          className=" flex h-12  w-96 flex-row items-center gap-2 bg-transparent px-5 py-3 text-onPrimary-anti-flash-withe hover:bg-primary-majorelle-blue active:bg-primary-button-fill"
        >
          <Image src={image} alt={title} width={36} height={36}></Image>
          <p>{title}</p>
          <div className=" rounded-full bg-accent-green-yellow px-2 text-black">
            <p>{number}</p>
          </div>
        </Link>
      )}
    </>
  ),
);

export default DropDownLink;
