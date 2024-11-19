# Real-Time Chat Application 🗨️

The **Real-Time Chat Application** is a full-stack MERN web application that allows users to communicate instantly with real-time messaging capabilities. This app ensures a smooth and engaging user experience with seamless communication, secure authentication, and efficient state management.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.5.1-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0.2-brightgreen.svg)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey.svg)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.6.1-blue.svg)](https://socket.io/)

---

## ✨ Features

- **Real-Time Communication**: Allows users to send and receive messages in real time using Socket.IO.
- **Secure Authentication**: Implements JWT-based authentication to ensure secure user sessions.
- **Dynamic UI**: The user interface is built using Tailwind CSS and DaisyUI for a modern, responsive design.
- **State Management**: Efficient state management handled through Redux Toolkit for a smooth user experience.
- **Low Latency Messaging**: Optimized for instant messaging with minimal delay.

---

## 🛠️ Tech Stack

### Core Technology
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (with Mongoose for schema modeling)
- **Real-Time Communication**: Socket.IO
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS & DaisyUI
- **Authentication**: JWT (JSON Web Tokens)

### Key Libraries and Tools
- **Socket.IO**: For real-time messaging
- **JWT**: For secure user authentication
- **Tailwind CSS**: For responsive UI design
- **Redux Toolkit**: For state management
- **Express**: For building the backend API

---

## 🚀 Getting Started

### Prerequisites

To run this project, you will need:
- Node.js (v16 or later)
- npm or yarn for dependency management
- MongoDB server running locally or in the cloud

### Setup Guide

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/siddharthdhodi05/Real-Time-Chat-Application.git
   cd Real-Time-Chat-Application
   ```
## 🔧 Environment Setup

### Environment Variables  
Create a `.env` file in the `backend` directory and add the following:  

```env
PORT = 8080
MONGO_URI= Your Url
JWT_SECRET_KEY=secreat key
```
---

# Run the Application

## Start the Backend Server:
Navigate to the backend directory and run:

```bash
cd backend
npm run dev
```

## Start the Frontend Server:
Navigate to the forntend directory and run:
```bash
cd frontend
npm run dev
```
