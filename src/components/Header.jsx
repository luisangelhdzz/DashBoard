const Header = () => {
  return (
    <header className="bg-very-pale-blue rounded-b-[20px] pt-8 px-6 pb-20">
      <h1 className="text-very-dark-blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
      <p className="text-dark-grayish-blue font-bold mb-6">Total Followers: 23,004</p>
      <hr className="h-px border-0 bg-gray-300 mb-[19px]" />

      <div className="flex items-center justify-between">
        <label htmlFor="darkmode" className="text-dark-grayish-blue font-bold cursor-pointer">
          Dark Mode
        </label>

        <label className="relative inline-flex cursor-pointer">
          <input id="darkmode" type="checkbox" className="sr-only peer" />
          <span
            className="w-12 h-6 rounded-full bg-gray-400 transition-colors peer-checked:bg-blue-600
                       after:content-[''] after:absolute after:top-[3px] after:left-[3px]
                       after:w-[18px] after:h-[18px] after:rounded-full after:bg-white
                       after:transition-transform peer-checked:after:translate-x-6"
          />
        </label>
      </div>
    </header>
  );
};

export default Header;