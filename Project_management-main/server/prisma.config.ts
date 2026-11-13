import { defineConfig } from "prisma/config";

export default defineConfig({
  datasource: {
    url: "postgresql://neondb_owner:npg_NalE5Jyhr8dO@ep-quiet-tree-ailpfql4-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
