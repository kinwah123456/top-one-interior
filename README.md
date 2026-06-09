# Top One Interior & Curtain Design - Website Documentation

Welcome to the source code of the **Top One Interior & Curtain Design** website. This is a premium, high-performance static website designed for a luxury Malaysian interior design and custom curtain boutique.

This website is fully optimized for **desktop, tablets (like iPads), and mobile devices**. It features instant WhatsApp integration, allowing visitors to contact you directly with a single click.

---

## 🚀 Key Features

*   **Premium Aesthetics:** A luxury charcoal and warm champagne-gold color scheme with elegant typography (`Playfair Display` & `Montserrat`) and micro-animations.
*   **Tablet & Mobile Friendly:** Clean layout scaling, touch-friendly buttons, and a responsive drawer navigation menu on smaller screens.
*   **Floating WhatsApp Widget:** A pulsating chat bubble that prompts visitors to inquire and floats on screen for easy access.
*   **Dynamic Quote Request Form:** Form compiles the client's name, phone, service interest, and project description, then automatically redirects them to WhatsApp with a pre-formatted message.
*   **Portfolio Gallery with Lightbox Zoom:** Interactive filters for curtains, residential, and commercial projects, with a lightbox popup for viewing high-resolution images.
*   **Zero-Maintenance Architecture:** No databases, node servers, or complex build steps. Runs instantly in any web browser.

---

## ⚙️ How to Update Content (Easy Copy & Image Editing)

You do **not** need to edit `index.html` to update text, phone numbers, services, or images. All site contents are managed inside a single file: `data.js`.

### 1. Edit Text, Phone, Address, or WhatsApp Number
Open `data.js` in any text editor (e.g., Notepad, VS Code) and update the values:

```javascript
const SITE_DATA = {
  // Update your WhatsApp number here (Malaysian format, start with 60, no '+' or spaces)
  whatsappNumber: "60123456789", 
  
  // Custom message prefix sent when a customer clicks the WhatsApp button
  whatsappMessage: "Hi Top One Interior, I would like to get a free consultation...",
  
  phone: "+60 12-345 6789",
  email: "info@toponeinterior.com.my",
  address: "12, Jalan Telawi 5, Bangsar, 59100 Kuala Lumpur...",
  
  // Hero headline
  hero: {
    badge: "Premium Quality & Bespoke Design",
    title: "Transforming Spaces with Luxury Curtains & Interiors",
    ...
  }
};
```

### 2. Update or Add Portfolio Projects
To add a new project to your gallery:
1. Save your photo (ideally in a `4:3` or `16:9` ratio) in the `images/` folder. For example: `images/new-project.jpg`.
2. Open `data.js` and locate the `portfolioItems` array. Add a new item entry:

```javascript
portfolioItems: [
  {
    id: 7, // Increment the id
    category: "curtains", // Set to "curtains", "residential", or "commercial"
    title: "Modern Double Pleat Sheers",
    location: "Cheras, KL",
    image: "images/new-project.jpg", // Path to your new image
    description: "Floor-to-ceiling sheer installation adding soft daylight illumination."
  },
  // Keep your existing items below...
]
```

> [Styled tips]
> Each portfolio item automatically generates a unique WhatsApp inquiry link. When a client clicks **"Inquire Spec Details"** on a project, it pre-fills a message specifying the project title and location so you know exactly what they are asking about!

---

## 🌐 How to Deploy to GitHub Pages (Free Hosting)

GitHub Pages provides free, fast, and secure hosting for static sites. Follow these steps to host your website:

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub account](https://github.com).
2. Click the **"+"** icon in the top right corner and select **New repository**.
3. Name your repository (e.g., `top-one-interior`).
4. Set the repository visibility to **Public** (required for free GitHub Pages).
5. Leave other options unchecked (no README or gitignore needed) and click **Create repository**.

### Step 2: Initialize Git and Upload Code
Open your terminal/command prompt, navigate to your project folder (`c:\Users\tse\Desktop\Top One Interiro`), and run:

```bash
# Initialize local repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit of Top One Interior website"

# Link your local repository to GitHub (replace with your actual GitHub URL)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/top-one-interior.git

# Push your code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click the **Settings** tab at the top.
3. Scroll down the left sidebar and click on **Pages**.
4. Under the **Build and deployment** section:
    *   **Source:** Select *Deploy from a branch*.
    *   **Branch:** Click the dropdown, select `main` (or the branch you pushed), leave folder as `/ (root)`, and click **Save**.

### Step 4: Access Your Live Website
*   GitHub will compile your files and deploy them. Within 1–2 minutes, a notification banner will appear at the top of the Pages settings page showing your live URL.
*   Your URL will look like: `https://YOUR_USERNAME.github.io/top-one-interior/`

> [!IMPORTANT]
> The website is designed with relative asset paths (e.g., `style.css` instead of `/style.css`). This guarantees that your styles, scripts, and images will load correctly even when hosted in a subfolder like `https://username.github.io/repo-name/`.

---

## 🛠️ Local Development & Testing
To view the website on your computer:
1. Double-click the `index.html` file to open it in Google Chrome, Microsoft Edge, or Safari.
2. To test mobile or tablet designs, press `F12` to open Developer Tools and toggle the **Device Toolbar** (`Ctrl + Shift + M`). Select a device like iPad or iPhone to see how beautifully the layouts respond.
