# 🔐 Ceaser_cipher

**Ceasercipher** is an interactive web application that demonstrates the **Caesar Cipher** encryption technique through a modern cyber-themed interface. Built with **HTML, CSS, and JavaScript**, it provides a hands-on way to explore how classical cryptography transforms plain text into encrypted messages using a configurable shift value.

Whether you're beginning your cybersecurity journey or studying cryptography, Ceasercipher offers an easy-to-follow visualization of each stage of the encryption and decryption process.

🌐 **Live Demo:**  
https://balasubramanium77-sketch.github.io/ceaser_cyper/

---

# ✨ Features

- 🔒 Encrypt and decrypt text using the Caesar Cipher algorithm
- ⚡ Instant output as you type
- 📊 Step-by-step visualization of the encryption process
- 🔢 Displays ASCII values and character transformations
- 🧮 Demonstrates modular arithmetic used in cryptography
- 🎨 Cyber-inspired, responsive user interface
- 📱 Works smoothly across desktop, tablet, and mobile devices
- 🚀 Lightweight application with no external libraries

---

# 📸 Preview

> *(Add your project screenshot here)*

```md
![Ceasercipher Preview](assets/screenshot.png)
```

---

# ⚙️ Encryption Workflow

Ceasercipher follows a simple sequence to encrypt text:

```text
Plain Text
    │
    ▼
Read Individual Characters
    │
    ▼
Convert to ASCII Value
    │
    ▼
Find Alphabet Index
    │
    ▼
Apply Shift Value
    │
    ▼
Wrap Using Modulo (26)
    │
    ▼
Generate Encrypted Character
    │
    ▼
Cipher Text
```

---

# 🔓 Decryption Workflow

To restore the original message, the reverse operation is performed.

```text
Cipher Text
    │
    ▼
Read Individual Characters
    │
    ▼
Convert to ASCII Value
    │
    ▼
Reverse the Shift
    │
    ▼
Apply Modulo (26)
    │
    ▼
Convert Back to Letters
    │
    ▼
Original Message
```

---

# 🧠 Algorithm Overview

### Encryption Formula

```text
Cipher = (Letter Position + Shift Key) mod 26
```

### Decryption Formula

```text
Plain = (Letter Position − Shift Key + 26) mod 26
```

The application uses JavaScript's built-in character conversion methods to perform these operations efficiently.

---

# ✅ Supported Inputs

Ceasercipher processes a variety of input types correctly:

- ✔ Uppercase letters
- ✔ Lowercase letters
- ✔ Spaces
- ✔ Numbers
- ✔ Symbols
- ✔ Special characters
- ✔ Shift values from **0 to 25**

> Only alphabetical characters are transformed during encryption. All other characters remain unchanged.

---

# 🛠️ Technologies Used

- **HTML5** – Page structure
- **CSS3** – Styling and responsive layout
- **JavaScript (ES6)** – Encryption, decryption, and application logic

---

# 📂 Project Structure

```text
Ceasercipher/
│── index.html
│── style.css
│── script.js
│── README.md
└── assets/
    └── screenshot.png
```

---

# 🚀 Getting Started

1. Clone or download the repository.
2. Open **index.html** in your preferred web browser.
3. Enter your message.
4. Choose a shift key.
5. Encrypt or decrypt the text instantly.

---

# 💡 Future Improvements

- Multiple classical cipher algorithms
- Copy encrypted text with one click
- Dark/Light theme switch
- Encryption history
- Export encrypted messages
- Animated algorithm visualization

---

# 👨‍💻 Author

**Bala Subramanium**

If you enjoyed this project, consider giving the repository a ⭐ on GitHub.
