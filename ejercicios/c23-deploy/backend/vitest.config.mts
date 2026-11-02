import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";

// lee tu .env (POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB)
const env = loadEnv("test", process.cwd(), "");

export default defineConfig({
  test: {
    env: {
      JWT_SECRET: "secreto-solo-para-tests", // nunca el real
      // la DB de Docker se publica en localhost:5433 (el 5432 lo usa la DB del TP); así los tests corren en el host
      DATABASE_URL: `postgresql://${env.POSTGRES_USER ?? "postgres"}:${env.POSTGRES_PASSWORD ?? ""}@localhost:5433/${env.POSTGRES_DB ?? "libreria_db"}`,
    },
  },
});
