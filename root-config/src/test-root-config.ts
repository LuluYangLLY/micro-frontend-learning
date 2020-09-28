import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@test/micro-app-react",
  app: () => System.import("@test/micro-app-react"),
  activeWhen: ["/micro-app-react"]
});

start({
  urlRerouteOnly: true,
});
