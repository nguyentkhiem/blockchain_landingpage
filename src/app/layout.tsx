import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Gochi_Hand } from "next/font/google";
import "@/styles/globals.scss";
import { ConfigProvider, ThemeConfig } from "antd";

const GochiHand = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gochi",
});

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    fontFamily: "var(--font-gochi)",
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" className={GochiHand.className}>
    <body
      suppressHydrationWarning={true}
      style={{
        margin: 0,
      }}
    >
      <AntdRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
