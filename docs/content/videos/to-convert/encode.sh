#!/bin/bash

if [ $# -eq 0 ]; then
  echo "$0 <input-video-1> <input-video-2> ..."
  exit
fi

for file in $@; do
  
  if [ ! -f "$file" ]; then
    echo "$file doesn't exist"
    exit
  fi
  
  # x264, 720p, bitrate 1000k
  echo "Encoding to mp4"
  
  ffmpeg -y -an -i "$file" \
    -pass 1 -b:v 1000K \
    -threads 0 -speed 4 -preset medium \
    -vf "scale=min(1600\,iw):-2:force_original_aspect_ratio=1,pad=min(1600\,ceil(iw/2)*2):ceil(ih/2)*2" -r 24 \
    -c:v libx264 \
    -pix_fmt yuv420p -profile:v main -movflags +faststart \
    -f mp4 \
    NUL
  ffmpeg -y -an -i "$file" \
    -pass 2 -b:v 1000K \
    -threads 0 -speed 0 -preset medium \
    -vf "scale=min(1600\,iw):-2:force_original_aspect_ratio=1,pad=min(1600\,ceil(iw/2)*2):ceil(ih/2)*2" -r 24 \
    -c:v libx264 \
    -pix_fmt yuv420p -profile:v main -movflags +faststart \
    -f mp4 \
    "output/$file-x264-1000k.mp4"
  
  # libvpx-vp9, 720p, bitrate 1000k
  echo "Encoding to webm"
  
  ffmpeg -y -an -i "$file" \
    -pass 1 -b:v 750K \
    -threads 0 -speed 4 -preset medium \
    -vf "scale=min(1600\,iw):-2:force_original_aspect_ratio=1" -r 24 \
    -c:v libvpx-vp9 \
    -tile-columns 0 -frame-parallel 0 -auto-alt-ref 1 -lag-in-frames 25 -g 9999 -aq-mode 0 \
    -f webm \
    NUL
  ffmpeg -y -an -i "$file" \
    -pass 2 -b:v 750K \
    -threads 0 -speed 0 -preset medium \
    -vf "scale=min(1600\,iw):-2:force_original_aspect_ratio=1" -r 24 \
    -c:v libvpx-vp9 \
    -tile-columns 0 -frame-parallel 0 -auto-alt-ref 1 -lag-in-frames 25 -g 9999 -aq-mode 0 \
    -f webm \
    "output/$file-vp9-750k.webm"

done