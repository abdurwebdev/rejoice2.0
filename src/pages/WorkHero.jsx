import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkHero = () => {
  useEffect(() => {
    let clutter = '';
    const h2Element = document.querySelector('#nb h2');
    h2Element.textContent.split(' ').forEach(function (dets) {
      clutter += `<span>${dets}</span> `;
    });
    h2Element.innerHTML = clutter;

    gsap.from('#nb h2 span', {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power2.out',
    });

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <section
      id="nb"
      className="w-full h-screen flex px-10 lg:text-[4vw] lg:leading-[4vw] text-[7vw] sm:text-[5vw] sm:leading-[5vw] items-center tracking-tighter leading-[7vw] text-black justify-center"
    >
      <h2
        style={{ maxWidth: '90vw', wordWrap: 'break-word' }}
      >
        Each project below has won multiple awards. We don't just work for prizes, but they are a testimony that we love our job and do it well.
      </h2>
    </section>
  );
};

export default WorkHero;
