const axios = require('axios');


//question 6
(
    async function(){
        const post = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('post = ', post.data)

    })
();

axios.interceptors.request.use(
   (config) =>{
     config.headers['Content-Type'] = 'application/json';
     return config;
   }

);

(async function(){
    try{
        const newPost = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: 'Ebenezer is relearning axios',
            userId: 1,
            body: "Ebenezer has forgotten about axios. This is a good chance to relearn it!"
        },
        {
            headers: {
                'Content-Type': "application/json"
            }
        }
        )
    }
    catch(e){
        console.error(e)
    }
})();