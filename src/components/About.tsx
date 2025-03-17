'use client'

import Image from 'next/image'

const About = () => {
  return (
    <div className="py-12 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div>
              <h1 className="font-big text-red-accent animate-slide-in-top">About Me</h1>
              <hr className="my-4" />
              <p className="text-lg leading-relaxed animate-slide-in-bottom">
                I am a Computer Science graduate from York University, currently pursuing a Master's degree in Computer Science at Georgia Tech, specializing in Machine Learning. My academic journey is complemented by my entrepreneurial spirit, as I'm currently working on my startup project, Relnix, where we're developing an innovative code analysis platform.
              </p>
              <p className="text-lg leading-relaxed mt-4 animate-slide-in-bottom">
                My expertise spans across full-stack development, machine learning, and software engineering. I'm passionate about building scalable applications and leveraging cutting-edge technologies to solve complex problems. My experience includes working with modern frameworks, cloud platforms, and data analysis tools, making me a versatile developer capable of handling diverse technical challenges.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src="/images/nomad-amico.png" 
                alt="About illustration" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About