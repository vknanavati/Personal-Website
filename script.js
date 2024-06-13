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
        <p>${joke}</p>
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
/* ---------- TEMPLATES ---------- */

const landingPage = (`
<div class="home-construction">
    <img src="construction.png" alt="blue square with sign" id="construction-png">
</div>
`)

const aboutPage = (`
<div class="about-page">
    <p>ABOUT PAGE</p>
</div>
`)

const catsPage = (`
<div class="cats-page">
    <p>CATS PAGE</p>
    <div class="cat-result"></div>
    <form class="cat-form">
        <button type="submit" id="catButton">Click for Cat!</button>
    </form>
</div>
`)

const jokesPage = (`
<div class="jokes-page">
    <p>JOKES PAGE</p>
    <div class="joke-result"></div>
    <form class="joke-form">
        <button type="submit" id="jokeButton">Press for Joke!</button>
    </form>
</div>
`)

const weatherPage = (`
<div class="weather-page">
    <p>WEATHER PAGE</p>
</div>
`)

const contactPage = (`
<div class="contact-page">
    <p>CONTACT PAGE</p>
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
        "url": 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
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
        'type': 'GET',
        "url": 'https://api.thecatapi.com/v1/images/search',
        success: data => {
            console.log(data);
            renderCatResult(data)
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

/* ---------- EVENT LISTENERS ---------- */
$('.nav-bar').on('click', '#nav-home', () => homeHandler());
$('.nav-bar').on('click', '#nav-about', () => aboutHandler());
$('.nav-bar').on('click', '#nav-cats', () => catsHandler());
$('.nav-bar').on('click', '#nav-jokes', () => jokesHandler());
$('.nav-bar').on('click', '#nav-weather', () => weatherHandler());
$('.nav-bar').on('click', '#nav-contact', () => contactHandler());

$('main').on('submit', '.joke-form', event => jokeSubmitHandler(event));
$('main').on('submit', '.cat-form', event => catSubmitHandler(event));

/* ---------- LOAD PAGE ---------- */
$(render)
