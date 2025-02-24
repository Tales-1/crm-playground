import Form from "next/Form"

export default function GlobalSearch(){
    return(
        <Form action="/search" className="max-w-[800px] w-full">
        {/* On submission, the input value will be appended to 
            the URL, e.g. /search?query=abc */}
        <input name="query"  placeholder="Search" className="px-3 py-[.3rem] w-full rounded-lg"/>
    </Form>
    )
}