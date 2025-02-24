export default function GlobalSearch(){
    return(
        <div  className="max-w-[800px] w-full">
        {/* On submission, the input value will be appended to 
            the URL, e.g. /search?query=abc */}
        <input name="query"  placeholder="Search" className="border border-2 text-sm px-3 py-[.3rem] w-full rounded-xl"/>
    </div>
    )
}