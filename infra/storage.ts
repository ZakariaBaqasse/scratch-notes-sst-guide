export const bucket = new sst.aws.Bucket("Uploads", {
  cors: {
    allowMethods: ["GET"],
  },
});

export const table = new sst.aws.Dynamo("notes", {
  fields: {
    userId: "string",
    noteId: "string",
  },
  primaryIndex: { hashKey: "userId", rangeKey: "noteId" },
});

export const secret = new sst.Secret("StripeSecretKey");
