require("dotenv").config();
process.argv.forEach((value, index) => console.log(index + " => " + value));

module.exports =  {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
      //  cnxStr: 'mongodb+srv://Fede:Uyj3l0To5lyUczFi@cluster0.zyvdl.mongodb.net/ecommerce',
      cnxStr: 'mongodb://localhost:27017/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 4000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "basefirebase-f18bf",
        "private_key_id": "40fcd5ca8734175a80e214b42f9e70394426cac5",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDR7EnL2eQpREGa\nBwRGDrZ5Xfb7b8iXQ8l1v7qxj37J6dGSNV8PfL/iN9ts5gzZ9rp5P6gRe/ufpSuj\nS0j1CAaZtaaGChKGT/KVm2WojTm2XcQe7T6dRnKx8njUd0hfrN/6Xv6QcuthH7XK\nHW2BZlPMG0FiY4QFLMGYZ6QV8mnm/ESnXFREHaBQBad6krw2eCudURsbcW2+KL4y\n6qlJxckVue5mWdR9LyLtJa/Y3DgdgZWgGjGX5ewpQtgDGnmMp9ZlHidfl3ZBRuC5\nmXBaIFpQ5LNWAzqeThL4yIIEJCjbs3Mzdm1cLlCouT3ELLHUvpyLBbOS3kM8Weny\n/R78XtgLAgMBAAECggEAUWKKOb3/9v+/bzfJMGAD3onPdyufWQWu1Te/6Zb4UM+V\nsFmAwUBcJBgDufR2hwpgwSEsx5qJsxsWD/jgEB9Mb8s9BDpjdC8KnXXhs7cM6Obx\nYgwYemEVlmeq8LROGsmrDCZICziCiOUCVZmTGtfRJRBsCPkL9fWkGLIVq2yQIjx2\n8PrHQCHKqhciYANXk0FN3oKtfLMS+kNBtW8Q0925UqHO18Uqjc/UV5AjuZwXu1A9\nLPmiLqk+IkVX8Jp7ESi7gWjTrx/WFDSy1t1/qRFa8bXfCZ3KlBI5xSI21djz6s8+\nD7tR6/C4K98vLBshu6Mnt2oZZvndn35E31MZcBE2AQKBgQD9BHzcWDH6j0tZOw7g\nMyzoFnP7H5RZhag3BGDXyNdQ0aXMEE8UwrI1K3ukuMOKbvmTNqpdzRwtkLKwTzoD\nkGPbfK8fy5bCWGMMNs59gjG90ClDJzPQq04ouha/5qiau8sVxcPMM3R2wlP88npN\n4YS6hjJpvEH8IckXr8NHdH5jhQKBgQDUZcHiXu7DS6v+YKqiZQ710268r3Hg0mTX\nNxMa/EVjye5ldroe+Rf9ewJu+g2Kn/Exg1KoLp9g+osOAq8DaOHWX1zC+/J2xVC8\niROWkNQh8/0K8t9Uz+NnG5dcT57sO5qSo0kuoKOQGb9B/rtHWQ+cwPAi+eHfrKma\ngi2ptyo6TwKBgQCG61S1nuYPyUeRrndxQHjKzeZM2/scfbREmjYV+wguFY1Gss+o\nr2WeCrDlFo1XDXRSdw0D9fL3rThL4gN6kQ1epi8wUjzzJ3Sxt6wGq11g7VaDc60i\nsaZ8+zZUYGg6ErfpxUpyYmHRTjDBKn/jdcV0PUk2rue0zkNQOS51tP4MjQKBgCTp\n4n5zPU/X0PaO2lkK80SqEG7elw4Zwsjcm4dvHKgxKiucLNDBPfgh7tRWxQ+4qHSQ\nfEcagzyZjp1Kvhv7mHRncnm4y/T0agm6URsz5IpaGzpR55qX3s/GrdGvTNGFsmGV\n21wtMwASWXkgym+l/N6jcZjCkQ0MtxVRVppOaRplAoGBALlFWRtTL1oafxRu4aW3\nxJjCvdrElw/vzpsxmCLWyvpelKvcJ6N2DP6D97K2OHww+u8FqeuyiakLSbOtOpSN\nBKDjU7nj4mIJYp+gw1uE/upSRmIWzqgb7AJthtemhvPAWD3UfoTf5lFIlvXQMtIG\nYHRZce2j24OGgkYSKdauNo3J\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-a61dq@basefirebase-f18bf.iam.gserviceaccount.com",
        "client_id": "110904089528577573635",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a61dq%40basefirebase-f18bf.iam.gserviceaccount.com"
    },
    IS_CLUSTER: process.argv[2] === "CLUSTER" ? true : false,
    PORT: parseInt(process.argv[3]) || process.env.PORT || 8080,
}
  


