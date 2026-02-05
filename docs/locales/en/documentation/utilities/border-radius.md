---
title: Border Radius
descripttion: Utility classes for setting border radius on elements.
outline: deep
---

# Border Radius

Border radius classes for consistent rounded elements.

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
      <td><code>--size-50</code></td>
      <td><code>spr-rounded-border-radius-2xs</code></td>
    </tr>
    <tr>
      <td>4px</td>
      <td><code>--size-100</code></td>
      <td><code>spr-rounded-border-radius-xs</code></td>
    </tr>
    <tr>
      <td>6px</td>
      <td><code>--size-150</code></td>
      <td><code>spr-rounded-border-radius-sm</code></td>
    </tr>
    <tr>
      <td>8px</td>
      <td><code>--size-200</code></td>
      <td><code>spr-rounded-border-radius-md</code></td>
    </tr>
    <tr>
      <td>12px</td>
      <td><code>--size-250</code></td>
      <td><code>spr-rounded-border-radius-lg</code></td>
    </tr>
    <tr>
      <td>16px</td>
      <td><code>--size-300</code></td>
      <td><code>spr-rounded-border-radius-xl</code></td>
    </tr>
    <tr>
      <td>999px</td>
      <td>-</td>
      <td><code>spr-rounded-border-radius-full</code></td>
    </tr>
  </tbody>
</table>

## Usage

Apply a border radius class to any element:

```html
<!-- Small radius (8px) -->
<div class="spr-rounded-border-radius-md spr-bg-mushroom-100 p-4">Content</div>

<!-- Large radius (16px) -->
<div class="spr-rounded-border-radius-xl spr-border spr-border-solid spr-border-color-weak p-4">Card</div>

<!-- Full pill/circle -->
<button class="spr-rounded-border-radius-full spr-bg-kangkong-600 spr-text-color-inverted-strong px-4 py-2">
  Button
</button>
```
