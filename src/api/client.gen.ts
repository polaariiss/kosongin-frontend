import { createClient } from "@hey-api/client-fetch";

export const client = createClient({
  baseUrl: "https://kosongin-backend-production.up.railway.app",
});