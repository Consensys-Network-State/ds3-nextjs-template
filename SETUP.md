# DS3 NextJS Template Setup Guide

This document explains how this template was set up from scratch. This is for reference only - you don't need to follow these steps as the template comes pre-configured.

## Initial Setup

1. Create a new Next.js project:
```bash
pnpm create next-app
```

Select the following options:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes ✓ (This will automatically set up PostCSS and Tailwind)
- `src/` directory: Yes
- App Router: Yes
- Import alias: Yes

2. Install DS3 and related dependencies:
```bash
pnpm add @consensys/ds3 @consensys/ds3-config react-native-web react-native-safe-area-context
```

## Configuration Files

### 1. Theme Configuration (`theme.config.mjs`)

```typescript
/**
 * Theme configuration for DS3
 * @see https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme
 * @type {import('@consensys/ds3-theme').UserConfig}
 */
export default {
  themes: {
    // Default theme using Radix preset colors
    default: {
      colors: {
        neutral: 'gray',
        primary: 'blue',
        secondary: 'violet',
        error: 'red',
        warning: 'amber',
        success: 'green',
        info: 'blue',
      },
    },
    // You can add more themes as needed
  },
};
```

### 2. Next.js Configuration (`next.config.mjs`)

```javascript
import { withDs3 } from '@consensys/ds3-config/nextjs';
import themeConfig from './theme.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // custom options here
};

export default withDs3(nextConfig, themeConfig);
```

### 3. Tailwind Configuration (`tailwind.config.ts`)

```typescript
import ds3 from "@consensys/ds3-config/nativewind";
import themeConfig from "./theme.config.mjs";

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@consensys/ds3/src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [ds3(themeConfig)],
};

export default config;
```

### 4. Global Type Declarations

Create `src/app/global.d.ts` to include DS3's Next.js types:
```typescript
import '@consensys/ds3-config/nextjs';
```

### 5. TypeScript Configuration

Add NativeWind types by creating `nativewind-env.d.ts`:
```typescript
/// <reference types="nativewind/types" />
```

### 6. Root Layout Setup (`src/app/layout.tsx`)

```tsx
import { ThemeProvider } from "@consensys/ds3";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SafeAreaProvider>
          <ThemeProvider config={global.DS3}>
            {children}
          </ThemeProvider>
        </SafeAreaProvider>
      </body>
    </html>
  );
}
```

### 7. Global Styles (`src/app/globals.css`)

The following Tailwind directives should be in your globals.css (these are automatically added by create-next-app when selecting Tailwind CSS):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```