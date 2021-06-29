#!/bin/bash

mvn spring-boot:run &
cd src/main/resources/js/helpdesk/ && npm run serve
