import { gql } from '@apollo/client'

export const THERAPIST = gql`
  query therapist($id: String!) {
    therapist(id: $id) {
      ... on Therapist {
        availability {
          start
          end
        }
        displayName
        bio
        districts
      }
    }
  }
`;
