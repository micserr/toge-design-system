---
title: Audit Trail
description: The Audit Trail component displays a chronological log of changes made to a record.
outline: deep
---

# Audit Trail

## Basic Usage

<div class="spr-w-[400px]">
  <SprAuditTrail :auditTrailLogs="mockTrailLogs" />
</div>

```vue
<template>
  <div class="spr-w-[400px]">
    <SprAuditTrail :auditTrailLogs="mockTrailLogs" />
  </div>
</template>
<script lang="ts" setup>
import SprAuditTrail from '@/components/audit-trail/audit-trail.vue';

import { ref } from 'vue';

const mockTrailLogs = [
  {
    userName: 'Max Verstappen',
    title: 'Max Verstappen UPDATED this on October 22, 2025 at 10:30 AM',
    logs: [
      {
        label: ['Status'],
        oldValue: 'Inactive',
        newValue: 'Active',
      },
      {
        label: ['Test1', 'Test2'],
        oldValue: 'False',
        newValue: 'True',
      },
    ],
  },
  {
    userName: 'Oscar Piastri',
    title: 'Oscar Piastri UPDATED this on October 21, 2025 at 12:00 PM',
    logs: [
      {
        label: ['Status'],
        oldValue: 'Inactive',
        newValue: 'Active',
      },
      {
        label: ['Test1', 'Test2', 'Test3'],
        oldValue: 'False',
        newValue: 'True',
      },
    ],
  },
  {
    userName: 'Lando Norris',
    title: 'Lando Norris CREATED this on October 20, 2025 at 01:00 PM',
    logs: [
      {
        label: ['Status'],
        oldValue: 'Inactive',
        newValue: 'Active',
      },
      {
        label: ['Test1', 'Test2', 'Test3'],
        oldValue: 'False',
        newValue: 'True',
      },
    ],
  },
];
</script>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>auditTrailLogs</code></td>
      <td>
        <p>List of audit trail log entries. If avatarUrl is not provided, a default avatar (initials based on userName) will be rendered.</p>
      </td>
      <td>
        <code>
          {
            userName: string;
            title: string;
            avatarUrl?: string;
            logs: {
              label: string[];
              oldValue: string;
              newValue: string;
            }[];
          }[];
        </code>              
      </td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>alwaysOpen</code></td>
      <td>
        <p>When true, log entries remains opened when opening another entry.</p>
      </td>
      <td>boolean</td>
      <td>true</td>
    </tr>  
  </tbody>
</table>

<script lang="ts" setup>  
  import SprAuditTrail from '@/components/audit-trail/audit-trail.vue'
  
  import { ref } from 'vue'

  const mockTrailLogs = [
  {
    userName: 'Max Verstappen',
    title: 'Max Verstappen UPDATED this on October 22, 2025 at 10:30 AM',
    logs: [
      {
        label: ['Status'],
        oldValue: 'Inactive',
        newValue: 'Active',
      },
      {
        label: ['Test1', 'Test2'],
        oldValue: 'False',
        newValue: 'True',
      },
    ],
  },
  {
    userName: 'Oscar Piastri',
    title: 'Oscar Piastri UPDATED this on October 21, 2025 at 12:00 PM',
    logs: [
      {
        label: ['Status'],
        oldValue: 'Inactive',
        newValue: 'Active',
      },
      {
        label: ['Test1', 'Test2', 'Test3'],
        oldValue: 'False',
        newValue: 'True',
      },
    ],
  },
  {
    userName: 'Lando Norris',
    title: 'Lando Norris CREATED this on October 20, 2025 at 01:00 PM',
    logs: [
      {
        label: ['Status'],
        oldValue: 'Inactive',
        newValue: 'Active',
      },
      {
        label: ['Test1', 'Test2', 'Test3'],
        oldValue: 'False',
        newValue: 'True',
      },
    ],
  },
];

</script>
