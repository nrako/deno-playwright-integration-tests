# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is a minimal reproduction repository for testing Playwright compatibility with Deno. It tracks which Deno/Node + Playwright version combinations work, storing results as GitHub releases and auto-updating a compatibility matrix in the README.

## Commands

```bash
# Install Playwright browsers (required first-time setup)
npx playwright install

# Start the test server (required for tests)
deno task serve

# Run tests with Deno
deno task test:plain    # Direct Playwright API (works with Deno)
deno task test:runner   # @playwright/test runner (may fail with Deno)
deno task test:headed   # Headed mode with Chromium
deno task test          # Run both plain and runner tests

# Run tests with Node (baseline)
npx playwright test
deno task test:node     # Alias for npx playwright test
```

## Architecture

- `tests/plain-playwright.test.ts` - Direct Playwright API usage (Chromium, Firefox, WebKit). Works reliably with Deno.
- `tests/test-runner.spec.ts` - Uses `@playwright/test` fixtures. This is where Deno compatibility issues surface.
- `playwright.config.ts` - Auto-detects Deno vs Node runtime and adjusts the webServer command accordingly.
- `app/index.html` - Minimal test page served at localhost:3000.

## CI Workflow

The GitHub Actions workflow (`.github/workflows/playwright.yml`):
- Tests on Node, Deno stable, and Deno canary
- Creates GitHub releases tagged `result-{runtime}-{version}_playwright-{version}` storing test outcomes
- Auto-updates the README compatibility matrix between `<!-- COMPATIBILITY_TABLE_START -->` and `<!-- COMPATIBILITY_TABLE_END -->` markers
- Skips already-tested version combinations unless `force: true` is set

## Test Server

The server must be running on localhost:3000 before running tests. The playwright config's `webServer` option handles this automatically when using `npx playwright test` or `deno task test:runner`, but for `deno task test:plain` you need to start it manually with `deno task serve`.
