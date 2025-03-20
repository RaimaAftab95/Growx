# 🚀 GrowX  

GrowX is a web application that enables **NFT uploads, user authentication, wallet transactions, and more**. It is built using **Node.js, Express.js, MongoDB, Docker, and EJS** for templating.  

---
## 📂 Project Structure  

```plaintext
growx/
 ├── public/                 # Static files (CSS, JS, Images)
 ├── src/
 │   ├── controllers/        # Application controllers
 │   │   ├── api/
 │   │   │   ├── auth/
 │   │   ├── ui/
 │   │       ├── dashboard.js
 │   │       ├── about-us.js
 │   │       ├── auth.js
 │   │       ├── contact.js
 │   │       ├── explore.js
 │   │       ├── nft.js
 │   │       ├── home.js
 │   ├── middleware/
 │   │   ├── auth.middleware.js
 │   ├── models/
 │   │   ├── user.model.js
 │   ├── routes/
 │   ├── utils/
 │   │   ├── exceptions.utils.js
 │   │   ├── handleValidationError.utils.js
 │   ├── validators/
 │   │   ├── auth.validator.js
 │   ├── views/
 │       ├── templates/      # EJS Templates
 ├── package.json
 ├── Dockerfile
 ├── README.md


## 📌 Features  

✅ **Separation of HTML Templates into EJS** – Converted static HTML files into **EJS templates** for dynamic rendering.  
✅ **User Authentication** – Implemented authentication logic with validation using **express-validator**.  
✅ **NFT Upload with Multer** – Used **Multer.js** for handling file uploads, allowing users to upload NFTs.  
✅ **Database Integration** – Created MongoDB collections to store NFT data and user transactions.  
✅ **Wallet & Transaction History** – Implemented a system to track user wallet balances and transactions.  
✅ **Docker Integration** – Configured Docker to manage **MongoDB** as a containerized service.  

---

## 🛠 Technologies Used  

- **Node.js** – Backend runtime  
- **Express.js** – Web framework  
- **EJS** – Template engine  
- **MongoDB** – Database  
- **Multer** – File uploads  
- **Docker** – Containerization  

---

## 📥 Installation & Setup  

### 📌 Prerequisites  

Make sure you have the following installed:  

- **Node.js**  
- **Docker**  
- **MongoDB**  

### 🛠 Steps to Run the Project  

```sh
# Clone the repository
git clone https://github.com/your-username/growx.git

# Navigate to the project directory
cd growx

# Install dependencies
npm install

# Start MongoDB in Docker
docker start mongodb

# Start the application
npm start

🔮 Future Enhancements
✅ Implement NFT Marketplace
✅ Enhance UI with Tailwind CSS
✅ Add Web3.js integration for blockchain transactions

![Project Screenshot]-https://github.com/RaimaAftab95/Growx/issues/1
