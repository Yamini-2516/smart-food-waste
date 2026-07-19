# Smart Food Waste Management System - Frontend

Premium React/Next.js frontend for the Smart Food Waste Management System.

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Update .env.local with your API URL
# NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Run in development mode
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

### Environment Variables

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=Smart Food Waste Management
```

## Features

### Pages
- **Landing Page**: Hero section with features and CTA
- **Auth Pages**: Login and Signup with form validation
- **Dashboard**: Personalized user dashboard with quick stats
- **Menu**: Browse available meals with filters
- **Bookings**: View and manage meal bookings
- **Payments**: Track payment history
- **Feedback**: Submit and view meal feedback
- **Admin Dashboard**: Admin analytics and statistics

### Components
- Responsive navbar with theme toggle
- Sidebar navigation
- Reusable card components
- Form components with validation
- Charts and analytics with Recharts

### Features
- Dark/Light mode toggle
- Smooth animations with Framer Motion
- Responsive design (mobile-first)
- Real-time data fetching
- JWT authentication
- Role-based navigation

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Language**: TypeScript

## Project Structure

```
frontend/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── menu/
│   │   ├── bookings/
│   │   ├── payments/
│   │   └── feedback/
│   ├── admin/
│   │   └── dashboard/
│   ├── layout.tsx
│   ├── page.tsx (Landing)
│   └── globals.css
├── components/
│   └── layout/
│       ├── Navbar.tsx
│       └── Sidebar.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## Styling

- Custom Tailwind CSS configuration
- Glassmorphism design elements
- Gradient backgrounds
- Soft shadows and animations
- Dark mode support

## Deployment

### Deploy on Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Deploy on Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Configure environment variables

## Performance

- Image optimization
- Code splitting
- Dynamic imports
- Lazy loading
- CSS optimization

## License

MIT License
