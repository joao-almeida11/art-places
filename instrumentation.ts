import { registerOTel } from "@vercel/otel";

// # For further docs about instrumentation: https://vercel.com/docs/tracing/instrumentation

export function register() {
  registerOTel({
    serviceName: "art-places",
    // instrumentationConfig: {
    //   fetch: {
    //     // This URLs will have the tracing context propagated to them.
    //     propagateContextUrls: [
    //       "your-service-domain.com",
    //       "your-database-domain.com",
    //     ],
    //     // This URLs will not have the tracing context propagated to them.
    //     dontPropagateContextUrls: ["some-third-party-service-domain.com"],
    //     // This URLs will be ignored and will not be traced.
    //     ignoreUrls: ["my-internal-private-tool.com"],
    //   },
    // },
  });
}
// NOTE: You can replace `your-project-name` with the actual name of your project
