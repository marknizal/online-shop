import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query websiteSettings {
    websiteSettings(first: 1000) {
      id
      fieldKey
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
    getSettings: (fieldKey) => {
      const field = data?.websiteSettings.find(
        (setting) => setting.fieldKey === fieldKey
      );

      return field?.renderValue?.html || field?.imgValue?.url || fieldKey;
    },
    loading,
    error,
  };
};

export default useWebsiteSettings;
