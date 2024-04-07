declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PORT: number;
      NODE_ENV?: "development" | "production";
      MONGO_URL: string;
      DB_NAME: string;
    }
  }
}

export {};
