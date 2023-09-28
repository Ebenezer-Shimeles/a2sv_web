import BlogHeader from "@/components/BlogHeader"
import Head from "next/head"
import Link from "next/link"

type HomePageProps = {
    blogs: any []
}
const HomePage = (props: HomePageProps) =>{
  console.log(props)
  return <div className="h-screen w-screen flex flex-col justify-evenly items-center gap-3 text-center overflow-y-scroll">
           <Head>
              <title>Eb's  Blog</title>
           </Head>
           <header className="h-1/10">
            {/* <span key='date' className="fixed top-2 right-5 mb-10">{ (new Date()).toString()} </span> */}
            <h1 className="text-4xl font-bold text-blue-400 underline">Welcome to EB's Blogs</h1>
           </header>
           <div className="h-1/3 w-3/4">
                <div id='blogs' className="text-justify grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {props.blogs.map(blog => <BlogHeader id={blog.id} title={blog.title} excerpt={blog.body} />)}

                </div>
           </div>
           <Link href={"/write"}>
            <span className="
                flex flex-col justify-center
                shadow hover:shadow-black hover:shadow-2xl  text-4xl avatar bg-green-600 text-white w-16 h-16 rounded-full 
                fixed bottom-7 right-6 ">
                <span> +</span>
            </span>
           </Link>
         </div>
}
export default HomePage



export const getServerSideProps = async (ctx: any)=>{
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    try{
        const data = await (await fetch(URL)).json()

        return {
            props: {blogs: data} 
        }
    }catch(e){
        return {props: {blogs: []}}
    }
  
}