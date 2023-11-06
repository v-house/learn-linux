import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface UpdatesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const updates = [
  {
    id: 1,
    name: "New Sunshine",
    href: "/",
    description:
      "The launch of the Sunshine's new website is being done today at 14th September 2023. We are happy to announce this",
    date: "August 25, 2023",
  },
  {
    id: 2,
    name: "New Sunshine Website Launch",
    href: "/",
    description:
      "The launch of the Sunshine's new website is being done today at 14th September 2023. We are happy to announce this",
    date: "August 25, 2023",
  },
  {
    id: 3,
    name: "New Sunshine Website Launch",
    href: "/",
    description:
      "The launch of the Sunshine's new website is being done today at 14th September 2023. We are happy to announce this",
    date: "August 25, 2023",
  },
  {
    id: 4,
    name: "New Sunshine Website Launch",
    href: "/",
    description:
      "The launch of the Sunshine's new website is being done today at 14th September 2023. We are happy to announce this",
    date: "August 25, 2023",
  },
];

const UpdatesPage: FC<UpdatesPageProps> = ({ isOpen, onClose }) => {
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
                          href="/full-documentation-link"
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
