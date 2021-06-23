const SectionWrapper = ({ children, className }) => {
  return <section className={`container ${className}`}>{children}</section>;
};

export { SectionWrapper };
