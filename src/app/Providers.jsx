"use client";

import { ThemeProvider } from "styled-components";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { makeStore } from "@/store";
import { useRef } from "react";

function Providers({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <AntdRegistry>{children}</AntdRegistry>;
    </Provider>
  );
}

export default Providers;
