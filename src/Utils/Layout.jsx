import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";

export const Layout = ({
  title = "Online | Hotel Booking App",
  className,
  children,
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <main>
      <Navbar />
      <section>
        <div className={className}>{children}</div>
      </section>
    </main>
  );
};
