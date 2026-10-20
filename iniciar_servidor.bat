@echo off
title Servidor Local de Ficha Tecnica QR - Puerto 8005
cd /d "%~dp0"
echo ========================================================
echo    Servidor de Trazabilidad e Inocuidad Activo
echo    Puerto Local: 8005 (IPv4 / 0.0.0.0)
echo    Tunel Publico: https://0tv2pdrd-8005.use2.devtunnels.ms/
echo ========================================================
echo.
echo Presiona Ctrl+C en cualquier momento para detener el servidor.
echo.
python -m http.server 8005 --bind 0.0.0.0
pause
