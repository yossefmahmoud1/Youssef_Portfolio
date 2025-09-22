# Youssef Mahmoud - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my work as a Fullstack .NET React Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Multi-language Support**: Available in English and Arabic with RTL support
- **Dark/Light Theme**: Toggle between dark and light themes
- **Project Categories**: Projects organized by Frontend, Backend, and Fullstack
- **Skills Organization**: Skills categorized by Frontend, Backend, and Tools/DevOps
- **Contact Form**: Interactive contact form with validation
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Custom CSS with CSS variables for theming
- **Responsive Design** - Mobile-first approach

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── data/               # Data files
│   └── translations.js # Multi-language translations
├── App.jsx             # Main App component
├── App.css             # Global styles
├── index.css           # Base styles
└── main.jsx            # Entry point
```

## 🎨 Design Features

### Color Scheme

- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Accent**: Cyan (#06b6d4)
- **Supporting**: Orange (#f59e0b)

### Typography

- **Font**: Inter (Google Fonts)
- **Fallback**: System fonts

### Animations

- Smooth scroll animations
- Hover effects
- Loading animations
- Gradient animations

## 🌐 Multi-language Support

The portfolio supports:

- **English** (EN)
- **Arabic** (AR) with RTL support

Language preferences are saved in localStorage and persist across sessions.

## 🎯 Project Categories

### Frontend Projects

- React applications
- Modern web interfaces
- UI/UX focused projects

### Backend Projects

- .NET Core APIs
- Microservices
- Database design

### Fullstack Projects

- Complete web applications
- End-to-end solutions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/youssef-mahmoud/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎨 Customization

### Adding New Projects

1. Update `src/data/translations.js`
2. Add project data to the `projectData` object
3. Include translations for both English and Arabic

### Adding New Skills

1. Update the `skillsData` object in `src/components/Skills.jsx`
2. Add skills to the appropriate category (frontend, backend, tools)

### Styling

- Global styles: `src/App.css`
- Component styles: `src/components/[Component].css`
- CSS variables for easy theming

## 📧 Contact

- **Email**: youssef.mahmoud@example.com
- **GitHub**: [youssef-mahmoud](https://github.com/youssef-mahmoud)
- **LinkedIn**: [youssef-mahmoud](https://www.linkedin.com/in/youssef-mahmoud)
- **Twitter**: [@youssef_dev](https://twitter.com/youssef_dev)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from various sources
- Fonts from Google Fonts
- React and Vite communities

---

Made with ❤️ using React & .NET
