'use client';

import * as Sentry from '@sentry/nextjs';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center max-w-xl mx-auto">
      <Alert variant={'destructive'}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Nos desculpe, essa página não está funcionando corretamente.</AlertTitle>
        <AlertDescription>
          Você pode retornar a página inicial, em breve corrigiremos isso.
          <button
            className="bg-red-500 text-primary-foreground px-2 py-1 my-2 cursor-pointer rounded"
            type="button"
            onClick={() => reset()}>
            Recarregar página
          </button>
        </AlertDescription>
      </Alert>
    </div>
  );
}
