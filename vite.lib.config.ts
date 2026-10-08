import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: resolve(
        import.meta.dirname,
        "src/angular-entry.tsx"
      ),
      formats: ["es"],
      fileName: "react-login",
      cssFileName: "react-login"
    }
  }
});