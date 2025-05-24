"use client";

import React, { useEffect, Suspense } from "react"; // Import Suspense
import { usePathname, useSearchParams } from "next/navigation";
import { initializeAnalytics } from "@/lib/firebase";
import type { Analytics } from "firebase/analytics"; // logEvent type can be imported dynamically

// New component to encapsulate hooks and tracking logic
function AnalyticsPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const trackPageView = async () => {
      const analytics = await initializeAnalytics();
      // Ensure analytics is initialized and pathname is available
      if (analytics && pathname) {
        try {
          // Dynamically import logEvent as it depends on the analytics instance
          const { logEvent: firebaseLogEvent } = await import(
            "firebase/analytics"
          );
          const SParams = searchParams.toString(); // Get string representation of searchParams
          const url = `${pathname}${SParams ? `?${SParams}` : ""}`;

          firebaseLogEvent(analytics, "page_view", {
            page_path: url,
            page_title: document.title, // document.title is safe here as useEffect runs client-side
          });
        } catch (error) {
          console.error("Firebase Analytics: Error logging page_view:", error);
        }
      }
    };

    trackPageView();
  }, [pathname, searchParams]); // Re-run effect when pathname or searchParams change

  return null; // This component does not render any UI
}

export function FirebaseAnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Effect for one-time initialization if needed, though initializeAnalytics is idempotent
  useEffect(() => {
    const init = async () => {
      await initializeAnalytics();
    };
    init();
  }, []);

  return (
    <>
      {children}
      {/* Wrap the hook-dependent component in Suspense */}
      <Suspense fallback={null}>
        <AnalyticsPageViewTracker />
      </Suspense>
    </>
  );
}
