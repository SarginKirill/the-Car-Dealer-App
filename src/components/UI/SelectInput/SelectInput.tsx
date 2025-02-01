import { ChangeEvent, FC, PropsWithChildren } from 'react';

type Props = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectInput: FC<PropsWithChildren<Props>> = ({
  onChange,
  children,
}) => {
  return (
    <select
      defaultValue="select"
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white appearance-none"
    >
      <option value="select" disabled hidden>
        — Select an option —
      </option>
      {children}
    </select>
  );
};
