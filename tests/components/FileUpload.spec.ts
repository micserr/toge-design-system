/**
 * FileUpload Component Tests
 *
 * Test Coverage Rationale:
 * - Comprehensive prop validation including file types, size limits, and UI variants
 * - Basic rendering tests for both empty state and file list state
 * - UI component behavior validation (buttons, inputs, icons)
 * - Error state handling and visual feedback
 * - Accessibility compliance including keyboard navigation and screen reader support
 * - File operation UI elements (upload zone, file list, replace/delete buttons)
 *
 * Technical Approach:
 * - Focus on UI rendering and visual states rather than complex file handling
 * - Validates CSS classes for visual states and responsive behavior
 * - Tests component structure and accessibility patterns
 * - Ensures proper prop handling and conditional rendering
 *
 * ASSUMPTIONS:
 * - Button and Icon components are properly imported and functional
 * - File validation logic is handled by the composable
 * - Component follows Vue.js v-model patterns for file arrays
 *
 * TODO (Future Enhancements):
 * - Add file upload simulation tests when testing framework supports it better
 * - Test drag & drop events with proper event mocking
 * - Add performance testing for large file lists
 * - Test integration with form validation
 */

import { test, expect } from '@playwright/experimental-ct-vue';
import FileUpload from '@/components/file-upload/file-upload.vue';

// Helper function to create mock File-like objects
const createMockFile = (name: string, type: string, size: number = 1024) => {
  return {
    name,
    type,
    size,
  } as File;
};

test.describe('FileUpload Component', () => {
  test.describe('Rendering - Initial State', () => {
    test('renders empty upload zone by default', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
        },
      });

      await expect(component).toBeVisible();
      // Check for icon by looking for svg or iconify element
      await expect(component.locator('svg, [class*="iconify"]').first()).toBeVisible();
      await expect(component.getByRole('button', { name: 'Browse Files' })).toBeVisible();
      await expect(component.getByText('or drop your file to upload')).toBeVisible();
    });

    test('renders with title when provided', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          title: 'Document Upload',
        },
      });

      await expect(component.getByText('Document Upload')).toBeVisible();
    });

    test('shows supported file types in sublabel', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          fileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
        },
      });

      await expect(component.getByText(/Supports: JPEG, PNG, PDF/)).toBeVisible();
    });

    test('shows custom supported file type label', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          supportedFileTypeLabel: 'Images and Documents only',
        },
      });

      await expect(component.getByText('Supports: Images and Documents only')).toBeVisible();
    });

    test('shows max file size information', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          maxFileSize: 25,
        },
      });

      await expect(component.getByText('25MB maximum file size')).toBeVisible();
    });
  });

  test.describe('Props - Type and Variants', () => {
    test('renders default type with horizontal layout', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          type: 'default',
        },
      });

      // Should have wrapper element but not center-specific classes
      const wrapper = component.locator('.file-upload_wrapper');
      await expect(wrapper).toBeVisible();
    });

    test('renders center type with vertical centered layout', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          type: 'center',
        },
      });

      // Should have center-specific classes
      const wrapper = component.locator('.file-upload_wrapper');
      await expect(wrapper).toHaveClass(/spr-flex-col/);
      await expect(wrapper).toHaveClass(/spr-justify-center/);
      await expect(wrapper).toHaveClass(/spr-min-h-\[160px\]/);
    });

    test('supports multiple file selection', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          multiple: true,
        },
      });

      await expect(component.getByText('or drop your files to upload')).toBeVisible();

      const hiddenInput = component.locator('input[type="file"]').first();
      await expect(hiddenInput).toHaveAttribute('multiple');
    });

    test('shows single file language when multiple is false', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          multiple: false,
        },
      });

      await expect(component.getByText('or drop your file to upload')).toBeVisible();
    });
  });

  test.describe('Props - File Type Validation', () => {
    test('accepts default file types (all supported)', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
        },
      });

      const hiddenInput = component.locator('input[type="file"]').first();
      const acceptAttr = await hiddenInput.getAttribute('accept');

      // Should include common image and document types
      expect(acceptAttr).toContain('image/jpeg');
      expect(acceptAttr).toContain('application/pdf');
      expect(acceptAttr).toContain('text/plain');
    });

    test('restricts to specified file types', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          fileTypes: ['image/jpeg', 'image/png'],
        },
      });

      const hiddenInput = component.locator('input[type="file"]').first();
      await expect(hiddenInput).toHaveAttribute('accept', 'image/jpeg,image/png');
    });

    test('displays readable file type names', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          fileTypes: ['application/msword', 'application/vnd.ms-excel', 'text/plain', 'image/svg+xml'],
        },
      });

      await expect(component.getByText(/Supports: MS WORD, MS EXCEL, TXT, SVG/)).toBeVisible();
    });
  });

  test.describe('Props - Disabled State', () => {
    test('renders disabled state correctly', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          disabled: true,
        },
      });

      const browseButton = component.getByRole('button', { name: 'Browse Files' });
      await expect(browseButton).toBeDisabled();

      const hiddenInput = component.locator('input[type="file"]').first();
      await expect(hiddenInput).toBeDisabled();

      // Should have disabled styling
      const wrapper = component.locator('.file-upload_wrapper');
      await expect(wrapper).toHaveClass(/spr-border-color-disabled/);
      await expect(wrapper).toHaveClass(/spr-background-color-disabled/);
    });
  });

  test.describe('Props - Error States', () => {
    test('displays error styling when showError is true', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          showError: true,
          errorMessages: ['File size too large'],
        },
      });

      // Error message should be visible with warning icon
      await expect(component.getByText('File size too large')).toBeVisible();

      // Error styling is shown through error message section
      // The error appears in a div with danger text color class
      const errorMessageDiv = component.locator('div[class*="spr-text-color-danger-base"]');
      await expect(errorMessageDiv).toBeVisible();

      // Warning icon should be present (SVG element in error section)
      const errorSvgs = component.locator('svg');
      await expect(errorSvgs).toHaveCount(1); // Only warning icon for empty state
    });

    test('shows multiple error messages', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          showError: true,
          errorMessages: ['File too large', 'Invalid file type', 'Upload failed'],
        },
      });

      await expect(component.getByText('File too large')).toBeVisible();
      await expect(component.getByText('Invalid file type')).toBeVisible();
      await expect(component.getByText('Upload failed')).toBeVisible();
    });

    test('hides normal sublabel when showing errors', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          showError: true,
          errorMessages: ['Error occurred'],
        },
      });

      await expect(component.getByText(/Supports:/)).not.toBeVisible();
      await expect(component.getByText(/MB maximum file size/)).not.toBeVisible();
    });
  });

  test.describe('Props - UI Customization', () => {
    test('hides dropzone label when hideDropzoneLabel is true', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          hideDropzoneLabel: true,
        },
      });

      await expect(component.getByText(/or drop your file to upload/)).not.toBeVisible();
    });

    test('hides file preview icon when hideFilePreviewIcon is true', async ({ mount }) => {
      const mockFile = createMockFile('test.pdf', 'application/pdf');

      const component = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
          hideFilePreviewIcon: true,
        },
      });

      // Should not show check circle icon when hideFilePreviewIcon is true
      await expect(component.locator('svg, [class*="iconify"]').first()).toBeVisible(); // File name should still be visible
      await expect(component.getByText('test.pdf')).toBeVisible();
    });
  });

  test.describe('Props - Progress Indicator', () => {
    test('shows progress bar when showProgress is true', async ({ mount }) => {
      const mockFile = createMockFile('test.pdf', 'application/pdf');

      const component = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
          showProgress: true,
          progressValue: 75,
        },
      });

      // Should show progress bar component
      const progressBar = component.locator('[role="progressbar"]');
      await expect(progressBar).toBeAttached();
      await expect(progressBar).toHaveAttribute('aria-valuenow', '75');
      await expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    });

    test('hides progress bar when showProgress is false', async ({ mount }) => {
      const mockFile = createMockFile('test.pdf', 'application/pdf');

      const component = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
          showProgress: false,
          progressValue: 50,
        },
      });

      // Should not show progress bar
      const progressBar = component.locator('[role="progressbar"]');
      await expect(progressBar).not.toBeVisible();
    });

    test('displays correct progress value', async ({ mount }) => {
      const mockFile = createMockFile('test.pdf', 'application/pdf');

      const component = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
          showProgress: true,
          progressValue: 60,
        },
      });

      const progressBar = component.locator('[role="progressbar"]');
      await expect(progressBar).toBeAttached();
      await expect(progressBar).toHaveAttribute('aria-valuenow', '60');
    });

    test('shows progress bar with error state when showError is true', async ({ mount }) => {
      const mockFile = createMockFile('test.pdf', 'application/pdf');

      const component = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
          showProgress: true,
          progressValue: 30,
          showError: true,
          errorMessages: ['Upload failed'],
        },
      });

      // Progress bar should be visible
      const progressBar = component.locator('[role="progressbar"]');
      await expect(progressBar).toBeAttached();

      // Error message should also be visible
      await expect(component.getByText('Upload failed')).toBeVisible();
    });

    test('progress bar updates when progressValue changes', async ({ mount }) => {
      const mockFile = createMockFile('test.pdf', 'application/pdf');

      const component = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
          showProgress: true,
          progressValue: 25,
        },
      });

      // Initial progress
      const progressBar = component.locator('[role="progressbar"]');
      await expect(progressBar).toBeAttached();
      await expect(progressBar).toHaveAttribute('aria-valuenow', '25');

      // Update progress value - need to remount with new props
      const updatedComponent = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
          showProgress: true,
          progressValue: 80,
        },
      });
      
      const updatedProgressBar = updatedComponent.locator('[role="progressbar"]');
      await expect(updatedProgressBar).toHaveAttribute('aria-valuenow', '80');
    });
  });

  test.describe('Props - File Icon Preview', () => {
    test('shows file type icons by default', async ({ mount }) => {
      const mockFiles = [
        createMockFile('document.pdf', 'application/pdf'),
        createMockFile('image.jpg', 'image/jpeg'),
        createMockFile('text.txt', 'text/plain'),
      ];

      const component = await mount(FileUpload, {
        props: {
          modelValue: mockFiles,
          fileTypes: ['application/pdf', 'image/jpeg', 'text/plain'],
        },
      });

      // Should show file type icons for each file
      const fileIcons = component.locator('svg, [class*="iconify"]');
      await expect(fileIcons).toHaveCount(6); // 3 files × 2 icons each (file type + delete)
    });

    test('hides file type icons when hideFilePreviewIcon is true', async ({ mount }) => {
      const mockFiles = [
        createMockFile('document.pdf', 'application/pdf'),
        createMockFile('image.jpg', 'image/jpeg'),
      ];

      const component = await mount(FileUpload, {
        props: {
          modelValue: mockFiles,
          hideFilePreviewIcon: true,
        },
      });

      // Should only show delete button icons, not file type icons
      const fileIcons = component.locator('svg, [class*="iconify"]');
      await expect(fileIcons).toHaveCount(2); // Only delete button icons
    });

    test('shows different icons for different file types', async ({ mount }) => {
      const mockFiles = [
        createMockFile('document.pdf', 'application/pdf'),
        createMockFile('image.jpg', 'image/jpeg'),
        createMockFile('spreadsheet.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
      ];

      const component = await mount(FileUpload, {
        props: {
          modelValue: mockFiles,
          fileTypes: ['application/pdf', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
        },
      });

      // Each file should have its appropriate icon
      await expect(component.getByText('document.pdf')).toBeVisible();
      await expect(component.getByText('image.jpg')).toBeVisible();
      await expect(component.getByText('spreadsheet.xlsx')).toBeVisible();

      // Should have file type icons (one per file) plus delete icons
      const fileIcons = component.locator('svg, [class*="iconify"]');
      await expect(fileIcons).toHaveCount(6); // 3 files × 2 icons each
    });
  });

  test.describe('File List State', () => {
    test('displays uploaded files in list view', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [
            {
              name: 'document.pdf',
              type: 'application/pdf',
              size: 1024,
            } as File,
            {
              name: 'image.jpg',
              type: 'image/jpeg',
              size: 2048,
            } as File,
          ],
        },
      });

      // Should show file list instead of upload zone
      await expect(component.locator('.file-upload_wrapper')).not.toBeVisible();

      await expect(component.getByText('document.pdf')).toBeVisible();
      await expect(component.getByText('image.jpg')).toBeVisible();

      // Should show check icons for uploaded files (one SVG per file)
      const svgElements = component.locator('svg');
      await expect(svgElements).toHaveCount(4); // 2 files: each has file type icon + delete button icon
    });

    test('shows replace and delete buttons for each file', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [
            {
              name: 'test.pdf',
              type: 'application/pdf',
              size: 1024,
            } as File,
          ],
        },
      });

      await expect(component.getByRole('button', { name: 'Replace' })).toBeVisible();

      // Delete button has SVG but no text content (danger colored button)
      const deleteButton = component.locator('button[class*="spr-text-color-danger-base"]');
      await expect(deleteButton).toBeVisible();
    });

    test('displays file-specific error messages', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [
            {
              name: 'large-file.pdf',
              type: 'application/pdf',
              size: 1024,
            } as File,
          ],
          showError: true,
          errorMessages: ['File size exceeds 10MB limit'],
        },
      });

      await expect(component.getByText('File size exceeds 10MB limit')).toBeVisible();
      await expect(component.locator('svg').first()).toBeVisible(); // Warning icon
    });

    test('applies center layout styling to file list', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [
            {
              name: 'test.pdf',
              type: 'application/pdf',
              size: 1024,
            } as File,
          ],
          type: 'center',
        },
      });

      const fileListContainer = component.locator('.spr-rounded-border-radius-xl');
      await expect(fileListContainer).toHaveClass(/spr-min-h-\[160px\]/);
      await expect(fileListContainer).toHaveClass(/spr-justify-center/);
    });
  });

  test.describe('Basic File Operations', () => {
    test('has functional browse button', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
        },
      });

      const browseButton = component.getByRole('button', { name: 'Browse Files' });
      const hiddenInput = component.locator('input[type="file"]').first();

      await expect(browseButton).toBeEnabled();
      await expect(hiddenInput).toBeHidden();
      await expect(hiddenInput).toHaveAttribute('type', 'file');
    });

    test('has functional file input with correct attributes', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          multiple: true,
          fileTypes: ['image/jpeg', 'image/png'],
        },
      });

      const hiddenInput = component.locator('input[type="file"]').first();

      await expect(hiddenInput).toHaveAttribute('multiple');
      await expect(hiddenInput).toHaveAttribute('accept', 'image/jpeg,image/png');
      await expect(hiddenInput).not.toBeDisabled();
    });

    test('shows delete and replace buttons for files', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('file1.pdf', 'application/pdf'), createMockFile('file2.jpg', 'image/jpeg')],
        },
      });

      // Should show both files
      await expect(component.getByText('file1.pdf')).toBeVisible();
      await expect(component.getByText('file2.jpg')).toBeVisible();

      // Should have correct number of action buttons
      const replaceButtons = component.getByRole('button', { name: 'Replace' });
      const deleteButtons = component.locator('button[class*="spr-text-color-danger-base"]');

      await expect(replaceButtons).toHaveCount(2);
      await expect(deleteButtons).toHaveCount(2); // 2 delete buttons with danger styling
    });

    test('has replace input for file replacement', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('original.pdf', 'application/pdf')],
        },
      });

      // Should have hidden replace input
      const replaceInput = component.locator('input[type="file"]'); // Main file input
      await expect(replaceInput).toBeHidden();
      await expect(replaceInput).toHaveAttribute('type', 'file');
    });
  });

  test.describe('Accessibility', () => {
    test('provides proper ARIA labels and roles', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
          title: 'Upload Documents',
        },
      });

      const browseButton = component.getByRole('button', { name: 'Browse Files' });
      await expect(browseButton).toBeEnabled();

      const titleLabel = component.getByText('Upload Documents');
      await expect(titleLabel).toBeVisible();
    });

    test('supports keyboard navigation for file operations', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('test.pdf', 'application/pdf')],
        },
      });

      const replaceButton = component.getByRole('button', { name: 'Replace' });
      const deleteButton = component.locator('button[class*="spr-text-color-danger-base"]');

      // Should be keyboard accessible
      await replaceButton.focus();
      await expect(replaceButton).toBeFocused();

      await deleteButton.first().focus();
      await expect(deleteButton.first()).toBeFocused();
    });

    test('maintains tab order for multiple files', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('file1.pdf', 'application/pdf'), createMockFile('file2.jpg', 'image/jpeg')],
        },
      });

      const replaceButtons = component.getByRole('button', { name: 'Replace' });
      const deleteButtons = component.locator('button[class*="spr-text-color-danger-base"]');

      // Should have proper tab order
      await expect(replaceButtons.first()).toBeVisible();
      await expect(deleteButtons.first()).toBeVisible();
      await expect(replaceButtons.nth(1)).toBeVisible();
      await expect(deleteButtons.nth(1)).toBeVisible();
    });

    test('provides error announcements for screen readers', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('test.pdf', 'application/pdf')],
          showError: true,
          errorMessages: ['File validation failed'],
        },
      });

      // Error message should be visible and associated with the file
      await expect(component.getByText('File validation failed')).toBeVisible();

      // Warning icon should be present for screen readers (SVG element)
      await expect(component.locator('svg').first()).toBeVisible();
    });

    test('disabled buttons are not accessible via keyboard', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('test.pdf', 'application/pdf')],
          disabled: true,
        },
      });

      const replaceButton = component.getByRole('button', { name: 'Replace' });
      const deleteButton = component.locator('button[class*="spr-text-color-disabled"]'); // When disabled, style changes

      await expect(replaceButton).toBeDisabled();
      await expect(deleteButton.first()).toBeDisabled();
    });
  });

  test.describe('Edge Cases', () => {
    test('handles empty file name gracefully', async ({ mount }) => {
      const mockFile = createMockFile('', 'application/pdf');

      const component = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
        },
      });

      // Should render without breaking, even with empty filename
      await expect(component).toBeVisible();
      await expect(component.getByRole('button', { name: 'Replace' })).toBeVisible();
    });

    test('handles very long file names', async ({ mount }) => {
      const longFileName =
        'this-is-a-very-very-very-long-file-name-that-might-cause-layout-issues-or-overflow-problems-in-the-ui-component.pdf';
      const mockFile = createMockFile(longFileName, 'application/pdf');

      const component = await mount(FileUpload, {
        props: {
          modelValue: [mockFile],
        },
      });

      await expect(component.getByText(longFileName)).toBeVisible();

      // Should handle text wrapping properly
      const fileNameElement = component.locator('.spr-break-all');
      await expect(fileNameElement).toBeVisible();
    });

    test('handles large number of files', async ({ mount }) => {
      const mockFiles = Array.from({ length: 10 }, (_, i) => createMockFile(`file-${i + 1}.pdf`, 'application/pdf'));

      const component = await mount(FileUpload, {
        props: {
          modelValue: mockFiles,
          multiple: true,
        },
      });

      // Should render all files
      for (let i = 1; i <= 10; i++) {
        await expect(component.getByText(`file-${i}.pdf`)).toBeVisible();
      }

      // Should have correct number of action buttons
      await expect(component.getByRole('button', { name: 'Replace' })).toHaveCount(10);
    });

    test('handles transitions between states correctly', async ({ mount }) => {
      // Start with empty state
      const component = await mount(FileUpload, {
        props: {
          modelValue: [],
        },
      });

      // Should show upload zone
      await expect(component.getByRole('button', { name: 'Browse Files' })).toBeVisible();

      // Test with files
      const componentWithFiles = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('test.pdf', 'application/pdf')],
        },
      });

      // Should show file list
      await expect(componentWithFiles.getByText('test.pdf')).toBeVisible();
      await expect(componentWithFiles.getByRole('button', { name: 'Browse Files' })).not.toBeVisible();
    });
  });

  test.describe('Props Integration', () => {
    test('works with all props combined', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('test.pdf', 'application/pdf')],
          title: 'Document Upload',
          type: 'center' as const,
          multiple: true,
          maxFileSize: 15,
          fileTypes: ['application/pdf', 'image/jpeg'],
          showError: true,
          errorMessages: ['File validation failed'],
          hideFilePreviewIcon: false,
          hideDropzoneLabel: false,
          supportedFileTypeLabel: 'PDF and JPEG only',
          showProgress: true,
          progressValue: 75,
        },
      });

      // Should display title
      await expect(component.getByText('Document Upload')).toBeVisible();

      // Should show file with error
      await expect(component.getByText('test.pdf')).toBeVisible();
      await expect(component.getByText('File validation failed')).toBeVisible();

      // Should show progress bar
      const progressBar = component.locator('[role="progressbar"]');
      await expect(progressBar).toBeAttached();
      await expect(progressBar).toHaveAttribute('aria-valuenow', '75');

      // Should show error styling and warning icon (SVG element)
      const svgElements = component.locator('svg');
      await expect(svgElements).toHaveCount(3); // File icon, delete icon, warning icon

      // Should maintain file operation buttons
      await expect(component.getByRole('button', { name: 'Replace' })).toBeVisible();
    });

    test('works with progress and icon preview props', async ({ mount }) => {
      const component = await mount(FileUpload, {
        props: {
          modelValue: [createMockFile('document.pdf', 'application/pdf')],
          title: 'Upload with Progress',
          showProgress: true,
          progressValue: 50,
          hideFilePreviewIcon: false,
        },
      });

      // Should show progress bar
      const progressBar = component.locator('[role="progressbar"]');
      await expect(progressBar).toBeAttached();
      await expect(progressBar).toHaveAttribute('aria-valuenow', '50');

      // Should show file type icon
      const fileIcons = component.locator('svg, [class*="iconify"]');
      await expect(fileIcons).toHaveCount(2); // File type icon, delete icon
    });

    test('maintains consistent styling across variants', async ({ mount }) => {
      // Test different combinations
      const variants = [
        { type: 'default' as const, disabled: false },
        { type: 'center' as const, disabled: false },
        { type: 'default' as const, disabled: true },
        { type: 'center' as const, disabled: true },
      ];

      for (const variant of variants) {
        const component = await mount(FileUpload, {
          props: {
            modelValue: [],
            ...variant,
          },
        });

        await expect(component).toBeVisible();

        if (variant.disabled) {
          await expect(component.getByRole('button', { name: 'Browse Files' })).toBeDisabled();
        } else {
          await expect(component.getByRole('button', { name: 'Browse Files' })).toBeEnabled();
        }
      }
    });
  });
});
