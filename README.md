# Deno + Playwright Integration Tests

Minimal reproduction repository for testing Playwright compatibility with Deno.

## The Issue

The `@playwright/test` runner times out during `browser.newContext` when run with Deno, while plain Playwright API works fine.

| Runtime     | Plain Playwright | @playwright/test |
|-------------|------------------|------------------|
| Node        | PASS             | PASS             |
| Deno stable | PASS             | FAIL (timeout)   |
| Deno canary | PASS             | FAIL (timeout)   |

## Related Issues

- [denoland/deno#27623](https://github.com/denoland/deno/issues/27623) - Playwright tests stopped working in Deno v2.1.5
- [denoland/deno#16899](https://github.com/denoland/deno/issues/16899) - NPM: Playwright does not work

## Setup

```bash
# Install Playwright browsers
npx playwright install

# Create screenshots directory
mkdir -p screenshots
```

## Usage

### With Deno

```bash
# Start the server
deno task serve &

# Run plain Playwright test (should PASS)
deno task test:plain

# Run @playwright/test runner (currently FAILS)
deno task test:runner
```

### With Node (baseline)

```bash
# Run all tests (should PASS)
npx playwright test
```

## Test Files

- `tests/plain-playwright.test.ts` - Direct Playwright API usage (works with Deno)
- `tests/test-runner.spec.ts` - @playwright/test fixtures (fails with Deno)

Both test files cover common Playwright operations:
- Browser launch (Chromium, Firefox, WebKit)
- Context creation
- Page navigation
- Element assertions
- JavaScript execution
- Screenshot capture

## CI

GitHub Actions runs tests on:
- Node.js LTS (baseline)
- Deno stable
- Deno canary

Daily scheduled runs catch regressions when new Deno versions are released.
