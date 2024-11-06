# Side Navigation - Olympus

This provides a side navigation bar with a logo, navigation links, quick actions, and a search bar.

```html
<SidenavOlympus has-quick-actions has-search :nav-links="navLinks">
  <template #logo-image>
    <img src="[logo_image_path]" alt="logo" />
  </template>
</SidenavOlympus>
```

### Templates

You can add your custom logo image by using the `logo-image` slot.

```html
<template #logo-image>
  <img src="[logo_image_path]" alt="logo" />
</template>
```

### Attributes

::: info Nav Link Attribute:
`nav-links` attribute has icon property under `parentLinks` which will require to import your icon component.
:::

<table>
  <thead>
    <tr>
      <td>Attribute</td>
      <td>Description</td>
      <td>Type</td>
      <td>Accepted Values</td>
      <td>Default Value</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>has-quick-actions</td>
      <td>Shows quick action button</td>
      <td>boolean</td>
      <td>true | false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>has-search</td>
      <td>Shows search button</td>
      <td>boolean</td>
      <td>true | false</td>
      <td>true</td>
    </tr>
     <tr>
      <td>nav-links</td>
      <td>Will generate navigation links including submenu links</td>
      <td>Array</td>
      <td>
        <code>
            [
              {
                parentLinks: [
                  {
                    title: 'Navigation Title',
                    icon: [component Icon],
                  },
                  {
                    title: 'Navigation Title',
                    icon: [component Icon],
                  }
                ],
              },
              {
                parentLinks: [
                  {
                    title: 'Navigation Title',
                    icon: [component Icon],
                    menuLinks: [
                      {
                        title: 'Navigation Title',
                      },
                      {
                        title: 'Navigation Title',
                        subMenuLinks: [
                          {
                            title: 'Navigation Title',
                          },
                          {
                            title: 'Navigation Title',
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
            ]
        </code>
      </td>
      <td>-</td>
    </tr>
  </tbody>
</table>
