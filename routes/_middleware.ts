import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  const resp = await ctx.next();
  if (req.url.endsWith(".mp3") && !resp.headers.get("cache-control")) {
    resp.headers.set("cache-control", "public, max-age=31536000, immutable");
  }
  return resp;
}
