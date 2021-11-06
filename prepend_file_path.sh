#!/bin/bash

for file in src/**/*.svelte
do
    first_line=$(head -n 1 "${file}")
    if [[ "${first_line}" == "<!--"* ]]
    then
        echo "${first_line}"
    else
        text="<!-- ${file} -->"
        echo "Appending to "$file
        ex -sc '1i|'"${text}" -cx "${file}"
    fi
done