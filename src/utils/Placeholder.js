export const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <img 
        src="https://media.tenor.com/YO_YG_AO9GoAAAAM/chloelmao-vine.gif" 
        alt="Under Construction" 
        className="w-1/2 max-w-md"
      />
      <h1 className="mt-8 text-2xl md:text-4xl font-bold">Page Under Construction</h1>
      <p className="mt-2 text-gray-400">Please check back later!</p>
    </div>
  );
};
