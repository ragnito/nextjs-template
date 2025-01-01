"use client";

import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export function ClientProviders({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <NextUIProvider navigate={(url) => router.push(url)}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        enableSystem={true}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
