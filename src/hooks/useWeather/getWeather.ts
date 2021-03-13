import { gql } from 'graphql-request';

export const getWeather = gql`
  query GetCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
        }
        clouds {
          all
        }
      }
    }
  }
`;
