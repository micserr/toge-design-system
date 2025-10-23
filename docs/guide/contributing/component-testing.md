---
title: Component Testing
description: Comprehensive guide to testing Vue 3 components using Playwright Component Testing with MCP integration.
outline: deep
---

# Component Testing

Our design system uses **Playwright Component Testing** to ensure robust, reliable component behavior. This guide covers our testing approach, powered by the **Playwright MCP (Model Context Protocol)** for intelligent test generation and execution.

## Overview

Playwright Component Testing provides:

- **Fast execution** with real browser rendering
- **Comprehensive coverage** of user interactions
- **Accessibility testing** built-in
- **Visual regression testing** capabilities
- **Cross-browser compatibility** testing

## Test Architecture

### Test Structure

```
tests/
├── components/
│   ├── 1-component-test-initial-prompt.md  # AI test generation prompt
│   ├── Button.spec.ts                      # Component tests
│   ├── Modal.spec.ts
│   └── ...
└── e2e/
    └── a11y/                               # End-to-end accessibility tests
```

### Configuration

Our Playwright Component Testing is configured in `playwright-ct.config.ts`:

```typescript
export default defineConfig({
  testDir: './tests/components',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    ctTemplateDir: 'playwright',
    ctPort: 3100,
    ctViteConfig: {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

## AI-Powered Test Generation

### Playwright MCP Integration

We use the **Playwright MCP (Model Context Protocol)** to generate comprehensive component tests. This AI-powered approach ensures:

- **Complete coverage** of all component features
- **Consistent testing patterns** across components
- **Intelligent test case generation** based on component analysis
- **Accessibility-first testing** approach

### Initial Prompt System

Our test generation uses the initial prompt located in `tests/components/1-component-test-initial-prompt.md`. This prompt provides:

1. **Comprehensive testing requirements**
2. **Vue 3 specific patterns**
3. **Accessibility testing guidelines**
4. **Error handling strategies**
5. **Best practices and conventions**

### Using the AI Test Generator

To generate tests for a new component using the MCP system:

```markdown
# Provide component information in this format:

<<<COMPONENT
[Vue SFC source code here]
COMPONENT>>>

<<<STRUCTURE
[Folder structure from src/ root]
STRUCTURE>>>

<<<RELATED
[Optional: Related composables, types, or components]
RELATED>>>
```

The AI will analyze your component and generate comprehensive tests covering:

- Rendering and mounting
- Props validation and combinations
- Event emissions
- Slot functionality
- Accessibility requirements
- Error handling
- User interactions

## Test Coverage Requirements

### Core Testing Areas

#### 1. Rendering Tests

```typescript
test('should render component with default props', async ({ mount }) => {
  const component = await mount(Button);
  await expect(component).toBeVisible();
});
```

#### 2. Props Testing

```typescript
test('should apply size variants correctly', async ({ mount }) => {
  const component = await mount(Button, { props: { size: 'large' } });
  await expect(component).toHaveClass(/spr-size-large/);
});
```

#### 3. Event Testing

```typescript
test('should emit click event with correct payload', async ({ mount }) => {
  let clickEvent: any;
  const component = await mount(Button, {
    on: {
      click: (event) => {
        clickEvent = event;
      },
    },
  });

  await component.click();
  expect(clickEvent).toBeTruthy();
});
```

#### 4. Accessibility Testing

```typescript
test('should have proper ARIA attributes', async ({ mount }) => {
  const component = await mount(Button, { props: { disabled: true } });
  await expect(component).toHaveAttribute('aria-disabled', 'true');
});

test('should be keyboard navigable', async ({ mount, page }) => {
  await mount(Button);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button')).toBeFocused();
});
```

#### 5. Slot Testing

```typescript
test('should render slot content correctly', async ({ mount }) => {
  const component = await mount(Button, {
    slots: { default: 'Custom Button Text' },
  });
  await expect(component).toContainText('Custom Button Text');
});
```

### Advanced Testing Scenarios

#### Conditional Rendering

```typescript
test('should conditionally render elements based on props', async ({ mount }) => {
  const component = await mount(Modal, { props: { showHeader: false } });
  await expect(component.locator('.modal-header')).not.toBeVisible();
});
```

#### Form Integration

```typescript
test('should integrate with form validation', async ({ mount }) => {
  const component = await mount(Input, {
    props: { required: true, value: '' },
  });
  await component.blur();
  await expect(component).toHaveAttribute('aria-invalid', 'true');
});
```

#### Theme and Styling

```typescript
test('should apply theme variants', async ({ mount }) => {
  const component = await mount(Button, {
    props: { variant: 'primary' },
  });
  await expect(component).toHaveClass(/spr-variant-primary/);
});
```

## Best Practices

### Selector Strategy (Priority Order)

1. **Role-based selectors** (preferred):

```typescript
page.getByRole('button', { name: 'Submit' });
page.getByRole('textbox', { name: 'Email' });
```

2. **Text content selectors**:

```typescript
page.getByText('Click me');
page.getByLabel('Email address');
```

3. **Test IDs** (when needed):

```typescript
page.getByTestId('submit-btn');
```

### Writing Maintainable Tests

#### Use Descriptive Test Names

```typescript
// ✅ Good
test('should disable button and prevent clicks when disabled prop is true');

// ❌ Bad
test('disabled test');
```

#### Group Related Tests

```typescript
test.describe('Button Component', () => {
  test.describe('Props', () => {
    test('should render with default size');
    test('should apply custom size variants');
  });

  test.describe('Events', () => {
    test('should emit click events');
    test('should prevent events when disabled');
  });
});
```

#### Avoid Timing Issues

```typescript
// ✅ Good - Wait for specific conditions
await expect(modal).toBeVisible();

// ❌ Bad - Arbitrary timeouts
await page.waitForTimeout(500);
```

## Running Tests

### Local Development

```bash
# Run all component tests
npm run test:components

# Run specific component test (short name)
npx playwright test Button.spec.ts --config=playwright-ct.config.ts

# Run specific test file (full path)
npx playwright test tests/components/Button.spec.ts --config=playwright-ct.config.ts

# Run with UI mode for debugging
npx playwright test --ui --config=playwright-ct.config.ts

# Generate test report
npx playwright show-report
```

### Debugging Tests

#### Visual Debugging

```typescript
// Add to test for visual debugging
await page.pause();
```

#### Trace Viewer

```bash
# Run test with trace
npx playwright test --trace on

# View trace
npx playwright show-trace trace.zip
```

#### Screenshots on Failure

```typescript
test('should render correctly', async ({ mount }, testInfo) => {
  const component = await mount(Button);

  // Take screenshot on failure
  if (testInfo.retry > 0) {
    await testInfo.attach('screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
  }
});
```

## Component Test Examples

### Simple Component Test

```typescript
import { test, expect } from '@playwright/experimental-ct-vue';
import Button from '@/components/button/button.vue';

test.describe('Button Component', () => {
  test('should render with default props', async ({ mount }) => {
    const component = await mount(Button);

    await expect(component).toBeVisible();
    await expect(component).toHaveClass(/spr-button/);
  });

  test('should handle click events', async ({ mount }) => {
    let clicked = false;
    const component = await mount(Button, {
      on: {
        click: () => {
          clicked = true;
        },
      },
    });

    await component.click();
    expect(clicked).toBe(true);
  });
});
```

### Complex Component Test

```typescript
import { test, expect } from '@playwright/experimental-ct-vue';
import Modal from '@/components/modal/modal.vue';

test.describe('Modal Component', () => {
  test('should manage focus correctly', async ({ mount, page }) => {
    const component = await mount(Modal, {
      props: {
        modelValue: true,
        title: 'Test Modal',
      },
    });

    // Should focus the modal
    await expect(component).toBeFocused();

    // Should trap focus within modal
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['BUTTON', 'INPUT', 'A']).toContain(focusedElement);
  });

  test('should close on escape key', async ({ mount, page }) => {
    let modelValue = true;
    await mount(Modal, {
      props: {
        modelValue,
        'onUpdate:modelValue': (value: boolean) => {
          modelValue = value;
        },
      },
    });

    await page.keyboard.press('Escape');
    expect(modelValue).toBe(false);
  });
});
```

## Accessibility Testing

### ARIA Attributes

```typescript
test('should have proper ARIA attributes', async ({ mount }) => {
  const component = await mount(Button, {
    props: { disabled: true, 'aria-label': 'Submit form' },
  });

  await expect(component).toHaveAttribute('aria-disabled', 'true');
  await expect(component).toHaveAttribute('aria-label', 'Submit form');
});
```

### Keyboard Navigation

```typescript
test('should support keyboard navigation', async ({ mount, page }) => {
  await mount(Dropdown);

  // Open with Enter
  await page.keyboard.press('Enter');
  await expect(page.getByRole('listbox')).toBeVisible();

  // Navigate with arrows
  await page.keyboard.press('ArrowDown');
  await expect(page.getByRole('option').first()).toBeFocused();
});
```

### Screen Reader Support

```typescript
test('should provide screen reader announcements', async ({ mount, page }) => {
  const component = await mount(Snackbar, {
    props: { message: 'Success!', type: 'success' },
  });

  await expect(component).toHaveAttribute('role', 'alert');
  await expect(component).toHaveAttribute('aria-live', 'polite');
});
```

## Integration with CI/CD

Our component tests run automatically in CI/CD pipelines:

```yaml
# Azure Pipelines example
- task: Node.js
  inputs:
    command: 'custom'
    customCommand: 'npm run test:components'
    workingDirectory: '$(System.DefaultWorkingDirectory)'
```

Tests must pass before code can be merged to main branches.

## Getting Help

For component testing assistance:

1. **Check existing test examples** in `tests/components/`
2. **Use the AI test generator** with the initial prompt
3. **Review the Playwright documentation** for advanced patterns
4. **Ask the team** for component-specific testing strategies

::: tip Pro Tip
Use the Playwright MCP system to generate comprehensive tests quickly. The AI understands our component patterns and will create tests that follow our conventions and cover all necessary scenarios.
:::

::: warning Important
Always run tests locally before committing. Failed tests will block CI/CD deployment and prevent merging pull requests.
:::
