#!/bin/bash
source .env
source ../docker-commons/docker-commons.sh
dbuild $IMAGE_TAG_API/dev:latest Dockerfile.dev
