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
</div>
`)

const jokesPage = (`
<div class="jokes-page">
    <p>JOKES PAGE</p>
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
const render = () => {
    if (STATE.route === 'aboutPage') {
        renderAboutPage();
    } else {
        if (STATE.route === 'catsPage') {
            renderCatsPage();
        } else {
            if (STATE.route === 'jokesPage') {
                renderWeatherPage();
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

/* ---------- EVENT LISTENERS ---------- */
$('.nav-bar').on('click', '#nav-home', () => homeHandler());
$('.nav-bar').on('click', '#nav-about', () => aboutHandler());
$('.nav-bar').on('click', '#nav-cats', () => catsHandler());
$('.nav-bar').on('click', '#nav-jokes', () => jokesHandler());
$('.nav-bar').on('click', '#nav-weather', () => weatherHandler());
$('.nav-bar').on('click', '#nav-contact', () => contactHandler());

/* ---------- LOAD PAGE ---------- */
$(render)
