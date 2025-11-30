import classnames from "classnames";
import { motion } from "framer-motion";

function Section({ children, index = 1 }) {
  return (
    <motion.section
      transition={{ delay: 0.3 * index }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-col py-8 gap-4'
    >
      {children}
    </motion.section>
  );
}

function SectionHeading({ children, hidden }) {
  return <h2 className={classnames("text-md", { hidden })}>{children}</h2>;
}

function SectionBody({ children }) {
  return (
    <p className='font-light text-neutral-400 flex flex-col gap-4 leading-6'>
      {children}
    </p>
  );
}

Section.Heading = SectionHeading;
Section.Body = SectionBody;

export default Section;
