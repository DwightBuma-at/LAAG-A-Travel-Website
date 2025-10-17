# LAAG - Travel Website Landing Page 🏝️

A beautiful, modern travel website landing page showcasing tourist destinations in the Philippines, built with Vue.js.

## Features ✨

### 🎨 Design Elements
- **Custom LAAG Logo** - Stylized with gradient effects and the Righteous font
- **Background Slideshow** - Rotating backgrounds featuring 6 Philippine destinations:
  - Bohol
  - Cebu
  - Siargao
  - Palawan
  - Davao
  - Boracay

### 🧭 Navigation
- **Responsive Navbar** with links to:
  - Home
  - Destination
  - Offers
  - About Us
- Mobile-friendly hamburger menu for smaller screens

### 🌓 Theme Switching
- **Day/Night Mode Toggle** - Switch between light and dark themes
- Theme preference is saved in browser's local storage

### 🔐 Authentication UI
- **Login Modal** with:
  - Email and password fields
  - Remember me checkbox
  - Forgot password link
- **Sign Up Modal** with:
  - Full name, email, password, and confirm password fields
  - Terms and conditions checkbox
- Easy switching between login and signup forms

### 📱 Responsive Design
- Fully responsive layout that works on desktop, tablet, and mobile devices
- Adaptive navigation menu for mobile screens
- Optimized typography and spacing for different screen sizes

## Technology Stack 🛠️

- **Vue.js 3** - Progressive JavaScript framework
- **Vanilla CSS** - Custom styling with modern CSS features
- **Google Fonts** - Poppins & Righteous fonts
- **Unsplash** - High-quality images for tourist destinations

## Getting Started 🚀

1. Simply open `index.html` in your web browser
2. No build process or installation required!
3. All dependencies are loaded via CDN

## File Structure 📁

```
Travel Website/
│
├── index.html          # Main HTML file with Vue template
├── app.js             # Vue.js application logic
├── styles.css         # Custom CSS styling
└── README.md          # Project documentation
```

## Features Breakdown 🔍

### Background Slideshow
- Automatically transitions every 5 seconds
- Manual navigation via dot indicators
- Smooth fade transitions between slides
- Current location badge displays destination name

### Modal System
- Smooth fade and slide animations
- Click outside to close
- Form validation
- Switch between login/signup without closing modal

### Dark Mode
- Smooth transitions between themes
- Adjusted overlays and transparency for better readability
- Consistent styling across all components

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Demo Features 💡

The forms are currently set up for demonstration purposes:
- Login and signup will show alert messages
- No actual authentication is implemented
- Form data is logged to console

## Customization 🎨

### Changing Background Images
Edit the `touristSpots` array in `app.js`:
```javascript
touristSpots: [
    {
        name: 'Your Location',
        image: 'your-image-url'
    }
]
```

### Modifying Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FF6B6B;
    --secondary-color: #4ECDC4;
    --accent-color: #FFE66D;
}
```

## Credits 📸

- Images from [Unsplash](https://unsplash.com)
- Fonts from [Google Fonts](https://fonts.google.com)

## License

This project is open source and available for educational purposes.

---

**Made with ❤️ for Philippine Tourism**

