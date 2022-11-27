function Pagination({currentPages, totalPages, handelPagination}) {
  const prev = <button data-testid="prev-page" onClick={()=>handelPagination(currentPages - 1)}disabled = {currentPages === 1}>PREV</button>;

  const currentPage = <button data-testid="current-page">{currentPages}</button>;

  const next = <button data-testid="next-page" disabled = {currentPages === totalPages} onClick={()=>handelPagination(currentPages +  1)}>NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalPages}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
