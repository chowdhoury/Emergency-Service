# 📞 Emergency Service Directory

A modern, interactive web application that provides quick access to essential government emergency services in Bangladesh. Users can easily find emergency contact numbers, copy them to clipboard, simulate phone calls with a coin-based system, and maintain a call history.

![Emergency Service Directory](./assets/logo.png)

---

## 📋 Project Overview

**Emergency Service Directory** is a government-backed initiative designed to make critical emergency services easily accessible to citizens. The application features a user-friendly interface with service cards displaying emergency numbers including Police, Fire Services, Ambulance, Women & Child Helpline, and many more governmental services.

### Key Highlights:
- **Quick Access**: One-click access to all major emergency numbers
- **Copy Functionality**: Easily copy emergency numbers to your clipboard
- **Simulated Calls**: Interactive call simulation with a coin-based balance system
- **Call History**: Keep track of all emergency calls made through the application
- **Responsive Design**: Works seamlessly across all devices
- **Modern UI**: Clean, intuitive interface with green theme symbolizing safety

---

## 🔗 Live Project Link

[**Emergency Service**](https://emergency-servicebd.netlify.app/)

---

## 🛠️ Technologies Used

### Frontend:
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling and animations
- **Tailwind CSS 4** - Utility-first CSS framework for responsive design
- **DaisyUI 5** - Pre-built components for Tailwind CSS
- **JavaScript (Vanilla)** - Event handling and DOM manipulation

### Icons & Fonts:
- **Font Awesome 7.0.0** - Beautiful icons for buttons and UI elements
- **Google Fonts** - Custom typography (Inter, Hind, Roboto)
- **Custom Icons** - Emergency service icons (PNG format)

### Build & Configuration:
- **Tailwind CSS Browser Plugin** - On-the-fly CSS generation
- **ES6+ JavaScript** - Modern JavaScript syntax and features

---

## ⭐ Core Features

### 1. **Emergency Services Directory**
   - Display multiple emergency services with contact numbers
   - Services included: Police, Fire Service, National Emergency, Ambulance, Women & Child Helpline, Anti-Corruption, Electricity, BRAC, and Railway

### 2. **Copy to Clipboard**
   - Click the "Copy" button to instantly copy emergency numbers
   - Toast notification confirms successful copy
   - Clipboard counter tracks total copies made

### 3. **Simulated Call System**
   - Interactive calling interface with coin balance (starting with 100 coins)
   - Each call costs 20 coins
   - Real-time balance updates
   - Alert notifications during calls

### 4. **Call History Tracking**
   - Maintains a record of all simulated calls
   - Displays service name, number, and exact timestamp
   - Clear history functionality to reset the log

### 5. **Favorites/Liked Services**
   - Heart button on each service card to mark favorites
   - Counter displays total liked services

### 6. **Responsive Design**
   - Mobile-first approach
   - Seamless experience on tablets and desktops
   - Grid layout that adapts to screen size

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| Tailwind CSS | 4 | CSS framework |
| DaisyUI | 5 | UI component library |
| Font Awesome | 7.0.0 | Icon library |
| Tailwind Browser | Latest | CSS compilation for browser |

### CDN Links Used:
```html
<!-- Tailwind CSS Browser Plugin -->
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css">

<!-- DaisyUI -->
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css">
```

---

## 🚀 How to Run Locally

### Prerequisites:
- A web browser (Chrome, Firefox, Safari, Edge, etc.)
- A code editor (VS Code recommended)
- Git installed on your machine

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/Emergency-Service.git
cd Emergency-Service
```

### Step 2: Open the Project
```bash
# Using VS Code
code .

# Or navigate to the project folder manually
```

### Step 3: Run with Live Server
**Option A: Using VS Code Extension**
- Install the "Live Server" extension from the VS Code marketplace
- Right-click on `index.html`
- Select "Open with Live Server"

**Option B: Using Python**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser

**Option C: Using Node.js**
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server

# Open http://localhost:8080
```

**Option D: Direct Browser Access**
- Simply open `index.html` directly in your web browser

### Step 4: Explore the Application
- Browse emergency services
- Click "Copy" to copy phone numbers
- Use "Call" to simulate calls (requires balance)
- Check the "Call History" panel on the right
- Clear history when needed

---

## 📁 Project Structure

```
Emergency-Service/
│
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind configuration
│
├── assets/                 # Images and icons
│   ├── logo.png
│   ├── logo-dark.png
│   ├── heart.png
│   ├── coin.png
│   ├── emergency.png
│   ├── police.png
│   ├── fire-service.png
│   ├── ambulance.png
│   ├── brac.png
│   └── Bangladesh-Railway.png
│
├── styles/                 # CSS files
│   └── style.css
│
└── scripts/                # JavaScript files
    └── script.js           # Main application logic
```

---

## 🎨 UI/UX Features

- **Color Scheme**: Green theme (#006747, #00A63E) symbolizing safety and trust
- **Responsive Grid**: 1-column on mobile, 2 on tablet, 4 on desktop
- **Interactive Cards**: Hover effects and smooth transitions
- **Real-time Counters**: Live updates for hearts, coins, and copies
- **Call History Sidebar**: Sticky sidebar showing recent calls
- **Gradient Hero Section**: Eye-catching banner with service description

---

## 🔧 Customization

### Add a New Emergency Service:
1. Add a new service card HTML in `index.html`
2. Update the `lg:order-X` class for proper grid ordering
3. Include appropriate icon in `assets/` folder
4. The JavaScript will automatically bind events to new cards

### Change Color Theme:
- Modify color codes in `index.html` (currently using green: `#006747`, `#00A63E`)
- Update `tailwind.config.js` for theme customization

### Modify Coin System:
- Edit coin cost in `script.js` (currently 20 coins per call)
- Change initial balance in `index.html` (currently 100)

---

## 📚 Learning Resources

This project demonstrates:
- **DOM Manipulation**: Using `querySelector`, `getElementById`, `getElementsByClassName`
- **Event Listeners**: Click events with event delegation
- **Array Methods**: `forEach` loops for multiple elements
- **Clipboard API**: `navigator.clipboard.writeText()`
- **Date/Time API**: Creating formatted timestamps
- **CSS Grid & Flexbox**: Responsive layout techniques
- **Tailwind CSS**: Utility-first CSS approach

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not loading | Check internet connection for CDN resources (Tailwind, DaisyUI) |
| Copy button not working | Ensure browser supports Clipboard API (modern browsers only) |
| Page looks broken | Clear browser cache and refresh |
| Images not showing | Verify all image files exist in the `assets/` folder |

---

## 📄 License

This project is created for educational purposes as part of the Programming Hero initiative.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📞 Support & Contact

For support or questions about this project:
- Open an issue on GitHub
- Contact through Programming Hero

---

## 🙏 Acknowledgments

- **Programming Hero** - Project initiative
- **Government of Bangladesh** - Emergency Services information
- **Tailwind CSS & DaisyUI** - UI framework and components
- **Font Awesome** - Icon library

---

**Last Updated**: December 31, 2025
**Version**: 1.0.0
