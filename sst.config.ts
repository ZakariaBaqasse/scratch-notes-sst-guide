/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "scratch-notes",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers:{
        aws:{
          profile:"sst-guide-profile"
        }
      }
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
  },
});
