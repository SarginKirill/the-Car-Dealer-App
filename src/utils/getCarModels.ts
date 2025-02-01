import { CarResponse, ICar } from './types';

export async function GetCarModels(): Promise<ICar[]> {
  const data = await fetch(
    `${process.env.API_PATH}${process.env.API_MODELS_PATH}`
  );

  const models: CarResponse<ICar> = await data.json();

  return models.Results;
}
