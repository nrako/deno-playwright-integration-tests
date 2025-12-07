// @playwright/test runner - demonstrates what FAILS with Deno
// Run with: deno run -A npm:@playwright/test test
// Works with Node: npx playwright test

import { expect, test } from '@playwright/test'

test.describe('Common Playwright Actions', () => {
  test('navigation and title assertion', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Test Page/)
  })

  test('element visibility assertion', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('body')).toContainText('Integration Test')
  })

  test('javascript execution', async ({ page }) => {
    await page.goto('/')
    const title = await page.evaluate(() => document.title)
    expect(title).toBe('Test Page')
  })

  test('screenshot capture', async ({ page }) => {
    await page.goto('/')
    await page.screenshot({ path: 'screenshots/test-runner.png' })
  })

  test('context fixture', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('/')
    await expect(page.locator('body')).toBeVisible()
  })
})
