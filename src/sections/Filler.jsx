// import React, { useRef } from "react";
// import { useInView } from "react-intersection-observer";
// import CountUp from "react-countup";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import "./../index.css"
// import "./Filler.css"

// // Only register once globally (move this to your root layout if possible)
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const Filler = () => {
//   // Intersection Observer hooks
//   const [yearsRef, yearsInView] = useInView({ threshold: 0.2, triggerOnce: true });
//   const [residentsRef, residentsInView] = useInView({ threshold: 0.2, triggerOnce: true });

//   // Refs for animation elements
//   const fade = useRef(null);
//   const fade2 = useRef(null);
//   const sectionRef = useRef(null);

//   // GSAP animations setup with proper cleanup
//   React.useEffect(() => {
//     const ctx = gsap.context(() => {
//       if (fade.current) {
//         gsap.fromTo(fade.current, 
//           { x: -50, opacity: 0 },
//           { 
//             x: 0, 
//             opacity: 1,
//             duration: 1,
//             ease: "power1.inOut",
//             scrollTrigger: {
//               trigger: fade.current,
//               start: "top 75%",
//               end: "top 25%",
//               id: "filler-section-1", // Unique ID
//               markers: false // Set to true for debugging
//             }
//           }
//         );
//       }

//       if (fade2.current) {
//         gsap.fromTo(fade2.current, 
//           { x: 50, opacity: 0 },
//           { 
//             x: 0, 
//             opacity: 1,
//             duration: 1,
//             ease: "power1.inOut",
//             scrollTrigger: {
//               trigger: fade2.current,
//               start: "top 75%",
//               end: "top 25%",
//               id: "filler-section-2", // Unique ID
//               markers: false // Set to true for debugging
//             }
//           }
//         );
//       }
//     }, sectionRef); // Scope to sectionRef

//     return () => ctx.revert(); // Cleanup
//   }, []);

//   return (
//     <section id="learn" ref={sectionRef} className="h-fit mt-10 overflow-y-hidden">
//       <div className=" align flex flex-col items-center justify-evenly gap-5 h-full">
//         {/* First section - img right side */}
//         <div
//           ref={fade}
//           className="w-full h-[50vh] md:h-[70vh] rounded-lg flex gap-5 items-center md:flex-row flex-col-reverse  bg-lime-600 text-white "
//         >
//           {/* Content */}
//           <div className=" flex flex-col justify-center items-start gap-3  text-2xl md:text-3xl w-full md:w-[60%] adding-padding">
//             <h3 className=" text-center">
//               We provide the best service possible, and we've been in this field
//               for over a decade. 
//             </h3>
//             <div ref={yearsRef} className="flex-center w-full">
//               <p className="text-3xl md:text-3xl w-full h-full text-center">
//                 {yearsInView ? (
//                   <CountUp
//                     prefix="+"
//                     end={15}
//                     duration={2.5}
//                     delay={0.2}
//                     className="md:text-start text-center"
//                   />
//                 ) : (
//                   "0+"
//                 )}
//                 <span className="ml-2"> Years Of Service</span>
//               </p>
//             </div>
//           </div>

//           {/* Image wrapper */}
//           <div className=" md:h-full w-[90%] md:w-[70vh] flex-center rounded-lg overflow-hidden p-5 flex justify-center items-center ">
//             <img
//               src="/assets/old-woman.jpg"
//               alt="Senior woman smiling"
//               className="object-cover border-2 h-[90%] w-[90%] rounded-lg"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Second section - img left side */}
//         <div
//           ref={fade2}
//           className=" w-full h-[50vh] md:h-[70vh] border-4 rounded-lg flex gap-5 items-center md:flex-row-reverse flex-col-reverse border-lime-600 bg-white text-lime-600"
//         >
//           {/* Content */}
//           <div className="flex flex-col justify-center items-start gap-3  text-2xl md:text-3xl w-full md:w-[60%] adding-padding">
//             <p className="text-center text-2xl md:text-4xl">
//               "We've provided compassionate care to{" "}
//               <span ref={residentsRef} className="font-bold">
//                 {residentsInView ? (
//                   <CountUp end={100} duration={2.5} delay={0.2} suffix="+" />
//                 ) : (
//                   "0+"
//                 )}
//               </span>{" "}
//               satisfied residents and counting."
//             </p>
//           </div>

//           {/* Image wrapper */}
//           <div className="md:h-full h-full w-[90%] md:w-[70vh] flex-center rounded-lg overflow-hidden p-5 flex justify-center items-center">
//             <img
//               src="/assets/african-american-seniors.jpg"
//               alt="Happy senior couple"
//               className="object-cover border-2 h-[90%] w-[90%] rounded-lg"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Filler;

import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./../index.css"
import "./Filler.css"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Filler = () => {
  const [yearsRef, yearsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [residentsRef, residentsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fade = useRef(null);
  const fade2 = useRef(null);
  const sectionRef = useRef(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      if (fade.current) {
        gsap.fromTo(fade.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: fade.current,
              start: "top 75%",
              end: "top 25%",
              id: "filler-section-1",
              markers: false
            }
          }
        );
      }

      if (fade2.current) {
        gsap.fromTo(fade2.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: fade2.current,
              start: "top 75%",
              end: "top 25%",
              id: "filler-section-2",
              markers: false
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="learn" ref={sectionRef} className="h-fit mt-10 overflow-y-hidden">
      <div className="align flex flex-col items-center justify-evenly gap-5 h-full">

        {/* First section - img right side */}
        <div
          ref={fade}
          className="w-full rounded-lg flex gap-5 items-center md:flex-row flex-col-reverse bg-lime-600 text-white"
        >
          {/* Content */}
          <div className="flex flex-col justify-center items-start gap-3 text-2xl md:text-3xl w-full md:w-[60%] adding-padding">
            <h3 className="text-center">
              We provide the best service possible, and we've been in this field
              for over a decade.
            </h3>
            <div ref={yearsRef} className="flex-center w-full">
              <p className="text-3xl md:text-3xl w-full h-full text-center">
                {yearsInView ? (
                  <CountUp
                    prefix="+"
                    end={15}
                    duration={2.5}
                    delay={0.2}
                    className="md:text-start text-center"
                  />
                ) : (
                  "0+"
                )}
                <span className="ml-2"> Years Of Service</span>
              </p>
            </div>
          </div>

          {/* Image wrapper — responsive fix */}
          <div className="w-full md:w-[40%] aspect-4/3 md:aspect-auto md:h-[70vh] flex justify-center items-center p-4 overflow-hidden rounded-lg">
            <img
              src="/assets/old-woman.jpg"
              alt="Senior woman smiling"
              className="object-cover border-2 w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Second section - img left side */}
        <div
          ref={fade2}
          className="w-full border-4 rounded-lg flex gap-5 items-center md:flex-row-reverse flex-col-reverse border-lime-600 bg-white text-lime-600"
        >
          {/* Content */}
          <div className="flex flex-col justify-center items-start gap-3 text-2xl md:text-3xl w-full md:w-[60%] adding-padding">
            <p className="text-center text-2xl md:text-4xl">
              "We've provided compassionate care to{" "}
              <span ref={residentsRef} className="font-bold">
                {residentsInView ? (
                  <CountUp end={100} duration={2.5} delay={0.2} suffix="+" />
                ) : (
                  "0+"
                )}
              </span>{" "}
              satisfied residents and counting."
            </p>
          </div>

          {/* Image wrapper — responsive fix */}
          <div className="w-full md:w-[40%] aspect-4/3 md:aspect-auto md:h-[70vh] flex justify-center items-center p-4 overflow-hidden rounded-lg">
            <img
              src="/assets/african-american-seniors.jpg"
              alt="Happy senior couple"
              className="object-cover border-2 w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Filler;