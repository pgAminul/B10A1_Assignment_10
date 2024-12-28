# GearSprint

: A Sports Equipment Store 🏅

Welcome to _GearSprint
_, your one-stop-shop for all sports equipment! Whether you're a professional athlete or just getting started, we've got the gear you need for every sport. From apparel to accessories, we offer a wide variety of sports equipment to suit your needs. Explore our products, manage your gear, and enjoy a seamless shopping experience!

## GitHub Repositories 🖥️

- [Client-side Repository](https://github.com/programming-hero-web-course2/b10-a10-client-side-pgAminul)
- [Server-side Repository](https://github.com/programming-hero-web-course2/b10-a10-server-side-pgAminul)

[Live Website URL](https://sports-equipment-878c9.web.app/)

- [Requirment] (https://docs.google.com/document/d/1D14wFn6YCGxV7ujYXkc5-nOJmN67cLhRpbCh_7679ok/edit?tab=t.0)

## Project Overview 🎯

GearSprint
is a responsive e-commerce website designed to help customers browse, purchase, and review sports equipment. The platform supports user authentication, product management, and provides a smooth user experience across all devices (mobile, tablet, desktop).

---

## Key Features ✨

- _Responsive Design_: Fully responsive for mobile, tablet, and desktop devices.
- _User Authentication_: Secure login and registration, including third-party authentication methods (Google, GitHub, etc.).
- _Product Management_: Add, view, update, and delete sports equipment.
- _Sort and Filter_: Sort products by price and filter based on categories.
- _Dark/Light Theme Toggle_: Switch between dark and light modes for a personalized experience.

---

## Main Features and Pages 📄

### 🧭 _Navbar_

- _Logo_: Click to return to the homepage.
- _Links_: Home, All Sports Equipment, Add Equipment (Private Route), My Equipment List (Private Route).
- _Authentication_: "Login" and "Register" buttons, conditional display based on user authentication status. When logged in, it shows the user’s photo URL and display name with a "Log Out" option.

### 📝 _Login Page_

- Login via Email, Password, and third-party services like Google/GitHub.
- Display errors using toast/sweet alert after incorrect login attempts.

### 📝 _Register Page_

- Register using Name, Email, PhotoURL, and Password with strong password validation.
- After successful registration, a success message will appear.

### 🏠 _Home Page_

- _Banner_: A slider with at least 3 slides featuring meaningful content.
- _Product Section_: Display at least 6 product cards with "View Details" buttons.
- _Sports Categories_: A section dedicated to different sports equipment categories.
- _Additional Sections_: Additional meaningful content sections.

### ➕ _Add Equipment Page_ (Private Route)

- Form for adding equipment with fields like Image, Item Name, Category, Price, etc.
- The logged-in user's email and name are pre-filled and read-only.
- On successful submission, a success message will be shown.

### 🛠️ _All Sports Equipment Page_

- A table displaying all products with details like name, category, price, etc.
- "View Details" button to redirect to the item’s detailed page.

### 🔍 _View Details Page_ (Private Route)

- Displays detailed information about the selected product, designed beautifully.
- Accessible only to authenticated users.

### 🧳 _My Equipment List_ (Private Route)

- Displays all equipment added by the logged-in user in card format.
- Includes options to update or delete items.

### ✏️ _Update Equipment Page_ (Private Route)

- Form to update existing equipment details.
- Read-only fields for User Email and Name.

### 🚫 _404 Page_

- A friendly 404 page for non-existing routes.

### ⏳ _Loading Spinner_

- Displays a loading spinner while data is being loaded.

---

## Additional Functionalities 🛠️

- _Sort by Price_: Sort products by price in ascending or descending order on the All Sports Equipment page.
- _Dark/Light Theme_: Toggle between dark and light themes.
- _Packages_: Integrate two packages from Lottie React, React Awesome Reveal, or React Tooltip.

---

## Hosting & Deployment 🌐

- _Client-side Hosting_: Deployed using Netlify or Surge.
- _Server-side Hosting_: Deployed using Vercel.
- _Firebase_: Used for user authentication and database management (MongoDB).

---

---

## Technologies Used 💻

- _Frontend_: React, TailwindCSS, DaisyUI
- _Backend_: Node.js, Express, MongoDB, Firebase Authentication
- _Deployment_: Netlify (Client), Vercel (Server)
- _Packages_: Lottie React, React Awesome Reveal, React Tooltip

---

## Challenges Faced 🚧

- Implementing the dark/light theme toggle without affecting the performance.
- Handling data fetching efficiently to avoid unnecessary re-renders and slow loading.
- Managing product sorting and filtering based on dynamic user inputs.
- Use 2 package - React Awesome Reveal
  React Tooltip

---

## Conclusion 🎉

GearSprint
offers a seamless and dynamic platform for purchasing and managing sports equipment. With a user-friendly interface, powerful features, and responsive design, it’s built to enhance the online shopping experience for sports enthusiasts!
