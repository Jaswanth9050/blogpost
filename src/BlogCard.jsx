import React from 'react'
import './index.css'
const BlogCard = () => {
  return (
    <div>
        <h1>Blog Post</h1>
        <div className='body'>
        {/*  */}
        <div className='blog-card item1'>
            <img src="https://imageio.forbes.com/specials-images/imageserve/6771d896cfc7f3c894de3e3f/3d-robotic-render-touching-2025-on-circuit-diagram-start-artificial-intelligence/960x0.jpg?height=355&width=711&fit=bounds" alt="" />
            <div className='blog-body'>
                <p className='tip1'>Technology</p>
                <h3 className='bolg-title'>What's New In 2025 Tech</h3>
                <p className='blog-des'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quas assumenda eos aliquam non dolorum, facere officiis ea provident beatae, ratione animi amet dolore repellendus reiciendis perferendis nostrum cum eveniet!</p>
                <h4 className='blog-autor'>Jaswanth</h4>
                <p className='blog-links'>
                    <a href="https://react.dev/" className='blog-link'>React</a> 
                    <a href="https://unsplash.com/s/photos/technology" className='blog-link'> Tech</a> 
                    <a href="https://react.dev/" className='blog-link'> React</a>
                </p>
            </div>
        </div>
        <div className='blog-card item2'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKLTHE4a7URJS4AJ4TMlTa1KC3GWsiQvKNQ&s" alt="" />
            <div className='blog-body'>
            <p className='tip2'>Food</p>
                <h3 className='bolg-title'>Delicious Food</h3>
                <p className='blog-des'>Nature encompasses the physical world, including all living and non-living things, and the natural processes that shape it, from the smallest microbe to the largest galaxy.</p>
                <h4 className='blog-autor'>Jaswanth</h4>
                <p className='blog-links'>
                    <a href="https://react.dev/" className='blog-link'>React</a> 
                    <a href="https://en.wikipedia.org/wiki/Food" className='blog-link'> Food</a> 
                    <a href="https://react.dev/" className='blog-link'> React</a>
                </p>
            </div>
        </div>
        <div className='blog-card item3'>
            <img src="https://magazine.lifology.com/wp-content/uploads/2022/08/Automobile-Industry.jpeg" alt="" />
            <div className='blog-body'>
            <p className='tip3'>Automobile</p>
                <h3 className='bolg-title'>The Iron Pulse</h3>
                <p className='blog-des'>The Iron Pulse is not just a car—it's a symphony of steel and speed. With a heart forged from cutting-edge engineering and a design that echoes the rhythm of raw power.</p>
                <h4 className='blog-autor'>Jaswanth</h4>
                <p className='blog-links'>
                    <a href="https://react.dev/" className='blog-link'>React</a> 
                    <a href="https://www.nature.com/" className='blog-link'> Nature</a> 
                    <a href="https://www.britannica.com/technology/automobile" className='blog-link'> Automobiles</a>
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogCard