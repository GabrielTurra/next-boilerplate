'use client';

import { Alert, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found Page',
  description: 'Not Found Page'
};

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center max-w-xl mx-auto">
      <Alert variant={'destructive'}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>404 - Página não encontrada</AlertTitle>
      </Alert>
    </div>
  );
}
