# Contributing to Design System

Contribution process, from branching strategy to version updates and pull requests.

## Branch Naming Convention

Our branch names follow this structure:

```
{year}/{type}/{author}/{description}
```

Example: `2025/FEATURE/JEF/NEW_COMPONENT_DOCS`

### Breakdown:

- **Year**: Current year (e.g., `2025`)
- **Type**: Type of change
  - `FEATURE`: New features
  - `FIX`: Bug fixes
  - `CHORE`: Maintenance tasks
  - `DOCS`: Documentation updates
- **Author**: Your identifier/name
- **Description**: Brief description in UPPERCASE with underscores. If there is a Jira ticket number, use it as the description (e.g., `POLY-3`).

## Version Updates

We follow [Semantic Versioning](https://semver.org/) (SemVer):

```
MAJOR.MINOR.PATCH
```

Example: `1.2.9`

- **MAJOR**:
  - Breaking Changes
- **MINOR**:
  - New Features
  - New Components
  - Large Style Updates
  - Major Functionality Enhancements
- **PATCH**:
  - Bug Fixes
  - Small Design Updates
  - Documentation Updates
  - Minor Enhancements

### Updating Version

::: danger Important to note:
Whenever a minor or major version is updated, the patch or minor version resets to `0`.
:::

1. Update `package.json`:

```json
{
  "name": "design-system-next",
  "version": "1.0.1" // Increment appropriate number [!code focus]
  // ... rest of package.json
}
```

2. Add entry to `changelog.md`:

```markdown
## 2.12.2 (2025-01-01)

- Feat:
  - Add new component functionality and improved API support ([#commit_hash](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/commit_hash?refName=refs/heads/branch_name) by @JefMari)
  
- Fix:
  - Resolve issue with component rendering and improve error handling
  
- Docs:
  - Update documentation with new examples and usage guidelines
```

## Pull Request Guidelines

### Title Format

```
{type}: {description}
```

Example: `docs: add component creation and contribution guidelines`

### Types:

- `feat`: New feature or enhancement
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks
- `refactor`: Code refactoring
- `style`: Code style changes
- `test`: Adding tests
- `enhancement`: Improvements to existing features

### Description

- Be clear and concise
- Start with a verb (add, update, fix, remove)
- Use lowercase
- If there is a Jira ticket number, include it in the description (e.g., `POLY-3`).

### Requirements

- At least one reviewer approval
- All checks passing
- No merge conflicts
- Updated version and changelog

### Example Pull Request

**Title**: `feat: add button dropdown component and enhance button functionality`

**Description**:

```markdown
## Changes

- Add new button dropdown component with customizable options
- Enhance button component to support new dropdown integration
- Update list component to work with button dropdown
- Update documentation with examples and usage guidelines
- Add accessibility improvements to interactive elements

## Checklist

- [x] Updated version in package.json (1.0.1)
- [x] Added changelog entry
- [x] Documentation updated
- [x] Tested locally
- [x] No linting errors
- [x] Accessibility considerations addressed
```

## Release Process

1. Create feature branch

```bash
git checkout -b 2025/FEATURE/JEF/NEW_COMPONENT_DOCS
```

2. Make changes and commit

```bash
git add .
git commit -m "docs: add component creation and contribution guidelines"
```

3. Update version in `package.json`

```json
{
  "version": "1.0.0", // [!code --]
  "version": "1.0.1" // [!code ++]
}
```

4. Add changelog entry in `changelog.md`

```markdown
## 1.0.1 (2025-01-01)

- Feat:
  - Add new button dropdown component with improved functionality ([#commit_hash](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/commit_hash?refName=refs/heads/2025/FEATURE/JEF/BUTTON_DROPDOWN) by @JefMari)

- Fix:
  - Resolve styling issues in dropdown component
  
- Docs:
  - Update documentation with new examples and usage guidelines
```

5. Create pull request

- Title: `docs: add component creation and contribution guidelines`
- Request review from at least one team member
- Wait for approval
- Merge after approval

## Best Practices

1. **Commits**

   - Use conventional commit messages
   - Keep commits focused and atomic
   - Reference issues in commit messages
   - Include Jira ticket numbers (e.g., POLY-120) when applicable

2. **Documentation**

   - Update docs alongside code changes
   - Include examples with code snippets
   - Add usage guidelines and prop documentation
   - Document component API changes thoroughly
   - Include images or diagrams when helpful

3. **Code Quality**

   - Follow existing code style
   - Add/update tests as needed
   - Run linters before committing
   - Consider accessibility implications
   - Test on multiple browsers/devices when appropriate

4. **Review Process**
   - Respond to review comments promptly
   - Test changes thoroughly
   - Update PR based on feedback
   - Document any significant changes made during review

## Getting Help

If you need assistance:

1. Check existing documentation
2. Ask in the team channel
3. Reach out to maintainers

::: tip
Remember to keep communication clear and professional, and always be willing to help others who might have questions about your contributions.
:::
