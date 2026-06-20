let currentService = "";

// Fungsi untuk membuka Pop-up Modal
function openModal(title, description) {
    currentService = title; // Simpan nama layanan yang dipilih
    
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    
    const modal = document.getElementById("serviceModal");
    modal.classList.add("show");
}

// Fungsi untuk menutup Pop-up Modal
function closeModal() {
    const modal = document.getElementById("serviceModal");
    modal.classList.remove("show");
}

// Menutup modal jika pengguna mengklik area luar kotak modal
window.onclick = function(event) {
    const modal = document.getElementById("serviceModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Fungsi untuk mengarahkan orderan langsung ke WhatsApp
function orderViaWhatsApp() {
    const nomorWA = "628563581933"; // Ganti dengan nomor WhatsApp operasional tokomu
    const pesan = `Halo SURZ STORE, saya ingin bertanya/order mengenai layanan *${currentService}*. Bagaimana langkah selanjutnya?`;
    
    // Encode pesan teks agar aman di URL
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    
    // Buka tautan WhatsApp di tab baru
    window.open(url, '_blank');
}