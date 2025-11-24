

export const Signup = () => {
  return (
    <div className="flex justify-center py-10">
      <form className="w-2/5 shadow-xl rounded-xl p-8" action="">
        <h1 className="text-center text-4xl font-semibold text-primary1 py-4">
          Sign Up
        </h1>
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 text-base font-medium" htmlFor="">
            First Name
          </label>
          <input
            className="py-3 w-full px-5 border rounded-xl outline-none border-gray-200"
            type="text" placeholder="Enter Your First Name"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-gray-600 text-base font-medium" htmlFor="">
            Last Name
          </label>
          <input
            className="py-3 w-full px-5 border rounded-xl outline-none border-gray-200"
            type="text" placeholder="Enter Your Last Name"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-gray-600 text-base font-medium" htmlFor="">
            Email
          </label>
          <input
            className="py-3 w-full px-5 border rounded-xl outline-none border-gray-200"
            type="email" placeholder="Enter Your Email" required
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-gray-600 text-base font-medium" htmlFor="">
            Password
          </label>
          <input
            className="py-3 w-full px-5 border rounded-xl outline-none border-gray-200"
            type="password" placeholder="Password"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-gray-600 text-base font-medium" htmlFor="">
            Confirm Password
          </label>
          <input
            className="py-3 w-full px-5 border rounded-xl outline-none border-gray-200"
            type="password" placeholder="Confirm Password"
            name=""
            id=""
          />
        </div>
        <div className="mt-8">
          <button type="submit" className="w-full py-3 hover:bg-[#67dae7] duration-500 bg-[#59C6D2] text-white text-xl font-semibold rounded-xl ">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
