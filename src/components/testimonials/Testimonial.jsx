import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-green-600'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/506/506185.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"This ecommerce app has revolutionized my shopping experience. The app's interface is sleek and intuitive, and the product variety is outstanding. With its efficient checkout and prompt delivery, I couldn't be happier. I highly recommend this app for a top-notch shopping journey!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sashikant Rout</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Web Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">"I can't get enough of this ecommerce app! It's a game-changer with its user-friendly design and an extensive product selection. Checkout is a breeze, and the lightning-fast delivery always wows me. I'm hooked and would recommend this app to anyone looking for a superior shopping experience!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Anuradha</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">House wife</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/11498/11498793.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"I absolutely love this ecommerce app! It's incredibly user-friendly, and the wide range of products is impressive. The seamless checkout process makes shopping a breeze, and the quick delivery always exceeds my expectations. I'm a loyal customer and highly recommend this app to everyone!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Mahima Upadhyay</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Bank Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial