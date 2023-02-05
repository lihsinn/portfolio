import { useRef,useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Spline from "@splinetool/react-spline";
// import roomImg from "../public/images/room.png"

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const [loading, setLoading] = useState(true)

  const height = 1000
  const width = 1000

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);


  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <div
              style={{
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#111111',
                // height: '100vh'
                height: '75vh',
                touchAction: 'none'
              }}
            >              
           
           {/* <img style={{ width: '130%' }} src={`/images/room.png`}></img> */}
              {
                loading?
                <img style={{ position: 'absolute', right: '0',width: '130%' }} src={`/images/room.png`}></img>:null
              }
                  <Spline
                  // style={{position: 'relative' ,right:'300px' }}
                  // className="fade-in"
                  onLoad={ ()=>setInterval(()=>setLoading(false), 1000)} 
                  scene="https://prod.spline.design/w-l7RyhPVGLl8tHz/scene.splinecode"
                />
             
              
              <div style={{ position: 'absolute', right: '10vw' }}>
                {/* class="noselect" */}
                {/* <h1 ref={textOne}>{data.headerTaglineOne}</h1> */}
                <h2
                  ref={textOne}
                  className="text-base tablet:text-3xl laptop:text-3xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                >
                  {data.headerTaglineOne}
                </h2>

                <h3
                  ref={textTwo}
                  className="text-base tablet:text-3xl laptop:text-3xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                >

                  {data.headerTaglineTwo}
                </h3>
                <h3
                  ref={textThree}
                  className="text-base tablet:text-3xl laptop:text-3xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                >

                  {data.headerTaglineThree}
                </h3>
                <h3
                  ref={textFour}
                  className="text-base tablet:text-3xl laptop:text-3xl laptopl:text-3xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                >

                  {data.headerTaglineFour}
                </h3>




              </div>

            </div>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
              // onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );


}
