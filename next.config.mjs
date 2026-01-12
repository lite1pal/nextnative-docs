import nextra from "nextra";

const nextConfig = {
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
  basePath: "/docs",
  assetPrefix: "/docs/"
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
