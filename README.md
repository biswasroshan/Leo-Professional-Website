# Leo Club Website

A modern, responsive website for the Leo Club built with Next.js, React, and Tailwind CSS. This project showcases the club's activities, events, team members, and provides various interactive features for visitors and members.

## 🚀 Features

### Core Features
- **Multi-language Support**: Built-in support for multiple languages (English, Hindi, Nepali, Bengali)
- **Responsive Design**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Modern UI**: Beautiful, modern interface using shadcn/ui components
- **Interactive Forms**: Contact forms, membership forms, and volunteer registration
- **Image Slideshow**: Dynamic image carousel showcasing club activities
- **Facebook Integration**: Real-time Facebook posts integration
- **WhatsApp Integration**: Direct WhatsApp contact functionality

### Pages & Sections
- **Home**: Landing page with hero section and key highlights
- **About**: Information about the Leo Club and its mission
- **Events**: Upcoming and past events with detailed information
- **Projects**: Showcase of club projects and initiatives
- **Blog**: News and updates from the club
- **Contact**: Contact information and contact forms
- **Join**: Membership registration and information
- **Team**: Team member profiles and leadership information

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.2.4**: React framework for production
- **React 18.3.1**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library

### Key Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icons
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **Date-fns**: Date manipulation
- **React Day Picker**: Date picker component
- **EmailJS**: Email functionality
- **Sonner**: Toast notifications

### Development Tools
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **ESLint**: Code linting

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Leo-Club-main/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
project/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── join/              # Join page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── contact-form.tsx   # Contact form component
│   ├── event-card.tsx     # Event card component
│   ├── facebook-post.tsx  # Facebook post component
│   ├── floating-action-button.tsx
│   ├── image-slideshow.tsx
│   ├── language-provider.tsx
│   ├── language-switcher.tsx
│   ├── membership-form.tsx
│   ├── newsletter-form.tsx
│   ├── project-card.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── volunteer-form.tsx
│   ├── whatsapp-button.tsx
│   └── whatsapp-contact.tsx
├── dictionaries/          # Multi-language support
│   ├── en.ts             # English translations
│   ├── hi.ts             # Hindi translations
│   ├── ne.ts             # Nepali translations
│   ├── bn.ts             # Bengali translations
│   └── index.ts          # Dictionary index
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── public/               # Static assets
│   ├── Slideshow and teamwork/  # Team activity images
│   └── Team/             # Team member photos
└── styles/               # Additional styles
```

## 🌐 Multi-language Support

The website supports multiple languages:
- **English** (en)
- **Hindi** (hi)
- **Nepali** (ne)
- **Bengali** (bn)

Language switching is available through the language switcher component in the header.

## 🎨 Theming

The website supports both light and dark themes:
- **Light Theme**: Clean, bright interface
- **Dark Theme**: Easy on the eyes, modern dark interface

Theme switching is available through the theme toggle in the header.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly mobile experience

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the project root for any environment-specific configurations:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FACEBOOK_PAGE_ID=your_facebook_page_id
```

### Facebook Integration
To enable Facebook posts integration:
1. Set up your Facebook Page ID
2. Configure the Facebook API credentials
3. Update the Facebook integration in `lib/facebook.ts`

### WhatsApp Integration
To configure WhatsApp contact:
1. Update the WhatsApp number in the WhatsApp components
2. Customize the message templates

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Configure environment variables in Vercel dashboard

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

This project was developed for the Leo Club. For more information about the club and its activities, please visit the website or contact the club directly.

## 📞 Support

For support or questions about this project:
- Create an issue in the GitHub repository
- Contact the development team
- Reach out to the Leo Club directly

## 🔄 Updates & Maintenance

### Regular Maintenance
- Keep dependencies updated
- Monitor for security vulnerabilities
- Update content regularly
- Backup data and configurations

### Content Updates
- Update team member information
- Add new events and projects
- Refresh blog content
- Update contact information

---

