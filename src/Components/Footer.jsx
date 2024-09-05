const Footer = () => {
  return (
    <footer className="py-16 px-5  base:px-10 bg-slate-100 text-black">
      <div className="flex sm:flex-col md2:flex-row justify-between items-start lg:items-center">
        <div className="mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">EYE-OPENING</h1>
          <h1 className="text-4xl lg:text-5xl font-bold">PRESENTATIONS</h1>
        </div>
        <div className="flex sm:flex-wrap md:flex-row justify-around sm:w-[85%]  md2:w-[60%]">
          <div>
            <h2 className="text-xl font-bold mb-4">S:</h2>
            <ul>
              <li><a href="#" className="text-gray-700 hover:text-black">Instagram</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Behance</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Facebook</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Linkedin</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">L:</h2>
            <address className="not-italic">
              <p>202-1965 W 4th Ave</p>
              <p>Vancouver, Canada</p>
              <p className="mt-4">30 Chukarina St</p>
              <p>Lviv, Ukraine</p>
            </address>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">E:</h2>
            <a href="mailto:hello@ochi.design" className="text-gray-700 hover:text-black">hello@ochi.design</a>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">M:</h2>
            <ul>
              <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Services</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Our work</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">About us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Insights</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 border-t pt-8">
        <p className="text-gray-500">© ochi design 2024. <a href="#" className="text-gray-700 hover:text-black">Legal Terms</a></p>
        <p className="text-gray-500">Website by Obys</p>
      </div>
    </footer>
  );
};

export default Footer;
