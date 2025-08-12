// WorkConnect Daily Wage Worker Platform JavaScript

// Application data
const appData = {
  "workers": [
    {
      "id": 1,
      "name": "Rajesh Kumar",
      "category": "Plumber",
      "experience": 8,
      "rating": 8.7,
      "location": "Delhi NCR",
      "phone": "+91 98765 43210",
      "skills": ["Pipe Installation", "Tap Repair", "Bathroom Renovation"],
      "dailyWage": "₹800-1200",
      "availability": "Full-time",
      "profileImage": "/api/placeholder/150/150",
      "workImages": ["/api/placeholder/200/150", "/api/placeholder/200/150"],
      "ratings": {
        "quality": 9.1,
        "punctuality": 8.5,
        "communication": 8.3,
        "value": 8.8
      },
      "reviews": [
        {
          "customer": "Priya Sharma",
          "rating": 9,
          "comment": "Excellent work quality. Fixed our bathroom leak perfectly.",
          "date": "2025-01-10"
        },
        {
          "customer": "Amit Singh",
          "rating": 8,
          "comment": "Professional and punctual. Highly recommended!",
          "date": "2025-01-05"
        }
      ]
    },
    {
      "id": 2,
      "name": "Sunita Devi",
      "category": "Cleaner",
      "experience": 5,
      "rating": 9.2,
      "location": "Mumbai",
      "phone": "+91 87654 32109",
      "skills": ["House Cleaning", "Office Cleaning", "Deep Cleaning"],
      "dailyWage": "₹500-700",
      "availability": "Part-time",
      "profileImage": "/api/placeholder/150/150",
      "workImages": ["/api/placeholder/200/150"],
      "ratings": {
        "quality": 9.5,
        "punctuality": 9.0,
        "communication": 8.8,
        "value": 9.3
      },
      "reviews": [
        {
          "customer": "Deepak Verma",
          "rating": 10,
          "comment": "Outstanding cleaning service. Very thorough and reliable.",
          "date": "2025-01-08"
        }
      ]
    },
    {
      "id": 3,
      "name": "Mohammad Ali",
      "category": "Electrician",
      "experience": 12,
      "rating": 8.9,
      "location": "Bangalore",
      "phone": "+91 76543 21098",
      "skills": ["Wiring", "Fan Installation", "Appliance Repair"],
      "dailyWage": "₹1000-1500",
      "availability": "Full-time",
      "profileImage": "/api/placeholder/150/150",
      "workImages": ["/api/placeholder/200/150", "/api/placeholder/200/150"],
      "ratings": {
        "quality": 9.2,
        "punctuality": 8.7,
        "communication": 8.6,
        "value": 9.1
      },
      "reviews": [
        {
          "customer": "Lakshmi Nair",
          "rating": 9,
          "comment": "Fixed all our electrical issues quickly and safely.",
          "date": "2025-01-12"
        }
      ]
    },
    {
      "id": 4,
      "name": "Ramesh Chand",
      "category": "Carpenter",
      "experience": 15,
      "rating": 9.4,
      "location": "Chennai",
      "phone": "+91 65432 10987",
      "skills": ["Furniture Making", "Door Repair", "Kitchen Cabinets"],
      "dailyWage": "₹1200-1800",
      "availability": "Full-time",
      "profileImage": "/api/placeholder/150/150",
      "workImages": ["/api/placeholder/200/150", "/api/placeholder/200/150", "/api/placeholder/200/150"],
      "ratings": {
        "quality": 9.7,
        "punctuality": 9.2,
        "communication": 9.0,
        "value": 9.6
      },
      "reviews": [
        {
          "customer": "Ravi Kumar",
          "rating": 10,
          "comment": "Exceptional carpentry work. Made beautiful custom furniture.",
          "date": "2025-01-15"
        },
        {
          "customer": "Meera Patel",
          "rating": 9,
          "comment": "Very skilled carpenter. Highly professional.",
          "date": "2025-01-10"
        }
      ]
    },
    {
      "id": 5,
      "name": "Geeta Sharma",
      "category": "Cook",
      "experience": 7,
      "rating": 8.5,
      "location": "Pune",
      "phone": "+91 54321 09876",
      "skills": ["North Indian Cuisine", "South Indian Cuisine", "Party Catering"],
      "dailyWage": "₹600-900",
      "availability": "Flexible",
      "profileImage": "/api/placeholder/150/150",
      "workImages": ["/api/placeholder/200/150"],
      "ratings": {
        "quality": 8.8,
        "punctuality": 8.2,
        "communication": 8.3,
        "value": 8.7
      },
      "reviews": [
        {
          "customer": "Suresh Gupta",
          "rating": 9,
          "comment": "Delicious food and very hygienic cooking.",
          "date": "2025-01-13"
        }
      ]
    },
    {
      "id": 6,
      "name": "Vikash Singh",
      "category": "Driver",
      "experience": 10,
      "rating": 8.1,
      "location": "Kolkata",
      "phone": "+91 43210 98765",
      "skills": ["Car Driving", "Two Wheeler", "Delivery Services"],
      "dailyWage": "₹700-1000",
      "availability": "Full-time",
      "profileImage": "/api/placeholder/150/150",
      "workImages": [],
      "ratings": {
        "quality": 8.3,
        "punctuality": 8.0,
        "communication": 7.8,
        "value": 8.2
      },
      "reviews": [
        {
          "customer": "Anita Das",
          "rating": 8,
          "comment": "Safe driving and good knowledge of routes.",
          "date": "2025-01-11"
        }
      ]
    }
  ],
  "categories": [
    {
      "name": "Plumber",
      "icon": "🔧",
      "count": 156,
      "avgRate": "₹800-1200"
    },
    {
      "name": "Electrician", 
      "icon": "⚡",
      "count": 134,
      "avgRate": "₹900-1500"
    },
    {
      "name": "Carpenter",
      "icon": "🔨",
      "count": 89,
      "avgRate": "₹1000-1600"
    },
    {
      "name": "Cleaner",
      "icon": "🧽",
      "count": 203,
      "avgRate": "₹400-700"
    },
    {
      "name": "Cook",
      "icon": "👩‍🍳",
      "count": 167,
      "avgRate": "₹600-1000"
    },
    {
      "name": "Driver",
      "icon": "🚗",
      "count": 145,
      "avgRate": "₹700-1200"
    },
    {
      "name": "Security Guard",
      "icon": "🛡️",
      "count": 78,
      "avgRate": "₹800-1100"
    },
    {
      "name": "Painter",
      "icon": "🎨",
      "count": 92,
      "avgRate": "₹900-1400"
    }
  ],
  "subscriptionPlans": [
    {
      "duration": "1 Month",
      "price": 300,
      "features": ["Basic Profile", "Contact Details Visible", "Job Applications"],
      "popular": false
    },
    {
      "duration": "3 Months",
      "price": 850,
      "originalPrice": 900,
      "savings": "20% savings",
      "features": ["Enhanced Profile", "Priority Listing", "Advanced Analytics", "Featured Badge"],
      "popular": true
    },
    {
      "duration": "1 Year",
      "price": 2499,
      "originalPrice": 3600,
      "savings": "60% savings",
      "features": ["Premium Profile", "Top Search Results", "Detailed Analytics", "Customer Support", "Marketing Tools"],
      "popular": false
    }
  ],
  "testimonials": [
    {
      "customer": "Rajesh Mehta",
      "feedback": "Found an excellent plumber through this app. Quick response and quality work!",
      "rating": 5,
      "location": "Delhi"
    },
    {
      "customer": "Priya Singh",
      "feedback": "Great platform for finding reliable workers. The rating system really helps.",
      "rating": 5,
      "location": "Mumbai"
    }
  ]
};

// Application state
let currentUser = null;
let currentPage = 'landing';
let searchResults = [];
let selectedSubscriptionPlan = null;

// DOM Elements
const sections = {
  landing: document.getElementById('landing-page'),
  workerSignup: document.getElementById('worker-signup'),
  customerLogin: document.getElementById('customer-login'),
  homePage: document.getElementById('home-page'),
  searchResults: document.getElementById('search-results'),
  workerProfile: document.getElementById('worker-profile'),
  customerDashboard: document.getElementById('customer-dashboard'),
  workerDashboard: document.getElementById('worker-dashboard')
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  renderLandingPage();
});

function initializeApp() {
  // Hide all sections except landing
  Object.values(sections).forEach(section => {
    if (section) section.classList.add('hidden');
  });
  
  if (sections.landing) {
    sections.landing.classList.remove('hidden');
  }
}

function setupEventListeners() {
  // Navigation buttons
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const heroLogin = document.getElementById('hero-login');
  const heroSignup = document.getElementById('hero-signup');
  
  if (loginBtn) loginBtn.addEventListener('click', () => showPage('customerLogin'));
  if (signupBtn) signupBtn.addEventListener('click', () => showPage('workerSignup'));
  if (heroLogin) heroLogin.addEventListener('click', () => showPage('customerLogin'));
  if (heroSignup) heroSignup.addEventListener('click', () => showPage('workerSignup'));
  
  // Back buttons
  const backToLanding = document.getElementById('back-to-landing');
  const backToLandingLogin = document.getElementById('back-to-landing-login');
  if (backToLanding) backToLanding.addEventListener('click', () => showPage('landing'));
  if (backToLandingLogin) backToLandingLogin.addEventListener('click', () => showPage('landing'));
  
  // Forms
  const workerSignupForm = document.getElementById('worker-signup-form');
  const customerLoginForm = document.getElementById('customer-login-form');
  
  if (workerSignupForm) {
    workerSignupForm.addEventListener('submit', handleWorkerSignup);
  }
  
  if (customerLoginForm) {
    customerLoginForm.addEventListener('submit', handleCustomerLogin);
  }
  
  // Search functionality
  const mainSearch = document.getElementById('main-search');
  const searchBtn = document.getElementById('search-btn');
  const homeSearch = document.getElementById('home-search');
  const homeSearchBtn = document.getElementById('home-search-btn');
  
  if (searchBtn) searchBtn.addEventListener('click', performSearch);
  if (homeSearchBtn) homeSearchBtn.addEventListener('click', performHomeSearch);
  if (mainSearch) {
    mainSearch.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') performSearch();
    });
  }
  if (homeSearch) {
    homeSearch.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') performHomeSearch();
    });
  }
  
  // Filter functionality
  const categoryFilter = document.getElementById('category-filter');
  const locationFilter = document.getElementById('location-filter');
  const ratingFilter = document.getElementById('rating-filter');
  
  if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
  if (locationFilter) locationFilter.addEventListener('change', applyFilters);
  if (ratingFilter) ratingFilter.addEventListener('change', applyFilters);
  
  // View toggle
  const gridView = document.getElementById('grid-view');
  const listView = document.getElementById('list-view');
  
  if (gridView) {
    gridView.addEventListener('click', () => {
      gridView.classList.add('active');
      listView.classList.remove('active');
      document.getElementById('search-results-container').classList.remove('list-view');
    });
  }
  
  if (listView) {
    listView.addEventListener('click', () => {
      listView.classList.add('active');
      gridView.classList.remove('active');
      document.getElementById('search-results-container').classList.add('list-view');
    });
  }
  
  // Sort functionality
  const sortBy = document.getElementById('sort-by');
  if (sortBy) sortBy.addEventListener('change', sortSearchResults);
  
  // Profile navigation
  const backToSearch = document.getElementById('back-to-search');
  if (backToSearch) {
    backToSearch.addEventListener('click', () => showPage('searchResults'));
  }
  
  // User menu
  const profileBtn = document.getElementById('profile-btn');
  const logoutBtn = document.getElementById('logout-btn');
  
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      if (currentUser && currentUser.type === 'customer') {
        showPage('customerDashboard');
      } else if (currentUser && currentUser.type === 'worker') {
        showPage('workerDashboard');
      }
    });
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      currentUser = null;
      showPage('landing');
      updateNavigation();
    });
  }
  
  // Wage slider
  const wageSlider = document.getElementById('wage-slider');
  if (wageSlider) {
    wageSlider.addEventListener('input', updateWageDisplay);
  }
  
  // Password toggle
  const passwordToggle = document.getElementById('password-toggle');
  if (passwordToggle) {
    passwordToggle.addEventListener('click', togglePassword);
  }
  
  // Modal functionality
  const contactModal = document.getElementById('contact-modal');
  const closeContactModal = document.getElementById('close-contact-modal');
  const payAndContact = document.getElementById('pay-and-contact');
  
  if (closeContactModal) {
    closeContactModal.addEventListener('click', () => {
      contactModal.classList.add('hidden');
    });
  }
  
  if (contactModal) {
    contactModal.addEventListener('click', function(e) {
      if (e.target === contactModal) {
        contactModal.classList.add('hidden');
      }
    });
  }
  
  if (payAndContact) {
    payAndContact.addEventListener('click', handleContactPayment);
  }
  
  // New user signup link
  const newUserSignup = document.getElementById('new-user-signup');
  if (newUserSignup) {
    newUserSignup.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('workerSignup');
    });
  }
}

function showPage(pageName) {
  // Hide all sections
  Object.values(sections).forEach(section => {
    if (section) section.classList.add('hidden');
  });
  
  // Show selected section
  if (sections[pageName]) {
    sections[pageName].classList.remove('hidden');
    currentPage = pageName;
  }
  
  // Update navigation based on page
  updateNavigation();
  
  // Page-specific initialization
  switch(pageName) {
    case 'landing':
      renderLandingPage();
      break;
    case 'homePage':
      renderHomePage();
      break;
    case 'workerSignup':
      renderSubscriptionPlans();
      break;
    case 'searchResults':
      renderSearchResults();
      break;
  }
}

function updateNavigation() {
  const navActions = document.getElementById('nav-actions');
  const navUser = document.getElementById('nav-user');
  
  if (currentUser) {
    if (navActions) navActions.classList.add('hidden');
    if (navUser) navUser.classList.remove('hidden');
  } else {
    if (navActions) navActions.classList.remove('hidden');
    if (navUser) navUser.classList.add('hidden');
  }
}

function renderLandingPage() {
  renderCategories('categories-grid');
  renderTestimonials();
}

function renderCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.innerHTML = `
      <div class="category-icon">${category.icon}</div>
      <div class="category-name">${category.name}</div>
      <div class="category-count">${category.count} workers</div>
      <div class="category-rate">${category.avgRate}</div>
    `;
    
    categoryCard.addEventListener('click', () => {
      searchByCategory(category.name);
    });
    
    container.appendChild(categoryCard);
  });
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
      <div class="testimonial-rating">
        ${'★'.repeat(testimonial.rating)}
      </div>
      <div class="testimonial-text">"${testimonial.feedback}"</div>
      <div class="testimonial-author">${testimonial.customer}</div>
      <div class="testimonial-location">${testimonial.location}</div>
    `;
    
    container.appendChild(testimonialCard);
  });
}

function renderSubscriptionPlans() {
  const container = document.getElementById('subscription-plans');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.subscriptionPlans.forEach((plan, index) => {
    const planCard = document.createElement('div');
    planCard.className = `plan-card ${plan.popular ? 'popular' : ''}`;
    planCard.innerHTML = `
      <div class="plan-duration">${plan.duration}</div>
      <div class="plan-price">₹${plan.price}</div>
      ${plan.originalPrice ? `<div class="plan-original-price">₹${plan.originalPrice}</div>` : ''}
      ${plan.savings ? `<div class="plan-savings">${plan.savings}</div>` : ''}
      <ul class="plan-features">
        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    `;
    
    planCard.addEventListener('click', () => {
      // Remove selected class from all plans
      document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
      });
      
      // Add selected class to clicked plan
      planCard.classList.add('selected');
      selectedSubscriptionPlan = plan;
    });
    
    container.appendChild(planCard);
  });
}

function renderHomePage() {
  renderCategories('home-categories');
  renderFeaturedWorkers();
  renderActivityFeed();
  setupFilters();
}

function setupFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const locationFilter = document.getElementById('location-filter');
  
  if (categoryFilter) {
    categoryFilter.innerHTML = '<option value="">All Categories</option>';
    appData.categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.name;
      option.textContent = category.name;
      categoryFilter.appendChild(option);
    });
  }
  
  if (locationFilter) {
    locationFilter.innerHTML = '<option value="">All Locations</option>';
    const locations = [...new Set(appData.workers.map(worker => worker.location))];
    locations.forEach(location => {
      const option = document.createElement('option');
      option.value = location;
      option.textContent = location;
      locationFilter.appendChild(option);
    });
  }
}

function renderFeaturedWorkers() {
  const container = document.getElementById('featured-workers');
  if (!container) return;
  
  // Get top-rated workers
  const featuredWorkers = appData.workers
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  
  renderWorkersGrid(featuredWorkers, container);
}

function renderWorkersGrid(workers, container) {
  if (!container) return;
  
  container.innerHTML = '';
  
  workers.forEach(worker => {
    const workerCard = document.createElement('div');
    workerCard.className = 'worker-card';
    workerCard.innerHTML = `
      <div class="worker-header">
        <div class="worker-avatar">
          ${worker.name.charAt(0).toUpperCase()}
        </div>
        <div class="worker-info">
          <h4>${worker.name}</h4>
          <div class="worker-category">${worker.category}</div>
          <div class="worker-location">📍 ${worker.location}</div>
        </div>
      </div>
      <div class="worker-rating">
        <div class="rating-score">${worker.rating}/10</div>
        <div class="rating-stars">${generateStarRating(worker.rating)}</div>
      </div>
      <div class="worker-skills">
        <strong>Skills:</strong>
        <div class="skills-list">
          ${worker.skills.slice(0, 3).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
      <div class="worker-footer">
        <div class="worker-wage">${worker.dailyWage}/day</div>
        <button class="btn btn--primary btn--sm contact-btn" data-worker-id="${worker.id}">View Profile</button>
      </div>
    `;
    
    workerCard.addEventListener('click', (e) => {
      if (!e.target.classList.contains('contact-btn')) {
        showWorkerProfile(worker.id);
      }
    });
    
    const contactBtn = workerCard.querySelector('.contact-btn');
    if (contactBtn) {
      contactBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showWorkerProfile(worker.id);
      });
    }
    
    container.appendChild(workerCard);
  });
}

function generateStarRating(rating) {
  const fullStars = Math.floor(rating / 2);
  const halfStar = (rating % 2) >= 1;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  return '★'.repeat(fullStars) + (halfStar ? '☆' : '') + '☆'.repeat(emptyStars);
}

function renderActivityFeed() {
  const container = document.getElementById('activity-feed');
  if (!container) return;
  
  const activities = [
    {
      worker: 'Rajesh Kumar',
      action: 'Completed plumbing work for bathroom renovation',
      time: '2 hours ago',
      avatar: 'RK'
    },
    {
      worker: 'Sunita Devi',
      action: 'Available for office cleaning this weekend',
      time: '4 hours ago',
      avatar: 'SD'
    },
    {
      worker: 'Mohammad Ali',
      action: 'Installed ceiling fans and fixed electrical wiring',
      time: '6 hours ago',
      avatar: 'MA'
    },
    {
      worker: 'Ramesh Chand',
      action: 'Completed custom kitchen cabinet installation',
      time: '1 day ago',
      avatar: 'RC'
    }
  ];
  
  container.innerHTML = '';
  
  activities.forEach(activity => {
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';
    activityItem.innerHTML = `
      <div class="activity-header">
        <div class="activity-avatar">${activity.avatar}</div>
        <div class="activity-content">
          <strong>${activity.worker}</strong> ${activity.action}
          <div class="activity-time">${activity.time}</div>
        </div>
      </div>
    `;
    
    container.appendChild(activityItem);
  });
}

function performSearch() {
  const searchInput = document.getElementById('main-search');
  if (!searchInput) return;
  
  const query = searchInput.value.trim().toLowerCase();
  searchWorkers(query);
}

function performHomeSearch() {
  const searchInput = document.getElementById('home-search');
  if (!searchInput) return;
  
  const query = searchInput.value.trim().toLowerCase();
  searchWorkers(query);
}

function searchWorkers(query = '') {
  searchResults = appData.workers.filter(worker => {
    const matchesQuery = !query || 
      worker.name.toLowerCase().includes(query) ||
      worker.category.toLowerCase().includes(query) ||
      worker.location.toLowerCase().includes(query) ||
      worker.skills.some(skill => skill.toLowerCase().includes(query));
    
    return matchesQuery;
  });
  
  showPage('searchResults');
}

function searchByCategory(category) {
  if (!currentUser) {
    showPage('customerLogin');
    return;
  }
  
  searchResults = appData.workers.filter(worker => 
    worker.category === category
  );
  
  showPage('searchResults');
}

function applyFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const locationFilter = document.getElementById('location-filter');
  const ratingFilter = document.getElementById('rating-filter');
  
  let filtered = [...appData.workers];
  
  if (categoryFilter && categoryFilter.value) {
    filtered = filtered.filter(worker => worker.category === categoryFilter.value);
  }
  
  if (locationFilter && locationFilter.value) {
    filtered = filtered.filter(worker => worker.location === locationFilter.value);
  }
  
  if (ratingFilter && ratingFilter.value) {
    const minRating = parseFloat(ratingFilter.value);
    filtered = filtered.filter(worker => worker.rating >= minRating);
  }
  
  searchResults = filtered;
  renderSearchResults();
}

function sortSearchResults() {
  const sortBy = document.getElementById('sort-by');
  if (!sortBy) return;
  
  const sortValue = sortBy.value;
  
  searchResults.sort((a, b) => {
    switch (sortValue) {
      case 'rating':
        return b.rating - a.rating;
      case 'experience':
        return b.experience - a.experience;
      case 'price':
        // Extract minimum wage for comparison
        const aPrice = parseInt(a.dailyWage.match(/₹(\d+)/)[1]);
        const bPrice = parseInt(b.dailyWage.match(/₹(\d+)/)[1]);
        return aPrice - bPrice;
      default:
        return 0;
    }
  });
  
  renderSearchResults();
}

function renderSearchResults() {
  const container = document.getElementById('search-results-container');
  if (!container) return;
  
  if (searchResults.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No workers found</h3>
        <p>Try adjusting your search criteria or filters.</p>
      </div>
    `;
    return;
  }
  
  renderWorkersGrid(searchResults, container);
}

function showWorkerProfile(workerId) {
  const worker = appData.workers.find(w => w.id === workerId);
  if (!worker) return;
  
  const container = document.getElementById('profile-content');
  if (!container) return;
  
  container.innerHTML = `
    <div class="profile-main">
      <div class="profile-hero">
        <div class="profile-avatar">
          ${worker.name.charAt(0).toUpperCase()}
        </div>
        <h1 class="profile-name">${worker.name}</h1>
        <div class="profile-category">${worker.category}</div>
        <div class="profile-rating">
          <div class="profile-rating-score">${worker.rating}/10</div>
          <div class="profile-rating-text">
            ${generateStarRating(worker.rating)}<br>
            Based on ${worker.reviews.length} reviews
          </div>
        </div>
        <div class="profile-contact">
          <button class="btn btn--primary show-contact-btn" data-worker-id="${worker.id}">Get Contact Details</button>
          <button class="btn btn--outline">Save Worker</button>
        </div>
      </div>
      
      <div class="profile-section">
        <h3>About</h3>
        <p><strong>Experience:</strong> ${worker.experience} years</p>
        <p><strong>Location:</strong> ${worker.location}</p>
        <p><strong>Availability:</strong> ${worker.availability}</p>
        <p><strong>Daily Wage:</strong> ${worker.dailyWage}</p>
      </div>
      
      <div class="profile-section">
        <h3>Skills & Specializations</h3>
        <div class="skills-list">
          ${worker.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
      
      <div class="profile-section">
        <h3>Rating Breakdown</h3>
        <div class="rating-breakdown">
          <div class="rating-item">
            <span>Quality of Work</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${worker.ratings.quality * 10}%"></div>
            </div>
            <span>${worker.ratings.quality}/10</span>
          </div>
          <div class="rating-item">
            <span>Punctuality</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${worker.ratings.punctuality * 10}%"></div>
            </div>
            <span>${worker.ratings.punctuality}/10</span>
          </div>
          <div class="rating-item">
            <span>Communication</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${worker.ratings.communication * 10}%"></div>
            </div>
            <span>${worker.ratings.communication}/10</span>
          </div>
          <div class="rating-item">
            <span>Value for Money</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${worker.ratings.value * 10}%"></div>
            </div>
            <span>${worker.ratings.value}/10</span>
          </div>
        </div>
      </div>
      
      <div class="profile-section">
        <h3>Customer Reviews</h3>
        <div class="reviews-list">
          ${worker.reviews.map(review => `
            <div class="review-item">
              <div class="review-header">
                <span class="review-author">${review.customer}</span>
                <span class="review-rating">${review.rating}/10</span>
              </div>
              <div class="review-text">${review.comment}</div>
              <div class="review-date">${formatDate(review.date)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Add event listener for contact button
  const contactBtn = container.querySelector('.show-contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => showContactModal(worker));
  }
  
  showPage('workerProfile');
}

function showContactModal(worker) {
  const modal = document.getElementById('contact-modal');
  const workerName = document.getElementById('modal-worker-name');
  const workerCategory = document.getElementById('modal-worker-category');
  
  if (workerName) workerName.textContent = worker.name;
  if (workerCategory) workerCategory.textContent = worker.category;
  
  if (modal) modal.classList.remove('hidden');
}

function handleContactPayment() {
  alert('Payment processed successfully! Contact details: ' + 
        '\nPhone: +91 98765 43210\nEmail: worker@workconnect.com');
  
  const modal = document.getElementById('contact-modal');
  if (modal) modal.classList.add('hidden');
}

function handleWorkerSignup(e) {
  e.preventDefault();
  
  if (!selectedSubscriptionPlan) {
    alert('Please select a subscription plan to continue.');
    return;
  }
  
  const formData = new FormData(e.target);
  const workerData = {
    type: 'worker',
    fullName: formData.get('fullName'),
    category: formData.get('category'),
    location: formData.get('location'),
    experience: formData.get('experience'),
    phone: formData.get('phone'),
    subscriptionPlan: selectedSubscriptionPlan
  };
  
  currentUser = workerData;
  alert('Registration successful! Welcome to WorkConnect.');
  showPage('workerDashboard');
  updateNavigation();
}

function handleCustomerLogin(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const customerData = {
    type: 'customer',
    emailOrPhone: formData.get('emailOrPhone')
  };
  
  currentUser = customerData;
  showPage('homePage');
  updateNavigation();
}

function updateWageDisplay() {
  const slider = document.getElementById('wage-slider');
  const wageValue = document.getElementById('wage-value');
  const wageMax = document.getElementById('wage-max');
  
  if (slider && wageValue && wageMax) {
    const value = parseInt(slider.value);
    wageValue.textContent = value;
    wageMax.textContent = value + 400; // Add 400 to show range
  }
}

function togglePassword() {
  const passwordField = document.querySelector('input[name="password"]');
  const toggleBtn = document.getElementById('password-toggle');
  
  if (passwordField && toggleBtn) {
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleBtn.textContent = '🙈';
    } else {
      passwordField.type = 'password';
      toggleBtn.textContent = '👁️';
    }
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add some sample search history and saved workers for demo
function initializeDashboardData() {
  // This would typically come from a backend
  const searchHistory = [
    { query: 'Plumber in Delhi', date: '2025-01-15', results: 12 },
    { query: 'Electrician near me', date: '2025-01-12', results: 8 },
    { query: 'Carpenter', date: '2025-01-10', results: 15 }
  ];
  
  const savedWorkers = [
    { name: 'Rajesh Kumar', category: 'Plumber', rating: 8.7 },
    { name: 'Mohammad Ali', category: 'Electrician', rating: 8.9 }
  ];
  
  return { searchHistory, savedWorkers };
}