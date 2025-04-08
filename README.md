# 🎬 Emoji & Film API

A lightweight Node.js backend for managing two simple datasets: emojis and films. The API supports full CRUD operations for both collections, with optional query parameters for sorting.

---

## 🧠 What I Learned

This project helped me practice:

- Designing RESTful API endpoints
- Structuring code with routers and controllers
- Using in-memory data before connecting to a database
- Working with Express middleware
- Managing sort parameters via URL queries
  ``


## 🧰 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **Morgan** – HTTP request logger
- **UUID** – Generates unique IDs
- **dotenv** – Environment variable management
- **Nodemon** – Dev server auto-reloader

---

## 💡 What It Does

- Provides RESTful CRUD routes for emojis and films
- Accepts incoming JSON data
- Returns sorted results using query params like `?sortBy=name&sortOrder=asc`
- Logs all requests with helpful metadata

---

## 📦 API Endpoints

### 🎨 Emojis (`/api/v1/emojis`)
| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | `/`            | Get all emojis      |
| POST   | `/`            | Add a new emoji     |
| PATCH  | `/:id`         | Update an emoji     |
| DELETE | `/:id`         | Delete an emoji     |

### 🎥 Films (`/api/v1/films`)
| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | `/`            | Get all films       |
| POST   | `/`            | Add a new film      |
| PATCH  | `/:id`         | Update a film       |
| DELETE | `/:id`         | Delete a film       |

---


## 📁 Installation & Usage

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd <your-folder>

