
# 🌿 ZeroWaste - Food Donation and Claim Platform

**ZeroWaste** is a web application built to connect food donors with those in need. The platform allows users to post food donations and enables receivers to claim the food in a structured and transparent way, helping to minimize food waste.

## 🚀 Features

- 🔐 **User Authentication** (Login/Signup)
- 🥗 **Post Food Donations**
- 📦 **Claim Available Donations**
- 📄 **Privacy Policy and Terms**
- 📊 **View My Donations**
- 📞 **Contact Page**

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (for authentication & database)
- **Hosting**: Suitable for Firebase Hosting or any static hosting service

## 📂 File Structure

```
zerowaste/
│
├── index.html               # Landing Page
├── login.html               # Login page
├── signup.html              # Signup page
├── post.html                # Page to post donations
├── receive.html             # Page to claim donations
├── my-donations.html        # View personal donations
├── contact.html             # Contact form
├── admin.html               # Admin interface (static for now)
│
├── style.css                # Main stylesheet
├── script.js                # Frontend logic
├── firebase-config.js       # Firebase configuration
│
├── homepage1.jpg            # UI image
├── restarunto.jpg           # UI image
├── studimg.jpg              # UI image
├── zerowaste.jpg            # Logo/Image
│
├── terms.html               # Terms & Conditions
├── privacy.html             # Privacy Policy
```

## ⚙️ Setup Instructions

1. Clone or download this repository.
2. Set up a Firebase project at [firebase.google.com](https://firebase.google.com/).
3. Replace the Firebase credentials in `firebase-config.js`.
4. Host using Firebase or any static site provider.

## 🔐 Authentication and Security

- Basic Firebase Authentication (Email & Password)
- Email validation and popup messages for login/signup errors

## ✅ Future Improvements

- Add real-time stock tracking and notifications
- OTP/email verification before food claim
- Admin dashboard for approving or removing donations
- Enhanced UI with filters and categories

## 📬 Contact

For suggestions or contributions, feel free to open issues or pull requests.
