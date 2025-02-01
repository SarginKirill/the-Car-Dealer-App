import { Card } from '@/components/Card/Card';
import { GetCarModel } from '@/utils/getCarModel';
import { GetCarModels } from '@/utils/getCarModels';
import { getYears } from '@/utils/getYears';

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

  const models = await GetCarModel(makeId, year);

  return (
    <>
      <Card models={models} year={year} />
    </>
  );
}
