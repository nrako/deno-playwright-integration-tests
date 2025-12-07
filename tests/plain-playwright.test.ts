// Plain Playwright - demonstrates what WORKS with Deno
// Run with: deno run -A tests/plain-playwright.test.ts
// (requires server running: deno task serve)

import { chromium, firefox, webkit } from 'playwright'

const browsers = [chromium, firefox, webkit]

for (const browserType of browsers) {
  console.log(`\nTesting ${browserType.name()}...`)

  const browser = await browserType.launch()
  console.log('  - Browser launched')

  const context = await browser.newContext()
  console.log('  - Context created')

  const page = await context.newPage()
  console.log('  - Page created')

  // Navigation
  await page.goto('http://localhost:3000/')
  console.log('  - Navigation successful')
  console.log(`    Title: ${await page.title()}`)

  // Element assertions (manual)
  const h1 = await page.locator('h1').textContent()
  if (!h1?.includes('Integration Test')) {
    throw new Error('H1 content mismatch')
  }
  console.log('  - Element assertion passed')

  // JavaScript execution
  const result = await page.evaluate(() => document.title)
  if (result !== 'Test Page') {
    throw new Error(`Title mismatch: ${result}`)
  }
  console.log(`  - JS execution: "${result}"`)

  // Screenshot
  await page.screenshot({ path: `screenshots/${browserType.name()}.png` })
  console.log(`  - Screenshot saved: screenshots/${browserType.name()}.png`)

  await browser.close()
  console.log(`  - ${browserType.name()} tests passed`)
}

console.log('\nAll plain Playwright tests passed!')
