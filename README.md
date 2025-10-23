# ⏱ HNG13 Frontend Stage 1 — **Build a Testable Profile Card**

This is a simple **frontend project** that displays a personal profile card containing your **name**, **bio**, and the **current time in milliseconds**, dynamically generated using `Date.now()`.

In this update, the project now includes **About** and **Contact** pages with **form validation and data sanitization** to ensure a complete and secure user experience.

---

## 🚀 Live Demo
Deployed on **Vercel**  
👉 [https://hng13-frontend-task1.vercel.app](#)

---

## 🧭 Pages Overview

### 🪪 **Home Page**
- Displays profile information (name, short bio, and current time in milliseconds).  
- Timestamp updates every second using `setInterval()` and `Date.now()`.

### ℹ️ **About Page**
- A simple section describing the project purpose and developer background.  
- Built using semantic HTML and responsive CSS.

### ✉️ **Contact Page**
Includes a contact form with the following fields:  
- **Full Name** (text input)  
- **Email Address** (email input)  
- **Subject** (text input)  
- **Message** (textarea)

Each input is clearly labeled for accessibility.

Form features:
- **Client-side validation** using JavaScript.  
- **Sanitization** to prevent malicious input (e.g., stripping HTML tags, trimming whitespace, and validating email format).  
- Displays feedback messages on validation success or failure.

---

## 🛠 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ojugo007/hng13-frontend-task1.git
   cd hng13-frontend-task1
   ```

2. **Open in VS Code (or any editor):**
   ```bash
   code .
   ```

3. **Run with Live Server:**
   - Right-click `index.html` → “Open with Live Server”.
   - The app will open in your default browser.

---

## 🧩 Tech Stack
- **HTML5** — structure and semantics  
- **CSS3** — responsive design  
- **JavaScript (ES6)** — interactivity and validation logic

---

## 📄 Features
- Displays live timestamp using `Date.now()`.  
- Automatically updates every second.  
- Added About and Contact pages.  
- Validates and sanitizes contact form inputs.  
- Fully responsive layout.  
- Deployable on any static hosting platform (e.g., **Vercel**).

---

## 🧪 Validation & Sanitization Highlights
- Input fields are checked for **empty values**.  
- **Email** validated using regex for correct format.  
- **Subject and message** stripped of HTML tags before submission.  
- **Success and error messages** displayed dynamically.

---

## 🖥️ Deployment
1. Push your project to a GitHub repository.  
2. Go to **[Vercel](https://vercel.com/)** → Add New Project → Import from GitHub.  
3. Select your repo and deploy.  
4. Copy and share your live site URL.

---

## 👨‍💻 Author
**Silas Ojugo**  
Frontend Developer (MERN Stack)  
- 💼 [GitHub](https://github.com/ojugo007)  
