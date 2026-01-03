import type { Metadata } from "next";
import Image from "next/image";

import "./globals.css";

export const metadata: Metadata = {
  title: "JEE Assessment Project",
  description: "Assessment project for IT Recruitment at Junior Enterprises Europe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="siteHeaderInner">
            <div className="siteHeaderRight">
              <div className="siteHeaderLogo">
                <Image
                  src="/assets/images/jee-logo.png"
                  alt="Junior Enterprises Europe (JEE) logo"
                  fill
                  priority
                  sizes="160px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
