"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { makeStore } from "@/store";
import { useRef } from "react";
import StyledComponentsRegistry from "@/libs/registry";

function Providers({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <AntdRegistry>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </AntdRegistry>
    </Provider>
  );
}

export default Providers;
