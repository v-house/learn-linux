import { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface UpdatesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const commands = ["clear"];

const UpdatesPage: FC<UpdatesPageProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(Array(commands.length).fill(false));

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    const newCopied = [...copied];
    newCopied[index] = true;
    setCopied(newCopied);
    setTimeout(() => {
      const newCopied = [...copied];
      newCopied[index] = false;
      setCopied(newCopied);
    }, 3000);
  };

  return (
    <Transition.Root show={isOpen} as={Dialog} onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-xl font-bold text-gray-900">
                        <div>Short Documentation</div>
                        <a
                          href="/full-documentation"
                          className="text-blue-600 hover:underline text-sm flex flex-row gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Full Documentation
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-red-700 hover:text-red-500"
                          onClick={onClose}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="text-black mt-2 text-sm font-semibold">
                      Try the following commands:
                    </div>
                    <div className="flex flex-col text-black text-sm font-extrabold my-2">
                      <table className="w-full">
                        <tbody>
                          {commands.map((command, index) => (
                            <tr key={index}>
                              <td className="py-2">{command}</td>
                              <td className="py-2 text-end">
                                {copied[index] ? (
                                  <button className="mx-auto text-green-500">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  </button>
                                ) : (
                                  <button
                                    className="text-blue-600 hover:underline"
                                    onClick={() =>
                                      copyToClipboard(command, index)
                                    }
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                      />
                                    </svg>
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-4 sm:px-6 text-black text-xs">
                    Developed by K Vivek Kumar
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
};

export default UpdatesPage;
