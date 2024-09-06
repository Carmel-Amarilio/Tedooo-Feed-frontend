declare module "*.svg" {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export default content;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
