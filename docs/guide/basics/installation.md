# Installation

> [!IMPORTANT]  
> **Design System Next** is a **private package** hosted on **Azure Artifacts**. You must connect to the Azure Artifacts feed to authenticate and access the package.  
> For detailed instructions, refer to the [Connect to Feed Guide](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_artifacts/feed/Design-System-Next/connect).

## Connect to the Azure Artifacts Feed

Ensure your development environment is connected to the Azure Artifacts feed. This step is mandatory for authentication and to access the private package. If you encounter any issues, refer to the [Connect to Feed Guide](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_artifacts/feed/Design-System-Next/connect).

## Install the Package

Once connected, you can install the package using npm:

```bash
npm install design-system-next
```

## Alternative: Public npm Registry

If you don't have access to Azure Artifacts or prefer not to use it, a public version of the package is also available on the npm registry:

```bash
npm install design-system-next
```

You can view the public package details at [npmjs.com/package/design-system-next](https://www.npmjs.com/package/design-system-next).

> [!NOTE]
> The public npm registry version may differ slightly from the Azure Artifacts version in terms of features or update frequency. For production environments, we recommend using the Azure Artifacts version when possible.
