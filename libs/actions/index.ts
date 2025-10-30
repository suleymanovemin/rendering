"use server"


export const createPost = async (prevState: any,formData:FormData) =>{

    const title = formData.get('title')
    const description = formData.get('description')

    const res = await fetch("https://dummyjson.com/posts/add",{
        method:"POST",
        body:JSON.stringify({
            title,
            description
        })
    })

    const json = await res.json()
    return json
}