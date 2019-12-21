@echo off
REM   This file will build the src files every time they
REM   are updated.
REM
REM   This file assumes that SCSS has been added to the
REM   path.
REM   You can create a local.watch.bat that sets the ref-
REM   erence, that will be ignored by git.

sass --watch src:dist --style=compressed
pause
