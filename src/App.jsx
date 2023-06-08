// import { useRef } from 'react';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import './App.css';


function App() {

  const{ ref: segment, inView: segmentIsVisible } = useInView();
  const{ ref: automate, inView: automateIsVisible } = useInView();
  const{ ref: personalize, inView: personalizeIsVisible } = useInView();
  const{ ref: integrate, inView: integrateIsVisible } = useInView();
  const{ ref: analyze, inView: analyzeIsVisible } = useInView();

  // const [isVisible, setIsVisible] = useState();
  // console.log('isVisible', isVisible);


  const integrateNew = useRef();
  const segmentNew = useRef();
  const personalizeNew = useRef();
  const automateNew = useRef();
  const analyzeNew = useRef();
  
  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" })
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setIsVisible(entry.isIntersecting)
      
  //   })

  //   observer.observe(segment.current)
  // }, [])
  


  return (
    <>
      <div className="navbar fixed z-10 bg-transparent">
        <div className="rounded-full px-6 py-2 flex flex-row gap-6 bg-gray-800 border border-gray-600">
          <button onClick={() => scrollHandler(integrateNew)} className={`${integrateIsVisible ? 'nav-item-active' : '' } rounded-full bg-transparent py-3 px-6 nav-item`}>
              <p className="text-white bg-transparent font-normal text-[20px]">Integrate</p>
          </button>
          <button onClick={() => scrollHandler(segmentNew)} className={`${segmentIsVisible ? 'nav-item-active' : '' } rounded-full bg-transparent py-3 px-6 nav-item`}>
              <p className="text-white bg-transparent font-normal text-[20px]">Segment</p>
          </button>
          <button onClick={() => scrollHandler(personalizeNew)}  className={`${personalizeIsVisible ? 'nav-item-active' : '' } rounded-full bg-transparent py-3 px-6 nav-item`}>
              <p className="text-white bg-transparent font-normal text-[20px]">Personalize</p>
          </button>
          <button onClick={() => scrollHandler(automateNew)}  className={`${automateIsVisible ? 'nav-item-active' : '' } rounded-full bg-transparent py-3 px-6 nav-item`}>
              <p className="text-white bg-transparent font-normal text-[20px]">Automate</p>
          </button>
          <button onClick={() => scrollHandler(analyzeNew)}  className={`${analyzeIsVisible ? 'nav-item-active' : '' } rounded-full bg-transparent py-3 px-6 nav-item`}>
              <p className="text-white bg-transparent font-normal text-[20px]">Analyze</p>
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-20 justify-between py-40 px-24 z-6">
        <div className="flex flex-col gap-20">
            <div ref={integrateNew} className="section mb-20 mt-40 relative pt-32" id="integrate">
              <div ref={integrate} className="section-body basis-1/2">
                <div className="section-text flex flex-col gap-6">
                    <p className="text-purple-700 text-[20px] uppercase">Integrate</p>
                    <h1 className="text-white font-bold text-[36px] w-[75%]">
                      All your customer data in your pocket, without code!
                    </h1>
                    <p className="text-white font-normal text-[28px]">&apos;Moda is easy to setup and get started with. No complicated integrations needed. &apos;</p>

                    <div className="flex flex-row gap-2">
                      <img src="/trelish.webp" alt="trelish" width="40px" height="40px" />
                      <div className="flex flex-col">
                        <p className="text-white font-normal text-[14px]">Trelish</p>
                        <p className="text-white font-normal text-[12px]">Liquid Brew Coffees</p>
                      </div>
                    </div>

                </div>
              </div>
              
              
            </div>
            <div ref={segmentNew}  className="section mb-20 mt-20 relative pt-40" id="segment">
              <div ref={segment} className="section-body basis-1/2">
                <div className="section-text flex flex-col gap-6">
                    <p className="text-purple-700 text-[20px] uppercase">Segment</p>
                    <h1 className="text-white font-bold text-[36px] w-[75%]">
                      All your customer data in your pocket, without code!
                    </h1>
                    <p className="text-white font-normal text-[28px]">&apos;Moda is easy to setup and get started with. No complicated integrations needed. &apos;</p>

                    <div className="flex flex-row gap-2">
                      <img src="/trelish.webp" alt="trelish" width="40px" height="40px" />
                      <div className="flex flex-col">
                        <p className="text-white font-normal text-[14px]">Trelish</p>
                        <p className="text-white font-normal text-[12px]">Liquid Brew Coffees</p>
                      </div>
                    </div>
                </div>
              </div>
              
              
            </div>
            <div ref={personalizeNew} className="section mb-20 mt-20 relative pt-40"  id="personalize">
              <div ref={personalize} className="section-body basis-1/2">
                <div className="section-text flex flex-col gap-6">
                    <p className="text-purple-700 text-[20px] uppercase">Personalize</p>
                    <h1 className="text-white font-bold text-[36px] w-[75%]">
                      All your customer data in your pocket, without code!
                    </h1>
                    <p className="text-white font-normal text-[28px]">&apos;Moda is easy to setup and get started with. No complicated integrations needed. &apos;</p>

                    <div className="flex flex-row gap-2">
                      <img src="/trelish.webp" alt="trelish" width="40px" height="40px" />
                      <div className="flex flex-col">
                        <p className="text-white font-normal text-[14px]">Trelish</p>
                        <p className="text-white font-normal text-[12px]">Liquid Brew Coffees</p>
                      </div>
                    </div>

                </div>
              </div>
            </div>
            <div ref={automateNew} className="section mb-20 mt-20 relative pt-40" id="automate">
              <div ref={automate} className="section-body basis-1/2">
                <div className="section-text flex flex-col gap-6">
                    <p className="text-purple-700 text-[20px] uppercase">Automate</p>
                    <h1 className="text-white font-bold text-[36px] w-[75%]">
                      All your customer data in your pocket, without code!
                    </h1>
                    <p className="text-white font-normal text-[28px]">&apos;Moda is easy to setup and get started with. No complicated integrations needed. &apos;</p>

                    <div className="flex flex-row gap-2">
                      <img src="/trelish.webp" alt="trelish" width="40px" height="40px" />
                      <div className="flex flex-col">
                        <p className="text-white font-normal text-[14px]">Trelish</p>
                        <p className="text-white font-normal text-[12px]">Liquid Brew Coffees</p>
                      </div>
                    </div>

                </div>
              </div>
            </div>
            <div ref={analyzeNew} className="section mb-20 mt-20 relative pt-40" id="analyze">
              <div ref={analyze} className="section-body basis-1/2">
                <div className="section-text flex flex-col gap-6">
                    <p className="text-purple-700 text-[20px] uppercase">Analyze</p>
                    <h1 className="text-white font-bold text-[36px] w-[75%]">
                      All your customer data in your pocket, without code!
                    </h1>
                    <p className="text-white font-normal text-[28px]">&apos;Moda is easy to setup and get started with. No complicated integrations needed. &apos;</p>

                    <div className="flex flex-row gap-2">
                      <img src="/trelish.webp" alt="trelish" width="40px" height="40px" />
                      <div className="flex flex-col">
                        <p className="text-white font-normal text-[14px]">Trelish</p>
                        <p className="text-white font-normal text-[12px]">Liquid Brew Coffees</p>
                      </div>
                    </div>

                </div>
              </div>
            </div>
        </div>

        

        <div className="relative pr-5 basis-1/2">
          <div className={`${integrateIsVisible ? 'active' : 'section-img' } fixed right-20 top-36 z-2`}>
              <img src="/img1.webp" alt="img1" width="500px" height="500px" />
          </div>
          <div className={`${segmentIsVisible ? 'active' : 'section-img' } fixed right-20 top-36 z-2`}>
                  <img src="/img2.webp" alt="img2" width="500px" height="500px" />
          </div>
          <div className={`${personalizeIsVisible ? 'active' : 'section-img' } fixed right-20 top-36 z-2`}>
                  <img src="/img3.webp" alt="img3" width="500px" height="500px" />
          </div>
          <div className={`${automateIsVisible ? 'active' : 'section-img' } fixed right-20 top-36 z-2`}>
                  <img src="/img4.webp" alt="img4" width="500px" height="500px" />
          </div>
          <div className={`${analyzeIsVisible ? 'active' : 'section-img' } fixed right-20 top-36 z-2`}>
                  <img src="/img5.webp" alt="img5" width="500px" height="500px" />
          </div>
        </div>
      </div>

      
    </>
  )
}

export default App
