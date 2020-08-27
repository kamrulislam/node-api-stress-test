#!/bin/bash
source .env
source ../docker-commons/docker-commons.sh
VERSION=`./version.sh`
dpush $IMAGE_TAG_API:$VERSION
dpush $IMAGE_TAG_API:latest
