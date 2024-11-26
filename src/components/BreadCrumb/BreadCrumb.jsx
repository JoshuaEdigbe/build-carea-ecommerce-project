import "./BreadCrumb.scss";

const BreadCrumb = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb_item">
          <a href="/">Ecommerce</a>
          <span>&gt;</span>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
