/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "IdentityPool": {
      "id": string
      "type": "sst.aws.CognitoIdentityPool"
    }
    "StripeSecretKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Uploads": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "UserPool": {
      "id": string
      "type": "sst.aws.CognitoUserPool"
    }
    "UserPoolClient": {
      "id": string
      "secret": string
      "type": "sst.aws.CognitoUserPoolClient"
    }
    "api": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "notes": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
  }
}
