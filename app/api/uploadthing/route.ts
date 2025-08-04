import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// This creates the API endpoint from our FileRouter definition.
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});