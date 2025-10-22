---
title: Skeletal Loader
descripttion: The Skeletal Loader utility provides placeholder elements to indicate loading content, enhancing user experience during data fetch operations.
outline: deep
---

# Skeletal Loader

The Skeletal Loader is a utility designed to provide a placeholder for content that is being loaded. It is commonly used in user interfaces to enhance the user experience by indicating that data is being fetched, thereby reducing perceived loading times and improving user engagement.

## Basic Usage

To use the Skeletal Loader, you can include it in your HTML as follows:

<div class="spr-space-y-2">
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
</div>

```html
<div class="spr-space-y-2">
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
</div>
```

## Variations

### Different Sizes

You can customize the size of the Skeletal Loader by using different height and width utility classes:

<div class="spr-space-y-2">
  <!-- Small loader -->
  <div class="spr-skeletal-loader spr-h-2 spr-w-24"></div>

  <!-- Medium loader -->
  <div class="spr-skeletal-loader spr-h-4 spr-w-48"></div>

  <!-- Large loader -->
  <div class="spr-skeletal-loader spr-h-6 spr-w-full"></div>
</div>

```html
<!-- Small loader -->
<div class="spr-skeletal-loader spr-h-2 spr-w-24"></div>

<!-- Medium loader -->
<div class="spr-skeletal-loader spr-h-4 spr-w-48"></div>

<!-- Large loader -->
<div class="spr-skeletal-loader spr-h-6 spr-w-full"></div>
```

### Rounded Corners

Add rounded corners for a more polished appearance:

<div class="spr-skeletal-loader spr-h-4 spr-w-full spr-rounded-md"></div>

```html
<div class="spr-skeletal-loader spr-h-4 spr-w-full spr-rounded-md"></div>
```

### Circle Loader

Create a circular loader for profile pictures or icons:

<div class="spr-skeletal-loader spr-h-12 spr-w-12 spr-rounded-full"></div>

```html
<div class="spr-skeletal-loader spr-h-12 spr-w-12 spr-rounded-full"></div>
```

## Complex Layouts

You can combine multiple skeletal loaders to create complex loading states for cards, tables, or other UI elements:

<!-- Card loading state -->
<div class="spr-card spr-space-y-4 spr-p-4">
  <!-- Header -->
  <div class="spr-flex spr-items-center spr-space-x-3">
    <div class="spr-skeletal-loader spr-h-10 spr-w-10 spr-rounded-full"></div>
    <div class="spr-flex-1 spr-space-y-2">
      <div class="spr-skeletal-loader spr-h-3 spr-w-1/2"></div>
      <div class="spr-skeletal-loader spr-h-2 spr-w-1/4"></div>
    </div>
  </div>

  <!-- Content -->
  <div class="spr-space-y-2">
    <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
    <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
    <div class="spr-skeletal-loader spr-h-4 spr-w-3/4"></div>
  </div>
</div>

```html
<!-- Card loading state -->
<div class="spr-card spr-space-y-4 spr-p-4">
  <!-- Header -->
  <div class="spr-flex spr-items-center spr-space-x-3">
    <div class="spr-skeletal-loader spr-h-10 spr-w-10 spr-rounded-full"></div>
    <div class="spr-flex-1 spr-space-y-2">
      <div class="spr-skeletal-loader spr-h-3 spr-w-1/2"></div>
      <div class="spr-skeletal-loader spr-h-2 spr-w-1/4"></div>
    </div>
  </div>

  <!-- Content -->
  <div class="spr-space-y-2">
    <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
    <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
    <div class="spr-skeletal-loader spr-h-4 spr-w-3/4"></div>
  </div>
</div>
```
