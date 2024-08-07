@echo off
REM 设置命令提示符编码为 UTF-8
chcp 65001 >nul

REM 获取当前脚本所在的目录
set SCRIPT_DIR=%~dp0

REM 切换到脚本所在的目录
cd /d %SCRIPT_DIR%

REM 运行 Node.js 脚本
node 1.js

REM 显示完成提示并等待按键
pause  