/** @type {import('next').NextConfig} */
export const prefix =
    process.env.NODE_ENV === "production"
        ? "https://qwer71714.github.io/technical_blog/"
        : "";
