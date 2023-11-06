import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-500 text-white p-6">
      <div className="container">
        <div className="md:order-2 text-end">
          <p className="mb-2 text-sm font-semibold">
            Developed by K Vivek Kumar
          </p>
          <p className="text-xs">
            <a
              href="https://github.com/v-house/learn-linux.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:underline"
            >
              Contribute to the project
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
