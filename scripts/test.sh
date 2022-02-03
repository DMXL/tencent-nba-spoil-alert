#!/bin/bash
# On Windows WSL
taskkill.exe /im chrome.exe /f && /c/Program\ Files\ \(x86\)/Google/Chrome/Application/chrome.exe \
https://nba.stats.qq.com/schedule/ \
--load-extension="E:\Projects\tencent-nba-spoil-alert"