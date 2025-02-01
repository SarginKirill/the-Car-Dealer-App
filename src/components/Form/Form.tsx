'use client';
import { ICar } from '@/utils/types';
import { ChangeEvent, FC, useState } from 'react';
import { SelectInput } from '../UI/SelectInput/SelectInput';
import { LinkButton } from '../UI/LinkButton/LinkButton';

type Props = {
  models: ICar[];
  years: string[];
};

export const Form: FC<Props> = ({ models, years }) => {
  const [modelId, setModelId] = useState<null | string>(null);
  const [year, setYear] = useState<null | string>(null);

  const onModelHandler = (event: ChangeEvent<HTMLSelectElement>) =>
    setModelId(event.target.value);

  const onYearHandler = (event: ChangeEvent<HTMLSelectElement>) =>
    setYear(event.target.value);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <SelectInput onChange={onModelHandler}>
        <option value="" disabled>
          Select Car Model
        </option>
        {models.map((option) => (
          <option key={option.MakeId} value={option.MakeId}>
            {option.MakeName}
          </option>
        ))}
      </SelectInput>

      <SelectInput onChange={onYearHandler}>
        <option value="" disabled>
          Select Year
        </option>
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>

      <LinkButton
        disabled={!modelId || !year}
        href={`/result/${modelId}/${year}`}
      >
        Next
      </LinkButton>
    </div>
  );
};
