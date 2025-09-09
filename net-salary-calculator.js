/* Calculate PAYE tax based on taxable income */
function calculatePayee(taxableIncome) {
    let tax = 0;
    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        tax = (24000 * 0.1) + (taxableIncome - 24000) * 0.25;
    } else {
        tax = (24000 * 0.1) + (8333 * 0.25) + (taxableIncome - 32333) * 0.3;
    }
    /*  personal relief of KES 2,400 */
    return(tax - 2400);
}

//NHIF Deduction
function calculateNHIF(grossSalary) {
    return (grossSalary * 0.0275);
}

//NSSF Deduction
function calculateNSSF(grossSalary) {
    return Math.min(grossSalary, 8000) * 0.06;
}
//gross salary and net salary with deductions
function salary(basic, benefits) {
    /* Sum basic salary and benefits */
    const grossSalary = basic + benefits;
    /* Calculate deductions */
    const paye = calculatePayee(grossSalary);
    const nhif= calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    //net salary
    const netSalary = grossSalary - paye - nhif - nssf;
    return {
        grossSalary: grossSalary,
        paye: paye.toFixed(2),
        nhifDeduction: nhif,
        nssfDeduction: nssf,
        netSalary: netSalary
    };
}

/* Test the salary function with sample inputs */
function testSalary(basicSalary, benefits) {
    /* Calculate results */         
    const result = salary(basicSalary, benefits);
    /* Display results */
    console.log(`Basic Salary: ${basicSalary.toFixed(2)}`);
    console.log(`Benefits: ${benefits.toFixed(2)}`);
    console.log(`Gross Salary: ${result.grossSalary}`);
    console.log(`PAYE: ${result.paye}`);
    console.log(`NHIF: ${result.nhifDeduction}`);
    console.log(`NSSF: ${result.nssfDeduction}`);
    console.log(`Net Salary: ${result.netSalary}`);
}

/* Run test with example input */
testSalary(499999, 50000);