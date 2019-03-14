import React from 'react';

export const FilmScroller = ({films}) => {

    let randomNum = Math.floor(Math.random() * films.length)

    console.log(films)

   return (
       <div id="film">
            <div id="crawl">
            <h1>welcome</h1>
            {films.length > 0 &&
                    <h3>
                        {films[randomNum].opening_crawl}
                        <p>{films[randomNum].title}</p>
                        <p>{films[randomNum].release_date}</p>
                    </h3>
            }
        </div>
       </div>
   )

}

