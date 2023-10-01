import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="landing_page flex flex-col justify-center align-middle h-screen mx-auto w-2/4 text-center">
      <div>
        <h1 className="text-lg font-bold text-violet-500">
          Enter into Student Info System
        </h1>
        <Link to="/chat">
          <button className="bg-violet-400 text-white rounded-lg px-3 py-1">
            Enroll Now!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
