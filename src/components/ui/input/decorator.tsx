import { IconType } from 'react-icons/lib';

export type TextInputDecoratorProps = {
  Icon: IconType;
};

function TextInputDecorator({ Icon }: TextInputDecoratorProps) {
  return (
    <div className="mx-1">
      <Icon size={15} />
    </div>
  );
}

export { TextInputDecorator };
