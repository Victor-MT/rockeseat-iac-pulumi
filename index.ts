import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("victor-bucket-rocketseat-pulumi", {
    bucket: "victor-bucket-rocketseat-pulumi",
    tags: {
        IAC: "true",
    },

});

const ecr = new aws.ecr.Repository("victor-ecr-rocketseat-pulumi", {
    name: "victor-ecr-rocketseat-pulumi",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true",
    },
});


// Export the name of the bucket
export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryURL = ecr.repositoryUrl;
