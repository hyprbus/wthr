export type WeatherDataQueryType = {
  getCityByName: WeatherDataType;
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

export type WeatherDataType = {
  name: string;
  weather: {
    summary: WeatherSummary;
    temperature: Temperature;
    clouds: Clouds;
  };
};
