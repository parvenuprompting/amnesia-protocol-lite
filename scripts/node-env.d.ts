/**
 * Minimale typen voor de twee Node-API's die `measure-hints.ts` gebruikt.
 *
 * Het project heeft geen `@types/node` (de app zelf raakt geen Node-API's aan; alleen Vite en
 * Playwright draaien in Node). In plaats van een devDependency toe te voegen — en daarmee
 * `package.json` en de lockfile te wijzigen voor één meetscript — staat hier alleen wat nodig is.
 */
declare module "node:fs" {
  export function readFileSync(path: string, encoding: "utf8"): string;
}

declare const process: {
  readonly argv: readonly string[];
  exit(code?: number): never;
};
