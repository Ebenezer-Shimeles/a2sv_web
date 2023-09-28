 
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';

 const   BlogPage = () =>{
    const router = useRouter();
    const {id} = router.query;
    const [blogTitle, setBlogTitle] = useState<string>("");
    const [blogBody, setBlogBody] = useState<string>("");
    const getBlogData = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(data => data.json())
        .then( (data: any) =>{
            console.log(data)
            setBlogTitle(data.title);
            setBlogBody(data.body)
        })
    }
    useEffect(getBlogData, [id])
    return (
        <>
          <Head>
            <title>Blog: {blogTitle}</title>
          </Head>
          <div className='h-screen w-screen flex flex-col justify-start mt-10 text-center gap-10'>
            <h1 className='text-5xl font-bold underline'>
                {blogTitle} 
               
            </h1>
            <div className='self-center text-justify w-3/5 h-3/4 border-1 bg-slate-100 p-10 first-letter:capitalize first-letter:text-3xl 
               first-letter:font-bold
               rounded-2xl
            '>
                {blogBody}
                
            </div>
            <Link href={`/edit/${id}`}><button className='text-2xl underline text-blue-500 '>Edit</button></Link>
          </div>
        </>
    )
}
export default BlogPage