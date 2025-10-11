import Link from 'next/link'

const blogs =[
    {
        id:1,
        title:"Understanding Next.js Routing",
        excerpt:"Learn how file-based routing works in next.js with examples"
    },
    {
        id:2,
        title:"Generating Static Sites with Next.js",
        excerpt:"A guide to static site generating using next.js and its features"

    },
    {
        id:3,
        title:"Deploying Next.js Applications",
        excerpt:"Best practices and  platforms for deploying next.js apps"
    }
];

export default function BlogPage(){
    return(
        <section className=' max-w-7xl mx-auto px-4 py-10  '>
            <h1 className=' text-3xl font-bold mx-auto  mb-10'>
                      All Blog posts
            </h1>

            <div className=' grid gap-6  md:grid-cols-3' >
                {
                    blogs.map((blog)=>
                    (
                        <div key={blog.id} className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl'>
                         <h2 className='text-2xl font-semibold mb-2'>{blog.title}</h2> 
                         <p className='text-gray-800 mb-4'>{blog.excerpt}</p> 
                         <Link href={'blogs/${blogs.id}'} className='text-blue-400 font-semibold hover:underline'>Read More</Link> 
                            </div>
                    ))}

            </div>

        </section>
    )
}

