'use client'

const Resume = () => {
  return (
    <div className="bg-darker-blue py-12">
      <div className="container mx-auto px-4 py-8 bg-darker-blue animate-slide-in-top">
        <h2 className="font-jost font-bold tracking-wider text-2xl md:text-3xl mb-4">Resume</h2>
        <hr className="mb-6" />
        
        <a
          href="/Waleed_Samouh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-accent hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-6 transition-colors duration-300"
        >
          Download Resume
        </a>
        
        <div className="flex justify-center">
          <object
            data="/Waleed_Samouh_Resume.pdf"
            type="application/pdf"
            className="w-full h-[1100px]"
          >
            <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
          </object>
        </div>
      </div>
    </div>
  )
}

export default Resume