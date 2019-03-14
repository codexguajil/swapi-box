import React from 'react';

export const FilmScroller = ({films}) => {

    let randomNum = Math.floor(Math.random() * films.length)

    console.log(films)

   return (
       <div>
           <h1>welcome</h1>
           {films.length > 0 &&
                <h3>
                    {films[randomNum].opening_crawl}
                </h3>
           }
       </div>

   )

}

