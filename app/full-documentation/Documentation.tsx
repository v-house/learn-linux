import React from "react";

const Documentation: React.FC = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-indigo-700 mb-8">
            Try-Linux Full Documentation
          </h1>

          <p className="text-red-700 mb-4">
            Note: This documentation is currently under construction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Table of Contents
          </h2>
          <ul className="list-decimal list-inside pl-4 text-gray-600">
            <li>
              <a
                href="#getting-started"
                className="text-indigo-700 hover:underline"
              >
                1. Getting Started
              </a>
            </li>
            <li>
              <a
                href="#practice-commands"
                className="text-indigo-700 hover:underline"
              >
                2. Practice Linux Commands
              </a>
              <ul className="list-decimal list-inside pl-4">
                <li>
                  <a
                    href="#basic-commands"
                    className="text-indigo-700 hover:underline"
                  >
                    2.1. Basic Linux Commands
                  </a>
                </li>
                <li>
                  <a
                    href="#intermediate-commands"
                    className="text-indigo-700 hover:underline"
                  >
                    2.2. Intermediate Linux Commands
                  </a>
                </li>
                <li>
                  <a
                    href="#advanced-commands"
                    className="text-indigo-700 hover:underline"
                  >
                    2.3. Advanced Linux Commands
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <section id="getting-started" className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              1. Getting Started
            </h2>
            <p className="text-gray-600">
              Welcome to Try-Linux, the platform for practicing Linux commands.
              Begin your journey with these simple steps:
            </p>
            <ol className="list-decimal list-inside pl-4 text-gray-600">
              <li>
                Visit the website:{" "}
                <a
                  href="https://try-linux.vercel.app/"
                  className="text-indigo-700 hover:underline"
                >
                  Try-Linux
                </a>
              </li>
              <li>Start practicing Linux commands</li>
            </ol>
          </section>

          <section id="practice-commands" className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              2. Practice Linux Commands
            </h2>
            <p className="text-gray-600">
              Explore and master a diverse range of Linux commands to enhance
              your skills.
            </p>

            <h3
              id="basic-commands"
              className="text-xl font-semibold text-gray-700 mb-3"
            >
              2.1. Basic Linux Commands
            </h3>
            <p className="text-gray-600">
              Start with fundamental Linux commands:
            </p>
            <table className="w-full text-gray-600 border-collapse border border-gray-300 my-4">
              <thead className="bg-indigo-700 text-white text-left">
                <tr>
                  <th className="py-2 px-4">Command</th>
                  <th className="py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">clear</td>
                  <td className="py-2 px-4">Clears the Terminal</td>
                </tr>
              </tbody>
            </table>

            <h3
              id="intermediate-commands"
              className="text-xl font-semibold text-gray-700 mb-3"
            >
              2.2. Intermediate Linux Commands
            </h3>
            <p className="text-gray-600">
              Explore intermediate Linux commands:
            </p>
            <table className="w-full text-gray-600 border-collapse border border-gray-300 my-4">
              <thead className="bg-indigo-700 text-white text-left">
                <tr>
                  <th className="py-2 px-4">Command</th>
                  <th className="py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>

            <h3
              id="advanced-commands"
              className="text-xl font-semibold text-gray-700 mb-3"
            >
              2.3. Advanced Linux Commands
            </h3>
            <p className="text-gray-600">Master advanced Linux commands:</p>
            <table className="w-full text-gray-600 border-collapse border border-gray-300 my-4">
              <thead className="bg-indigo-700 text-white text-left">
                <tr>
                  <th className="py-2 px-4">Command</th>
                  <th className="py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
