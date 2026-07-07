// DOM Elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const shiftKey = document.getElementById('shiftKey');
const shiftValue = document.getElementById('shiftValue');
const encryptModeBtn = document.getElementById('encryptModeBtn');
const decryptModeBtn = document.getElementById('decryptModeBtn');
const inputLabel = document.getElementById('inputLabel');
const outputLabel = document.getElementById('outputLabel');

// State
let isDecryptMode = false;

// Event Listeners for UI interaction
shiftKey.addEventListener('input', (e) => {
    shiftValue.textContent = e.target.value;
    runDashboard();
});

inputText.addEventListener('input', runDashboard);

encryptModeBtn.addEventListener('click', () => {
    isDecryptMode = false;
    encryptModeBtn.classList.add('active');
    decryptModeBtn.classList.remove('active');
    inputLabel.textContent = 'PLAIN TEXT';
    outputLabel.textContent = 'CIPHERTEXT';
    runDashboard();
});

decryptModeBtn.addEventListener('click', () => {
    isDecryptMode = true;
    decryptModeBtn.classList.add('active');
    encryptModeBtn.classList.remove('active');
    inputLabel.textContent = 'CIPHERTEXT';
    outputLabel.textContent = 'PLAIN TEXT';
    runDashboard();
});

// Main execution function to update everything at once
function runDashboard() {
    const text = inputText.value;
    const shift = parseInt(shiftKey.value);
    
    updateStatistics(text);
    outputText.value = processCipher(text, shift, isDecryptMode);
    generateTransformationTable(text, shift, isDecryptMode);
}

// 1. Core Cipher Logic
function processCipher(text, shift, isDecrypt) {
    let result = '';
    let actualShift = isDecrypt ? (26 - shift) % 26 : shift;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) { // Uppercase
                char = String.fromCharCode(((code - 65 + actualShift) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // Lowercase
                char = String.fromCharCode(((code - 97 + actualShift) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

// 2. Real-Time Stats Logic
function updateStatistics(text) {
    document.getElementById('statTotal').textContent = text.length;
    document.getElementById('statLetters').textContent = (text.match(/[a-zA-Z]/g) || []).length;
    document.getElementById('statSpaces').textContent = (text.match(/ /g) || []).length;
    document.getElementById('statSymbols').textContent = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
}

// 3. Transformation Table Logic
function generateTransformationTable(text, shift, isDecrypt) {
    const tableBody = document.getElementById('transformationTableBody');
    tableBody.innerHTML = ''; 

    const limit = Math.min(text.length, 10); 
    let actualShift = isDecrypt ? (26 - shift) % 26 : shift;

    for (let i = 0; i < limit; i++) {
        let char = text[i];
        let originalAscii = text.charCodeAt(i);
        let newAscii = originalAscii;
        let finalChar = char;
        let shiftDisplay = isDecrypt ? `-${shift}` : `+${shift}`;

        if (char.match(/[a-z]/i)) {
            if (originalAscii >= 65 && originalAscii <= 90) {
                newAscii = ((originalAscii - 65 + actualShift) % 26) + 65;
            } else if (originalAscii >= 97 && originalAscii <= 122) {
                newAscii = ((originalAscii - 97 + actualShift) % 26) + 97;
            }
            finalChar = String.fromCharCode(newAscii);
        } else {
            shiftDisplay = '-';
        }

        const row = `<tr>
            <td>${i}</td>
            <td>${char === ' ' ? 'Spc' : char}</td>
            <td>${originalAscii}</td>
            <td style="color: var(--accent-green)">${shiftDisplay}</td>
            <td>${newAscii}</td>
            <td>${finalChar === ' ' ? 'Spc' : finalChar}</td>
        </tr>`;
        
        tableBody.innerHTML += row;
    }
}

// Initialize dashboard on first load
runDashboard();