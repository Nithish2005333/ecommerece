# SACROSANCT - Premium Storefront Client

A high-fidelity, premium fashion editorial landing page built with a minimalist CAD/blueprint drafting aesthetic. Designed for responsive PC and mobile viewports with premium transitions and custom micro-animations.

## Key Features

### 1. Dynamic Drafting Loading Screen (`src/components/LoadingScreen.tsx`)
*   **Drafting Canvas Overlay**: Restores an HSL-tailored light theme (`#ECECF1`) with a fine-grain noise film filter, drafting guide coordinates, crosshair axes, and Concentric CAD circles scaling dynamically with progress.
*   **Cursive Ink Trace**: Uses a dual-layer SVG layout to draw the `Sacrosanct` cursive signature letter-by-letter, matching the current load percentage.
*   **Layered Pen Glow**: Renders a multi-stage glowing pen-tip consisting of a bright white core, a pulsating ring overlay, and a radial blue aura.
*   **No-Clipping Text boundaries**: Employs responsive right paddings and extended vertical mask constraints (`height: 160%`) to prevent natural script font ascenders/descenders (e.g. the letter "t") from being clipped.
*   **Designer Progress Details**: Features a full-width tracker line at the bottom showing metadata (archives, collections, season tracking) alongside the current progress count in a large, tabular-spaced layout.
*   **Physical Shutter Exit**: Cleanly slides up and out of the viewport using a physical shutter animation on load completion.

### 2. Glassmorphism Navigation Header (`src/components/Navbar.tsx`)
*   **Editorial Centered Links**: Navigation links are perfectly centered, rendered with heavy font weights (`font-black`), tracking, and scale transitions.
*   **Lottie-Animated Shopping Cart**: Renders an interactive, vector-based shopping cart animation using Lottie JSON files.
*   **Responsive Side Drawer**: Slides in dynamically from the right side of the screen on mobile devices with staggered item entries.

### 3. Staggered Arches Hero Showcase (`src/components/HeroSection.tsx`)
*   **Editorial Arches**: Contains five staggered capsule images, each with its own staggered dimensions, offsets, and custom hover states.
*   **Vibrant Multiply Overlays**: Retains high-end multiply blend mode tints to overlay colors seamlessly onto the imagery, creating a unified color story.
*   **Interactive capsule CTA**: Implements a custom dual-state hover button where "New Collection" transitions smoothly to a blue "Shop Now" label.
*   **Mobile Snap Carousel**: Automatically falls back to a clean, swipeable horizontal scroll layout with snap-mandatory constraints on mobile viewports.

### 4. Legacy Series & Philosophy (`src/components/LegacySeriesSection.tsx`)
*   **Staggered Layout**: Split grid containing philosophy imagery with top-right and bottom-left visual accents.
*   **Liquid CTA Animation**: Displays a capsule button containing a royal blue background sheet that slides up from the bottom when hovered.

### 5. Contact Section (`src/components/ContactSection.tsx`)
*   **Double Column Grid**: Splits the interface into an editorial model showcase and a minimal text-lined form grid.
*   **Interactive Input Underlines**: Input fields feature custom bottom-border animations that scale outwards from the center on focus.
*   **Sent State Machine**: Sends form entries through visual sending, complete (success checkmark), and reset states.

## Tech Stack
*   **React 19**
*   **Tailwind CSS v4** (utilizing native `@theme` directives directly in CSS)
*   **Vite**
*   **Framer Motion 12**
*   **Lottie React**
*   **Lucide React**

## Development & Build Commands

To run or build the client module, ensure you are inside the `sacrosanct` subdirectory.

*   **Install dependencies**:
    ```bash
    npm install
    ```
*   **Start Local Dev Server**:
    ```bash
    npm run dev
    ```
*   **Verify Code Quality & Type Safety**:
    ```bash
    npx tsc
    ```
*   **Compile Production Bundle**:
    ```bash
    npm run build
    ```
