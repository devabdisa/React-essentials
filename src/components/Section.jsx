const Section = ({title,children,...props}) => {
  return (
    <section {...props}>
      <div>{title}</div>
      {children}
    </section>
  );
};

export default Section;
