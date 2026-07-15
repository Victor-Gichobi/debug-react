# React Debugging with React Developer Tools

## Project Overview

This project demonstrates how to debug a React application using the **React Developer Tools** browser extension. The application contains multiple components that use **state** and **props**, allowing users to inspect component data, identify issues, and apply fixes using the React Developer Tools.

---

## Features

* Multiple React components
* State management with `useState`
* Props passing between components
* Counter functionality
* React Developer Tools inspection
* Debugging of common React issues

---

## Technologies Used

* React
* JavaScript (ES6)
* HTML5
* CSS3
* React Developer Tools
* Create React App

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-debug-app.git
```

### 2. Navigate to the project folder

```bash
cd react-debug-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will open at:

```
http://localhost:3000
```

---

## React Developer Tools

Install the **React Developer Tools** extension for your browser.

After installation:

1. Run the React application.
2. Open the browser Developer Tools (F12 or Right Click → Inspect).
3. Select the **Components** tab.
4. Inspect the component tree, props, and state.
5. Use the information to identify and fix issues.

---

## Debugging Process

The following issues were identified and fixed:

### Incorrect State Initialization

**Issue**

The counter state was initialized as a string instead of a number.

**Fix**

Changed:

```jsx
useState("0")
```

to

```jsx
useState(0)
```

---


## Verification

After applying the fixes:

* ✅ Components rendered correctly.
* ✅ Props were passed successfully.
* ✅ State updated correctly.
* ✅ Counter functioned as expected.
* ✅ No unexpected behavior remained.

---

## Project Structure

```
src/
│── components/
│   ├── Profile.js
│  
│   
│
├── App.js
├── index.js
└── App.css
```

---

## Screenshots

### React Developer Tools Components tab
<img src="/Screenshots/Screenshot (3).png" alt="Screenshot">

### Working counter after debugging
<img src="/Screenshots/Screenshot (5).png" alt="Screenshot">

### Terminal after solving
<img src="Screenshots\Screenshot (5).png" alt="Screenshot">
![Screenshot](./Screenshots/screenshot(4).png)
 
## Learning Outcomes

By completing this project, I learned how to:

* Use React Developer Tools effectively.
* Inspect component trees.
* Debug React state.
* Verify props passed between components.
* Diagnose rendering issues.
* Apply React best practices for state management.

---

## Author

Victor Gichobi


