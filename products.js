// Gülper Çeyiz - Product Data and Rendering

// Product Data
const products = [
    {
        id: 1,
        name: "Bambu Havlu Seti",
        category: "banyo",
        price: 299,
        oldPrice: 399,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bamboo_towel_set_1767126735174.png",
        description: "4'lü set - Yumuşacık dokunuş",
        badge: "Çok Satan",
        material: "%100 Bambu Lifi",
        dimensions: "El Havlusu: 50x90cm, Banyo Havlusu: 70x140cm",
        details: "Ekstra yumuşak bambu liflerinden üretilmiş, cildi tahriş etmeyen, antibakteriyel özellikli havlu seti. Hızlı kurur ve uzun ömürlüdür."
    },
    {
        id: 2,
        name: "Çift Bornoz Seti",
        category: "banyo",
        price: 549,
        oldPrice: 699,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bathrobe_set_1767126762498.png",
        description: "Gelin-Damat için özel",
        badge: "",
        material: "%100 Pamuk",
        dimensions: "S, M, L, XL bedenler mevcut",
        details: "Yeni evli çiftler için özel tasarlanmış, nakış işlemeli bornoz seti. Yumuşak pamuk kumaşı ile konfor ve şıklığı bir arada sunar."
    },
    {
        id: 3,
        name: "Pamuklu Nevresim Takımı",
        category: "yatak",
        price: 449,
        oldPrice: 599,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bed_linen_set_1767126749254.png",
        description: "Çift kişilik - %100 Pamuk",
        badge: "",
        material: "%100 Pamuk Saten",
        dimensions: "Nevresim: 200x220cm, Çarşaf: 240x260cm, Yastık: 50x70cm (2 adet)",
        details: "Saten dokuma pamuk kumaştan üretilmiş, tende ipeksi his veren nevresim takımı. Kolay ütülenir ve yıkama sonrası yumuşaklığını korur."
    },
    {
        id: 4,
        name: "Başlangıç Çeyiz Seti",
        category: "ceyiz",
        price: 1299,
        oldPrice: 1699,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/dowry_set_1767126779400.png",
        description: "Temel parçalar bir arada",
        badge: "Yeni",
        material: "Karışık - Her ürün farklı",
        dimensions: "Detaylar için ürün sayfasına bakınız",
        details: "Yeni başlayan çiftler için hazırlanmış ekonomik çeyiz paketi. İçinde nevresim takımı, havlu seti ve bornoz bulunur."
    },
    {
        id: 5,
        name: "Günlük Havlu Seti",
        category: "banyo",
        price: 199,
        oldPrice: 279,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bamboo_towel_set_1767126735174.png",
        description: "6'lı set - Her güne bir renk",
        badge: "",
        material: "%100 Pamuk",
        dimensions: "Yüz Havlusu: 50x80cm (6 adet)",
        details: "Günlük kullanım için ideal, farklı renklerde 6 adet yüz havlusu. Dayanıklı ve yumuşak pamuklı dokusu ile uzun ömürlü."
    },
    {
        id: 6,
        name: "Yazlık Pike Takımı",
        category: "yatak",
        price: 349,
        oldPrice: 449,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bed_linen_set_1767126749254.png",
        description: "Serin yazlar için ideal",
        badge: "",
        material: "%100 Pamuk Pike",
        dimensions: "Pike: 200x220cm, Yastık Kılıfı: 50x70cm (2 adet)",
        details: "Sıcak yaz geceleri için nefes alabilen pamuk pike seti. Hafif ve ferah dokusu ile rahat bir uyku sağlar."
    },
    {
        id: 7,
        name: "Lüks Banyo Seti",
        category: "banyo",
        price: 449,
        oldPrice: 599,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bamboo_towel_set_1767126735174.png",
        description: "Bornoz + Havlu + Terlik",
        badge: "",
        material: "%100 Pamuk",
        dimensions: "Bornoz: M/L, Havlu: 2 adet, Terlik: 37-44",
        details: "Banyo keyfiniz için her şey bir arada. Yumuşak bornoz, havlu ve rahat terlikten oluşan komple set."
    },
    {
        id: 8,
        name: "Jakarlı Yatak Örtüsü",
        category: "yatak",
        price: 599,
        oldPrice: 799,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bed_linen_set_1767126749254.png",
        description: "Şık jakar desenli",
        badge: "",
        material: "Pamuk-Polyester Karışım",
        dimensions: "260x270cm",
        details: "Jakar dokuma tekniği ile üretilmiş, şık desenli yatak örtüsü. Odanıza zarif bir hava katar."
    },
    {
        id: 9,
        name: "Premium Çeyiz Seti",
        category: "ceyiz",
        price: 1899,
        oldPrice: 2499,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/dowry_set_1767126779400.png",
        description: "Komple çeyiz paketi",
        badge: "Özel",
        material: "Premium Kalite Ürünler",
        dimensions: "Detaylı içerik listesi için sayfaya bakınız",
        details: "Düğün hazırlıkları için komple çeyiz paketi. Nevresim takımı, bornoz seti, havlu seti, pike ve örtüler dahil."
    },
    {
        id: 10,
        name: "Bebek Havlu Seti",
        category: "banyo",
        price: 179,
        oldPrice: 229,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bamboo_towel_set_1767126735174.png",
        description: "Minikler için yumuşacık",
        badge: "",
        material: "%100 Organik Pamuk",
        dimensions: "Kapüşonlu Havlu: 75x75cm, El Havlusu: 30x50cm (3 adet)",
        details: "Bebek cildine uygun, organik pamuktan üretilmiş yumuşak havlu seti. Hipoalerjenik ve hassas ciltlere güvenli."
    },
    {
        id: 11,
        name: "Ranforce Nevresim",
        category: "yatak",
        price: 379,
        oldPrice: 499,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/bed_linen_set_1767126749254.png",
        description: "Dayanıklı dokuma",
        badge: "",
        material: "%100 Pamuk Ranforce",
        dimensions: "Nevresim: 200x220cm, Çarşaf: 240x260cm",
        details: "Ranforce dokuma tekniği ile sıkı ve dayanıklı pamuk nevresim. Sık yıkamalardan etkilenmez, uzun ömürlüdür."
    },
    {
        id: 12,
        name: "Ekonomik Çeyiz Seti",
        category: "ceyiz",
        price: 899,
        oldPrice: 1199,
        image: "file:///C:/Users/hp/.gemini/antigravity/brain/2ef3e0f5-b92c-4b14-9f09-d53df7481f2a/dowry_set_1767126779400.png",
        description: "Bütçe dostu paket",
        badge: "",
        material: "Kaliteli Standart Ürünler",
        dimensions: "Temel çeyiz parçaları",
        details: "Bütçesine dikkat eden çiftler için ekonomik çeyiz paketi. Temel ihtiyaçları karşılayacak kaliteli ürünler."
    }
];

// Render Products
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = productsToRender.map(product => `
        <article class="product-card" data-id="${product.id}">
            <a href="urun-detay.html?id=${product.id}" class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge ${product.badge === 'Yeni' ? 'new' : ''}">${product.badge}</span>` : ''}
            </a>
            <div class="product-info">
                <a href="urun-detay.html?id=${product.id}">
                    <h3 class="product-title">${product.name}</h3>
                </a>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">
                    <span class="price-current">₺${product.price}</span>
                    ${product.oldPrice ? `<span class="price-old">₺${product.oldPrice}</span>` : ''}
                </div>
                <button class="btn btn-add-cart" onclick="addToCart(${product.id}); event.stopPropagation();">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    Sepete Ekle
                </button>
            </div>
        </article>
    `).join('');

    // Update count
    const countEl = document.getElementById('productCount');
    if (countEl) {
        countEl.textContent = productsToRender.length;
    }
}

// Filter Products
function filterProducts() {
    let filtered = [...products];

    // Category filter
    const categoryCheckboxes = document.querySelectorAll('input[name="kategori"]:checked');
    const categories = Array.from(categoryCheckboxes).map(cb => cb.value);

    if (!categories.includes('all') && categories.length > 0) {
        filtered = filtered.filter(p => categories.includes(p.category));
    }

    // Price filter
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        const maxPrice = parseInt(priceRange.value);
        filtered = filtered.filter(p => p.price <= maxPrice);
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        switch (sortValue) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
                break;
            // 'popular' is default order
        }
    }

    renderProducts(filtered);
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Initialize products page
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the products page
    if (!document.getElementById('productsGrid')) return;

    // Check URL params for category
    const urlParams = new URLSearchParams(window.location.search);
    const kategori = urlParams.get('kategori');

    if (kategori) {
        // Uncheck "all" and check the specific category
        const allCheckbox = document.querySelector('input[value="all"]');
        const categoryCheckbox = document.querySelector(`input[value="${kategori}"]`);

        if (allCheckbox) allCheckbox.checked = false;
        if (categoryCheckbox) categoryCheckbox.checked = true;
    }

    // Initial render
    filterProducts();

    // Price range slider
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function () {
            priceValue.textContent = '₺' + this.value;
        });
    }

    // Filter button
    const applyBtn = document.getElementById('applyFilters');
    if (applyBtn) {
        applyBtn.addEventListener('click', filterProducts);
    }

    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }

    // Category checkboxes - handle "all" logic
    const categoryCheckboxes = document.querySelectorAll('input[name="kategori"]');
    categoryCheckboxes.forEach(cb => {
        cb.addEventListener('change', function () {
            if (this.value === 'all' && this.checked) {
                // Uncheck others
                categoryCheckboxes.forEach(other => {
                    if (other.value !== 'all') other.checked = false;
                });
            } else if (this.value !== 'all' && this.checked) {
                // Uncheck "all"
                const allCb = document.querySelector('input[value="all"]');
                if (allCb) allCb.checked = false;
            }
            filterProducts();
        });
    });
});
