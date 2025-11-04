# Giovanni Baioni Photography Portfolio

A modern, professional photography portfolio website showcasing fine art photography work.

## Features

- Modern asymmetric layout
- Masonry gallery with smooth animations
- Category filtering (All, Europe, Asia America)
- Video showcase section
- Contact form
- Fully responsive design
- SEO optimized
- Dark theme with professional aesthetics

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- React Responsive Masonry
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect the settings and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

## Configuration

### SEO Setup

Update the meta tags in `/index.html`:
- Update the `og:url` and `twitter:url` with your actual domain
- Add your actual Open Graph image URL
- Update social media links in the structured data

### Analytics Setup

Replace `GA_MEASUREMENT_ID` in `/index.html` with your Google Analytics tracking ID.

Example:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

## Project Structure

```
├── src/
│   └── main.tsx          # Application entry point
├── components/           # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Gallery.tsx
│   ├── Videos.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/              # Shadcn UI components
├── styles/
│   └── globals.css      # Global styles and Tailwind
├── App.tsx              # Main app component
├── index.html           # HTML template with SEO
└── vite.config.ts       # Vite configuration

```

## License

All rights reserved © Giovanni Baioni
