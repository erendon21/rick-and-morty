export const NavPage = (props) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-light btn-sm"
        onClick={() => {
            if(props.page > 1) {
                props.setPage(props.page - 1);
            }
        }}
        disabled={props.page <= 1}
      >
        {/* <p> Page: {props.page}</p> */}
        {/* Page: {props.page - 1} */}
        Page: { props.page > 1 ? props.page - 1 : 1 }
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          //   console.log("click");
          props.setPage(props.page + 1);
        }}
      >
        Page: {props.page + 1}
      </button>
    </header>
  );
};
