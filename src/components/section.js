import classnames from "classnames";

function Section({ children }) {
  return <section className='py-6'>{children}</section>;
}

function SectionHeading({ children, hidden }) {
  return <h2 className={classnames("text-md", { hidden })}>{children}</h2>;
}

function SectionBody({ children }) {
  return (
    <p className='text-md font-light flex flex-col gap-3 leading-6 mt-4'>
      {children}
    </p>
  );
}

Section.Heading = SectionHeading;
Section.Body = SectionBody;

export default Section;
