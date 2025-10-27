// Type declarations for importing CSS/SCSS files
// - Allow side-effect imports like `import './globals.css'` in Next.js
// - Provide a typed default export for CSS modules (*.module.css / *.module.scss)

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Allow importing plain/global CSS/SCSS files as side-effects
declare module "*.css";
declare module "*.scss";
