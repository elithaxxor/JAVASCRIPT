const Footer = ({}) => {
  var today = new Date();
  return (
    <footer>
      <p>
        {" "}
        <strike> Copyright </strike>
        &copy; {today.getFullYear()} <div> Copyleft [allwrongs reserved] </div>
      </p>
    </footer>
  );
};

export default Footer;
