export interface CityInterface {
  name: string;
  id: string;
}

export type WeatherDataQueryType = {
  getCityByName: WeatherDataType;
};

export type WeatherDataType = {
  name: string;
  weather: {
    summary: WeatherSummary;
    temperature: Temperature;
    clouds: Clouds;
  };
};

type WeatherSummary = {
  title: string;
  description: string;
  icon: string;
};

type Temperature = {
  actual: number;
};

type Clouds = {
  all: number;
};
