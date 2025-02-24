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
- **Description**: Brief description in UPPERCASE with underscores

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
- **PATCH**:
  - Bug Fixes
  - Small Design Updates

### Updating Version

::: info Important to note:
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
## 1.0.1 (2025-01-01)

- Docs:
  - Add new documentation for component creation and contribution guidelines ([#commit_hash])(commit_url) by @JefMari)
```

## Pull Request Guidelines

### Title Format

```
{type}: {description}
```

Example: `docs: add component creation and contribution guidelines`

### Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks
- `refactor`: Code refactoring
- `style`: Code style changes
- `test`: Adding tests

### Description

- Be clear and concise
- Start with a verb (add, update, fix, remove)
- Use lowercase

### Requirements

- At least one reviewer approval
- All checks passing
- No merge conflicts
- Updated version and changelog

### Example Pull Request

**Title**: `docs: add component creation and contribution guidelines`

**Description**:

```markdown
## Changes

- Add new documentation for component creation process
- Add contribution guidelines
- Update changelog and version

## Checklist

- [x] Updated version in package.json
- [x] Added changelog entry
- [x] Documentation updated
- [x] Tested locally
- [x] No linting errors
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

- Docs:
  - Add new documentation for component creation and contribution guidelines ([#commit_hash])(commit_url) by @JefMari)
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

2. **Documentation**

   - Update docs alongside code changes
   - Include examples where appropriate
   - Keep documentation up to date

3. **Code Quality**

   - Follow existing code style
   - Add/update tests as needed
   - Run linters before committing

4. **Review Process**
   - Respond to review comments promptly
   - Test changes thoroughly
   - Update PR based on feedback

## Getting Help

If you need assistance:

1. Check existing documentation
2. Ask in the team channel
3. Reach out to maintainers

::: tip
Remember to keep communication clear and professional, and always be willing to help others who might have questions about your contributions.
:::
