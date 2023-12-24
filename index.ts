import { createClient } from "./client";

const client = createClient();

client
  .query({ paginationWithInput: { total: 1 } })
  .then((r) => console.log("paginationWithInput", r.paginationWithInput.total));
client
  .query({ paginationWithArg: { total: 1 } })
  .then((r) => console.log("paginationWithArg", r.paginationWithArg.total));
client
  .query({ paginationWithRequiredArg: { total: 1 } })
  .then((r) =>
    console.log("paginationWithRequiredArg", r.paginationWithRequiredArg.total)
  );
