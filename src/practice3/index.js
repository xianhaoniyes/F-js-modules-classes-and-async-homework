
//code in a aync/await style
export const getPoetry = async () => {
    try{
    const response = await (await fetch('https://v1.jinrishici.com/all.json')).json();
    const {"origin":origin, "author":author, "content":content} = response;
    return [origin,author,content];

    }catch(error){
        console.log(error);
    }  
}

//code in the origin promise style
// export const getPoetry = () => {
//     return  fetch('https://v1.jinrishici.com/all.json')
//         .then(response => response.json())
//         .then(data => {
//             const  {"origin":origin, "author":author, "content":content} =  data;
//             return [origin, author, content];
//         }).catch(err => err);
// }