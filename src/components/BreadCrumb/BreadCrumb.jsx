import "./BreadCrumb.scss";
import Format from "../Format/Format";

const BreadCrumb = () => {
  return (
    <Format>
      <div className="breadcrumb">
        <div className="breadcrumb_item">
          <a href="/">Home</a>
          <span>&gt;</span>
        </div>
      </div>
    </Format>
  );
};

export default BreadCrumb;
