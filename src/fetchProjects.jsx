import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
    //why i m not able to add access token and space using env file
    //space:import.meta.env.VITE_SPACE_KEY,
    environment: 'master',
    //accessToken:import.meta.env.VITE_API_KEY,
     space: 'qvgpyzf81jt0',
     accessToken:'qtdtBvJW-p9gLUpujAXm2CQ7dis-gE7JPj5YOxoJxsk',
})
// client.getEntries({ content_type: "projects" })
//     .then((response) => console.log(response))

export const useFetchProjects = () => { 
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])
    
    const getData = async () => { 
        try {
            const response = await client.getEntries({ content_type: "projects" })
            //below  line code i cant see in console  
            console.log(response)
            const projects = response.items.map((item) => { 
                const { image, title, url } = item.fields
                const img=image?.fields?.file?.url
                const id = item.sys.id
                const URL=url?.content?.[0]?.content?.[0]?.value
                return {title,URL,img,id}
            })
            setProjects(projects)
            setLoading(false)
         
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        
    }
    useEffect(() => {
    getData()
    }, [])
    return {loading,projects}
}



