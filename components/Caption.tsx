import cn from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
}

export default function Caption ({ className, children }: Props) {
  return (
    <div className={cn(
      "inline-flex items-center text-sm px-4 py-1 bg-gray-800 text-gray-300 rounded-full uppercase tracking-wider font-medium",
      className,
    )}>
      {children}
    </div>
  )
}