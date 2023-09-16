function calculateAndDisplayAverage() {
    const tableRows = table.querySelectorAll("tr");
    let totalUmur = 0;
    let totalUangSaku = 0;
  
    for (let i = 0; i < tableRows.length; i++) { // Mulai dari 0 untuk menghitung dari baris pertama (termasuk header)
      const umur = parseFloat(tableRows[i].querySelector("td:nth-child(3)").textContent);
      const uangsaku = parseFloat(tableRows[i].querySelector("td:nth-child(4)").textContent);
  
      if (!isNaN(umur)) {
        totalUmur += umur;
      }
  
      if (!isNaN(uangsaku)) {
        totalUangSaku += uangsaku;
      }
    }
  
    const jumlahData = tableRows.length; // Termasuk header
    const averageUmur = totalUmur / jumlahData;
    const averageUangSaku = totalUangSaku / jumlahData;
  
    // Menampilkan rata-rata umur dan uang saku di bawah tabel
    const averageAgeElement = document.getElementById("average-age");
    const averageAllowanceElement = document.getElementById("average-allowance");
    averageAgeElement.textContent = averageUmur.toFixed(2); // Menampilkan 2 desimal
    averageAllowanceElement.textContent = averageUangSaku.toFixed(2); // Menampilkan 2 desimal
  }