#!/bin/bash

cd /usr/local/source/distss
rm -rf app
unzip api.zip
rm -rf /usr/local/source/crm/api
cp -r app/ /usr/local/source/crm/api
rm -rf api.zip
rm -rf app

cp package.json /usr/local/source/crm
cd /usr/local/source/crm
cnpm install




