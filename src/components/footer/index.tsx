
import HomePageText from "@/assets/HomePageText.png";

// type Props = {}

const Footer = () => {
  return (
    <>
      

      <footer className="bg-primary-100">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://victoriatd.netlify.app/" className="flex items-center">
                  <img src={HomePageText} className="h-20 mr-3" alt="Logo" />
                  {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              {/* <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div> */}
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Seguinos</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://facebook.com" className="hover:underline ">Facebook</a>
                      </li>
                      <li>
                          <a href="https://instagram.com/victoria.tecnicadental" target="_blank" className="hover:underline">Instagram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.linkedin.com/in/yamilhamui/" className="hover:underline">Victoria™</a>. Todos los derechos reservados.
          </span>

          <h6><span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Powered by <a href="https://www.linkedin.com/in/yamilhamui/" className="hover:underline">YamilH</a>
          </span></h6>
      </div>
    </div>
</footer>


    </>
  )
}

export default Footer