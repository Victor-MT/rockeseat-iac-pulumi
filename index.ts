import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.Bucket("victor-bucket-rocketseat-pulumi", {
    bucket: "victor-bucket-rocketseat-pulumi",
    tags: {
        IAC: "true",
    },

});

/* Comment to destroy it.

const secondBucket = new aws.s3.Bucket("victor-bucket-rocketseat-pulumi-second", {
    bucket: "victor-bucket-rocketseat-pulumi-second",
    tags: {
        IAC: "true",
    },

}); 

*/

const ecr = new aws.ecr.Repository("victor-ecr-rocketseat-pulumi", {
    name: "victor-ecr-rocketseat-pulumi",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true",
    },
});


// Export the name of the bucket
export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

/* Comment to destroy it.
export const secondBucketName = secondBucket.id;
export const secondBucketInfo = secondBucket.bucket;
export const secondBucketArn = secondBucket.arn;
 */

export const ecrName = ecr.name;
export const ecrRepositoryURL = ecr.repositoryUrl;
