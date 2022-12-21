import { CountryBaseData } from "../../types";

export interface CountryDetails extends CountryBaseData {
  subregion: string;
  region: string;
  borders?: string[];
}
