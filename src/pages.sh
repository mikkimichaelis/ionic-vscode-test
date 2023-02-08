#!/bin/zsh
find ./ -type f \( -iname \*.ts -o -iname \*.html \) -exec cat {} + >> pages.txt