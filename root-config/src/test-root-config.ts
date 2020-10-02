import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/welcome"],
});

registerApplication({
  name: "@test/micro-app-react-crat",
  app: () => System.import("@test/micro-app-react-cra"),
  activeWhen: ["/micro-app-react-cra"]
});

start({
  urlRerouteOnly: true,
});
