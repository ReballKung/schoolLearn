export default {
  '*.{ts,js,mjs}': ['npx eslint --fix --no-warn-ignored', 'npx prettier --write'],
  '*.{json,md,yml,yaml}': ['npx prettier --write'],
};
