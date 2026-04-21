const canvas = document.getElementById('dpCanvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('nameInput');
const fontSelect = document.getElementById('fontSelect');
const colorPicker = document.getElementById('colorPicker');
const downloadBtn = document.getElementById('downloadBtn');

// ബേസിക് ബാക്ക്ഗ്രൗണ്ട് സെറ്റ് ചെയ്യുക
function updateCanvas() {
    // Background
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // GFX Effects (ഒരു ലളിതമായ ഗ്ലോ)
    ctx.shadowBlur = 20;
    ctx.shadowColor = colorPicker.value;
    
    // Text Style
    ctx.fillStyle = colorPicker.value;
    ctx.font = `80px ${fontSelect.value}`;
    ctx.textAlign = "center";
    ctx.fillText(nameInput.value || "YOUR NAME", canvas.width / 2, canvas.height / 2);
}

// ഇവന്റ് ലിസണേഴ്സ്
nameInput.addEventListener('input', updateCanvas);
fontSelect.addEventListener('change', updateCanvas);
colorPicker.addEventListener('input', updateCanvas);

// ഡൗൺലോഡ് ഫംഗ്ഷൻ
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'my-gfx-dp.png';
    link.href = canvas.toDataURL();
    link.click();
});

// ആദ്യം തന്നെ ഒന്ന് ലോഡ് ചെയ്യാൻ
updateCanvas();
