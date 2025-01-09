import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex bg-special-mainBg w-screen min-h-screen max-w-full">
      {/* Navbar start */}
      <Navbar />
      {/* Navbar end */}

      <div className="flex-1 flex flex-col relative">
        {/* Header start */}
        <div className="fixed top-0 left-0 right-0 z-10">
          <Header />
        </div>
        {/* Header end */}

        {/* Content start */}
        <main className="fixed top-14 left-72 right-0 bottom-0 overflow-y-auto px-6 py-4">
          {children}
        </main>
        {/* Content end */}
      </div>
    </div>
  );
};

export default MainLayout;
