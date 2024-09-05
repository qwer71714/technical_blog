/** @type {import('next').NextConfig} */
export const prefix =
    process.env.NODE_ENV === "production"
        ? "https://qwer71714.github.io/technical_blog/"
        : "";

// Next.js 설정
const nextConfig = {
    // 외부 이미지 도메인 설정
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // 모든 HTTPS 프로토콜과 모든 도메인 허용
            },
            {
                protocol: 'http',
                hostname: '**', // 모든 HTTP 프로토콜과 모든 도메인 허용
            }
        ],
    },

    // basePath 설정
    basePath: prefix, // prefix 설정에 따라 basePath 사용
    assetPrefix: prefix, // 정적 파일을 위한 assetPrefix도 설정

    // 기타 Next.js 옵션을 여기에 추가할 수 있습니다.
};

export default nextConfig;
