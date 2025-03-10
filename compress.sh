#!/bin/bash

# Define the output filename for the compressed file
output_file="ibk_hrd_user_front.zip"

# Use the zip command to compress files while excluding specific directories
zip -r "$output_file" . -x "*.git*" "*.idea*" "*.vscode*" "*.output*" "*dist*" "*node_modules*" "*.github*"

echo "Compression complete: $output_file"