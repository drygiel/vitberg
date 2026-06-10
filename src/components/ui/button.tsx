import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import './button.scss';

const buttonVariants = cva('group/button button', {
  variants: {
    variant: {
      default: 'button--default',
      outline: 'button--outline',
      secondary: 'button--secondary',
      ghost: 'button--ghost',
      destructive: 'button--destructive',
      link: 'button--link',
    },
    size: {
      default: 'button--size-default',
      xs: 'button--size-xs',
      sm: 'button--size-sm',
      lg: 'button--size-lg',
      icon: 'button--size-icon',
      'icon-xs': 'button--size-icon-xs',
      'icon-sm': 'button--size-icon-sm',
      'icon-lg': 'button--size-icon-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
