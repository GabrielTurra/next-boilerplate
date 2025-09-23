import { forwardRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export type TextInputControlProps = React.ComponentProps<'input'> & {
  type: 'text' | 'password' | 'email';
};

export const TextInputControl = forwardRef<HTMLInputElement, TextInputControlProps>(
  ({ className, type, ...props }, forwardedRef) => {
    const [inputType, setInputType] = useState(type);

    return (
      <>
        <input
          ref={forwardedRef}
          type={inputType}
          data-slot="input"
          className={cn(
            'flex-1 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 flex h-9 w-full min-w-0 bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow,ring] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
          )}
          {...props}
        />

        {type === 'password' && (
          <button
            type="button"
            className="cursor-pointer hover:[&_svg]:text-primary"
            onClick={() =>
              inputType === 'text' ? setInputType('password') : setInputType('text')
            }>
            {inputType === 'text' ? (
              <FaEye className="mx-auto transition-colors text-primary" size={15} />
            ) : (
              <FaEyeSlash className="mx-auto transition-colors" size={15} />
            )}
          </button>
        )}
      </>
    );
  }
);
