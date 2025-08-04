import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// This creates the API endpoint from our FileRouter definition.
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});