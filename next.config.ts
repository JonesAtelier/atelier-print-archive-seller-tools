import type { NextConfig } from "next";

const [githubOwner, githubRepository] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const githubBasePath =
  githubRepository && githubRepository !== `${githubOwner}.github.io`
    ? `/${githubRepository}`
    : "";

const nextConfig: NextConfig = {
  // Produces a fully static `out/` directory that can be deployed directly
  // through GitHub Pages. The same source is also compatible with Sites.
  output: "export",
  trailingSlash: true,
  basePath: githubBasePath,
  assetPrefix: githubBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: githubBasePath,
  },
};

export default nextConfig;
