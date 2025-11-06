---
title: Spacing
descripttion: Spacing ensures consistent margins, padding, gaps, etc. across various components. The spacing classes are derived from root variables.
outline: deep
---

# Spacing

Spacing ensures consistent margins, padding, gaps, etc. across various components. The spacing classes are derived from the following root variables.

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Root Variable</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2px</td>
      <td>--size-50</td>
      <td>size-spacing-6xs</td>
    </tr>
    <tr>
      <td>4px</td>
      <td>--size-100</td>
      <td>size-spacing-5xs</td>
    </tr>
    <tr>
      <td>6px</td>
      <td>--size-150</td>
      <td>size-spacing-4xs</td>
    </tr>
    <tr>
      <td>8px</td>
      <td>--size-200</td>
      <td>size-spacing-3xs</td>
    </tr>
    <tr>
      <td>12px</td>
      <td>--size-250</td>
      <td>size-spacing-2xs</td>
    </tr>
    <tr>
      <td>16px</td>
      <td>--size-300</td>
      <td>size-spacing-xs</td>
    </tr>
    <tr>
      <td>24px</td>
      <td>--size-400</td>
      <td>size-spacing-sm</td>
    </tr>
    <tr>
      <td>32px</td>
      <td>--size-500</td>
      <td>size-spacing-md</td>
    </tr>
    <tr>
      <td>40px</td>
      <td>--size-600</td>
      <td>size-spacing-lg</td>
    </tr>
    <tr>
      <td>48px</td>
      <td>--size-700</td>
      <td>size-spacing-xl</td>
    </tr>
    <tr>
      <td>64px</td>
      <td>--size-800</td>
      <td>size-spacing-2xl</td>
    </tr>
    <tr>
      <td>72px</td>
      <td>--size-900</td>
      <td>size-spacing-3xl</td>
    </tr>
    <tr>
      <td>80px</td>
      <td>--size-1000</td>
      <td>size-spacing-4xl</td>
    </tr>
    <tr>
      <td>96px</td>
      <td>--size-1100</td>
      <td>size-spacing-5xl</td>
    </tr>
    <tr>
      <td>128px</td>
      <td>--size-1200</td>
      <td>size-spacing-6xl</td>
    </tr>
  </tbody>
</table>

# Usage

Spacing is implemented to extend the default spacing scale of Tailwind. Therefore, these values are inherited by the **padding**, **margin**, **width**, **minWidth**, **maxWidth**, **height**, **minHeight**, **maxHeight**, **gap**, **inset**, **space**, **translate**, **scrollMargin**, and **scrollPadding**. (See [Tailwind Docs](https://tailwindcss.com/docs/customizing-spacing))

To use these spacing, just append the above size-spacing class to Tailwind utilities. The following are some examples:

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>spr-m-size-spacing-xs</td>
      <td>margin: 16px;</td>
    </tr>
    <tr>
      <td>spr-mb-size-spacing-md</td>
      <td>margin-bottom: 32px;</td>
    </tr>
    <tr>
      <td>spr-px-size-spacing-4xs</td>
      <td>padding-left: 6px; padding-right: 6px;</td>
    </tr>
  </tbody>
</table>
