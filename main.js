const { app, BrowserWindow } = require('electron');

// ќтключаем аппаратное ускорение (если нужно)
app.disableHardwareAcceleration();

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        // === ѕќЋЌќЁ –јЌЌџ… –≈∆»ћ ===
        fullscreen: true,           // ќткрываетс€ сразу на весь экран
        frame: false,               // ”бираем рамку окна (кнопки свернуть/закрыть)
        autoHideMenuBar: true,      // —крываем меню (File, Edit, View...)
        backgroundColor: '#0e1621'  // ‘он при запуске (тЄмный)
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});