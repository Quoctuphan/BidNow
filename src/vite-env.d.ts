declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const content: string;
  export default content;
}
declare module "*.jpg" {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_GOOGLE_API_KEY: string
  readonly VITE_OPENAI_API_KEY: string
}
declare module "*.jpeg" {
  const content: string;
  export default content;
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}