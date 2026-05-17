import React, { useRef } from "react";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>New: AI feature integrated</p>
          <img
            className="w-2.5"
            alt=""
            src="data:image/svg+xml,%3csvg%20width='13'%20height='13'%20viewBox='0%200%2013%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.94893%201.40177L9.90308%203.8843C9.89653%204.22491%2010.1127%204.67687%2010.3878%204.87993L12.0122%206.11134C13.0537%206.89736%2012.8834%207.86024%2011.6389%208.25325L9.52316%208.91482C9.16945%209.02618%208.79609%209.41264%208.70439%209.7729L8.20002%2011.6987C7.80046%2013.2183%206.80483%2013.369%205.97951%2012.0327L4.82665%2010.1659C4.61704%209.8253%204.11923%209.56984%203.72622%209.58949L1.53845%209.70085C-0.0270471%209.77945%20-0.472461%208.87552%200.54937%207.68339L1.84631%206.17684C2.08867%205.89518%202.20002%205.37117%202.08867%205.01748L1.42055%202.89522C1.03409%201.65068%201.72841%200.962908%202.96639%201.36902L4.8987%202.00439C5.22623%202.10919%205.7175%202.03714%205.99261%201.83408L8.01007%200.37994C9.10395%20-0.399533%209.97513%200.0589805%209.94893%201.40177Z'%20fill='%235044E5'/%3e%3cpath%20d='M12.6652%2012.0979L10.6805%2010.1132C10.4906%209.92321%2010.1762%209.92321%209.98622%2010.1132C9.79626%2010.3031%209.79626%2010.6175%209.98622%2010.8075L11.9709%2012.7922C12.0692%2012.8905%2012.1936%2012.9363%2012.3181%2012.9363C12.4425%2012.9363%2012.567%2012.8905%2012.6652%2012.7922C12.8552%2012.6022%2012.8552%2012.2878%2012.6652%2012.0979Z'%20fill='%235044E5'/%3e%3c/svg%3e"
          />
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Your own <span className="text-primary">blogging</span> <br />{" "}
          platform.
        </h1>

        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gary-500">
          This is your space to think out loud, to share what matters, and to
          write filters. Whether it's one word or a thousand, your story starts
          right here.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      <img
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
        src="https://quickblog-gs.vercel.app/assets/gradientBackground-BA3Ck2my.png"
      />
    </div>
  );
};

export default Header;
