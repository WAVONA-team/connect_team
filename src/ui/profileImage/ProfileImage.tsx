import React from "react";
import Image from "next/image";
import avatar from "../../../public/images/avatar.svg";
type Props = {
  imageSrc: string;
  alt: string;
};

const ProfileImage: React.FC<Props> = React.memo(({ imageSrc, alt }) => (
  <>
    {imageSrc ? (
      <Image
        src={imageSrc}
        alt={alt}
        width={204}
        height={204}
        className=" rounded-lg"
      />
    ) : (
      <Image src={avatar as string} alt={alt} width={204} height={204} />
    )}
  </>
));

export default ProfileImage;
