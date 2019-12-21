@echo off
REM   This file will build the src files exactly once.
REM   Also this file will copy changes to the docs dir.
REM
REM   This file assumes that SCSS has been added to the
REM   path.
REM   You can create a local.build.bat that sets the ref-
REM   erence, that will be ignored by git.

CALL sass src:dist --style=compressed

xcopy "assets" "docs\assets\" /s /y
xcopy "dist" "docs\dist\" /s /y

echo Build successful.
pause
