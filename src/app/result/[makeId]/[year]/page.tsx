import { GetCarModel } from '@/utils/getCarModel';
import { GetCarModels } from '@/utils/getCarModels';
import { getYears } from '@/utils/getYears';
import { Suspense } from 'react';

type Car = {
  Model_Name: string;
};

export async function generateStaticParams() {
  const models = await GetCarModels();
  const years = getYears();

  const paramsList = models.flatMap((model) =>
    years.map((year) => ({
      makeId: model.MakeId.toString(),
      year: year.toString(),
    }))
  );

  return paramsList;
}

export default async function Page({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = await params;

  const models = (await GetCarModel(makeId, year)) as unknown as Car[];
  return (
    <div>
      <h1>Model ID: {makeId}</h1>
      <h2>Year: {year}</h2>
      <ul>
        <Suspense fallback={<p>Loading...</p>}>
          {models.map((model, index) => (
            <li key={index}>{model.Model_Name}</li>
          ))}
        </Suspense>
      </ul>
    </div>
  );
}
