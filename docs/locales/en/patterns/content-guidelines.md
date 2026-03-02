---
title: Content Guidelines
description: Voice, tone, terminology, and writing conventions for UI text across Sprout products.
outline: deep
---

# Content Guidelines

Consistent language builds trust and reduces confusion. These guidelines cover how to write UI text across all Sprout products.

## Voice and Tone

**Voice** is consistent across all products:

| Principle | Description |
|---|---|
| **Clear** | Say exactly what you mean. Avoid jargon and ambiguity. |
| **Concise** | Use the fewest words needed. Respect the user's time. |
| **Helpful** | Guide users toward their goal. Offer next steps. |
| **Professional** | Friendly but not casual. No slang. |

**Tone** varies by context:

| Context | Tone | Example |
|---|---|---|
| Success | Warm, brief | "Changes saved." |
| Error | Direct, helpful | "Unable to save. Check your connection and try again." |
| Warning | Cautious, clear | "This action cannot be undone." |
| Empty state | Encouraging | "No employees yet. Add your first employee to get started." |
| Loading | Neutral | "Loading employees..." |
| Confirmation | Serious, specific | "Delete John Doe? This will remove all associated records." |

## Terminology

Sprout-specific terms used consistently:

| Use | Don't Use |
|---|---|
| Employee | Staff, Worker, User |
| Department | Division, Team |
| Leave | Vacation, PTO, Absence |
| Overtime | OT (avoid abbreviation in UI) |
| Payroll | Pay run |
| Cutoff | Pay period, Cycle |
| Approver | Manager (unless it's the actual role) |
| Effective date | Start date (unless it literally is one) |

## Button Labels

| Action | Label | Don't Use |
|---|---|---|
| Create new | "Add [noun]" | "Create", "New", "+ Add" |
| Save | "Save" or "Save changes" | "Submit", "Done", "OK" |
| Delete | "Delete [noun]" | "Remove", "OK", "Yes" |
| Cancel | "Cancel" | "Back", "Close", "Never mind" |
| Forward | "Next" or "Continue" | "Go", "Proceed" |
| Back | "Back" | "Previous", "Return" |
| Export | "Export" or "Download" | "Get file" |
| Filter | "Apply filters" | "Filter", "Search", "Go" |
| Reset | "Clear filters" | "Reset", "Clear all" |

### Button Rules

- Use **verbs** — buttons are actions, not descriptions
- Be **specific** for destructive actions — "Delete employee" not just "Delete"
- Max **3 words** for standard buttons
- Primary button label matches the dialog title verb

## Error Messages

Sprout uses two messaging frameworks depending on whether the error **already happened** or the user is **about to do something irreversible**.

### Error Recovery

When something has already gone wrong, follow this 4-step formula:

| Step | Purpose | Example |
|---|---|---|
| 1. Say what happened | State the problem clearly | "Unable to save your changes." |
| 2. Say why it happened | Give context (if known) | "The server is temporarily unavailable." |
| 3. Help them fix it | Provide an actionable next step | "Please try again in a few minutes." |
| 4. Give them a way out | Offer an alternative or support | "If the problem persists, contact support." |

**Full example:**

> **Unable to save your changes.** The server is temporarily unavailable. Please try again in a few minutes. If the problem persists, contact support.

**More examples:**

| Scenario | Message |
|---|---|
| Network error | "Unable to connect. Your internet connection may be down. Check your connection and try again." |
| Permission denied | "You don't have permission to perform this action. This requires admin access. Contact your administrator to request access." |
| Conflict | "This record was updated by someone else while you were editing. Refresh the page to see the latest version. Your unsaved changes will be lost." |
| Server error | "Something went wrong on our end. Please try again later. If the problem persists, contact support." |

### Error Prevention

Before a destructive or irreversible action, follow this 4-step formula:

| Step | Purpose | Example |
|---|---|---|
| 1. Say what is happening | State the action about to occur | "You're about to delete an encrypted API key." |
| 2. Say what will happen | Describe the immediate result | "This cannot be undone." |
| 3. Explain consequences | Describe downstream impact | "This will affect any services using this key." |
| 4. Offer a way out | Provide help or cancellation | "If you're unsure or need help, please contact support." |

**Full example:**

> **Confirm API Key Deletion**
>
> You're about to delete an encrypted API key. This cannot be undone and will affect any services using this key.
>
> If you're unsure or need help, please contact support.
>
> \[Cancel\] \[Delete API Key\]

**More examples:**

| Scenario | Title | Body |
|---|---|---|
| Delete employee | "Delete John Doe?" | "This will permanently remove John Doe and all associated records (leave, payroll, performance). This action cannot be undone." |
| Bulk action | "Archive 15 employees?" | "These employees will be moved to the archive. They will no longer appear in active lists but can be restored later." |
| Disconnect integration | "Disconnect Payroll Integration?" | "You're about to disconnect the payroll integration. Pending transactions will not be processed. Reconnecting will require re-authentication." |

### Validation Errors (Inline)

For field-level validation, keep messages short and direct:

| Scenario | Message |
|---|---|
| Required field | "This field is required." |
| Invalid format | "Enter a valid email address." |
| Range error | "Value must be between 1 and 100." |
| Too long | "Maximum 255 characters." |
| Duplicate | "This email is already in use." |

### Error Rules

- Never blame the user ("You entered wrong" → "Enter a valid...")
- Be specific about what went wrong when possible
- Always provide a recovery action or way out
- Use sentence case, not ALL CAPS
- No error codes in user-facing messages
- Destructive confirmations must name the specific item being affected
- Primary button in confirmation dialogs matches the action verb ("Delete", "Archive")

## Empty States

Structure: **What this section is** + **How to get started**.

| Section | Message | Action |
|---|---|---|
| Employee list | "No employees yet." | "Add Employee" button |
| Leave requests | "No leave requests to show." | Filter hint |
| Notifications | "You're all caught up." | — |
| Search results | "No results found for '[query]'." | "Try adjusting your search or filters." |
| Dashboard | "No data available for this period." | "Select a different date range." |

## Placeholder Text

- Use **examples**, not instructions: `"e.g., juan@company.com"` not `"Enter your email"`
- Placeholder disappears on focus — never use it as the only label
- Keep placeholders short

| Field | Placeholder |
|---|---|
| Name | "e.g., Juan dela Cruz" |
| Email | "e.g., juan@company.com" |
| Phone | "e.g., +63 917 123 4567" |
| Search | "Search employees..." |
| Date | "MM/DD/YYYY" |
| Amount | "0.00" |

## Date and Time Formatting

| Format | Pattern | Example |
|---|---|---|
| Short date | MM/DD/YYYY | 01/15/2025 |
| Medium date | MMM D, YYYY | Jan 15, 2025 |
| Long date | MMMM D, YYYY | January 15, 2025 |
| Relative | X ago | "2 hours ago", "Yesterday" |
| Time (12h) | h:mm A | 2:30 PM |
| Date + Time | MMM D, YYYY h:mm A | Jan 15, 2025 2:30 PM |
| Date range | MMM D – D, YYYY | Jan 15 – 31, 2025 |

Default: **MM/DD/YYYY** (Philippine standard). Use relative dates for activity within 7 days.

## Number Formatting

| Type | Format | Example |
|---|---|---|
| Integer | Comma thousands | 1,234,567 |
| Decimal | 2 decimal places | 1,234.56 |
| Currency (PHP) | ₱ + comma | ₱1,234,567.00 |
| Percentage | 1 decimal + % | 85.5% |
| Abbreviation | K / M / B | 12.5K, 1.2M |

Right-align numeric columns in tables. Abbreviate numbers > 10,000 in compact displays.

## Capitalization

| Element | Style | Example |
|---|---|---|
| Page titles | Title Case | "Employee Directory" |
| Section headings | Title Case | "Personal Information" |
| Button labels | Title Case | "Add Employee" |
| Tab labels | Title Case | "Leave Requests" |
| Table headers | Title Case | "Employee Name" |
| Body text | Sentence case | "Select a department from the list." |
| Error messages | Sentence case | "This field is required." |
| Labels | Sentence case | "First name" |

## Punctuation

- **Periods**: Use in full sentences. Omit in labels, headings, buttons.
- **Exclamation marks**: Avoid. Reserve for genuine celebration.
- **Ellipsis (...)**: Truncated text or loading only. Not for trailing off.
- **Ampersand (&)**: Avoid in text. OK in space-constrained UI.

## Source

Machine-readable version: [`design-rules/content-guidelines.md`](https://github.com/user/repo/blob/dev/design-rules/content-guidelines.md)
