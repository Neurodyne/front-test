#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Provide proto source file"
  exit 1
else
  protoc -I=. -I../ $1 \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
fi