@echo off
chcp 65001 > nul
echo ===================================================
echo   Publicacio de Valencianismes a GitHub
echo   Creat per Pau Anyo Calabuig
echo ===================================================
echo.
echo Pas 1: Si encara no has creat el repositori buit a GitHub,
echo s'obrira la finestra del navegador:
start https://github.com/new
echo.
echo   - Repository name: valencianismes
echo   - Marca: Public
echo   - (NO cal afegir README ni .gitignore, ja estan fets)
echo   - Prem el boto verd: 'Create repository'
echo.
pause
echo.
echo Pas 2: Pujant el codi a GitHub...
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ===================================================
    echo   Enhorabona! Publicat amb exit a:
    echo   https://github.com/PauAnyo/valencianismes
    echo ===================================================
    echo.
    echo Per a activar la web gratuïta a internet (GitHub Pages):
    echo 1. Entra a: https://github.com/PauAnyo/valencianismes/settings/pages
    echo 2. A 'Branch' selecciona 'main' i '/ (root)'
    echo 3. Prem 'Save'
    echo.
    echo La teua app estara visible per a tothom a:
    echo https://pauanyo.github.io/valencianismes/
) else (
    echo.
    echo Si t'ha demanat iniciar sessio, valida-ho en la finestra del navegador que s'ha obert i torna a executar aquest fitxer.
)
echo.
pause
