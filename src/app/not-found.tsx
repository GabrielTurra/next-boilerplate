import type { Metadata } from 'next';
import { Alert, AlertTitle } from '@/components/ui/alert';

export const metadata: Metadata = {
  title: 'Not Found Page',
  description: 'Not Found Page'
};

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center max-w-xl mx-auto">
      <Alert variant={'destructive'}>
        <AlertTitle>404 - Página não encontrada</AlertTitle>
      </Alert>
    </div>
  );
}
