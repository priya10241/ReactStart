import React from 'react'

function Card({heading,animalName="Name"}){
    return (
        <>
        <h1 className="bg-yellow-200 inline p-3 rounded-2xl">{heading}</h1>
        <br/>
        <div className="flex justify-center bg-blue-800 p-5">
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Cool-Wild-Animal-Wallpaper-For-Desktop.jpg" height="350px" width="400px"/>
        <div>
        <h2 className="text-white text-5xl">{animalName}</h2>
        <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et tempora aut ipsa repellendus quae voluptatum repudiandae consequatur, debitis porro totam enim pariatur dolor quisquam unde. Maxime ea optio nemo dolore.
        Unde debitis officia quasi aspernatur eveniet, dolores praesentium pariatur inventore quisquam recusandae sunt neque est laborum! Vel ducimus quo ea molestias consequuntur. Nobis alias aliquid sunt odio minima ullam voluptas?
        Repudiandae reiciendis saepe optio amet molestias ipsum incidunt totam, neque consectetur. Culpa, cumque deserunt. Est aut eaque ipsam, fugit nisi at voluptatem atque voluptates nemo saepe non totam repellat libero.
        Quis necessitatibus culpa non vero libero deserunt debitis nostrum magnam aliquam cupiditate aperiam impedit quidem pariatur, quos quae? Sunt nemo aut molestias, iste reiciendis iure culpa magni soluta vitae animi.
        Laboriosam accusantium, facilis aliquid nisi eius aliquam corporis totam error laudantium tempore magni enim doloribus hic quis ratione, porro dolore corrupti inventore similique sint est! Quia ipsum repudiandae ratione laborum?
        Nobis ullam saepe magni dolores tenetur molestiae, sapiente harum, officiis unde corrupti totam ratione! Aut optio eaque, ad tenetur laborum fuga vero ex voluptatem vel quae tempore libero expedita totam!</p>
        </div>
        </div>
        </>
    ) 
}

export default Card