export default function BlogCard({title,excerpt}){
    return(
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
        <h1 className="text-2xl font-bold mb-2">{title}

        </h1>
        <p className="text-gray-700">{excerpt}</p>

        </div>
    )
}
