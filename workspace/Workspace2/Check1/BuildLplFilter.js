function main(status, reconDate, bankTransactionCode, cashCode) {
  var lplFilter = getLplFilter(status);
  lplFilter = addReconDate(lplFilter, reconDate);
  lplFilter = addBankTransactionCode(lplFilter, bankTransactionCode);
  lplFilter = addCashCode(lplFilter, cashCode);
 
  return lplFilter;
}

function getLplFilter(status) {
  return "(Status = " + status + ")";
}

function addReconDate(lplFilter, reconDate) {
  if (!reconDate) {
    return lplFilter;
  }

  return (
    lplFilter +
    " and (ReconciliationData.ExchangeDate >= " +
    formatDate(reconDate) +
    ")"
  );
}

function formatDate(d) {
  var date = new Date(d);
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return "" + yyyy + mm + dd;
}

function addBankTransactionCode(lplFilter, bankTransactionCode) {
  if (!bankTransactionCode) {
    return lplFilter;
  }

  return (
    lplFilter + " and (BankTransactionCode = \"" + bankTransactionCode + "\")"
  );
}

function addCashCode(lplFilter, cashCode) {
  if (!cashCode) {
    return lplFilter;
  }

  return (
    lplFilter + " and (CashCode = \"" + cashCode + "\")"
  );
}
