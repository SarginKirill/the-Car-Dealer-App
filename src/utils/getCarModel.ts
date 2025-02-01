import { CarResponse, ICarModel } from './types';

export async function GetCarModel(id: number | string, year: number | string) {
  const data = await fetch(
    `${process.env.API_PATH}${process.env.API_MODEL_PATH}/makeId/${id}/modelyear/${year}?format=json`
  );

  const models: CarResponse<ICarModel> = await data.json();

  return models.Results;
}
