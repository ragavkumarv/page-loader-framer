// Components
//
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Loader from "./components/Loader";
import "./sass/main.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  layoutId="main-image-1"
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
