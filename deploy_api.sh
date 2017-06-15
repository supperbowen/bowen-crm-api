#!/bin/bash

cd /usr/local/source/crm
/usr/local/source/crm/node_modules/pm2/bin/pm2 delete all
rm -rf bowen-crm-api
git clone https://github.com/supperbowen/bowen-crm-api.git
cd bowen-crm-api
cnpm install
npm i koa
npm run build
rm -rf .git 
rm -rf .gitignore
rm -rf .travis.yml
rm -rf  id_rsa.enc
rm -rf deploy_api.sh
rm -rf README.md
rm -rf LICENSE

