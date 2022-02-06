#!/bin/bash

# On Windows WSL

# Kill all Chrome tasks
taskkill.exe /im chrome.exe /f
# Open page with unpacked extension loaded
/c/Program\ Files\ \(x86\)/Google/Chrome/Application/chrome.exe \
https://nba.stats.qq.com/schedule/ \
--load-extension="E:\Projects\tencent-nba-spoil-alert"

Exit 0