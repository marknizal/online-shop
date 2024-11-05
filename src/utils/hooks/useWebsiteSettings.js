import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query websiteSettings {
    websiteSettings(first: 1000) {
      id
      imgValue {
        url
      }
      renderValue {
        html
        text
      }
    }
  }
`;

const useWebsiteSettings = () => {
  const { data, loading, error } = useQuery(QUERY);

  return {
    getSettings: (id) => {
      const field = data?.websiteSettings.find((setting) => setting.id === id);
      return field?.renderValue?.html || field?.imgValue?.url || id;
    },
    loading,
    error,
  };
};

export default useWebsiteSettings;
