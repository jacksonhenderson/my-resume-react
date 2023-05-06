import './style.scss'
import './styles.scss'
import milad from './images/InkedScreenshot_20230419-222133_Gallery_LI.jpg'
import shopImage from './images/Screenshot_20230428-104308_Samsung Internet.jpg'
import timers from './images/Screenshot_20230429-103133_Video Player.jpg'
import todolist from './images/Screenshot_20230429-110201_Samsung Internet.jpg'

const App = () => {
  return (
    <>
<div id="top"></div>

<section id="hero" class="jumbotron">
  <div class="container">
    <h1 class="hero-title load-hidden">
      Hi, my name is <span class="text-color-main">Milad Gharibi</span>
      <br />
      I'm the React and Next Developer.
    </h1>
    <p class="hero-cta load-hidden">
      <a rel="noreferrer" class="cta-btn cta-btn--hero" href="#about"
        >Know more</a>
    </p>
  </div>
</section>
<section id="about">
  <div class="container">
    <h2 class="section-title load-hidden">About me</h2>
    <div class="row about-wrapper">
      <div class="col-md-6 col-sm-12">
        <div class="about-wrapper__image load-hidden">
          <img
          style={{border: "solid blue 1px", borderRadius: "35%"}}
            alt="Profile Image"
            class="img-fluid shadow-lg"
            height="auto"
            width="300px"
            src={milad}
            />
            <div  style={{marginLeft: "20px"}}>
            <span><h2>26 Years Old</h2></span>
            <span><h2>Live In Tehran</h2></span>
            </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="about-wrapper__info load-hidden">
          <h2 class="about-wrapper__info-text">
            <h1>my ability is: html, css, tailwind, bootstrap, js, react, next</h1><br />
          As a React and Next.js developer, I have extensive experience in building dynamic and responsive web applications. With a strong foundation in JavaScript, I am able to create complex UI components and integrate them seamlessly with backend APIs.

My expertise in React allows me to efficiently manage state and data flow within applications, while also ensuring optimal performance. Additionally, my proficiency in Next.js enables me to build server-side rendered applications that are both SEO-friendly and highly scalable.

          </h2>
          <b/>
          <b/>
          <h2>
          من به عنوان یک توسعه دهنده React و Next.js، تجربه زیادی در ساخت برنامه های وب پویا و واکنش گرا دارم. با یک پایه قوی در جاوا اسکریپت، من می توانم اجزای UI پیچیده ایجاد کنم و آنها را به طور یکپارچه با API های Backend یکپارچه کنم.

تخصص من در React به من این امکان را می دهد که وضعیت و جریان داده را در برنامه ها به طور موثر مدیریت کنم و در عین حال عملکرد بهینه را نیز تضمین کنم. علاوه بر این، تسلط من در Next.js به من امکان می دهد تا برنامه های رندر شده در سمت سرور بسازم که هم سئو پسند و هم مقیاس پذیر هستند.

من علاقه مند به به روز ماندن با آخرین فن آوری ها و بهترین شیوه ها در توسعه وب هستم. این انگیزه برای یادگیری مداوم به من امکان می دهد راه حل های نوآورانه ای ارائه دهم که نیازهای منحصر به فرد هر پروژه را برآورده می کند.
          </h2>
          <span class="d-flex mt-3">
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--resume"
              href="https://github.com/jacksonhenderson"
            >
              GitHub Account
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects">
  <div class="container">
    <div class="project-wrapper">
      <h2 class="section-title dark-blue-text">Projects</h2>

      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <div class="project-wrapper__text load-hidden">
            <h2 class="project-wrapper__text-title">Shoping Cart</h2>
            <div>
              <p class="mb-4">
                <h3>project overview:</h3><br />
                <ul>
                  <li>
                1. Component-based architecture: allows for the creation of reusable components.<br/>
                  </li>
                  <li>
                2. Server-side rendering: can be used for server-side rendering, which improves SEO and reduces page load times.<br/>
                  </li>
                  <li>
                3. Redux state management: Redux is a popular state management library that can be used with React to manage complex application states.<br/>
                  </li>
                  <li>
                4. Responsive design: With the help of CSS frameworks like Material UI.<br/>
                  </li>
                  <li>
                5. Integration with APIs
                  </li>
                </ul>
              </p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--hero"
              href="https://store-kuskine.vercel.app/store"
            >
              See Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn text-color-main"
              href="https://github.com/jacksonhenderson/shoping-cart-react"
            >
              Source Code
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12">
          <div class="project-wrapper__image load-hidden">
            <a rel="noreferrer" href="https://store-kuskine.vercel.app/store" target="_blank">
              <div
                data-tilt
                data-tilt-max="4"
                data-tilt-glare="true"
                data-tilt-max-glare="0.5"
                class="thumbnail rounded js-tilt"
              >
                <img
                  alt="Project Image"
                  class="img-fluid"
                  src={shopImage}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <div class="project-wrapper__text load-hidden">
            <h3 class="project-wrapper__text-title">timer-react</h3>
            <div>
              <p class="mb-4">
                <ul>
                  <li>
              The timer component keep track of the current time, the duration of the timer, and whether it is currently running or paused.
                  </li>
                  <li>
              The timer display the current time and/or remaining time in a visually appealing way, such as with a countdown clock or progress bar.
                  </li>
                  <li>
              component may accept props such as initial duration or callback functions for when the timer reaches certain milestones (e.g. completion).
                  </li>
                </ul>
              </p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--hero"
              href="https://peterdurham.github.io/timers-demo/"
            >
              See Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn text-color-main"
              href="https://github.com/jacksonhenderson/timer-and-countdown-time"
            >
              Source Code
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12">
          <div class="project-wrapper__image load-hidden">
            <a rel="noreferrer" href="https://peterdurham.github.io/timers-demo/" target="_blank">
              <div
                data-tilt
                data-tilt-max="4"
                data-tilt-glare="true"
                data-tilt-max-glare="0.5"
                class="thumbnail rounded js-tilt"
              >
                <img
                  alt="Project Image"
                  class="img-fluid"
                  src={timers}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <div class="project-wrapper__text load-hidden">
            <h3 class="project-wrapper__text-title">React ToDoList</h3>
            <div>
              <p class="mb-4">
              <ul>
                <li>
                  Completely new architecture: The TodoList project uses the new React architecture, which is specifically designed for building large and complex applications.
                </li>
                  Complete isolation: This project uses complete isolation, in other words, each part of the program is designed separately and can be developed.
                <li>
                </li>
                <li>
                  Simplicity in use: Using React technologies, Todolist project is very easy to use and expand.
                </li>
                <li>
                  Extensible: Due to the complete isolation, the Todolist project is extensible and extensible.
                </li>
              </ul>
              </p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--hero"
              href="https://react-todo-list-9.netlify.app/"
            >
              See Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn text-color-main"
              href="https://github.com/jacksonhenderson/react-todoList"
            >
              Source Code
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12">
          <div class="project-wrapper__image load-hidden">
            <a rel="noreferrer" href="https://react-todo-list-9.netlify.app/" target="_blank">
              <div
                data-tilt
                data-tilt-max="4"
                data-tilt-glare="true"
                data-tilt-max-glare="0.5"
                class="thumbnail rounded js-tilt"
              >
                <img
                  alt="Project Image"
                  class="img-fluid"
                  src={todolist}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <h2 class="section-title">Contact</h2>
    <div class="contact-wrapper load-hidden">
      <p class="contact-wrapper__text">
            <h2>Phon Number: 09333031638</h2>
            <h2>Email: milad.gharibi14002022@gmail.com</h2>
            <h2>Tellegram Id: jacksonn1996</h2>
      </p>
      <a
        rel="noreferrer"
        target="_blank"
        class="cta-btn cta-btn--resume"
        href="mailto:example@email.com"
        >Call to Action</a
      >
    </div>
  </div>
</section>

<footer class="footer navbar-static-bottom">
  <div class="container">
    <a rel="noreferrer" href="#top" class="back-to-top">
      <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
    </a>
    <div class="social-links">
      <a rel="noreferrer" href="#!" target="_blank">
        <i class="fa fa-twitter fa-inverse"></i>
      </a>
      <a rel="noreferrer" href="#!" target="_blank">
        <i class="fa fa-linkedin fa-inverse"></i>
      </a>
      <a rel="noreferrer" href="https://github.com/jacksonhenderson" target="_blank">
        <i class="fa fa-github fa-inverse"></i>
      </a>
    </div>

    <hr />

    <p class="footer__text">
      © 2021 - Template developed by
      <a rel="noreferrer" href="https://github.com/cobiwave" target="_blank"
        >Jacobo Martínez</a
      >
    </p>

    <p class="mt-3 pt-3">
      <a
        rel="noreferrer"
        class="github-button"
        href="https://github.com/jacksonhenderson"
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label="Fork ntkme/github-buttons on GitHub"
        >Fork</a
      >
      <a
        rel="noreferrer" 
        class="github-button"
        href="https://github.com/jacksonhenderson"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star cobiwave/simplefolio on GitHub"
        >Star</a
      >
    </p>
  </div>
</footer>
    </>
  );
}

export default App;
