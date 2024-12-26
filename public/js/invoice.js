function printInvoice() {
    // Example data (replace with actual backend data)
    const invoiceData = {
      customerName: "John Doe",
      customerAddress: "123 Market Street",
      modelNo: "Galaxy S22",
      imeiNo: "123456789012345",
      rate: 20000,
      quantity: 1,
      total: 20000,
    };
  
    // Populate the invoice fields dynamically
    document.getElementById("customer-name").textContent = invoiceData.customerName;
    document.getElementById("customer-address").textContent = invoiceData.customerAddress;
    document.getElementById("model-no").textContent = invoiceData.modelNo;
    document.getElementById("imei-no").textContent = invoiceData.imeiNo;
    document.getElementById("rate").textContent = invoiceData.rate;
    document.getElementById("quantity").textContent = invoiceData.quantity;
    document.getElementById("amount").textContent = invoiceData.total;
    document.getElementById("total").textContent = invoiceData.total;
    document.getElementById('printButton').addEventListener('click', () => {
      window.print();
  });
  
    // Trigger print dialog
    window.print();
  }
  