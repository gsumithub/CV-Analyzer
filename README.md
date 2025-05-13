# CV Analyzer App

A modern React application for recruiters to analyze and manage candidate CVs. This app provides a user interface for uploading, analyzing, and sorting CVs with role-based access.

## Features

- **Upload CV files**: Support for PDF, DOCX, and RTF formats
- **Upload Datasets**: Import candidate data through CSV, Excel, or JSON
- **Dashboard**: View key recruitment metrics
- **Analysis**: Analyze candidate profiles with detailed visualizations
- **Sort & View**: Filter and sort candidates by skills and experience
- **Admin Panel**: Manage users, settings, and permissions
- **Role-Based Access**: Switch between Uploader and Analyzer roles
- **Dark Mode**: Full support for dark mode throughout the application

## Screenshots

Screenshots available in the repository's `/screenshots` folder.

## Technologies Used

- React 18
- Vite
- React Router v6
- Tailwind CSS
- Context API for state management

## Prerequisites

Before running this application, you need to have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository
```bash
git clone https://github.com/gsumithub/CV-Analyzer.git
cd CV-Analyzer
```

2. Install dependencies
```bash
npm install
```

## Running the Application

To start the development server:
```bash
npm run dev
```

The application will start running at http://localhost:5173 (or another port if 5173 is in use)

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
cv-analyzer-app/
├── public/            # Static files
├── src/               # Source files
│   ├── components/    # React components
│   │   ├── layout/    # Layout components
│   │   └── pages/     # Page components
│   ├── contexts/      # React contexts including ThemeContext
│   ├── App.jsx        # Main application component
│   ├── Home.jsx       # Home page component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies
```

## Available Routes

- `/` - Home page with navigation cards
- `/upload` - Upload CVs and resumes
- `/dataset` - View and manage uploaded resumes
- `/dashboard` - View recruitment metrics
- `/analysis` - Analyze candidate profiles
- `/admin` - Access admin panel
- `/sort` - Sort and filter candidates
- `/analytics` - View analytics and charts
- `/roles` - Switch between Uploader and Analyzer roles
- `/settings` - Configure application settings including dark mode

## User Roles

### Uploader Role
- Upload CV files individually or in bulk
- Import datasets from various formats
- Map dataset columns to CV fields

### Analyzer Role
- View candidate results with match scores
- Analyze skills distribution and candidate demographics
- View AI-generated insights and recommendations

## Customization

You can customize the application by modifying the following files:

- `tailwind.config.js` - Customize the styling theme
- `src/components/layout/Layout.jsx` - Modify the main layout
- `src/components/layout/Header.jsx` - Customize the navigation header

## Deployment

This application can be deployed to various hosting platforms:

### Vercel/Netlify
1. Push your code to GitHub/GitLab/BitBucket
2. Connect your repository to Vercel or Netlify
3. Configure the build settings: 
   - Build command: `npm run build`
   - Output directory: `dist`

### Traditional Hosting
1. Build the application: `npm run build`
2. Upload the contents of the `dist` folder to your web server

## Contributing

Contributions are not accepted. This is a private project.

## License

This project is proprietary. All rights reserved. 
No use, distribution, or modification is permitted without explicit permission from the author.

---

Created with ❤️ using React, Vite, and Tailwind CSS 