# Reproduction

GitHub issue: https://github.com/tailwindlabs/tailwindcss-intellisense/issues/933

## App 1

Child package uses `exports`: [packages/ui-1/package.json](packages/ui-1/package.json)

![packages/ui-1/package.json](ui-1.png)

IntelliSense doesn't work in parent package: [apps/app-1/app/root.tsx](apps/app-1/app/root.tsx)

![apps/app-1/app/root.tsx](app-1.png)

## App 2

Child package uses `style`: [packages/ui-2/package.json](packages/ui-2/package.json)

![packages/ui-2/package.json](ui-2.png)

IntelliSense works in parent package: [apps/app-2/app/root.tsx](apps/app-2/app/root.tsx)

![apps/app-2/app/root.tsx](app-2.png)

Both apps work correctly when running `remix:dev` (the text is red).
