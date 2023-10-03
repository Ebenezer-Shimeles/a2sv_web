
export type DialogProps = {
    show: boolean;
    children: React.ReactNode
    onClose: ()=>void;
};

export default (props: DialogProps)=>{
    return ( 
    <>
        {
     
        (
        <div className={"z-20 h-screen w-screen bg-black/50 flex justify-center items-center " + props.show ? '': '   hidden'}>
            <div className="bg-white p-10 w-1/2 h-1/2 rounded-2xl flex flex-col justify-start items-end">
                <button className="text-3xl hover:shadow-2xl hover:bg-black/5" onClick={props.onClose}>X</button>
                <div className="self-center mt-14 w-1/2">
                   {props.children}
                </div>
            </div>    
        </div>
        )
        
        }
    </>
    )
}