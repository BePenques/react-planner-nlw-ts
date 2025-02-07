import { ComponentProps, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200  hover:bg-zinc-700',
    },
    size: {
      default: 'py-2',
      full: 'w-full h11',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  variant: 'primary' | 'secondary'
  size?: 'default' | 'full'
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}
