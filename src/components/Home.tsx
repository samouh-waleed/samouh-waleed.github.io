'use client'

import Image from 'next/image'

const Home = () => {
  return (
    <div className="py-12 flex items-center bg-dark-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div>
              <h1 className="m-0 font-big animate-slide-in-top">Hi,</h1>
              <h1 className="m-0 font-big animate-charcter">I'm Waleed,</h1>
              <p className="ls-2 mt-2 animate-slide-in-bottom">Software Engineer / ML Engineer / Full Stack Developer</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image 
                src="/images/mypic.png" 
                alt="Profile" 
                width={300}
                height={300}
                priority
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home