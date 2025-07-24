#!/bin/bash
/usr/bin/docker stop my-memo-app
/usr/bin/docker rm my-memo-app
/usr/bin/docker run -d --name my-memo-app -p 1805:3000 memo-app
