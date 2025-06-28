BEGIN
  FOR loan_rec IN (
    SELECT l.LoanID, l.InterestRate, c.DOB
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
  ) LOOP
    IF MONTHS_BETWEEN(SYSDATE, loan_rec.DOB) / 12 > 60 THEN
      UPDATE Loans
      SET InterestRate = loan_rec.InterestRate - 1
      WHERE LoanID = loan_rec.LoanID;
    END IF;
  END LOOP;

  COMMIT;
END;
