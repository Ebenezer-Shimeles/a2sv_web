import Link from "next/link";

export type BlogHeaderProps = {
    id: string;
    title: string;
    excerpt: string;

}



export default (props: BlogHeaderProps)=>{
    return (
        <Link href={`/blog/${props.id}`}> 
            <div className="border-blue-200 rounded-xl border-2  p-6 w-auto h-auto flex flex-col hover:border-blue-600">
            <span className="text-xl font-bold text-center">{props.title}</span>
            <span className="text-justify text-sm">{props.excerpt}</span>
            </div>
        </Link>
    )
}