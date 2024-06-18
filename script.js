const API_KEY = '3d7a17012bef44deac1453d0f9b74f19'

const STATE = {
    route: 'landingPage'
}
/* ---------- CHECK/UPDATE STATE ---------- */

const setSTATE = (newItem, currentState = STATE) => {
    const newState = Object.assign({}, currentState, newItem);
    Object.assign(currentState, newState);
    render();
}
/* ---------- TEMPLATE HELPERS ---------- */

const createJokeData = (response) => {
    const joke = response.joke;

    return (`
    <div class="joke-container">
        ${joke}
    </div>
    `)
}

const createCatData = (response) => {
    const cat = response[0].url;

    return (`
    <div class="cat-container">
        <img src="${cat}">
    </div>
    `)
}

const createWeatherData = (response) => {
    console.log('createWeatherData: ', response);
    const weatherData = response.data;

    let dayName = new Date();
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let html = "";
    for (let i = 0; i < 6; ++i) {
        html += `
        <div class="box${i}">
            <p id="day${i + 1}"></p>
            <p>${weatherData[i].datetime.slice(5, 12)}</p>
            <img src="https://cdn.weatherbit.io/static/img/icons/${weatherData[i].weather.icon}.png">
            <p>${weatherData[i].max_temp + "/" + weatherData[i].min_temp + "°F"}</p>
            <p>${weatherData[i].weather.description}</p>
        </div>
        `
    }
    $('.weather-result').append(html);
    $('#day1').html(weekday[(dayName.getDay())]);
    $('#day2').html(weekday[(dayName.getDay() + 1) % 7]);
    $('#day3').html(weekday[(dayName.getDay() + 2) % 7]);
    $('#day4').html(weekday[(dayName.getDay() + 3) % 7]);
    $('#day5').html(weekday[(dayName.getDay() + 4) % 7]);
    $('#day6').html(weekday[(dayName.getDay() + 5) % 7]);


}
/* ---------- TEMPLATES ---------- */

const landingPage = (`
<div class="home-page">
    <div class="welcome-title">
        <p>Welcome to my page!</p>
    </div>
    <div class="images">
        <div class="cat-image">
            <a href="#" id="cat-link"><img src="cat-sample.png"></a>
        </div>
        <div class="joke-image">
            <a href="#" id="joke-link"><img src="joke-sample.png"></a>
        </div>
        <div class="weather-image">
            <a href="#" id="weather-link"><img src="weather-sample.png"></a>
        </div>
    </div>
   
</div>
`)

const aboutPage = (`
<div class="about-page">
    <div class="about-title">
        <p>ABOUT ME</p>
    </div>
    <div class="about-box">
        <p>Welcome! My name is Vimin and I am an aspiring computer programmer.</p>

        <p>I started my programming journey by teaching myself Python. As I grew more confident in my abilities, I expanded my knowledge to web develpment. 
        I dove into HTML, CSS, and JavaScript allowing me to build dynamic and interactive websites.</p>

        <p>My self-taught journey has been challenging but incredibly rewarding.
        It has equipped me with a solid foundation in both backend and frontend development, and I am always eager to learn more and take on new challenges.</p>

        <p>Thank you for visiting my website. I look forward to sharing my projects and progress with you as I continue to grow as a programmer.</p>

    </div>
</div>
`)

const catsPage = (`
<div class="cats-page">
    <div class="cat-title"><p>PURRR-FECT PICTURES</p></div>
    <div class="cat-result">
        <img src="sleeping-cat.png">
        <p>This kitty is sleeping. Click the button below for more cats!</p>
    </div>
    <form class="cat-form">
        <div class="cat-button">
            <button class="button" type="submit" id="catButton">Click for Cat!</button>
        </div>
    </form>
</div>
`)

const jokesPage = (`
<div class="jokes-page">
    <div class="jokes-title"><p>Welcome, let's have a laugh together!</p></div>
    <div class="joke-result"></div>
    <form class="joke-form">
        <div class="joke-button">
            <button class="button" type="submit" id="jokeButton">Press for Joke!</button>
        <div>
    </form>
</div>
`)

const weatherPage = (`
<div class="weather-page">
    <div class="weather-title">6 DAY WEATHER FORECAST</div>
    <form class="weather-form">
        <input class="city" id="cityText" type="text" placeholder="enter city" required>
        <button class="weather-button" type="submit" id="weatherButton">Search Weather</button>     
    </form>
    <div class="weather-result"></div>
</div>
`)

const contactPage = (`
<div class="contact-page">
    <div class="contact-title">
        <p>SAY HELLO!</p>
    </div>
    <div class="contact-message">
        <p>Feel free to connect with me if you have any questions, suggestions, or opportunities for collaboration.</p>
    </div>
    <div class = "contact-info">
        <div class="contact-data">
            <img src="email-logo.png">
            <a href="mailto:vimin.nanavati@gmail.com">vimin.nanavati@gmail.com</a>
        </div>
        <div class="contact-data">
            <img src="github-logo.png">
            <a href="https://github.com/vknanavati" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div class="contact-data">
            <img src="linkedin-logo.png">
            <a href="https://www.linkedin.com/in/vimin-nanavati-3510555b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    </div>
</div>
`)

/* ---------- RENDER FUNCTION ---------- */
const renderLandingPage = () => {
    $('#about').html("");
    $('#cats').html("");
    $('#jokes').html("");
    $('#weather').html("");
    $('#contact').html("");
    $('#home').html(landingPage);
}

const renderAboutPage = () => {
    $('#home').html("");
    $('#cats').html("");
    $('#jokes').html("");
    $('#weather').html("");
    $('#contact').html("");
    $('#about').html(aboutPage);
}

const renderCatsPage = () => {
    $('#home').html("");
    $('#about').html("");
    $('#jokes').html("");
    $('#weather').html("");
    $('#contact').html("");
    $('#cats').html(catsPage);
}

const renderJokesPage = () => {
    $('#home').html("");
    $('#about').html("");
    $('#cats').html("");
    $('#weather').html("");
    $('#contact').html("");
    $('#jokes').html(jokesPage);
}

const renderWeatherPage = () => {
    $('#home').html("");
    $('#about').html("");
    $('#cats').html("");
    $('#jokes').html("");
    $('#contact').html("");
    $('#weather').html(weatherPage);
}

const renderContactPage = () => {
    $('#home').html("");
    $('#about').html("");
    $('#cats').html("");
    $('#jokes').html("");
    $('#weather').html("");
    $('#contact').html(contactPage);
}

const renderCatResult = (result) => {
    const catData = createCatData(result);
    $('.cat-result').html(catData)
}

const renderJokeResult = (result) => {
    const jokeData = createJokeData(result);
    $('.joke-result').html(jokeData)
}

const renderWeatherResult = (result) => {
    const weatherData = createWeatherData(result);
    $('.weather-result').html(weatherData)
}

const render = () => {
    if (STATE.route === 'aboutPage') {
        renderAboutPage();
    } else {
        if (STATE.route === 'catsPage') {
            renderCatsPage();
        } else {
            if (STATE.route === 'jokesPage') {
                renderJokesPage();
            } else {
                if (STATE.route === 'weatherPage') {
                    renderWeatherPage();
                } else {
                    if (STATE.route === 'contactPage') {
                        renderContactPage();
                    } else {
                        renderLandingPage()
                    }
                }
            }
        }

    }
}
/* ---------- AJAX REQUEST ---------- */

const getJokeAPI = () => {
    const options = {
        type: 'GET',
        url: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
        success: data => {
            console.log(data);
            renderJokeResult(data)
        }, error: err => console.log(err)

    }
    $.ajax(options)
}

const getCatAPI = () => {
    console.log('calling API')
    const options = {
        type: 'GET',
        url: 'https://api.thecatapi.com/v1/images/search',
        success: data => {
            console.log(data);
            renderCatResult(data)
        }, error: err => console.log(err)
    }
    $.ajax(options)
}

const getWeatherAPI = (query) => {
    const options = {
        type: 'GET',
        url: `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&units=I&key=${API_KEY}`,
        success: data => {
            console.log(data);
            renderWeatherResult(data)
        }, error: err => console.log(err)
    }
    $.ajax(options)
}

/* ---------- EVENT HANDLERS---------- */
const homeHandler = () => {
    setSTATE({ route: 'landingPage' })
}

const aboutHandler = () => {
    setSTATE({ route: 'aboutPage' })
}

const catsHandler = () => {
    setSTATE({ route: 'catsPage' })
}

const jokesHandler = () => {
    setSTATE({ route: 'jokesPage' })
}

const weatherHandler = () => {
    setSTATE({ route: 'weatherPage' })
}

const contactHandler = () => {
    setSTATE({ route: 'contactPage' })
}

const catSubmitHandler = (event) => {
    console.log('button clicked')
    getCatAPI()
}

const jokeSubmitHandler = (event) => {
    getJokeAPI()
}

const weatherSubmitHandler = (event) => {
    event.preventDefault();
    const inputCity = $(event.currentTarget).find('.city').val();
    getWeatherAPI(inputCity);
}

/* ---------- EVENT LISTENERS ---------- */
$('.nav-bar').on('click', '#nav-home', () => homeHandler());
$('.nav-bar').on('click', '#nav-about', () => aboutHandler());
$('.nav-bar').on('click', '#nav-cats', () => catsHandler());
$('.nav-bar').on('click', '#nav-jokes', () => jokesHandler());
$('.nav-bar').on('click', '#nav-weather', () => weatherHandler());
$('.nav-bar').on('click', '#nav-contact', () => contactHandler());

$(document).on('click', '#cat-link', () => catsHandler());
$(document).on('click', '#joke-link', () => jokesHandler());
$(document).on('click', '#weather-link', () => weatherHandler());

$('main').on('submit', '.joke-form', event => jokeSubmitHandler(event));
$('main').on('submit', '.cat-form', event => catSubmitHandler(event));
$('main').on('submit', '.weather-form', event => weatherSubmitHandler(event));

/* ---------- LOAD PAGE ---------- */
$(render)
