export interface ICar {
  MakeId: number;
  MakeName: string;
}
export interface ICarModel {
  Model_Name: string;
  Make_Name: string;
}

export interface CarResponse<T> {
  Results: T[];
}
