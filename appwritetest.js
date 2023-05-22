import { Client,Databases } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('646b30a210d4e8d4f803');

    const databases = new Databases(client);
    const promise = databases.createDocument('646b39c833c4d8b30ee9', '646b39f10cd9ff9c236f', "documentid123",{title: "I am title" , desc: "I am desc"});

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
    
