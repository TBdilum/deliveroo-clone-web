import React, { useEffect } from "react";

type WithPageTitleProps = {
  children: React.ReactNode;
  title?: string;
};

function WithPageTitle({ children, title }: Readonly<WithPageTitleProps>) {
  useEffect(() => {
    const subtitle = title ? ` | ${title}` : "";
    document.title = `Deliveroo${subtitle}`;
  }, [title]);

  return <>{children}</>;
}

export default WithPageTitle;
