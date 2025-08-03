# Sujitkumar Borse - Angular Developer Portfolio

A modern, responsive portfolio website built with Angular showcasing my skills, experience, and projects as an Angular Developer.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds with glass-morphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Engaging animations and transitions throughout
- **Professional Sections**: 
  - Hero section with introduction
  - About Me with personal and educational details
  - Technical Skills with progress indicators
  - Professional Experience timeline
  - Featured Projects showcase
  - Contact form and information
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic navigation
- **Mobile-First**: Optimized for mobile devices with hamburger menu

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 18
- **Styling**: SCSS with modern CSS features
- **Design**: Glass-morphism, gradients, and modern UI/UX principles
- **Responsive Design**: CSS Grid and Flexbox
- **Animations**: CSS transitions and transforms
- **Icons**: SVG icons and emojis

## 📱 Sections Overview

### 1. **Hero Section**
- Professional introduction
- Call-to-action buttons
- Animated background elements

### 2. **About Me**
- Personal introduction
- Educational background
- Career highlights
- Personal information

### 3. **Technical Skills**
- Frontend Technologies (Angular, TypeScript, JavaScript, HTML5, CSS3, SCSS)
- UI Frameworks & Libraries (Bootstrap, Angular Material, Nebular)
- Development Tools (VS Code, Git, Angular CLI)
- Additional Technologies (Node.js, MongoDB)
- Skill levels with progress bars

### 4. **Professional Experience**
- Timeline-based experience display
- Current and past positions
- Company details and technologies used
- Key responsibilities and achievements

### 5. **Featured Projects**
- Project showcase with detailed information
- Technologies used for each project
- Client and company information
- Project descriptions and outcomes

### 6. **Contact Information**
- Contact form
- Personal contact details
- Social media links
- Availability information

## 🎨 Design Features

- **Color Scheme**: Purple, blue, and pink gradients
- **Glass-morphism**: Semi-transparent cards with backdrop blur
- **Typography**: Modern, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing and padding throughout
- **Shadows**: Subtle shadows for depth and dimension
- **Hover Effects**: Interactive elements with smooth transitions

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Angular CLI

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/angular-portfolio.git
   cd angular-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
ng build --prod
```

## 🚀 Deployment

### GitHub Pages with Custom Domain

This project is configured to deploy automatically to GitHub Pages with the custom domain `sujitkumarborse.info`.

#### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy on push to main branch

2. **Custom Domain Configuration**:
   - The CNAME file is already configured with `sujitkumarborse.info`
   - Add your custom domain in GitHub repository settings under Pages
   - Configure DNS records with your domain provider:
     - Add a CNAME record pointing to `yourusername.github.io`
     - Or add an A record pointing to GitHub Pages IP addresses

3. **Automatic Deployment**:
   - The GitHub workflow (`.github/workflows/deploy.yml`) will:
     - Build the Angular app
     - Deploy to GitHub Pages
     - Handle the custom domain automatically

#### Manual Deployment (if needed):

```bash
# Build the project
ng build --prod

# The built files will be in dist/portfolio-app/
# These can be deployed to any static hosting service
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── projects/
│   │   └── skills/
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
│   └── Profile Photo.png
├── styles.scss
└── main.ts
```

## 🎯 Key Features

### Navigation
- Smooth scrolling between sections
- Active section highlighting
- Mobile-responsive hamburger menu
- URL hash updates on scroll

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Optimized typography scaling

### Performance
- Lazy loading of components
- Optimized images and assets
- Efficient CSS with modern features
- Minimal JavaScript for smooth performance

## 🔧 Customization

### Colors
The color scheme can be easily customized by modifying the gradient values in the SCSS files:
- Primary gradient: `#667eea` → `#764ba2` → `#f093fb`
- Text colors: `#ffffff` for headers, `#667eea` for content
- Background patterns and opacity levels

### Content
- Update personal information in component HTML files
- Modify project details in the projects component
- Adjust skills and experience in respective components
- Update contact information and social links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: sujitkumarborse@gmail.com
- **Phone**: +91-9028725588
- **Location**: Pune, Maharashtra, India
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Built with ❤️ using Angular**

*This portfolio showcases my journey as an Angular Developer with 6+ years of experience in building modern web applications.*
