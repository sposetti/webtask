## Prerequisites

Setup the webtask CLI:

- [webtask](https://webtask.io)

Set the following dependency:

- aws-sdk

Set the following secrets:

- ACCESS_KEY
- SECRET_ACCESS_KEY
- BUCKET


## Create Webtask

```
wt create --dependency aws-sdk \
	--secret ACCESS_KEY=ABCDEFGHIJK \
	--secret SECRET_ACCESS_KEY=ABCDEFGHIJK \
	--secret BUCKET=blogger-jeffs \
	upload.js 

Resolving 1 module...
Provisioning 1 module...
aws-sdk@2.386.0 is available
Webtask created

You can access your webtask at the following url:

https://wt-1234567890-0.sandbox.auth0-extend.com/upload

```
## Test via cUrl

```
curl -d '{"postTitle":"testpost","postURL":"http://blog.sposetti.me/2019/01/testpost.html","postPublished":"January 10, 2019 at 09:10PM"}' \
	-H "Content-Type: application/json" -X POST \
	https://wt-1234567890-0.sandbox.auth0-extend.com/upload
```