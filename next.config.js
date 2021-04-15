module.exports = {
    async redirects() {
        return [
            {
                source: "/country",
                destination: "/",
                permanent: true,
            },
        ]
    },
    env: {
        api: "https://disease.sh/v3/covid-19/",
    },
    images: {
        domains: ["disease.sh"]
    },
}
