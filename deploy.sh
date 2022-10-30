#!/bin/bash

echo What should the version be?
read VERSION

docker build -t coreymburns/social-frontend:$VERSION .
docker push coreymburns/social-frontend:$VERSION




