import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

//unitで使用するapiKey
export const client_unit = createClient({
  serviceDomain: process.env.UNIT_SERVICE_DOMAIN,
  apiKey: process.env.UNIT_API_KEY,
});
