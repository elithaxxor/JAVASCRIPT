const Header = ({}) => {
  var time = new Date();
  return (
    <p>
      {" Current Time: "}
      {time.getHours()}:{time.getMinutes()}::{time.getSeconds()}{" "}
    </p>
  );
};

export default Header;
