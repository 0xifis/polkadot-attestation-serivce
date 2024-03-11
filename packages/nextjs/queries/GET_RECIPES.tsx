import { gql } from "@apollo/client";
import { extractDataByKey } from "utils/graphql";

export const GET_RECIPES = gql`
  query Recipes($take: Int! = 25, $skip: Int! = 0) {
    attestations(
      take: $take
      skip: $skip
      where: { schemaId: { equals: "0xb8d7b7f2ea6f5e2086c5388a833175552f56c93f4e804a0e8223cfbdb07be614" } }
      orderBy: { time: desc }
    ) {
      id
      attester
      recipient
      refUID
      decodedDataJson
    }
  }
`;

interface Recipe {
  id: string;
  attester: string;
  recipient: string;
  refUID?: string;
  decodedDataJson: string;
  expectedOutcome?: any;
  schemaIds?: any[];
}

export const processRecipes = (recipes: Recipe[]): Recipe[] => {
  console.log(recipes);
  return recipes.map(recipe => {
    let decodedData;
    try {
      decodedData = JSON.parse(recipe.decodedDataJson);
    } catch (error) {
      console.error("Error parsing decodedDataJson", error);
      return { ...recipe, expectedOutcome: "Error parsing data", schemaIds: [] };
    }

    const expectedOutcome = extractDataByKey(decodedData, "EXPECTED_OUTCOME");
    const schemaIds = extractDataByKey(decodedData, "SCHEMA_ID");

    return {
      ...recipe,
      expectedOutcome: expectedOutcome || "No outcome found", // Fallback if not found
      schemaIds: schemaIds || [], // Fallback if not found
    };
  });
};
