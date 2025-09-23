


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">JOSH KRAFT</h2>
            <p className="text-gray-400">Democrat for Mayor</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">Facebook</a>
              <a href="#" className="text-white hover:text-gray-300">Twitter</a>
              <a href="#" className="text-white hover:text-gray-300">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Get Involved</h3>
            <a href="/donate" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700">Donate</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Josh Kraft for Mayor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
