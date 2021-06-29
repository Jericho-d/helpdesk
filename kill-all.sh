#!/bin/bash

# shellcheck disable=SC2207
#pid_back=( $(netstat -ano | findStr "8080") )
taskkill //F //IM "java.exe"

#pid_front=( $(netstat -ano | findStr "3000") )
taskkill //F //IM "node.exe"