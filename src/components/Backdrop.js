import { motion } from "framer-motion";

export default function Backdrop({ setOpenMobileMenu }) {
  return (
    <motion.div
      initial={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(0px)",
      }}
      animate={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(2px)",
      }}
      exit={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(0px)",
      }}
      className="backdrop"
      onClick={() => setOpenMobileMenu(false)}
    />
  );
}
