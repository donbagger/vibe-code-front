# Paprika Vibe-Code Challenge Landing Page

A beautiful, modern landing page for the Paprika Vibe-Code challenge built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Perfect UI from Figma** - Exact 1:1 implementation of the design
- 🌙 **Dark Mode** - Beautiful dark theme with green accent colors
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal development experience
- 🎯 **TypeScript** - Full type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## Tech Stack

- **React 18** - Latest React with hooks and modern features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Type-safe component variants

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NEW_COLOR_PALLETTE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
NEW_COLOR_PALLETTE/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── CountdownTimer.tsx
│   └── PartnerBadge.tsx
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS and custom styles
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Design System

The app uses a carefully crafted design system with:

- **Primary Color**: `#43AA05` (Green)
- **Background**: Dark theme with `#0f0f0f` background
- **Typography**: Modern, clean fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components built with Radix UI primitives

## Key Components

### Hero Section
- Eye-catching gradient background
- Animated countdown timer
- Call-to-action buttons
- Partner badge integration

### How It Works
- 4-step process explanation
- Interactive cards with hover effects
- Color-coded sections for different steps

### Micro-Helpers
- Showcase of available helper functions
- Code examples with syntax highlighting
- Interactive cards with hover states

### Project Examples
- Real project inspirations
- Technology stack indicators
- Beautiful card layouts with gradients

### Timeline & Rules
- Clear challenge timeline
- Comprehensive rules and requirements
- FAQ section with accordion

## Customization

### Colors
The color scheme can be customized in `styles/globals.css`:

```css
:root {
  --primary: #43AA05;        /* Main green color */
  --background: #0f0f0f;     /* Dark background */
  --foreground: #ffffff;     /* Text color */
  /* ... other colors */
}
```

### Content
Update the content in `App.tsx` to match your specific challenge details:
- Partner information
- Challenge dates
- Prize amounts
- Links and URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

Built with ❤️ for the Paprika Vibe-Code Challenge 