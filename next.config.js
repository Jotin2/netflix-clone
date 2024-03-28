module.exports = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://netflix-clone-sand-mu.vercel.app/:path*",
            },
        ];
    },
};
