"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeAnalytics } from '@/lib/firebase';
import type { Analytics, logEvent } from 'firebase/analytics'; // Import types

export function FirebaseAnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let analyticsInstance: Analytics | null = null;
    let logEventFunction: typeof logEvent | null = null;
    
    const initAnalytics = async () => {
      analyticsInstance = await initializeAnalytics();
      if (analyticsInstance) {
        // Dynamically import logEvent as it depends on the analytics instance
        const { logEvent: firebaseLogEvent } = await import('firebase/analytics');
        logEventFunction = firebaseLogEvent;
      }
    };
    initAnalytics();

    return () => {
      // Cleanup if needed
    };
  }, []);


  useEffect(() => {
    const trackPageView = async () => {
      const analytics = await initializeAnalytics(); // Ensure analytics is initialized
      if (analytics) {
        const { logEvent: firebaseLogEvent } = await import('firebase/analytics');
        const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
        firebaseLogEvent(analytics, 'page_view', {
          page_path: url,
          page_title: document.title,
        });
      }
    }

    if (pathname) { // Ensure pathname is available
      trackPageView();
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
