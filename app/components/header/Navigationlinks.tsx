import Link from "next/link";
import React from "react";

type navLinksType = {
  title: string;
  route: string;
};
const Navigationlinks = (props: navLinksType) => {
  const { title, route } = props;
  return (
    <Link href={route} className="mx-2">
      {title}
    </Link>
  );
};

export default Navigationlinks;
