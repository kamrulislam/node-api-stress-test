#!/bin/bash
{
    source ../bash-commons/node-commons.sh
    init-nvmrc-source $NVM_SOURCE
} &> /dev/null
node scripts/api-version.js