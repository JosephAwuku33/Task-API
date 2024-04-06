export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Tasks API",
            version: "1.0.0",
            description: "This is a simple CRUD api that seeks to create, update and delete tasks on a daily, It was built with Express, Node.js and MongoDB and documented with Swagger",
            contact: {
                name: "Joseph Amoako Awuku",
                email: "josephamoakoawuku@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:5000/",
            },
        ],
    },
    apis: ["./dist/v1/routes/*.js"],
};
