![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dominickolbe/dominickolbe/integration.yml?label=integration&style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dominickolbe/dominickolbe/release.yml?label=release&style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/dominickolbe/dominickolbe?style=for-the-badge)

<p align="center">
  <p align="center">:raised_hands: :raised_hands: :raised_hands:</p>
  <h3 align="center">dominickolbe</h3>
  <p align="center">source of my personal website, lol<p>
</p>

![Preview](https://github.com/dominickolbe/dominickolbe/blob/main/preview.png?raw=true "dominickolbe.dk")

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

- macOS Sonoma v14.4
- Node vv20.10.0
- Yarn v1.22.21
- NPM v10.4.0
- PNPM v8.15.1

## Development

1. create your `.env` file based on the `.env.example`

2. install dependencies

```bash
pnpm install
```

3. start frontend app

```bash
pnpm start
```

## Production

1. create your `.env` file based on the `.env.example`

2. install dependencies

```bash
pnpm install
```

3. build frontend app

```bash
pnpm build
```

## Testing

run tests

```bash
pnpm test
```

run prettier

```bash
pnpm prettier:check
```

## Release

Update changelog and tag release

```bash
npx standard-version
```

```bash
git push --follow-tags origin main
```

---

## LICENSE

Copyright © 2025 [Dominic Kolbe](https://dominickolbe.dk) :de:
