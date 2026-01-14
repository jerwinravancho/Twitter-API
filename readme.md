You can paste this as-is, then edit names later.

# Twitter Profile Lookup (API Project)

## 📌 Project Description
Twitter Profile Lookup is a web-based application that allows users to search for Twitter (X) user profiles using the Twitter API v2.  
The system fetches user profile information, public metrics, and recent tweets through a secured backend server.

This project demonstrates:
- API integration
- Token-based authentication
- API testing using Postman
- Dynamic DOM manipulation
- Error handling and input validation
- GitHub collaboration workflow

---

## 🌐 API Information

### Base URL


https://api.twitter.com/2


---

## 🔗 API Endpoints Used

### 1️⃣ Get User by Username


GET /2/users/by/username/:username

**Purpose:**  
Fetches the Twitter user's profile information such as name, username, profile image, and bio.

---

### 2️⃣ Get User Public Metrics


GET /2/users/:id?user.fields=public_metrics

**Purpose:**  
Retrieves public metrics including follower count, following count, and tweet count.

---

### 3️⃣ Get User Tweets


GET /2/users/:id/tweets

**Purpose:**  
Fetches the most recent tweets posted by the user.

---

## 📥 Required Parameters

### Path Parameters
- `:username` – Twitter username
- `:id` – Twitter user ID

### Query Parameters
- `user.fields=profile_image_url,description`
- `user.fields=public_metrics`

---

## 🔐 Authentication

**Authentication Method Used:**  
✔️ Token-Based Authentication (OAuth 2.0 Bearer Token)

The Bearer Token is securely stored using environment variables and is never exposed in frontend code.

---

## 📦 Sample JSON Response

```json
{
  "data": {
    "id": "12",
    "name": "jack",
    "username": "jack",
    "profile_image_url": "https://pbs.twimg.com/profile_images/...",
    "description": "no state is the best state"
  }
}

Fields Displayed on UI:

profile_image_url

name

username

description

id

🧪 API Testing Using Postman (MANDATORY)

All API endpoints were tested using Postman before implementation.

Demonstrated in Postman:

Bearer Token authentication

Headers and parameters

Successful response (200 OK)

Error responses:

401 Unauthorized

404 Not Found

429 Too Many Requests (rate limiting)

📸 Screenshots are included in the /screenshots/postman/ directory.

💻 Fetching Data (JavaScript)

The application uses:

fetch()

async / await

Modular and reusable functions

Centralized error handling

🖥️ Displaying Data (DOM Manipulation)

The UI dynamically displays data using:

Cards

Images

Text fields

Loading indicators

Error messages

⚠️ Error Handling

Handled scenarios include:

Empty input

Invalid username format

User not found

Authentication failure

Rate limiting

Network errors

⏳ Loading State

A loading indicator is displayed while API requests are in progress, and the search button is disabled to prevent spamming.

📱 Responsive Design

The application is responsive and usable on different screen sizes using CSS media queries.

🔒 API Key & Token Security

API tokens are NOT committed to GitHub

Tokens are stored in .env

Placeholder values are used in documentation

🚀 How to Run the Project

Clone the repository

git clone https://github.com/your-repo/twitter-profile-lookup.git


Install dependencies

npm install


Create .env file

TWITTER_BEARER_TOKEN=YOUR_API_KEY_HERE
PORT=3000


Start the server

node server.js


Open browser

http://localhost:3000