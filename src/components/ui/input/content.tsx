import { cn } from '@/lib/utils';

export type TextInputRootProps = React.ComponentProps<'div'>;

function TextInputContent({ className, ...props }: TextInputRootProps) {
  return (
    <div
      className={cn(
        'px-3 flex flex-nowrap items-center border transition-[color,box-shadow,ring] border-zinc-300 rounded-lg has-[input:focus]:border-primary/50 has-[input:focus]:ring-2 has-[input:focus]:ring-primary/50 has-[input:focus]:[&_svg]:text-primary',
        className
      )}
      {...props}
    />
  );
}

export { TextInputContent };
