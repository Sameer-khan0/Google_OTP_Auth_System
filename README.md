# Google OTP Authentication System

This project is a Google OTP (One-Time Password) authentication system built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Nodemailer for sending emails.

## Features

- User registration and login with email verification.
- Generation and sending of one-time passwords (OTPs) via email for authentication.
- Token-based authentication for protected routes.

## Technologies Used

- MongoDB: A NoSQL database used for storing user data.
- Express.js: A web application framework for Node.js used for handling server-side logic.
- React.js: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment used for server-side development.
- Nodemailer: A module for Node.js applications to send emails.
- JWT (JSON Web Tokens): A standard for securing API endpoints by generating tokens.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm: Install Node.js and npm from [Node.js website](https://nodejs.org/).
- MongoDB: Install MongoDB Community Edition from [MongoDB website](https://www.mongodb.com/try/download/community).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/google-otp-authentication-system.git
   ```

2. Install dependencies:

   ```bash
   cd google-otp-authentication-system
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory of the project and add the following variables:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USERNAME=your_email_username
   EMAIL_PASSWORD=your_email_password
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string, `your_email_username` with your email address used for sending emails, and `your_email_password` with your email password.

4. Start the server:

   ```bash
   npm start
   ```

   This will start the server at `http://localhost:5000`.

5. Start the client:

   Open a new terminal window and navigate to the client directory:

   ```bash
   cd client
   npm start
   ```

   This will start the React development server at `http://localhost:3000`.

6. Access the application:

   Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Register a new user account by providing an email address and password.
- Verify your email address by clicking on the verification link sent to your email.
- Login with your registered email and password.
- Generate and send a one-time password (OTP) to your email for authentication.
- Enter the received OTP to verify your identity.
- Access protected routes using token-based authentication.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Nodemailer Documentation](https://nodemailer.com/about/)
- [JWT.io](https://jwt.io/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

Feel free to customize this README according to your project's specific details and requirements.
