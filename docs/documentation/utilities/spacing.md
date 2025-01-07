# Spacing
Spacing ensures consistent margins, padding, gaps, etc. across various components. The spacing classes are derived from the following root variables.

| Value  | Root Variable  | Class               | 
| ------ | -------------- | ------------------- |
| 2px    | --size-50      | size-spacing-6xs    |
| 4px    | --size-100     | size-spacing-5xs    |
| 6px    | --size-150     | size-spacing-4xs    |
| 8px    | --size-200     | size-spacing-3xs    |
| 12px   | --size-250     | size-spacing-2xs    |
| 16px   | --size-300     | size-spacing-xs     |
| 24px   | --size-400     | size-spacing-sm     |
| 32px   | --size-500     | size-spacing-md     |
| 40px   | --size-600     | size-spacing-lg     |
| 48px   | --size-700     | size-spacing-xl     |
| 64px   | --size-800     | size-spacing-2xl    |
| 72px   | --size-900     | size-spacing-3xl    |
| 80px   | --size-1000    | size-spacing-4xl    |
| 96px   | --size-1100    | size-spacing-5xl    |
| 128px  | --size-1200    | size-spacing-6xl    |

# Usage
Spacing is implemented to extend the default spacing scale of Tailwind. Therefore, these values are inherited by the **padding**, **margin**, **width**, **minWidth**, **maxWidth**, **height**, **minHeight**, **maxHeight**, **gap**, **inset**, **space**, **translate**, **scrollMargin**, and **scrollPadding**. (See [Tailwind Docs](https://tailwindcss.com/docs/customizing-spacing))

To use these spacing, just append the above size-spacing class to Tailwind utilities. The following are some examples:
| Class                   | Description                              |
| ----------------------- | ---------------------------------------- |
| tw-m-size-spacing-xs    | margin: 16px;                            |
| tw-mb-size-spacing-md   | margin-bottom: 32px;                     |
| tw-px-size-spacing-4xs  | padding-left: 6px; padding-right: 6px;   |
