import Image from 'next/image';

export default function Home() {
  // Array mapping out your image grid items and alt texts
  const projects = [
    { alt: "Earth Spirit", src: "/images/ES.jpg" },
    { alt: "Pudge", src: "/images/pudge.jpg" },
    { alt: "Ursa Warrior", src: "/images/ursa.jpg" },
    { alt: "Templar Assassin", src: "/images/TA.jpg" },
    { alt: "Juggernaut", src: "/images/juggernaut.jpg" },
    { alt: "God Gave Mio", src: "/images/mio.jpg" } // Fixed truncated text string
  ];

  return (
    <div className="bg-gradient-to-l from-indigo-800 to-blue-200 min-h-screen w-full">
      {/* Navigation Bar */}
      <nav className="w-full h-25 flex items-center justify-between">
        <div className="w-50 h-25 flex items-center justify-center">
          <p className="text-3xl text-black text-center">Bordz</p>
        </div>
        <div className="w-200 h-25 flex items-center justify-end gap-20 pr-6">
          <button className="bg-transparent border-none p-0 text-black hover:text-green-600 hover:cursor-pointer transition-all duration-200 ease-in-out">Home</button>
          <button className="bg-transparent border-none p-0 text-black hover:text-green-600 hover:cursor-pointer transition-all duration-200 ease-in-out">About</button>
          <button className="bg-transparent border-none p-0 text-black hover:text-green-600 hover:cursor-pointer transition-all duration-200 ease-in-out">Contact</button>
        </div>
      </nav>

      {/* Hero Header Section */}
      <div className="w-full h-50 relative flex">
        <h1 className="absolute bottom-0 left-15 text-5xl font-bold text-black">
          Elijah Luis C. Bes
        </h1>
        <div className="w-100 h-15 absolute bottom-0 right-0 flex items-center justify-center gap-30">
          <button className="bg-transparent border-none p-0 text-gray-400 hover:text-green-600 hover:cursor-pointer transition-all duration-200 ease-in-out">Bordz</button>
          <button className="bg-transparent border-none p-0 text-gray-400 hover:text-green-600 hover:cursor-pointer transition-all duration-200 ease-in-out">Choyens</button>
        </div>
      </div>

      {/* Portfolio Grid Layout */}
      <div className="w-full h-161 grid grid-cols-3 gap-2 place-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden border border-black rounded-xl w-90 h-60 flex hover:cursor-pointer transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-xl"
          >
            <Image
              alt={project.alt}
              src={project.src}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index < 3} // Performance optimization for above-fold elements
            />
          </div>
        ))}
      </div>
    </div>
  );
}

