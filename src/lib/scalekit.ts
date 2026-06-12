import { Scalekit } from '@scalekit-sdk/node';

// Initialize the Scalekit client lazily using a Proxy to prevent build-time invalid URL crashes
let _scalekit: Scalekit | null = null;

export const scalekit = new Proxy({} as Scalekit, {
  get(target, prop, receiver) {
    if (!_scalekit) {
      const url = process.env.SCALEKIT_ENVIRONMENT_URL;
      const isPlaceholder = !url || url.includes("add your");
      const clientUrl = isPlaceholder ? "https://placeholder-env.scalekit.com" : url!;
      const clientId = process.env.SCALEKIT_CLIENT_ID || "placeholder-id";
      const clientSecret = process.env.SCALEKIT_CLIENT_SECRET || "placeholder-secret";

      _scalekit = new Scalekit(clientUrl, clientId, clientSecret);
    }
    return Reflect.get(_scalekit, prop, receiver);
  }
});