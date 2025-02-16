'use client';

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
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center max-w-2xl mx-auto">
      <Alert variant={'destructive'}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Nos desculpe, essa página não está funcionando corretamente.</AlertTitle>
        <AlertDescription>
          Você pode retornar a página inicial, em breve corrigiremos isso.
        </AlertDescription>
      </Alert>
    </div>
  );
}
