commit 1
serverless create -t aws-nodejs -n blog
serverless deploy
serverless invoke -f createArticle

commit 2 :
serverless deploy
https://app.serverless.com/cerchiariluiza/apps/blog/blog/dev/us-east-1/explorer/7c9141a8-06db-4f06-83cf-1847dbcdc76a?endpoints=POST+%2FcreateService&rangeEnd=2021-10-31T23%3A55%3A00-03%3A00&rangeStart=2021-10-31T23%3A50%3A00-03%3A00&timestamp=2021-11-01T02%3A51%3A26Z
textar no postman com a variavel "text": "qq coisa"