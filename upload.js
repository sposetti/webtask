var AWS = require('aws-sdk');

module.exports = function(context, cb) {

	AWS.config.update({
    	accessKeyId: context.secrets.ACCESS_KEY,
    	secretAccessKey: context.secrets.SECRET_ACCESS_KEY
    });

	var params = {
		Bucket: context.secrets.BUCKET,
  		Body : JSON.stringify(context.body),
  		Key : "folder/blog_"+Date.now()+".json"
	};

	var s3 = new AWS.S3();

	s3.upload(params, function (err, data) {
		if (err) {
    		console.log("Error", err);
  		}

		if (data) {
    		console.log("Uploaded in:", data.Location);
		}
	});

	cb (null, 'success');
}
