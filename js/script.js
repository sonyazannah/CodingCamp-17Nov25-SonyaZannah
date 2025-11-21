welcomeMessage();

// Function to display welcome message
function welcomeMessage() {
    /// Prompt user for their name
    let username = prompt("What should I call you?"); 

    /// Handle case where user cancels or enters empty name
    if (!username) {
        username = "Guest";
    }
    /// Display welcome message
    document.getElementById("welcome-speech").innerText = "Welcome, " + username + "!";

}   

// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded!'); // Debug line
    
    const contactForm = document.getElementById('contactForm');
    const resultContent = document.getElementById('resultContent');

    // Cek apakah element ditemukan
    if (!contactForm) {
        console.error('Form dengan ID contactForm tidak ditemukan!');
        return;
    }
    if (!resultContent) {
        console.error('Element dengan ID resultContent tidak ditemukan!');
        return;
    }

    console.log('Semua element ditemukan, form siap!');

    // Format tanggal untuk display
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // ✅ PENTING: Cegah refresh halaman
        console.log('Form submitted!'); // Debug line
        
        // Get form values
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value;

        console.log('Data form:', { name, birthdate, gender: gender?.value, message }); // Debug

        // Validasi
        if (!name || !birthdate || !gender || !message) {
            alert('Harap lengkapi semua field!');
            return;
        }

        // Tampilkan hasil
        displaySubmissionResult({
            name: name,
            birthdate: birthdate,
            gender: gender.value,
            message: message
        });

        // Reset form
        contactForm.reset();
        console.log('Form reset dan hasil ditampilkan!'); // Debug
    });

    // Display submission result
    function displaySubmissionResult(data) {
        console.log('Menampilkan hasil:', data); // Debug
        
        resultContent.innerHTML = `
            <div class="space-y-4">
                <div class="flex items-start">
                    <div class="w-8 text-blue-500">👤</div>
                    <div>
                        <p class="font-medium">Nama</p>
                        <p class="text-gray-700">${data.name}</p>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="w-8 text-blue-500">📅</div>
                    <div>
                        <p class="font-medium">Tanggal Lahir</p>
                        <p class="text-gray-700">${formatDate(data.birthdate)}</p>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="w-8 text-blue-500">⚧</div>
                    <div>
                        <p class="font-medium">Jenis Kelamin</p>
                        <p class="text-gray-700">${data.gender}</p>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="w-8 text-blue-500">💬</div>
                    <div>
                        <p class="font-medium">Pesan</p>
                        <p class="text-gray-700">${data.message}</p>
                    </div>
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                    <p class="text-sm text-gray-500">
                        Submitted: ${new Date().toLocaleString('id-ID')}
                    </p>
                </div>
            </div>
        `;
    }
});