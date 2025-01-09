describe("Dashboard Page (Overview)", () => {
  // Sebelum setiap test, pastikan user sudah login dan halaman Dashboard terbuka
  beforeEach(() => {
    // Menavigasi ke halaman login dan melakukan login
    cy.visit("/login"); // Ganti dengan URL login yang sesuai
    cy.get("input[name='username']").type("user_test"); // Ganti dengan username yang sesuai
    cy.get("input[name='password']").type("password_test"); // Ganti dengan password yang sesuai
    cy.get("button[type='submit']").click(); // Men-submit form login

    // Pastikan login berhasil dan user diarahkan ke halaman Dashboard
    cy.url().should("include", "/dashboard"); // Memastikan URL mengarah ke dashboard
  });

  it("should load the Dashboard overview page", () => {
    // Memastikan komponen utama halaman dashboard tersedia
    cy.get("h1").contains("Overview"); // Pastikan halaman memiliki header "Overview"

    // Pastikan Navbar dan komponen utama ada
    cy.get("nav").should("be.visible"); // Memastikan navbar terlihat
    cy.get(".card.balance").should("be.visible"); // Misalnya, pastikan card saldo terlihat
    cy.get(".card.transactions").should("be.visible"); // Pastikan card transaksi terbaru ada
    cy.get(".card.goals").should("be.visible"); // Pastikan card tujuan terlihat

    // Verifikasi elemen-elemen lainnya yang ada pada halaman overview
    cy.get(".btn").contains("Next").should("be.visible"); // Misalnya, tombol "Next" untuk transaksi
  });

  it("should allow the user to navigate to the 'Balances' page", () => {
    // Pastikan tombol 'Balances' ada dan klik untuk pergi ke halaman balances
    cy.contains("Balances").click(); // Klik link atau tombol untuk navigasi ke Balances
    cy.url().should("include", "/balancer"); // Pastikan URL berubah ke halaman Balances
    cy.get("h1").contains("Balances").should("be.visible"); // Pastikan halaman balances ditampilkan
  });

  it("should allow the user to view the 'Recent Transactions'", () => {
    // Verifikasi bagian transaksi terbaru ada dan tombol untuk navigasi 'Next' atau 'Back'
    cy.get(".card.transactions").should("be.visible"); // Pastikan card transaksi terbaru ada
    cy.get("button").contains("Next").click(); // Klik tombol "Next"
    cy.get("button").contains("Back").should("be.visible"); // Pastikan tombol "Back" terlihat
  });

  it("should allow the user to switch themes", () => {
    // Pilih theme yang berbeda
    cy.get(".theme-selector button").first().click(); // Pilih theme pertama (misalnya 'theme-green')
    cy.get("body").should("have.class", "theme-green"); // Pastikan theme berubah
  });

  // Jika ada Logout
  it("should allow the user to log out", () => {
    cy.contains("Logout").click(); // Klik tombol Logout
    cy.url().should("include", "/login"); // Pastikan user diarahkan ke halaman login setelah logout
  });
});
