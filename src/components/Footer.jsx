import { Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 mt-[-2.3rem] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Secretary General</h3>
              <p className="text-gray-400 text-base">Priyanshu Biswas: +91 93533 00298</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Director General</h3>
              <p className="text-gray-400 text-base">Srihitha Moole: +91 88845 19519</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a
                href="mailto:chmun@gmail.com"
                className="text-gray-400 hover:text-white text-base transition-colors duration-300 ease-in-out"
              >
                chmun@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
            <a
              href="https://www.instagram.com/chmun25/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Instagram className="w-7 h-7 mr-3" />
              <span className="text-base">Instagram</span>
            </a>
          </div>

          {/* School Information */}
          <div className="flex flex-col items-end text-right">
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Chrysalis High Kadugodi
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Chrysalis High School,
              <br />
              Kadugodi, Bengaluru,
              <br />
              Karnataka 560067, India
            </p>
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="mt-4 mb-[-3rem] pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Chrysalis High Model United Nations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;