import { GetCarModels } from '@/utils/getCarModels';
import { getYears } from '@/utils/getYears';
import { FC, PropsWithChildren } from 'react';
import { Form } from '../Form/Form';

export const Filter: FC<PropsWithChildren> = async () => {
  const carModelsData = await GetCarModels();
  const years = getYears();

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Select Car:
      </h3>
      <Form models={carModelsData} years={years} />
    </div>
  );
};
