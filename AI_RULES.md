# AI Rules for Next.js + Ionic + Capacitor App

## Tech Stack

- **Next.js 14** - React framework with static export for mobile deployment
- **Ionic Framework 7** - Cross-platform UI components for native mobile experience
- **Capacitor 5** - Native runtime for building iOS and Android apps
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework for styling
- **PullState** - Simple state management for React applications
- **React Router 5** - Client-side routing within the Ionic app
- **Next.js Image** - Optimized image handling and lazy loading

## Library Usage Rules

### UI Components
- **Always use Ionic Framework components** for native mobile UI (IonPage, IonHeader, IonContent, IonList, etc.)
- **Use Tailwind CSS** for custom styling and layout utilities
- **Never use shadcn/ui components** - this is a mobile app, not a web app
- **Use Next.js Image component** for all images with proper optimization

### State Management
- **Use PullState** for global state management (already configured)
- **Use React hooks** (useState, useEffect) for local component state
- **Keep selectors in store/selectors.ts** and actions in store/actions.ts**

### Routing & Navigation
- **Use React Router 5** for navigation (already configured with Ionic)
- **All routes must be defined in components/pages/Tabs.tsx**
- **Use Ionic navigation components** (IonRouterOutlet, IonTabs, IonTabBar)

### Mobile-Specific Considerations
- **All pages must be wrapped in IonPage** component
- **Use Capacitor plugins** for native device features
- **Test on both iOS and Android** platforms
- **Consider safe areas** for notched devices

### Code Organization
- **Pages go in components/pages/** (Feed, Lists, Settings, etc.)
- **Reusable UI components go in components/ui/**
- **Mock data goes in mock/index.ts**
- **Global styles go in styles/** directory

### Development Rules
- **No Server-Side Rendering** - app must work with static export
- **All components must be client-side** (use 'use client' directive)
- **Keep components under 100 lines** when possible
- **Use TypeScript for all new code**
- **Follow existing code patterns and naming conventions**

### Build & Deployment
- **Use npm run build** to create static export
- **Use npm run sync** to copy web assets to native projects
- **Use npm run ios/android** to run on devices
- **Never modify native iOS/Android files directly** unless absolutely necessary