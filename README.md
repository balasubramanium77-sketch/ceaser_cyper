# 🔐 CipherVault

CipherVault is a modern **Caesar Cipher Encryption Console** built using **HTML, CSS, and JavaScript**. It demonstrates the complete Caesar Cipher algorithm through an interactive cyber-themed interface while visualizing the encryption process using **ASCII conversion**, **modular arithmetic**, and the **Input-Process-Output (IPO)** cycle. Designed for students, cybersecurity enthusiasts, and beginners in cryptography, CipherVault makes classical encryption easy to learn and understand.

🌐 **Live Demo:**  
https://balasubramanium77-sketch.github.io/ceaser_cyper/

---

## ✨ Features

- 🔒 Caesar Cipher Encryption & Decryption
- ⚡ Real-time encryption and decryption
- 🧮 Interactive algorithm visualization
- 🔢 ASCII value conversion
- ♻️ Modular arithmetic (Modulo 26)
- 📊 Input-Process-Output (IPO) flow explanation
- 🖥️ Cyber-themed responsive user interface
- 📱 Fully responsive across desktop, tablet, and mobile devices

---

## 🧠 How It Works

CipherVault encrypts each alphabetic character by shifting it according to a user-defined key while leaving numbers, spaces, and special characters unchanged.

### Encryption Process

```text
Plain Text
    │
    ▼
Read Each Character
    │
    ▼
Convert to ASCII
    │
    ▼
Find Alphabet Position
    │
    ▼
Apply Shift Key
    │
    ▼
Modulo 26 Operation
    │
    ▼
Convert Back to Character
    │
    ▼
Encrypted Text
```

### Decryption Process

```text
Cipher Text
    │
    ▼
Read Each Character
    │
    ▼
Convert to ASCII
    │
    ▼
Subtract Shift Key
    │
    ▼
Modulo 26 Operation
    │
    ▼
Convert Back to Character
    │
    ▼
Original Plain Text
```

---

## 🧮 Mathematical Logic

### Encryption

```text
Encrypted = (Position + Shift) % 26
```

### Decryption

```text
Original = (Position - Shift + 26) % 26
```

The project uses:

- `charCodeAt()` for ASCII conversion
- `String.fromCharCode()` to convert ASCII back to characters
- `% 26` for alphabet wrapping

---

## ✅ Supported Inputs

CipherVault correctly handles:

- ✅ Uppercase letters (A–Z)
- ✅ Lowercase letters (a–z)
- ✅ Numbers (0–9)
- ✅ Spaces
- ✅ Symbols
- ✅ Special characters
- ✅ Shift values from 0–25

> Only alphabetic characters are encrypted. All other characters remain unchanged.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 📂 Project Structure

```text
CipherVault/
│── index.html
│── style.css
│── script.js
│── README.md
└── assets/
    └── screenshot.png
```

---

## 🚀 How to Use

1. Open the live demo.
2. Enter your plain text.
3. Choose a shift value (0–25).
4. Click **Encrypt** or **Decrypt**.
5. View the transformed text along with the algorithm visualization.

---

# 📸 Preview

<p align="center">
  <img src="assets/screenshot.png" alt="CipherVault Preview" width="1000">
</p>

---

## 🌟 Future Enhancements

- Multiple classical cipher algorithms
- Copy encrypted/decrypted text
- File encryption support
- Dark/Light mode toggle
- Encryption history
- Animated algorithm visualization

---

## 👨‍💻 Author

**Bala Subramanium**

⭐ If you found this project useful, consider giving it a **Star** on GitHub!
