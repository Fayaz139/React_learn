

# 🚀 React Project Setup Using Vite

A step-by-step guide to creating a React project using Vite.

---

## 📌 Prerequisites

Before creating a React project, make sure:

- **Node.js is installed**

Check:
```bash
node -v
```

- **npm is installed**

Check:
```bash
npm -v
```

If not installed, download from:  
https://nodejs.org

---

## 🛠 Step 1: Create a New React Project

Run:

```bash
npm create vite@latest
```

---

## 🛠 Step 2: Enter Project Details

You will be prompted:

- **Project Name**
  ```
  my-react-app
  ```

- **Select Framework**
  ```
  React
  ```

- **Select Variant**
  ```
  JavaScript
  ```
  (Choose TypeScript if needed)

---

## 🛠 Step 3: Move Into Project Folder

```bash
cd my-react-app
```

---

## 🛠 Step 4: Install Dependencies

```bash
npm install
```

This installs all required packages.

---

## 🛠 Step 5: Start Development Server

```bash
npm run dev
```

You will see something like:

```
Local: http://localhost:5173/
```

Open it in your browser.

---

## 📁 Project Structure Overview

```
my-react-app/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── vite.config.js
```

---

## 📌 To Stop the Server

Press:

```bash
CTRL + C
```

---

## 📌 To Run Project Again Later

```bash
cd my-react-app
npm run dev
```

---

## 🔥 Quick Cheat Sheet

```bash
npm create vite@latest
cd project-name
npm install
npm run dev
```