# IEEE Student Branch PRC Website

A modern, responsive website for IEEE Student Branch PRC built with Next.js 15, featuring animated sections, interactive carousels, and a retro-inspired design.

## 🚀 Features

- **Modern Design**: Clean, pixel-perfect UI with retro aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Animations**: GSAP-powered scroll animations and transitions
- **Carousel Components**: Interactive event and executive committee carousels
- **Loading Screen**: Custom retro-style loading animation
- **Background Effects**: Dynamic floating elements and visual effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: GSAP (GreenSock Animation Platform)
- **UI Components**: Radix UI primitives
- **Carousel**: Embla Carousel
- **Icons**: Lucide React
- **Font**: Jersey 20 (Google Fonts)

## 📦 Dependencies

### Core Dependencies
- `next`: 15.3.3
- `react`: 18.3.1
- `typescript`: 5.x
- `tailwindcss`: 3.4.1

### Animation & UI
- `gsap`: 3.13.0
- `embla-carousel-react`: 8.6.0
- `embla-carousel-autoplay`: 8.6.0
- `@radix-ui/*`: Various UI primitives
- `lucide-react`: 0.475.0

### Utilities
- `clsx`: 2.1.1
- `tailwind-merge`: 3.0.1
- `class-variance-authority`: 0.7.1

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amith-ieee-exact-nextjs-v3
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:9002](http://localhost:9002)

## 🌐 Live Demo

Check out the live website: **[https://ieee.cos777nnn777.win/](https://ieee.cos777nnn777.win/)**

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   └── favicon.ico          # Site favicon
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   └── ...
│   ├── about-section.tsx    # About us section
│   ├── events-section.tsx   # Events carousel section
│   ├── execom-section.tsx   # Executive committee section
│   ├── gallery-section.tsx  # Photo gallery section
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Hero banner section
│   ├── footer.tsx           # Site footer
│   ├── background-effects.tsx # Animated background elements
│   ├── scrollrevel.tsx      # GSAP scroll animations
│   └── RetroPeachLoader.tsx # Loading screen component
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Teal (#008080)
- **Background**: Light (#fafafa) / Dark (#0a0a0a)
- **Foreground**: Dark (#333333) / Light (#fafafa)
- **Accent**: Teal (#008080)

### Typography
- **Font Family**: Jersey 20 (Google Fonts)
- **Headings**: Large, bold with custom animations
- **Body**: Clean, readable text

### Components
- **Buttons**: Pixel-style with hover effects
- **Cards**: Clean borders with shadow effects
- **Carousels**: Smooth transitions with navigation controls
- **Animations**: GSAP-powered scroll reveals and transitions

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/header.tsx`

### Modifying Animations
- Edit `src/components/scrollrevel.tsx` for scroll animations
- Modify `src/app/globals.css` for CSS animations
- Update GSAP timelines in individual components

### Styling Changes
- Update CSS variables in `src/app/globals.css`
- Modify Tailwind config in `tailwind.config.ts`
- Add custom styles to component files

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Next.js 15**: Latest framework with App Router
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting
- **Lazy Loading**: Components load as needed
- **GSAP Optimization**: Efficient animation performance

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Docker**: Use provided Dockerfile
- **Static Export**: Configure for static hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **IEEE Student Branch PRC** - Development Team
- **cos777** - Contributor & Developer
- **Design**: Custom retro-inspired design system
- **Development**: Next.js 15 with TypeScript

## 📞 Contact

- **Live Demo**: [https://ieee.cos777nnn777.win/](https://ieee.cos777nnn777.win/)
- **GitHub**: [cos777](https://github.com/cos777)
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]

## 🙏 Acknowledgments

- **IEEE** - For the organization and inspiration
- **Next.js Team** - For the amazing framework
- **GSAP** - For powerful animation capabilities
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first styling

---

**Made with ❤️ by IEEE Student Branch PRC**