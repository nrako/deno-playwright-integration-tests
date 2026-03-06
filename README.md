# Deno + Playwright Integration Tests

Minimal reproduction repository for testing Playwright compatibility with Deno. Tracks which Deno/Node + Playwright version combinations work, with results stored as GitHub releases and an auto-updated compatibility matrix.

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

Weekly scheduled runs (Fridays 6am UTC) catch regressions when new Deno/Playwright versions are released.

The CI is version-aware: it only runs tests for version combinations that haven't been tested yet. Results are stored as GitHub releases and the compatibility matrix below is auto-updated.

### Manual Run Options

Use `workflow_dispatch` to test specific version combinations:

| Input | Description | Example |
|-------|-------------|---------|
| `force` | Re-test even if already tested | `true` |
| `runtime` | Specific runtime to test | `node`, `deno-stable`, `deno-canary`, `all` |
| `node_version` | Node.js version | `22.12.0`, `lts/*`, `latest` |
| `deno_version` | Deno version | `2.1.4`, `vx.x.x` (latest stable) |
| `playwright_version` | Playwright version | `1.49.1`, `1.48.0`, `latest` |

Note: Past Deno canary versions are not available; only the current canary can be tested.

<!-- COMPATIBILITY_TABLE_START -->
## Compatibility Matrix

| Runtime | Runtime Version | V8 | Playwright | Status | Date | Details |
|----------|---------|-----|------------|--------|------|---------|
| node | v24.14.0 | 13.6.233.17-node.41 | 1.58.2 | ✅ | 2026-03-06 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/22751657163) |
| deno-stable | 2.7.4 | 14.6.202.6-rusty | 1.58.2 | ✅ | 2026-03-06 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/22751657163) |
| deno-canary | 2.7.4+f020655 | 14.6.202.9-rusty | 1.58.2 | ✅ | 2026-03-06 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/22751657163) |
| node | v24.13.1 | 13.6.233.17-node.40 | 1.58.2 | ✅ | 2026-02-27 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/22475263790) |
| deno-stable | 2.7.1 | 14.5.201.2-rusty | 1.58.2 | ✅ | 2026-02-27 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/22475263790) |
| deno-canary | 2.7.1+2f42a46 | 14.5.201.2-rusty | 1.58.2 | ✅ | 2026-02-27 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/22475263790) |
| deno-stable | 2.6.10 | 14.5.201.2-rusty | 1.58.2 | ✅ | 2026-02-20 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/22213722096) |
| deno-canary | 2.6.10+08d2450 | 14.5.201.2-rusty | 1.58.2 | ✅ | 2026-02-20 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/22213722096) |
| node | v24.13.0 | 13.6.233.17-node.37 | 1.58.2 | ✅ | 2026-02-13 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21976970077) |
| deno-stable | 2.6.9 | 14.5.201.2-rusty | 1.58.2 | ❌ | 2026-02-13 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21976970077) |
| deno-canary | 2.6.9+d4d65a7 | 14.5.201.2-rusty | 1.58.2 | ✅ | 2026-02-13 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21976970077) |
| node | v24.13.0 | 13.6.233.17-node.37 | 1.58.1 | ✅ | 2026-02-06 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21740900476) |
| deno-stable | 2.6.8 | 14.5.201.2-rusty | 1.58.1 | ✅ | 2026-02-06 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21740900476) |
| deno-canary | 2.6.8+22b7401 | 14.5.201.2-rusty | 1.58.1 | ❌ | 2026-02-06 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21740900476) |
| node | v24.13.0 | 13.6.233.17-node.37 | 1.58.0 | ✅ | 2026-01-30 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21506454695) |
| deno-stable | 2.6.7 | 14.5.201.2-rusty | 1.58.0 | ✅ | 2026-01-30 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21506454695) |
| deno-canary | 2.6.7+f4c20db | 14.5.201.2-rusty | 1.58.0 | ✅ | 2026-01-30 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21506454695) |
| node | v24.13.0 | 13.6.233.17-node.37 | 1.57.0 | ✅ | 2026-01-23 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21276461386) |
| deno-stable | 2.6.6 | 14.2.231.17-rusty | 1.57.0 | ✅ | 2026-01-23 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21276461386) |
| deno-canary | 2.6.6+b910888 | 14.2.231.17-rusty | 1.57.0 | ✅ | 2026-01-23 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21276461386) |
| deno-stable | 2.6.5 | 14.2.231.17-rusty | 1.57.0 | ✅ | 2026-01-16 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21057383198) |
| deno-canary | 2.6.4+04e93df | 14.2.231.17-rusty | 1.57.0 | ✅ | 2026-01-16 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/21057383198) |
| deno-stable | 2.6.4 | 14.2.231.17-rusty | 1.57.0 | ✅ | 2026-01-09 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20842934960) |
| deno-canary | 2.6.4+d4adade | 14.2.231.17-rusty | 1.57.0 | ✅ | 2026-01-09 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20842934960) |
| deno-canary | 2.6.3+66c2ed6 | 14.2.231.17-rusty | 1.57.0 | ✅ | 2026-01-02 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20652083068) |
| deno-canary | 2.6.3+ce1d451 | 14.2.231.17-rusty | 1.57.0 | ✅ | 2025-12-26 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20517173276) |
| deno-stable | 2.6.3 | 14.2.231.17-rusty | 1.57.0 | ✅ | 2025-12-22 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20442570722) |
| deno-stable | 2.6.2 | 14.2.231.17-rusty | 1.57.0 | ❌ | 2025-12-19 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20378005659) |
| deno-canary | 2.6.2+9cd8077 | 14.2.231.17-rusty | 1.57.0 | ❌ | 2025-12-19 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20378005659) |
| node | v24.12.0 | - | 1.57.0 | ✅ | 2025-12-19 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20361477922) |
| deno-canary | 2.6.1+e76aa96 | 14.2.231.17-rusty | 1.57.0 | ✅ | 2025-12-19 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20361477922) |
| deno-stable | 2.6.0 | 14.2.231.17-rusty | 1.57.0 | ❌ | 2025-12-12 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20157978459) |
| deno-canary | 2.5.6+b8b549d | 14.2.231.17-rusty | 1.57.0 | ❌ | 2025-12-12 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20157978459) |
| node | v24.11.1 | - | 1.57.0 | ✅ | 2025-12-07 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20010717455) |
| deno-stable | 2.5.6 | 14.0.365.5-rusty | 1.57.0 | ✅ | 2025-12-07 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20010717455) |
| deno-canary | 2.5.6+8c46ac3 | 14.2.231.17-rusty | 1.57.0 | ❌ | 2025-12-07 | [Run](https://github.com/nrako/deno-playwright-integration-tests/actions/runs/20010717455) |
<!-- COMPATIBILITY_TABLE_END -->
