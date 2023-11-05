export default function Topnav() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="text-4xl mr-4">!{">"}</span>
          <span className="font-semibold text-xl tracking-tight">
            Learn Linux
          </span>
        </div>
        <div className="">
          <div className="">
            <a
              href="#responsive-header"
              className="text-teal-200 hover:text-white mr-4 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Try these!!
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
