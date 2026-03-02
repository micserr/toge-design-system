---
title: Button — Guidelines
description: Usage guidelines, variant selection, tone selection, and best practices for the Sprout Button component.
outline: deep
---

# Button

The Button component is a versatile and commonly used element in user interfaces, designed to trigger actions or events when clicked. It can be customized in various ways, including size, tone, and variant, to suit different design needs.

<ComponentTabBar component-name="button" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />

## Guidelines

### When to Use

Use the Button component to trigger actions or navigate users through a workflow. Buttons communicate the action that will occur when the user interacts with them.

- **Primary actions** — submitting forms, confirming dialogs, saving data
- **Secondary actions** — canceling, going back, dismissing
- **Destructive actions** — deleting records, removing items

### Variant Selection Guide

Choose the variant based on the level of emphasis the action requires:

| Variant | Emphasis | When to Use |
|---------|----------|-------------|
| **Primary** | Highest | The main action on the page. Use sparingly — ideally one primary button per section. |
| **Secondary** | Medium | Supporting actions that complement the primary action. Good for "Cancel" or "Back" actions. |
| **Tertiary** | Lowest | Low-emphasis actions like "Learn more" or inline actions within content. |

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4">
  <spr-button>Primary</spr-button>
  <spr-button variant="secondary">Secondary</spr-button>
  <spr-button variant="tertiary">Tertiary</spr-button>
</div>

### Tone Selection Guide

Choose the tone based on the nature of the action:

| Tone | Purpose | Example |
|------|---------|---------|
| **Neutral** | General-purpose actions with no specific connotation. | "Save", "Submit", "Continue" |
| **Success** | Positive or confirming actions. | "Approve", "Publish", "Confirm" |
| **Danger** | Destructive or irreversible actions. | "Delete", "Remove", "Discard" |

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4">
  <spr-button>Save</spr-button>
  <spr-button tone="success">Approve</spr-button>
  <spr-button tone="danger">Delete</spr-button>
</div>

### Button Groups

When placing multiple buttons together, follow these patterns:

#### Confirm / Cancel Pattern

Place the primary action on the right and the secondary action on the left.

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4">
  <spr-button variant="secondary">Cancel</spr-button>
  <spr-button>Save Changes</spr-button>
</div>

#### Destructive Confirmation

Pair a danger button with a secondary cancel for irreversible actions.

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4">
  <spr-button variant="secondary">Cancel</spr-button>
  <spr-button tone="danger">Delete Item</spr-button>
</div>

#### Multiple Actions

When offering multiple actions, use one primary and the rest as secondary or tertiary to maintain clear hierarchy.

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-4">
  <spr-button variant="tertiary">Save Draft</spr-button>
  <spr-button variant="secondary">Preview</spr-button>
  <spr-button tone="success">Publish</spr-button>
</div>

### Button Labeling

- **Use action verbs** — Labels should describe what happens when clicked: "Save Changes", "Delete Item", "Send Invite"
- **Keep it concise** — Aim for 1-3 words. Avoid long sentences as button labels.
- **Be specific** — Prefer "Save Changes" over generic "OK" or "Submit"
- **Avoid ambiguity** — "Delete" is clearer than "Remove" when the action is permanent

### Do's and Don'ts

#### Do

- Use one primary button per section or dialog to clearly indicate the main action

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-2 spr-mb-4">
  <spr-button variant="secondary">Cancel</spr-button>
  <spr-button>Submit</spr-button>
</div>

- Pair a primary button with a secondary button for "Confirm / Cancel" patterns
- Use the danger tone only for destructive or irreversible actions

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-2 spr-mb-4">
  <spr-button variant="secondary">Cancel</spr-button>
  <spr-button tone="danger">Delete Account</spr-button>
</div>

- Use icon buttons to save space when the action is universally understood (e.g., trash icon for delete)

#### Don't

- Don't place multiple primary buttons side by side — it creates visual competition

<div class="spr-flex spr-items-center spr-gap-2 spr-mt-2 spr-mb-4 spr-opacity-50">
  <spr-button>Cancel</spr-button>
  <spr-button>Submit</spr-button>
</div>

- Don't use the danger tone for non-destructive actions like "Close" or "Cancel"
- Don't use tertiary buttons for important or primary actions — they lack sufficient emphasis
- Don't disable buttons without providing context about why the action is unavailable
- Don't use buttons for navigation — use links instead
