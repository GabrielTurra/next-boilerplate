import { ComponentProps } from 'react';

type InputLabelProps = ComponentProps<'span'>;

export const TextInputLabel: React.FC<InputLabelProps> = (props) => {
  return <span className="text-sm text-slate-500" {...props} />;
};
