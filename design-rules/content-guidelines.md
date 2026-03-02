# Content Guidelines

Guidelines for writing UI text across Sprout products. Consistent language builds trust and reduces confusion for users.

## Voice and Tone

**Voice** (consistent across all products):
- **Clear** — Say exactly what you mean. Avoid jargon and ambiguity.
- **Concise** — Use the fewest words needed. Respect the user's time.
- **Helpful** — Guide users toward their goal. Offer next steps.
- **Professional** — Friendly but not casual. No slang.

**Tone** (varies by context):

| Context | Tone | Example |
|---|---|---|
| Success | Warm, brief | "Changes saved." |
| Error | Direct, helpful | "Unable to save. Check your connection and try again." |
| Warning | Cautious, clear | "This action cannot be undone." |
| Empty state | Encouraging | "No employees yet. Add your first employee to get started." |
| Loading | Neutral | "Loading employees..." |
| Confirmation | Serious, specific | "Delete John Doe? This will remove all associated records." |

## Terminology

Sprout-specific terms used consistently across products:

| Term | Use | Don't Use |
|---|---|---|
| Employee | A person in the system | Staff, Worker, User |
| Department | Organizational unit | Division, Team (unless product-specific) |
| Leave | Time off request | Vacation, PTO, Absence |
| Overtime | Work beyond regular hours | OT (avoid abbreviation in UI) |
| Payroll | Salary processing | Pay run |
| Cutoff | Payroll period boundary | Pay period, Cycle |
| Approver | Person who approves requests | Manager (unless explicitly the role) |
| Effective date | When a change takes effect | Start date (unless it literally is one) |

## Button Labels

| Action | Label | Don't Use |
|---|---|---|
| Create new record | "Add [noun]" | "Create", "New", "+ Add" |
| Save changes | "Save" or "Save changes" | "Submit", "Done", "OK" |
| Confirm destructive action | "Delete [noun]" | "Remove", "OK", "Yes" |
| Cancel | "Cancel" | "Back", "Close", "Never mind" |
| Navigate forward | "Next" or "Continue" | "Go", "Proceed" |
| Navigate back | "Back" | "Previous", "Return" |
| Close dialog without action | "Cancel" | "X" (icon is OK, but provide aria-label) |
| Submit form | "Save" or "Submit [noun]" | "Send", "Done" |
| Export data | "Export" or "Download" | "Get file" |
| Filter results | "Apply filters" | "Filter", "Search", "Go" |
| Reset filters | "Clear filters" | "Reset", "Clear all" |

### Button label rules

- Use **verbs** — buttons are actions, not descriptions
- Be **specific** — "Delete employee" not just "Delete" (for destructive actions)
- Max **3 words** for standard buttons
- Primary action label matches the dialog title verb (e.g., title: "Delete Employee?", button: "Delete")

## Error Messages

Sprout uses two messaging frameworks depending on whether the error **already happened** or the user is **about to do something irreversible**.

### Error Recovery (Something already went wrong)

Follow this 4-step formula:

1. **Say what happened** — State the problem clearly
2. **Say why it happened** — Give context (if known)
3. **Help them fix it** — Provide an actionable next step
4. **Give them a way out** — Offer an alternative or support (if possible)

**Pattern:**
```
[What happened]. [Why it happened]. [How to fix it]. [Way out].
```

**Examples:**

| Scenario | Message |
|---|---|
| Network error | "Unable to connect. Your internet connection may be down. Check your connection and try again." |
| Server error | "Something went wrong on our end. Please try again later. If the problem persists, contact support." |
| Permission denied | "You don't have permission to perform this action. This requires admin access. Contact your administrator to request access." |
| Conflict | "This record was updated by someone else while you were editing. Refresh the page to see the latest version. Your unsaved changes will be lost." |
| Not found | "The page you're looking for doesn't exist. Check the URL or go back to the homepage." |

### Error Prevention (Before a destructive/irreversible action)

Follow this 4-step formula:

1. **Say what is happening** — State the action about to occur
2. **Say what will happen** — Describe the immediate result
3. **Explain consequences** — Describe downstream impact
4. **Offer a way out** — Provide help or cancellation

**Pattern:**
```
Title: [Action confirmation]
Body: [What is happening]. [What will happen + consequences].
Support: [Way out or help].
Actions: [Cancel] [Confirm verb]
```

**Example:**
> **Confirm API Key Deletion**
>
> You're about to delete an encrypted API key. This cannot be undone and will affect any services using this key.
>
> If you're unsure or need help, please contact support.
>
> [Cancel] [Delete API Key]

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

- Never blame the user ("You entered an invalid email" → "Enter a valid email address.")
- Be specific about what went wrong when possible
- Always provide a recovery action or way out
- Use sentence case, not ALL CAPS
- Don't use error codes in user-facing messages
- Destructive confirmations must name the specific item being affected
- Primary button in confirmation dialogs matches the action verb ("Delete", "Archive")

## Empty States

Structure: **What this section is** + **How to get started**.

### Patterns

```
No [items] yet. [Action to create first one].
```

### Examples

| Section | Message | Action |
|---|---|---|
| Employee list | "No employees yet." | "Add Employee" button |
| Leave requests | "No leave requests to show." | "File a leave" link or filter adjustment hint |
| Notifications | "You're all caught up." | (no action needed) |
| Search results | "No results found for '[query]'." | "Try adjusting your search or filters." |
| Dashboard widgets | "No data available for this period." | "Select a different date range." |

## Placeholder Text

- Use **examples**, not instructions: `"e.g., john@company.com"` not `"Enter your email"`
- Placeholder disappears on focus — never use it as the only label
- Keep placeholders short — they're hints, not documentation

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
| Relative (recent) | "X ago" | "2 hours ago", "Yesterday" |
| Time (12h) | h:mm A | 2:30 PM |
| Time (24h) | HH:mm | 14:30 |
| Date + Time | MMM D, YYYY h:mm A | Jan 15, 2025 2:30 PM |
| Date range | MMM D – D, YYYY | Jan 15 – 31, 2025 |
| Date range (cross-month) | MMM D – MMM D, YYYY | Jan 15 – Feb 28, 2025 |

### Rules

- Default format: **MM/DD/YYYY** (Philippine standard)
- Use relative dates for recent activity (within 7 days)
- Use 12-hour time format by default
- Always include year for dates that may be ambiguous

## Number Formatting

| Type | Format | Example |
|---|---|---|
| Integer | Comma-separated thousands | 1,234,567 |
| Decimal | 2 decimal places | 1,234.56 |
| Currency (PHP) | ₱ + comma-separated | ₱1,234,567.00 |
| Percentage | 1 decimal place + % | 85.5% |
| Abbreviation (K) | Number + K | 12.5K |
| Abbreviation (M) | Number + M | 1.2M |

### Rules

- Always use comma as thousands separator
- Always use period as decimal separator
- Currency: show 2 decimal places
- Abbreviate numbers > 10,000 in charts and compact displays
- Right-align numeric columns in tables

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
| Placeholder text | Sentence case | "e.g., juan@company.com" |
| Tooltip text | Sentence case | "Click to view details" |
| Labels | Sentence Case | "First name" |

## Punctuation

- **Periods**: Use in full sentences. Omit in labels, headings, and button text.
- **Exclamation marks**: Avoid. Reserve for genuine celebration ("Congratulations!").
- **Ellipsis (...)**: Use for truncated text or loading states. Not for trailing off.
- **Ampersand (&)**: Avoid in running text. OK in space-constrained UI (tabs, headers).
- **Slash (/)**: Avoid in running text. Use "or" instead. OK for dates (01/15/2025).
