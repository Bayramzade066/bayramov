// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import mp3 from "./files/getLucky.mp3"
import { Link } from "react-router-dom";


function App() {
  const [section, setSection] = useState(0);
  const [animateOn, setAnimateOn] = useState(false);
  const [animateOff, setAnimateOff] = useState('transition-all opacity-0 transition-all opacity-1');
  const [off,setOff] = useState(false)
  const [on,setOn] = useState(false)

  
  return (
    <>
      <div className="hidden sm:!block bg"></div>
      <div className="w-full min-h-screen sm:h-full bg-zinc-800 flex  items-start sm:items-center sm:justify-center sm:bg-emerald-900">
        <div className=" w-full h-full sm:min-w-[1000px] sm:min-h-[550px] sm:w-[60%] sm:h-[60%] p-5 rounded-lg sm:bg-zinc-800 sm:shadow-xl block sm:fixed">
          {/* navbar */}

          <div className=" flex flex-col sm:flex-row h-[150px] sm:h-[30px] text-center px-5 gap-3 sm:gap-0 ">
            <div className="text-3xl font-bold text-green-700 cursor-default w-auto">
              Developer
            </div>
            <div className="flex w-full h-full justify-center items-center gap-5 sm:gap-10 pt-1">
              <span
                className={` ${
                  section === 0
                    ? "!text-green-700 border-b border-gray-500"
                    : "text-neutral-200"
                } sm:text-xl  font-bold hover:border-b hover:border-gray-500 hover:text-green-700 transition-all hover:transition-all cursor-pointer w-auto`}
                onClick={() => {
                  setSection(0);
                }}
              >
                Home
              </span>
              <span
                className={` ${
                  section === 1
                    ? "text-green-700 border-b border-gray-500"
                    : "text-neutral-200"
                } sm:text-xl  font-bold hover:border-b hover:border-gray-500 hover:text-green-700 transition-all hover:transition-all cursor-pointer w-auto`}
                onClick={() => {
                  setSection(1);
                }}
              >
                About
              </span>
              <span
                className={` ${
                  section === 2
                    ? "text-green-700 border-b border-gray-500"
                    : "text-neutral-200"
                } sm:text-xl  font-bold hover:border-b hover:border-gray-500 hover:text-green-700 transition-all hover:transition-all cursor-pointer w-auto`}
                onClick={() => {
                  setSection(2);
                }}
              >
                Skill
              </span>
              <span
                className={` ${
                  section === 3
                    ? "text-green-700 border-b border-gray-500"
                    : "text-neutral-200"
                } sm:text-xl  font-bold hover:border-b hover:border-gray-500 hover:text-green-700 transition-all hover:transition-all cursor-pointer w-auto`}
                onClick={() => {
                  setSection(3);
                }}
              >
                Experience
              </span>
            </div>
            <span
              className="text-xl sm:text-lg bg-green-900  hover:bg-green-700 rounded-lg text-neutral-300 font-bold hover:text-neutral-900 transition-all hover:transition-all cursor-pointer w-auto pt-3 sm:pt-[1px] py-3 px-4"
              onClick={() => {
                setSection(4);
              }}
            >
              Contact
            </span>
          </div>

          {section === 0 && (
            <div className="w-full h-full sm:gap-16 flex flex-col sm:flex-row items-center justify-center">
              <div className=" w-[300px] h-[150px] my-8 sm:my-0 sm:w-[40%] sm:h-[80%] sm:w-1/2  glitch sm:shadow-2xl rounded-lg bg-cover bg-no-repeat bg-center w-full"></div>
              <div className="sm:w-1/2 h-[80%] flex flex-col justify-start sm:justify-center gap-5">
                <h1 className="max-w-[340px] tracking-wider animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl text-neutral-300 font-bold h-[30px] sm:min-h-[30px] sm:h-[75px]">
                  Bayramov Muhammed
                </h1>
                <span className="text-md text-neutral-400 font-bold h-1 pb-5">
                  Android & Web
                  <span className="text-green-700"> Developer</span>
                </span>
                <span className="text-md sm:text-lg tracking-wide text-neutral-300 font-bold   w-auto h-auto mb-5 sm:mb-0">
                  As a creative programmer, I worked as a developer for more
                  than 2 years and gained experience on real projects. I'm happy
                  to spend most of my time writing code. I think that doing
                  research is the most enjoyable part of my job.
                </span>
                <div className="flex flex-col items-center justify-end h-[100px] sm:h-full w-full">
                  <span className="h-6 text-sm sm:text-lg text-neutral-500 w-full mb-2 ">
                    Play the music and look at the site.. :)
                  </span>
                  <AudioPlayer src={mp3} volume={0.3} />
                </div>
              </div>
            </div>
          )}
          {section === 1 && (
            <div className="w-full h-full sm:gap-16 flex flex-col sm:flex-row items-center justify-center sm:px-5">
              <div className="sm:w-1/2 h-[50%] sm:h-[80%] flex flex-col items-start justify-center sm:justify-center gap-5 border-b sm:border-b-0 sm:border-r border-emerald-800 py-5 sm:py-0">
                <span className="text-xl sm:text-2xl tracking-wide text-neutral-300 font-bold w-auto h-auto mb-2 sm:mb-0">
                  Eduaction
                </span>
                <div className="">
                  <span className="text-md sm:text-md tracking-wide text-neutral-200 font-bold w-auto h-auto mb-5 sm:mb-0">
                    - Baku State Communication and Transport College:
                    multichannel telecommunication systems -
                    <span className="text-green-600">2018 / 2022</span> <br />
                    <br />
                    - Pragmatech education center: <br /> Front-end Developer -
                    <span className="text-green-600">
                      2021 / 2022
                    </span> <br /> <br />
                    - ABB Tech Academy: <br /> Android Developer -
                    <span className="text-green-600">2024</span>
                  </span>
                </div>
              </div>
              <div className="sm:w-1/2 h-[80%] flex flex-col justify-start sm:justify-start gap-5 ">
                <span className="text-xl sm:text-2xl tracking-wide text-neutral-300 font-bold w-auto h-auto mt-3 sm:mt-0 mb-5 sm:mb-0">
                  Personal
                </span>
                <div className="">
                  <span className="text-md sm:text-md tracking-wide text-neutral-200 font-bold w-auto h-auto mb-5 sm:mb-0">
                    - Hobbie:
                    <span className="text-green-600">
                    camping,chess,literature and software books
                    </span>
                    <br /> <br />- Address:
                    <span className="text-green-600">Azerbaijan, Baku</span>
                    <br /> <br />- age:
                    <span className="text-green-600">22</span> <br /> <br />-
                    Work: 
                    <span className="text-green-600">
                      Azerbaijan medical university <br/> & Freelancer
                    </span>
                    <span className="text-green-600">22</span> <br /> <br />-
                    Resume: 
                    <span className="text-green-600 border border-b p-1 rounded-md border-green-600">
                     <a href="./files/bayramov.pdf" download="My_File.pdf" >Download CV</a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}
          {section === 2 && (
            <div className="w-full h-full sm:gap-16 flex flex-col sm:flex-row items-center justify-center sm:px-5">
              <div className="flex flex-col items-start w-full h-full pt-8 sm:pt-16 ">
                <span className="text-xl sm:text-2xl tracking-wide text-neutral-300 font-bold w-auto h-auto mb-2 sm:mb-10">
                  Skills
                </span>

                <div className="w-full flex flex-col h-[60%] sm:h-full gap-10 sm:gap-10">
                  <div className="w-full flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-20">
                    <div className="flex items-center justify-center rounded-lg h-[25px] w-full sm:w-[35%]  block">
                      <span className="text-green-600 text-md  w-full font-bold">
                        Javascript -
                      </span>
                      <div className="w-full h-4 bg-neutral-300 border border-emerald-900 rounded-full">
                        <div className="w-[80%] h-full border border-emerald-900 bg-emerald-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-lg h-[25px] w-full sm:w-[35%]  block">
                      <span className="text-green-600 text-md  w-full font-bold">
                        React.js -
                      </span>
                      <div className="w-full h-4 bg-neutral-300 border border-emerald-900 rounded-full">
                        <div className="w-[85%] h-full border border-emerald-900 bg-emerald-900 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-20">
                    <div className="flex items-center justify-center rounded-lg h-[25px] w-full sm:w-[35%]  block">
                      <span className="text-green-600 text-md  w-full font-bold">
                        Firebase -
                      </span>
                      <div className="w-full h-4 bg-neutral-300 border border-emerald-900 rounded-full">
                        <div className="w-[65%] h-full border border-emerald-900 bg-emerald-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-lg h-[25px] w-full sm:w-[35%]  block">
                      <span className="text-green-600 text-md  w-full font-bold">
                        Github & Git -
                      </span>
                      <div className="w-full h-4 bg-neutral-300 border border-emerald-900 rounded-full">
                        <div className="w-[70%] h-full border border-emerald-900 bg-emerald-900 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-20">
                    <div className="flex items-center justify-center rounded-lg h-[25px] w-full sm:w-[35%]  block">
                      <span className="text-green-600 text-md  w-full font-bold">
                        Wordpress -
                      </span>
                      <div className="w-full h-4 bg-neutral-300 border border-emerald-900 rounded-full">
                        <div className="w-[55%] h-full border border-emerald-900 bg-emerald-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-lg h-[25px] w-full sm:w-[35%]  block">
                      <span className="text-green-600 text-md  w-full font-bold">
                        Kotlin -
                      </span>
                      <div className="w-full h-4 bg-neutral-300 border border-emerald-900 rounded-full">
                        <div className="w-[30%] h-full border border-emerald-900 bg-emerald-900 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-20">
                    <div className="flex items-center justify-center rounded-lg h-[25px] w-full sm:w-[35%]  block">
                      <span className="text-green-600 text-md  w-full font-bold">
                        Tailwind & SCSS-
                      </span>
                      <div className="w-full h-4 bg-neutral-300 border border-emerald-900 rounded-full">
                        <div className="w-[90%] h-full border border-emerald-900 bg-emerald-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-lg h-[25px] w-full sm:w-[35%]  block">
                      <span className="text-green-600 text-md  w-full font-bold">
                        API -
                      </span>
                      <div className="w-full h-4 border border-emerald-900 bg-neutral-300 rounded-full">
                        <div className="w-[65%] h-full border border-emerald-900  bg-emerald-900 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {section === 3 && (
            <div className="w-full h-full sm:gap-16 flex flex-col sm:flex-row items-center justify-center sm:px-5">
              <div className="sm:w-1/2 h-[50%] sm:h-[80%] flex flex-col items-start justify-center sm:justify-center gap-5 border-b sm:border-b-0 sm:border-r border-emerald-800 py-5 sm:py-0">
                <span className="text-xl sm:text-2xl tracking-wide text-neutral-300 font-bold w-full h-auto pt-4 sm:pt-0 mb-2 sm:mb-0">
                  Work experience
                </span>
                <div className="">
                  <span className="text-md sm:text-md tracking-wide text-neutral-200 font-bold w-auto h-auto mb-5 sm:mb-0">
                    - Pragmatech education center: <br /> Front end menthor -
                    <span className="text-green-600"> 2021 / 2022</span> <br />
                    <br />
                    - Remox Inc: <br /> Front-end Developer -
                    <span className="text-green-600"> 2022 </span> <br /> <br />
                    - Azerbaijan Medical University: <br /> Technical Support &
                    Developer -
                    <span className="text-green-600"> 2022 / Now</span> <br /> <br />
                    - Yenikimi MMC: <br /> Freelance & Front-end Developer -
                    <span className="text-green-600"> 2023 / now </span> 
                  </span>
                </div>
              </div>
              <div className="sm:w-1/2 h-[80%] flex flex-col justify-start sm:justify-start gap-5 ">
                <span className="text-xl sm:text-2xl tracking-wide text-neutral-300 font-bold w-auto h-auto mt-3 sm:mt-0 mb-5 sm:mb-0">
                  Portfolio
                </span>
                <div className="">
                  <span className="text-md sm:text-md tracking-wide text-neutral-200 font-bold w-auto h-auto mb-5 sm:mb-0">
                    - <a
                      target="_blank"
                      href="https://pragmatech-website.github.io/Pragmatech/pragmatech%20design/templates/index.html"
                      className="text-green-600 border-b border-green-600"
                    >
                      Pragmatech education center's web site
                    </a>
                    <br />- <a
                      target="_blank"
                      href="https://bayramovdev.github.io/portfolio-react/"
                      className="text-green-600 border-b border-green-600"
                    >
                      React snow project
                    </a>
                    <br />- <a
                      target="_blank"
                      href="https://demo.remox.io/"
                      className="text-green-600 border-b border-green-600"
                    >
                      Remox Demo 
                    </a>
                    <br />- <a
                      target="_blank"
                      href="https://drjavadli.com"
                      className="text-green-600 border-b border-green-600"
                    >
                      Dr personal website (Wordpress)
                    </a>
                    <br />- <a
                      target="_blank"
                      href="https://yenikimi.az"
                      className="text-green-600 border-b border-green-600"
                    >
                      'Yenikimi' Project 
                    </a>
                    <br />- <a
                      target="_blank"
                      href="https://blog-b19a3.web.app/"
                      className="text-green-600 border-b border-green-600"
                    >
                      Blog website
                    </a>
                    <br />- <a
                      target="_blank"
                      href="https://bayramovdev.github.io/Filters/template/index.html"
                      className="text-green-600 border-b border-green-600"
                    >
                      Filters
                    </a>
                    <br />- <a
                      target="_blank"
                      href="https://bayramovdev.github.io/xogame/"
                      className="text-green-600 border-b border-green-600"
                    >
                      
                      Tic Tac Toe
                    </a>
                    <br /> - <a
                      target="_blank"
                      href="https://bayramovdev.github.io/StickyNotes/StickyNotes/index.html"
                      className="text-green-600 border-b border-green-600"
                    >
                      Sticky Notes
                    </a>
                    <br />
                  </span>
                </div>
              </div>
            </div>
          )}
          {section === 4 && (
            <div className="w-full h-full sm:gap-16 flex flex-col sm:flex-row items-center justify-center">
              <div className="w-full h-full sm:gap-16 flex flex-col sm:flex-row items-center justify-center sm:px-5">
                <div className="flex flex-col items-start w-full h-full pt-8 sm:pt-16 ">
                  <span className="text-xl sm:text-2xl tracking-wide text-neutral-300 font-bold w-auto h-auto mb-2 sm:mb-10">
                    Contact me
                  </span>

                  <div className="w-full h-[50%] sm:h-20 text-center flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 pt-20">
                   <div className="flex flex-row gap-10 sm:gap-10">

                    <a
                      href="https://medium.com/@bayramzade.313"
                      target="_blank"
                    >
                      <div class="i">
                        <i class="fab fa-medium"></i>
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/bayramzade.66/"
                      target="_blank"
                    >
                      <div class="i">
                        <i class="fab fa-instagram"></i>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bayramov-muhammad-275ba6217"
                      target="_blank"
                    >
                      <div class="i">
                        <i class="fab fa-linkedin"></i>
                      </div>
                    </a>
                   </div>
                   <div className="flex flex-row gap-10 sm:gap-10">
                   <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRPzNpzCzWcvcZhvhfHBLpsncChbnBqwSZTzKlNdtbxlmCjmSJddkjzhrmxrXbkCjmZsWM" target="_blank">
                      <div class="i">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                    </a>
                    <a href="https://github.com/Bayramovdev" target="_blank">
                      <div class="i ">
                        <i class="fab fa-github"></i>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/muhammed.bayram.7798574/"
                      target="_blank"
                    >
                      <div class="i">
                        <i class="fab fa-facebook-f"></i>
                      </div>
                    </a>

                   </div>
                   <div className="flex flex-row gap-10 sm:gap-10">
                   <a href="https://wa.me/+994705975727" target="_blank">
                      <div class="i">
                        <i class="fab fa-whatsapp"></i>
                      </div>
                    </a>
                    
                    <a href="https://discord.gg/vZuS9afWwd" target="_blank">
                      <div class="i">
                        <i class="fab fa-discord"></i>
                      </div>
                    </a>
                    <a href="https://twitter.com/Bayramzade066" target="_blank">
                      <div class="i">
                        <i class="fab fa-twitter"></i>
                      </div>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
