module.exports = {
    devServer: {
        port: 3000,
        proxy: "http://localhost:8080/api/",
        allowedHosts: [
            'localhost:8080'
        ]
    },
    transpileDependencies: [
        'vuetify'
    ]
}
