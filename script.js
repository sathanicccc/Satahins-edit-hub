const canvas = new fabric.Canvas('gfxCanvas');

// 1. 100 ഫോണ്ടുകൾ ആഡ് ചെയ്യുന്നു (Google Fonts വഴി)
const fonts = ['Orbitron', 'Bangers', 'Roboto', 'Nosifer', 'Permanent Marker', 'Monoton', 'Akronim', 'Creepster']; // ഇതിൽ 100 എണ്ണം വരെ ലിസ്റ്റ് ചെയ്യാം
const fontSelect = document.getElementById('fontFamily');

fonts.forEach(font => {
    let option = document.createElement('option');
    option.value = font;
    option.innerText = font;
    fontSelect.appendChild(option);
});

// 2. 50 ബാനറുകൾ ലോഡ് ചെയ്യുന്നു
const bannerList = document.getElementById('bannerList');
for (let i = 1; i <= 50; i++) {
    let img = document.createElement('img');
    img.src = `banners/banner${i}.png`; // നിങ്ങളുടെ ഫോൾഡറിലെ ബാനർ ഇമേജ് പാത്ത്
    img.className = 'banner-item';
    img.onclick = () => setBackground(img.src);
    bannerList.appendChild(img);
}

// ബാനർ ബാക്ക്ഗ്രൗണ്ട് ആയി സെറ്റ് ചെയ്യാൻ
function setBackground(url) {
    fabric.Image.fromURL(url, function(img) {
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
        });
    });
}

// ടെക്സ്റ്റ് ആഡ് ചെയ്യാൻ
function addText() {
    const textVal = document.getElementById('textInput').value;
    const text = new fabric.IText(textVal || 'GFX KING', {
        left: 100,
        top: 100,
        fontFamily: fontSelect.value,
        fill: '#00ffcc',
        fontSize: 60
    });
    canvas.add(text);
}

// ഗ്ലോ എഫക്റ്റ് നൽകാൻ
function applyGlow() {
    const activeObj = canvas.getActiveObject();
    if (activeObj) {
        activeObj.set({
            shadow: new fabric.Shadow({
                color: '#00ffcc',
                blur: 20
            })
        });
        canvas.renderAll();
    }
}

// ഡൗൺലോഡ്
function downloadImage() {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1
    });
    const link = document.createElement('a');
    link.download = 'gfx-pro-dp.png';
    link.href = dataURL;
    link.click();
}

