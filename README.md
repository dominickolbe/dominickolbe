![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dominickolbe/dominickolbe/tests.yml?label=tests&style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dominickolbe/dominickolbe/release.yml?label=release&style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/dominickolbe/dominickolbe?style=for-the-badge)

<p align="center">
  <p align="center">:raised_hands: :raised_hands: :raised_hands:</p>
  <h3 align="center">dominickolbe</h3>
  <p align="center">source of my personal website, lol<p>
</p>

![Preview](https://github.com/dominickolbe/dominickolbe/blob/master/preview.png?raw=true "dominickolbe.dk")

## Preview

[see live version here](https://dominickolbe.dk)

visit my website to see the latest version live and in color

```http
https://dominickolbe.dk
```

---

## Getting Started

### Prerequisites

This project is created and tested with the following setup:

- macOS Ventura v13.5.2
- node v18.18.0
- yarn v1.22.19
- npm v10.1.0

## Development

1. create your `.env` file based on the `.env.example`

2. install dependencies

```bash
yarn install
```

3. start frontend app

```bash
yarn start
```

## Production

1. create your `.env` file based on the `.env.example`

2. install dependencies

```bash
yarn install
```

3. build frontend app

```bash
yarn build
```

## Testing

run tests

```bash
yarn test
```

run prettier

```bash
yarn prettier:check
```

## Release

Update changelog and tag release

```bash
npx standard-version
```

```bash
git push --follow-tags origin master
```

---

## LICENSE

Copyright © 2023 [Dominic Kolbe](https://dominickolbe.dk) :de:
