const Dashboard = () => {
  return (
    <div className="flex items-center">
      <div className="container px-2 mx-auto my-5">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-5 bg-white rounded shadow-lg dark:bg-gray-900">
            <div className="flex items-center space-x-4">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-50 text-fuchsia-400">
                  {/* <HowToRegIcon /> */}
                </div>
              </div>
              <div>
                <div className="text-gray-800 dark:text-gray-300">
                  Total Categories
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-300">
                  9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
