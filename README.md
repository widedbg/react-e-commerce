# E-Commerce Web Application

A modern, minimalistic, and fully responsive e-commerce web application built with **React + TypeScript**.
Designed for demonstration purposes using **mockup data**, featuring product browsing, filtering, sorting, cart management, and user authentication.

---

## 🚀 Project Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

---

## 🍽️ Technologies & Libraries

* **TypeScript**: Type safety & fewer runtime errors
* **Tailwind CSS**: Responsive design & utility-first styling
* **Shadcn UI**: Reusable React components
* **React Router DOM**: Navigation and routing
* **React Hook Form**: Form state management
* **React Context API**: Global state management
* **Zod**: Form schema validation
* **Embla Carousel Autoplay**: Product carousel with autoplay feature

---

## 📁 Folder Structure

```
src/
  assets/             # Images, icons, and static assets
  components/         # Shared UI components
    ui/               # Shadcn UI components
  pages/              # App pages (Home, Products, Login, etc.)
  lib/                # Schemas, interfaces, utilities
  providers/          # React Context providers (global states)
  App.tsx             # Routing configuration
  dev-data.ts         # Mockup data
  main.tsx            # Entry point
```

---

## 🎨 Features

* **Homepage**

  * Promotion carousel
  * Recommended products section
  * Categories overview

* **Products Page**

  * List of products with filtering (price, rating) and sorting
  * Product cards with image, price, rating, discount

* **Product Detail Page**

  * Detailed product information
  * Recommended products by category
  * Add to cart functionality

* **Cart & Checkout**

  * Add/remove items
  * Quantity management
  * Checkout summary

* **User Authentication**

  * Login and signup forms with validation
  * User state management via Context API

* **Navigation & Responsiveness**

  * Mobile-friendly hamburger menu
  * Desktop multi-level navigation menu
  * Cart badge with item count
  * Fully responsive design



---

## 📦 Mock API / Data

The app uses **mock data** from `dev-data.ts`:

```ts
export const products = [
  {
    id: 1,
    name: "Apple iMac 27\"",
    price: 1699,
    discount: "Up to 35% off",
    rating: 4,
    category: "Electronics",
    image: "/assets/imac.png",
    badges: ["New", "Hot"]
  },
  // ...more products
];

export const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Toys",
  "Accessories"
];
```

> This allows testing UI & interactions without a backend.

---

## ⚙️ How to Use

1. Clone the repository:

```bash
git clone <https://github.com/widedbg/react-e-commerce.git>
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`.

---

## 🎟 Future Improvements

* Backend integration for real products, users, and orders
* Payment gateway integration (Stripe, PayPal)
* Wishlist & user profile management
* Enhanced animations & transitions for better UX


---

## 👨‍💼 Author

**Your Name**
Email: [widedbg23@gmail.com](mailto:widedbg23@gmail.com)
GitHub: [github.com/widedbg](https://github.com/widedbg)
