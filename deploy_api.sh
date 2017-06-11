#!/bin/bash

cd /usr/local/source/crm
rm -rf bowen-crm-api
git clone https://github.com/supperbowen/bowen-crm-api.git
cd bowen-crm-api
cnpm install
sh /usr/local/source/kill-node.sh
nohup npm run prod

exit 0


