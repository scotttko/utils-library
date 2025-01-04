import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts", // Main entry
    "src/utils/index.ts", // Submodule
    "src/storage/index.ts", // Submodule
    "src/date/index.ts", // Submodule
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
});
