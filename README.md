# movie-api-milestone-project

The aim of this web application is too allow users to search for  
Movie's they have heard about or a movie that they would like to view  
And get information on that movie such as metascore, release date and   
plot of the film. They can also use the goggle maps section at the   
bottom to find cinemas near them. 

## UX

A person using this app would want to find out information about    
a film they have heard about or been recommended to, to see if it     
is something they would want to consume themselves. To do this    
I placed a search bar in a prominent position with instructions    
oh how to search for a film title, once the search button is     
clicked, a list of matching films with basic information is    
displayed in an easy to read format, this way the user can     
choose the correct film they are looking for. When the user has    
found the correct film they can then click on the film to retrieve    
more information on the movie such as the plot and actors in the film.   

The Person using the app may also wish to go view on of the films they    
are searching for at a cinema, to assist with this I added functionality   
That allows the user to search for nearby cinemas using goggle maps.  
I followed the same search bar layout as above for the search functionality  
As consistency in design is more pleasing to look at and creates better   
user experience. They can search by using the name of the place they want  
To search around, once the search button is clicked the map will show the  
Location of cinemas nearby.  

In regards to the design of the application I looked at different colour  
Schemes and decided on a gold/ black theme, this was because I think it  
Gives a more premium look to the app, I also decided not to include too  
Much text as I didn't want the page to look to cluttered and cause the user  
To read through too much text to find out how to use the app. To help with  
This I created a basic [WIREFRAME](https://github.com/cball1990/movie-api-milestone-project/blob/master/wireframe.jpg)
to make sure my choices where visually   
appealing. As you can see from the wireframe, the maps section was not  
Included as this was a feature I decided to add later in the development.  
I made other changes such as when the logo is clicked it clears the app back  
To its original state when the app is first opened, and I moved the location  
Of the search bar because it was hard to see and it had to be very short to  
Fit in the top bar of the page, this caused the problem of not being able  
To read what was entered.  

## Features  

#### Existing Features  

The first feature that I added was the ability to search for movie title.  
You do this by entering a movie name into the search bar and clicking the  
search button, once this is done all the movies that match the search  
are listed with basic information.  

If the user wants to find out more information on the film they can click  
on the more info button to retrieve more information on the film such as  
the plot of the film.  

The next feature is the ability to search for nearby cinemas. The user can  
do this by entering the place they want to search for, once the search   
button is clicked it will then show the locations of the cinemas nearby.  

#### Features Left to Implement  

Features that I think could be added in the future are:  
+ One  
    - The ability to add films too a watch list so users can use this to  
    keep a record of films they like to see and view the information on   
    each film.  
+ Two  
    - The ability to use the map to get directions to the chosen cinema  
+ Three  
    - Each result on the map would link to the website of the cinema so  
    users could look up viewing times and availability of films.

## Technologies Used  

+ [Jquery](https://jquery.com/)
    - Used to simplify making calls to the API server and DOM minipulation.  
+ [Bootstrap](https://getbootstrap.com/)
    - Used to simplify making the app responsive and other small bits of css
    such as floats and border rounding.  
+ [Google Fonts](https://fonts.google.com/)
    - Used to find fonts to use for the text on the webpage.  
+ [Javascript](https://www.javascript.com/)
    - Used to make calls to the api server and Dom minipulation.  
+ [HTML](https://html.com/)
    - Used to create content on the webpage.
+ [SASS/SCSS](https://sass-lang.com/)
    - Used to add design to the webpage and make css more readable
    and avoid rewriting code useing mixins and variables.
+ [Font Awesome](https://fontawesome.com/)
    - Used to get the search button icon.  
+ [OMDB API](www.omdbapi.com/)
    - The API used to get the film information when search for.  
+ [Google Maps/Places API](https://developers.google.com/maps/documentation/)
    - The API used to get location of cinemas.  

## Testing  

These are the details of the steps i went through while testing my code:  

+ Movie Search
    - When a search is performed and the search bar is empty an error  
    message appears on screen.    
    - Searched for different movie titles and made sure all returned  
    results are relateded to the search term.  
    - Searched fior movies with slight spelling mistakes, all returned  
    results still related to search term.  
    - Search for a made up movie or with major spelling mistakes,  
    tried to add an error message on screen but even tho I have  
    had alot of help to try get this to work, I haven't managed  
    to impliment this, This may be an API issue.
+ More info button search  
    - When the more info button is clicked I checked to see if  
    the returned result was the information related to the film.  
+ Cinema search  
    - Done searches by town name and then matched the returned  
    results to a google maps search on the google website.
    - I tryied to search by postcode or a phone number and I added  
    an error message to the screen for the resulting error.
    - If a search returns no results I added an error message to  
    the screen to prompt the user to try another town.  
    - I mispelt a place name and if the search term in not a correct  
    town name an error message  
    appears on screen to inform the user of this.  

## Deployment  

To deploy this app I used GitHub pages. I used this because I had  
already used github for version control. The difference between  
the development version and the deployment version is that  
the deployment version has cleaner code and has useless code  
removed. 

To run the app, Run the index.html file.  

## Credits 

#### Content  

+ OMDB API - The API used to get all the movie data.  
+ Google Maps/Places API - Used for the map section.  

#### Media  

+ Page Logo - Taken from [https://www.agefotostock.com](https://www.agefotostock.com) and edited to be the right colour.  

 

