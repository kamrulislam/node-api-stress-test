#!/bin/bash
source .env
source ../docker-commons/docker-commons.sh

dpush $IMAGE_TAG_API:base
