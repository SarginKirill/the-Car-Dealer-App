import { ICarModel } from '@/utils/types';
import { FC, Suspense } from 'react';

type Props = {
  models: ICarModel[];
  year: string;
};

export const Card: FC<Props> = ({ models, year }) => {
  return (
    <div className="w-full mx-auto my-10 bg-zinc-200 p-6 rounded-lg shadow-lg space-y-4 max-h-max overflow-y-auto">
      <h1 className="text-xl font-semibold text-gray-800">
        Model: {models[0].Make_Name}
      </h1>
      <h2 className="text-lg text-gray-600">Year: {year}</h2>

      <h3 className="text-md font-medium text-gray-700">Models:</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense
          fallback={<p className="text-center text-gray-500">Loading...</p>}
        >
          {models.map((model, index) => (
            <li
              key={index}
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
            >
              {model.Model_Name}
            </li>
          ))}
        </Suspense>
      </ul>
    </div>
  );
};
