@echo off

set winrar="C:\Program Files\WinRAR\WinRAR.exe"

cd %~dp0
%winrar% a -ibck -r -x@zip.ignore -xshell\ realise1.0.0.zip "../"
