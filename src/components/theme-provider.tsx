"use client";

import type { FC, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

interface Props extends ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemesProvider>
  );
};
