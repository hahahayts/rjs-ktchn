import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 bg-red text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl text-yellow-300">RJ's KTCHN</h3>
            <p className="text-sm mt-1">Homemade Filipino Delicacies</p>
          </div>

          <div className="flex flex-col items-center mb-4 md:mb-0">
            <p className="text-sm mb-2">Connect with us</p>
            <div className="flex space-x-6">
              <Link
                href="
https://www.tiktok.com/@rjs.ktchn?_t=ZS-8uOizLo9iit&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61567777436462"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/rjsktchn?igsh=cG80M2RncmwzajFo

https://www.tiktok.com/@rjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.151 0-3.507.013-4.759.069-2.33.106-3.391 1.184-3.497 3.497-.056 1.252-.069 1.608-.069 4.76 0 3.151.013 3.507.069 4.759.106 2.31 1.167 3.391 3.497 3.497 1.252.056 1.608.069 4.759.069 3.152 0 3.507-.013 4.76-.069 2.31-.106 3.391-1.187 3.496-3.497.056-1.252.07-1.608.07-4.759 0-3.152-.014-3.508-.07-4.76-.105-2.31-1.187-3.391-3.496-3.497-1.253-.056-1.608-.069-4.76-.069zm0 3.678a3.997 3.997 0 100 7.994 3.997 3.997 0 000-7.994zm0 6.591a2.594 2.594 0 110-5.188 2.594 2.594 0 010 5.188zm5.105-6.775a.934.934 0 11-1.868 0 .934.934 0 011.868 0z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-sm">
            <p>© {new Date().getFullYear()} RJ's KTCHN.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
