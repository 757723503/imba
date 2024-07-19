@echo off
cd /d "%~dp0"
echo Running TypeScript file with ts-node...
npx ts-node output.ts
pause