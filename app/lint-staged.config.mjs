export default {
  '*.{ts,js,mjs,vue}': ['npx eslint --fix --no-warn-ignored', 'npx prettier --write'],
  '*.{json,md,yml,yaml,css}': ['npx prettier --write'],
};
