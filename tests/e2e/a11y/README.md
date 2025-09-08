# Accessibility Testing Structure

This directory contains accessibility tests for the design system components. The tests are organized into categories to ensure comprehensive coverage of accessibility requirements.

## Folder Structure

1. **Contrast**:

   - Verify that text and UI elements meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)

2. **Keyboard**:

   - Focusable with Tab key
   - Operable with Enter/Space
   - Have logical tab order

3. **Screen Reader**:

   - Have appropriate ARIA roles
   - Provide meaningful labels and descriptions
   - Announce state changes

4. **Focus Management**:

   - Focus is managed appropriately for modals/dialogs
   - Focus indicators are clearly visible
   - Focus remains in expected components

5. **Form Validation**:
   - Error messages are associated with form fields
   - Required fields are properly marked
   - Error states are announced to screen readers

## Running Tests

To run all accessibility tests:

```bash
npx playwright test tests/e2e/a11y
```

To run a specific category of tests:

```bash
npx playwright test tests/e2e/a11y/contrast
```
