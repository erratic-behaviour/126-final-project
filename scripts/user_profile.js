(function() {
    // Mock database fetch
    function fetchProfileData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    profile: {
                        fullName: "Lorenz Terania",
                        faculty: "Faculty",
                        since: "2017",
                        email: "lterania@up.edu.ph"
                    },
                    reviews: [
                        { name: "MANONG BOY", stars: "★★★★☆", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
                        { name: "CMS", stars: "★★★☆☆", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
                    ]
                });
            }, 100);
        });
    }

    function renderUI(data) {
        const { profile, reviews } = data;
        const root = document.getElementById('appRoot');

        root.innerHTML = `
            <div class="container">
                <!-- Left Profile Card -->
                <div class="profile-card">
                    <span class="edit-icon">✎</span>
                    <div class="image-container">
                        <div class="profile-image-placeholder"></div>
                    </div>
                    <div class="profile-name">${profile.fullName}</div>
                    
                    <div class="info-row">
                        <span class="info-label">${profile.faculty}</span>
                    </div>
                    
                    <div class="info-row">
                        <span class="info-label">Been in town since</span>
                        <span>${profile.since}</span>
                    </div>
                    
                    <div class="info-row">
                        <span class="info-label">Email</span>
                        <span>${profile.email}</span>
                    </div>
                </div>

                <!-- Right Reviews Section -->
                <div class="reviews-section">
                    <div class="reviews-banner">Past Reviews</div>
                    <div class="reviews-container">
                        ${reviews.map(r => `
                            <div class="review-card">
                                <div class="review-header">
                                    <span>${r.name}</span>
                                    <span class="stars">${r.stars}</span>
                                </div>
                                <span class="quote-icon">“</span>
                                <p class="review-text">${r.text}</p>
                            </div>
                        `).join('')}
                        <button class="next-btn">❯</button>
                    </div>
                </div>
            </div>
        `;
    }

    fetchProfileData().then(renderUI).catch(err => {
        document.getElementById('appRoot').innerHTML = '<p>Error loading data.</p>';
    });
})();