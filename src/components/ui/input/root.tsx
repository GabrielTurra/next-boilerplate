import { ComponentProps } from 'react';

type InputRootProps = ComponentProps<'div'>;

export const TextInputRoot: React.FC<InputRootProps> = ({ ...props }) => {
  return <div className="text-left" {...props} />;
};
