import { Button } from "../../components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function UNHRC() {
      const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div
      className="min-h-screen bg-black text-white pt-20"
      style={{
        backgroundImage: `url(/unhrc.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-100% mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-left">
      <h1 className="text-5xl md:text-9xl font-black tracking-tight text-center mt-8 md:mt-16 mb-8 break-words">
  United Nations<br className="inline md:hidden" /> Human Rights Council
      </h1>
        <p className="text-2xl md:text-3xl text-gray-200 text-center mb-12">
          <strong>Agenda:</strong> Discussing National Policy Reforms
        </p>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mb-5">
          The All India Political Parties Meet (UNHRC) brings together
          representatives of Indian political parties to debate and formulate
          national policy reforms. Delegates engage in dynamic discussions,
          representing diverse political ideologies to address critical issues
          facing the nation.
        </p>
        <div className="flex flex-row sm:flex-row mb-5 gap-4">
          <a
            href="https://example.com/UNHRC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="hover:cursor-pointer mt-10 bg-white text-black text-lg font-semibold px-8 py-3 rounded-lg relative overflow-hidden group"
              style={{ transition: "color 300ms ease-in-out" }}
            >
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Matrix
              </span>
            </Button>
          </a>
          <a
            href="https://example.com/UNHRC-bg-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="hover:cursor-pointer mt-10 bg-white text-black text-lg font-semibold px-8 py-3 rounded-lg relative overflow-hidden group"
              style={{ transition: "color 300ms ease-in-out" }}
            >
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Background Guide
              </span>{" "}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UNHRC;
