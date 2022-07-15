function Section({ children }) {
  return <div>{children}</div>;
}

function SectionHeading({ children }) {
  return <h1 className="text-xl font-bold">{children}</h1>;
}

function SectionDescription({ children }) {
  return <span className="text-md text-neutral-500">{children}</span>;
}

function SectionBody({ children }) {
  return <p className="text-md font-light flex flex-col gap-3 leading-6 mt-4">{children}</p>;
}

Section.Heading = SectionHeading;
Section.Body = SectionBody;
Section.Description = SectionDescription;

export default Section;
