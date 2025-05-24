import type { FC, ReactNode } from "react";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 md:mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent py-2">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
