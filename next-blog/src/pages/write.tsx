import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"



export default ()=>{
    const router  = useRouter()
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleForm: React.FormEventHandler = (e)=>{
        e.preventDefault();
        console.log('submitting form cancelled')
        fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            body: JSON.stringify({
                title,
                body: content
            })
        })
        .then(data =>{
            return data.json();
        })
        .then(data =>{
            console.log(data)
        })
        .then(()=>router.push("/home"))
        .catch(e=>{
            console.error(e)
        })
        

    }

    return (
        <div className="h-screen w-screen">
            <Head>
                <title>Write your own blog</title>
            </Head>
            <form className="w-full h-full flex flex-col justify-around items-center gap-10" onSubmit={handleForm}>
                <h1 className="text-3xl font-bold" >Write Your Own Thoughts</h1>
                <div className="flex flex-col justify-evenly border-2 flex-1 w-2/4 items-center p-10 rounded-lg  shadow-md h-3/4">
                    <span className="w-full flex justify-around gap-4">
                        <label>Title:</label>  
                        <input onChange={e=>setTitle(e.target.value)}
                        className=" rounded-lg border-2 focus:border-4 flex-1" type='text' placeholder="Title of the blog"/>
                    </span>
                    <span className="w-full flex justify-around gap-4">
                        <label>Content:</label>
                        <textarea  onChange={e=>setContent(e.target.value)}
                        className="border-2 flex-1 rounded-lg"  placeholder="Content of the blog" rows={10}/>
                    </span>
                </div>
                <button className="shadow bg-green-400 hover:bg-green-500  rounded-xl p-14 pt-4 pb-4 ">Publish!</button>
            </form>
        </div>
    )
}