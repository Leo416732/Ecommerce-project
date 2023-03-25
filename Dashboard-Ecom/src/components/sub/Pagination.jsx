import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageBtn from "./PageBtn";
import "../../styles/page.css";

export default function Pagination(prop) {
  const { length } = prop;
  const pageNum = useParams();
  const [currentPage, setCurrentPage] = useState(pageNum && Number(pageNum.id));

  useEffect(() => {
    setCurrentPage(pageNum && Number(pageNum.id));
  }, [pageNum]);
  const lastCount = Math.ceil(length / 8);
  return (
    <div className="pagination">
      {lastCount > 1 && (
        <>
          {currentPage > 1 &&
            currentPage <= lastCount &&
            currentPage !== lastCount && (
              <>
                <Link
                  to={`/products/page/${currentPage - 1}`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <PageBtn btnName={"Өмнөх"} btnClass={"page-btn"} />
                </Link>
                {currentPage > 2 && (
                  <>
                    <Link
                      to={`/products/page/${1}`}
                      onClick={() => setCurrentPage(1)}
                    >
                      <PageBtn btnName={1} btnClass={"page-btn"} />
                    </Link>
                    <p>...</p>
                  </>
                )}

                {currentPage >= 2 && (
                  <Link
                    to={`/products/page/${currentPage - 1}`}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <PageBtn btnName={currentPage - 1} btnClass={"page-btn"} />
                  </Link>
                )}
                <Link to={`/products/page/${currentPage}`}>
                  <PageBtn btnName={currentPage} btnClass={"page-active"} />
                </Link>
                {currentPage < lastCount - 1 && lastCount > 2 && (
                  <>
                    <Link
                      to={`/products/page/${currentPage + 1}`}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      <PageBtn
                        btnName={currentPage + 1}
                        btnClass={"page-btn"}
                      />
                    </Link>
                    <p>...</p>
                  </>
                )}
                {lastCount !== currentPage && (
                  <>
                    <Link
                      to={`/products/page/${lastCount}`}
                      onClick={() => setCurrentPage(lastCount)}
                    >
                      <PageBtn btnName={lastCount} btnClass={"page-btn"} />
                    </Link>
                    <Link
                      to={`/products/page/${currentPage + 1}`}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      <PageBtn btnName={"Дараах"} btnClass={"page-btn"} />
                    </Link>
                  </>
                )}
              </>
            )}
          {currentPage === 1 && lastCount > 1 && (
            <>
              <Link to={`/products/page/${currentPage}`}>
                <PageBtn btnName={currentPage} btnClass={"page-active"} />
              </Link>
              <Link
                to={`/products/page/${currentPage + 1}`}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <PageBtn btnName={currentPage + 1} btnClass={"page-btn"} />
              </Link>
              {lastCount > 2 && (
                <>
                  <Link
                    to={`/products/page/${currentPage + 2}`}
                    onClick={() => setCurrentPage(currentPage + 2)}
                  >
                    <PageBtn btnName={currentPage + 2} btnClass={"page-btn"} />
                  </Link>
                </>
              )}
              {lastCount >= 4 && (
                <>
                  {" "}
                  <p>...</p>
                  <Link
                    to={`/products/page/${currentPage + 3}`}
                    onClick={() => setCurrentPage(currentPage + 3)}
                  >
                    <PageBtn btnName={currentPage + 3} btnClass={"page-btn"} />
                  </Link>
                </>
              )}
              {lastCount !== currentPage && (
                <>
                  {" "}
                  {lastCount > 4 && (
                    <Link
                      to={`/products/page/${lastCount}`}
                      onClick={() => setCurrentPage(lastCount)}
                    >
                      <PageBtn btnName={lastCount} btnClass={"page-btn"} />
                    </Link>
                  )}
                  <Link
                    to={`/products/page/${currentPage + 1}`}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <PageBtn btnName={"Дараах"} btnClass={"page-btn"} />
                  </Link>
                </>
              )}
            </>
          )}
          {currentPage === lastCount && (
            <>
              <Link
                onClick={() => setCurrentPage(currentPage - 1)}
                to={`/products/page/${currentPage - 1}`}
              >
                <PageBtn btnName={"Өмнөх"} btnClass={"page-btn"} />
              </Link>
              {currentPage > 2 && (
                <>
                  <Link
                    to={`/products/page/${1}`}
                    onClick={() => setCurrentPage(1)}
                  >
                    <PageBtn btnName={1} btnClass={"page-btn"} />
                  </Link>
                  <p>...</p>
                </>
              )}
              {currentPage > 4 && (
                <Link
                  onClick={() => setCurrentPage(currentPage - 3)}
                  to={`/products/page/${currentPage - 3}`}
                >
                  <PageBtn btnName={currentPage - 3} btnClass={"page-btn"} />
                </Link>
              )}
              {currentPage > 2 && (
                <Link
                  onClick={() => setCurrentPage(currentPage - 2)}
                  to={`/products/page/${currentPage - 2}`}
                >
                  <PageBtn btnName={currentPage - 2} btnClass={"page-btn"} />
                </Link>
              )}
              <Link
                onClick={() => setCurrentPage(currentPage - 1)}
                to={`/products/page/${currentPage - 1}`}
              >
                <PageBtn btnName={currentPage - 1} btnClass={"page-btn"} />
              </Link>
              <Link to={`/products/page/${currentPage}`}>
                <PageBtn btnName={currentPage} btnClass={"page-active"} />
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
}
