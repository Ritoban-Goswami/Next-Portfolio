import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-5/12">
        <h3 className="text-6xl font-semibold mb-12">About Me</h3>
        <p className="text-2xl text-neutral-400">
          Hi, this is Ritoban, I’m a Web Designer and a Front End Web Developer,
          using various web technologies to build digital products for different
          niches and different industries. I think the work you want to do
          defines you more than the work you’ve done. I love to keep learning,
          and problem-solving and I continue challenging myself to do things
          that are out of my comfort zone. and I love playing musical
          instruments, traveling, learning new languages, and exploring life in
          general. I’d love to hear from you, feel free to contact me. You can
          check out my Resume here.
        </p>
      </div>
      <div className="w-5/12">
        <h3 className="text-6xl font-semibold mb-12">Skills</h3>
        <div className="flex flex-wrap">
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            HTML
          </span>
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            CSS
          </span>
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            JavaScript
          </span>
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            Bootstrap
          </span>
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            JQuery
          </span>
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            SASS
          </span>
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            GIT
          </span>
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            VS Code
          </span>
          <span className="text-neutral-600 text-xl uppercase m-3 bg-neutral-100 p-3 rounded-lg font-bold border-2 border-neutral-700 tracking-widest">
            Figma
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
