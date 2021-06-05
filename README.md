# React TypeScript Starter

A custom React project template built on Webpack 5.

Note: You might not need this anymore as [CRA recently moved to Webpack 5](https://github.com/facebook/create-react-app/pull/10961).

## How to use this template

```bash
# Start development server
npm start

# Produce a production build
npm run build

# Execute test
npm test

# Execute test in watch mode
npm run watch
```

## Feature

### 1. Path alias

Shorter import is now possible with path alias. Instead of importing with

```typescript
import Card from "../../../../component/Card";
```

You can now do

```typescript
import Card from "@component/card";
```

as `@component` alias is registered in `tsconfig.json`, `webpack.config.json` and `jest.config.js`. New alias can be registered by adding similar value to these files.

### 2. Lint and test on commit

Upon commit, Prettier will reformat the staged files, following by executing a round of Jest test.

## Improvement

- CSS module
- eslint
