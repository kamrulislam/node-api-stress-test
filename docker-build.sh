#!/bin/bash
source .env
source ../docker-commons/docker-commons.sh
VERSION=`./version.sh`
dbuild $IMAGE_TAG_API:$VERSION
dbuild $IMAGE_TAG_API:latest
