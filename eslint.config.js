import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import noRelativeImportsPlugin from "eslint-plugin-no-relative-import-paths";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default tseslint.config(
  { ignores: ["dist"] },
  { languageOptions: { globals: globals.browser } },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.app.json",
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: pluginReact,
      import: importPlugin,
      "no-relative-import-paths": noRelativeImportsPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
        },
      ],
      "react/function-component-definition": [
        2,
        {
          namedComponents: "function-declaration",
        },
      ],
      "no-console": "error",
      "import/order": 2,
      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        {
          allowSameFolder: true,
        },
      ],
      "no-nested-ternary": 2,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
      "react/react-in-jsx-scope": "off",
    },
    ignores: ["vite-env.d.ts", "vite.config.ts"],
  },
);
