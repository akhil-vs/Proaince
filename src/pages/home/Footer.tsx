const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl flex-shrink-0 flex items-center text-proaince font-bold">
              PROAINCE
            </div>
            <p className="text-gray-400 text-center">
              Empowering businesses with innovative AI solutions to drive growth and transformation.
            </p>
            <div className="flex space-x-4 py-4 justify-around">
                    <a href="https://www.facebook.com/profile.php?id=61572637971222" className="hover:text-blue-500 transition duration-300" target="_blank">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/proaince/" className="hover:text-blue-500 transition duration-300" target="_blank">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/proaince.ltd" className="hover:text-blue-500 transition duration-300" target="_blank">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zM12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 1.5a4 4 0 110 8 4 4 0 010-8z"></path></svg>
                    </a>
                </div>
                <p className="text-center">
                    <a className="hover:text-blue-500 transition duration-300" href="mailto:info@proaince.com">info@proaince.com</a>
                </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Products</h3>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="text-gray-400 hover:text-white text-center">RecruiTrainer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-center">ProcureAigent</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Company</h3>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press Kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights on AI.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ProAInce. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Cookies Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;