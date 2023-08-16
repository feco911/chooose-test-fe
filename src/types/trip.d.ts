import { Emissions } from "./emissions";

export interface Trip{
    name: string;
    numberOfCountries: number;
    numberOfDays: number;
    rating: number;
    emissions: Emissions;
    imageUrl: string;
}