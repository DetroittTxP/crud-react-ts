const swgauto = require("swagger-autogen");

const outputFile = './swaggerDOCS.json'
const endpointsFiles = ['./server']

swgauto(outputFile, endpointsFiles)