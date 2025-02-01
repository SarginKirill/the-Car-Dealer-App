import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

type Props = LinkProps & {
  disabled?: boolean;
};

export const LinkButton: FC<PropsWithChildren<Props>> = ({
  children,
  disabled = false,
  ...rest
}) => {
  return (
    <Link
      className={`w-full py-3 px-6 bg-indigo-500 text-white font-semibold text-center rounded-lg shadow-md hover:bg-indigo-600 disabled:bg-gray-300 transition-all duration-300 ease-in-out ${
        disabled ? 'pointer-events-none' : ''
      }`}
      {...rest}
    >
      {children}
    </Link>
  );
};
