import { Header as header0 } from "react-bootstrap";

const Header = ({}) => {
  var time = new Date();
  return (
    <div class="card">
      <div class="col-sm-0">
        Quote
        <blockquote class="blockquote mb-0">
          <p style={{ color: "red" }}>Let Me Hack y0u!</p>
          <header0 class="blockquote-footer">
            Someone famous  - <cite title="Source Title">SourceCode</cite>
          </header0>
        </blockquote>
      </div>
    </div>
  );
};

export default Header;
