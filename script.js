// Fungsi Buka Tutup Start Menu
function toggleStart() {
    const startMenu = document.getElementById('startMenu');
    startMenu.classList.toggle('active');
}

// Fungsi Membuka Aplikasi
function openApp(id) {
    const win = document.getElementById('win-' + id);
    win.style.display = 'flex';
    // Otomatis menaikkan z-index aplikasi yang aktif
    makeActive(win);
    // Tutup start menu jika terbuka
    document.getElementById('startMenu').classList.remove('active');
}

// Fungsi Menutup Aplikasi
function closeApp(id) {
    document.getElementById('win-' + id).style.display = 'none';
}

// Mengatur Z-Index Jendela yang Sedang Diklik (Sudah di-FIX)
function makeActive(windowElem) {
    document.querySelectorAll('.window').forEach(w => w.style.zIndex = '10');
    windowElem.style.zIndex = '100';
}

// Fitur Drag Jendela (Bisa Digeser Sesuai Perintah Jenderal)
document.querySelectorAll('.window').forEach(win => {
    const header = win.querySelector('.window-header');
    
    win.addEventListener('mousedown', () => makeActive(win));

    header.onmousedown = function(e) {
        e.preventDefault();
        let pos1 = 0, pos2 = 0, pos3 = e.clientX, pos4 = e.clientY;
        
        document.onmousemove = function(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            win.style.top = (win.offsetTop - pos2) + "px";
            win.style.left = (win.offsetLeft - pos1) + "px";
        }
        
        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
});
