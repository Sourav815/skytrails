### **📄 README.md for SkyTrails**  

# 🚀 SkyTrails : Blogs  

SkyTrails is a modern blog platform built with **React, Tailwind CSS, and TypeScript**. This guide will help you quickly set up the project on your local machine.  


### **🔹 Quick Setup Using Bash Script**  

To **automate** the installation and setup, run the following command in your terminal:  

```bash
curl -L -o setup_skytrails.sh https://raw.githubusercontent.com/Sourav815/skytrails/master/setup_skytrails.sh
```
Give the script execution permission
```bash
chmod +x setup_skytrails.sh
```
Run the script
```bash
./setup_skytrails.sh
```

This will:  
✅ Clone the repository  
✅ Install dependencies  
✅ Start the development server  
✅ Open the project in your browser  

---

### **🔹 Manual Setup (Alternative)**  
If you prefer to set up manually, follow these steps:  

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/Sourav815/skytrails.git
cd skytrails
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Start the development server**  
```bash
npm run dev
```

4️⃣ **Open in browser**  
- Visit **[http://localhost:5173/](http://localhost:5173/)** in your browser  

---

## **🔧 Project Structure**  
```
/skytrails
 ├── /src        # Source code (components, pages, utils, etc.)
 ├── /public     # Static assets
 ├── package.json  # Project dependencies
 ├── tailwind.config.js  # Tailwind CSS configuration
 ├── tsconfig.json  # TypeScript configuration
 └── README.md  # Project documentation
```