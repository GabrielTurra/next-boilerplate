import { ComponentProps } from 'react';

type InputErrorProps = ComponentProps<'pre'>;

export const TextInputError: React.FC<InputErrorProps> = ({ className, ...props }) => {
  return <pre className={`h-5 text-sm text-red-600 ${className}`} {...props} />;
};
