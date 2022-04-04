import React from "react";
import "flowbite";
const FAQ = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-5 mb-32">
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is Context Api? 🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The React <code>Context API</code> is a way for a React app to
            effectively produce global variables that can be passed around. This
            is the alternative to <code>prop drilling</code> or moving props
            from grandparent to child to parent, and so on.{" "}
            <code>React.createContext()</code> is all you need. It returns a
            consumer and a provider. Provider is a component that as it's names
            suggests provides the state to its children. It will hold the
            "store" and be the parent of all the components that might need that
            store. Consumer as it so happens is a component that consumes and
            uses the state.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is Semantic Tag? 🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Semantic HTML elements are those that clearly describe their meaning
            in a human and machine readable way. semantic tags make it clear to
            the browser what the meaning of a page and its content is. That
            clarity is also communicated with search engines, ensuring that the
            right pages are delivered for the right queries. Assistive
            technologies such as screen readers rely on semantically-rich HTML
            to process web pages and help users with low vision navigate them.
            Semantic tags tell screen reader users where they are and how they
            can interact with the current page.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What are the Difference between Inline, Inline Block, Block Level
            Element? 🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-3 py-3">
                      Inline
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Inline-Block
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Block
                    </th>
                    <th scope="col" className="px-3 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                    <td className="px-3 py-4">Occupies only content’s space. </td>
                    <td className="px-3 py-4">
                      Looks like inline from the outside, behaves like
                      blocklevel on the inside. Occupies only content’s space.
                    </td>
                    <td className="px-3 py-4">
                      Elements formatted visually as blocks.
                    </td>
                    <td className="px-3 py-4 text-right"></td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                    <td className="px-3 py-4">Causes no line-breaks</td>
                    <td className="px-3 py-4">Causes no line-breaks </td>
                    <td className="px-3 py-4">100% of parent’s width</td>
                    <td className="px-3 py-4 text-right"></td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                    <td className="px-3 py-4">Elements remain in one line without creating new line</td>
                    <td className="px-3 py-4">Elements remain in one line without creating new line </td>
                    <td className="px-3 py-4">Vertically, one after another </td>
                    <td className="px-3 py-4 text-right"></td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 text-center">
                    <td className="px-3 py-4">
                      Box model is different: heights and widths do not apply.
                    </td>
                    <td className="px-3 py-4">
                      Box model works : heights and widths apply.
                    </td>
                    <td className="px-3 py-4">Box model works : heights and widths apply.</td>
                    <td className="px-3 py-4 text-right"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
