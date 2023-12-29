module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:@react-three/recommended"
  ],
  "plugins": ["@typescript-eslint", "react", "react-hooks", "import", "jest", "prettier", "@react-three"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "rules": {
      "curly": ["warn", "multi-line", "consistent"],
      "no-console": "off",
      "no-empty-pattern": "warn",
      "no-duplicate-imports": "error",
      "import/no-unresolved": "off",
      "import/export": "error",
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
      // We recommend you do not use the following import/* rules, as TypeScript provides the same checks as part of standard type checking:
      
      "jest/consistent-test-it": ["error", { "fn": "it", "withinDescribe": "it" }]
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"],
        "paths": ["src"]
      },
      "alias": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"],
        "map": [["@react-three/fiber", "./packages/fiber/src/web"]]
      }
    }
  },
  "overrides": [
    {
      "files": ["src"],
      "parserOptions": {
        "project": "./tsconfig.json"
      }
    }
  ],
  "rules": {
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/no-named-as-default-member": "off"
  }
}