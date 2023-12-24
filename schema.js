import { GraphQLError } from "graphql";
import { createSchema } from "graphql-yoga";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    schema {
      query: Query
    }

    type Query {
      paginationWithInput(input: PaginationInput): PaginationResult!
      paginationWithArg(page: Int = 1): PaginationResult!
      paginationWithRequiredArg(page: Int! = 1): PaginationResult!
    }

    input PaginationInput {
      page: Int! = 1
    }

    type PaginationResult {
      total: Int
    }
  `,
  resolvers: {
    Query: {
      paginationWithInput: () => ({ total: 1 }),
      paginationWithArg: (_, { page }) => {
        if (typeof page !== "number")
          throw new GraphQLError("Page must be an integer");
        return { total: 1 };
      },
      paginationWithRequiredArg: () => ({ total: 1 }),
    },
  },
});
