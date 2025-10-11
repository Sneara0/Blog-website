import Link from "next/link";

export default  function Hero(){
    return(
        <section className="bg-gray-600 py-20">
             <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to My Blog1
                </h1>
                <p className="text-gray-900 mb-6">
                    Read the latest articles, tutorials,and tips on web development

                </p>
                <a href='/blogs' className="bg-blue-950 text-white px-6 py-3 rounded-lg hover:bg-green-950 transition">Explore Blogs</a>
 
             </div>

        </section>
    )
}