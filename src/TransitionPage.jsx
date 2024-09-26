// TransitionPage.jsx

import { motion, useIsPresent } from "framer-motion";

const TransitionPage = ({ children }) => {
  const isPresent = useIsPresent();
  return (
    <>
      {children}
      <motion.div
        className="slide-in"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
      >
        {/* <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-chibi-astronaut-rides-a-rocket-png-image_3418107.jpg"
          alt=""
        /> */}
      </motion.div>
    </>
  );
};

export default TransitionPage;
