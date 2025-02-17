'use client';

import Clarity from '@microsoft/clarity';
import { publicEnv } from '@/config/public-env.mjs';
import { useEffect } from 'react';

interface IClarityConfig {
  children: React.ReactNode;
}

export const ClarityConfig = ({ children }: IClarityConfig) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      Clarity.init(publicEnv.NEXT_PUBLIC_CLARITY_ID);
    }
  }, []);

  return <>{children}</>;
};
