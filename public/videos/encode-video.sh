#!/bin/bash

# Web-optimized FFmpeg command for scroll-based video scrubbing
# Balances quality and file size for web delivery

ffmpeg -i movements.mp4 \
  -vf "scale=1280:-2:flags=lanczos" \
  -c:v libx264 \
  -preset medium \
  -crf 21 \
  -g 30 \
  -keyint_min 30 \
  -sc_threshold 0 \
  -pix_fmt yuv420p \
  -profile:v high \
  -level 4.0 \
  -movflags +faststart \
  -c:a aac \
  -b:a 96k \
  -ar 44100 \
  output.mp4

echo "Video encoding complete!"
echo "New file: output.mp4"

