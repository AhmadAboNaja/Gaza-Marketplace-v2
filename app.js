/**
 * Gaza Marketplace SPA - Core Logic
 */

/* --- Localization --- */
const translations = {
    en: {
        welcome: "Welcome to Gaza Marketplace",
        subtitle: "Support local vendors. Buy handmade.",
        searchPlaceholder: "Search products...",
        allCategories: "All Categories",
        beauty: "Beauty",
        clothing: "Clothing",
        home: "Home",
        login: "Login",
        username: "Username",
        password: "Password",
        signIn: "Sign In",
        demoUsers: "Demo Users",
        adminDashboard: "Admin Dashboard",
        vendorApprovals: "Vendor Approvals",
        approve: "Approve",
        vendorPortal: "Vendor Portal",
        newProduct: "New Product",
        delete: "Delete",
        yourCart: "Your Cart",
        empty: "Empty.",
        goShopping: "Go Shopping",
        total: "Total",
        checkoutMethod: "Checkout Method",
        manual: "Manual (Cash/Bank)",
        local: "Local (PalPay)",
        global: "Global (PayPal)",
        addToCart: "Add to Cart",
        logout: "Logout",
        close: "Close",
        productName: "Product Name",
        price: "Price",
        description: "Description",
        addedToCart: "Added to cart!",
        deleteConfirm: "Delete this product?",
        paymentManual: "Order Placed! Please pay cash on delivery.",
        paymentLocal: "Redirecting to PalPay... (Simulated) - Paid!",
        paymentGlobal: "Redirecting to PayPal... (Simulated) - Paid!",
        pendingApproval: "Vendor account pending approval.",
        invalidCreds: "Invalid credentials",
        welcomeBack: "Welcome back",
        imgSource: "IMG_SOURCE",
        edit: "Edit",
        save: "Save",
        imageUrl: "Image URL",
        category: "Category",
        updateProduct: "Update Product",
        next: "Next",
        prev: "Prev",
        page: "Page",
        itemsPerPage: "Items per Page",
        confirm: "Confirm",
        cancel: "Cancel",
        areYouSure: "Are you sure?",
        pleaseLogin: "Please login to add items to your cart",
        register: "Register",
        dontHaveAccount: "Don't have an account?",
        alreadyHaveAccount: "Already have an account?",
        name: "Full Name",
        registerSuccess: "Registration successful! You can now login.",
        registerVendor: "Register as Vendor",
        registerClient: "Register as Client",
        role: "Role",
        vendors: "Vendors",
        browseVendors: "Browse Vendors",
        viewShop: "View Shop",
        backToVendors: "Back to Vendors",
        allProductsBy: "All products by",
        vendorName: "Vendor Name",
        products: "Products",
        actions: "Actions",
        searchVendors: "Search vendors...",
        status: "Status",
        all: "All",
        pending: "Pending",
        approved: "Approved",
        searchUsers: "Search users...",
        profile: "My Profile",
        accountInfo: "Account Information",
        editProfile: "Edit Profile",
        updateSuccess: "Profile updated successfully!",
        joined: "Joined",
        orders: "My Orders",
        saveChanges: "Save Changes",
        accountSecurity: "Account Security",
        newPassword: "New Password (leave blank to keep current)",
        chat: "Chat",
        chatWithVendor: "Chat with Vendor",
        messages: "Messages",
        send: "Send",
        typeMessage: "Type a message...",
        noMessages: "No messages yet. Start a conversation!",
        selectChat: "Select a conversation to start chatting"
    },
    ar: {
        welcome: "أهلاً بكم في سوق غزة",
        subtitle: "ادعم البائعين المحليين. اشتري منتجات يدوية.",
        searchPlaceholder: "بحث عن منتجات...",
        allCategories: "جميع الفئات",
        beauty: "تجميل",
        clothing: "ملابس",
        home: "ديكور منزلي",
        login: "تسجيل الدخول",
        username: "اسم المستخدم",
        password: "كلمة المرور",
        signIn: "دخول",
        demoUsers: "مستخدمين تجريبيين",
        adminDashboard: "لوحة التحكم للمسؤول",
        vendorApprovals: "موافقات البائعين",
        approve: "قبول",
        vendorPortal: "بوابة البائع",
        newProduct: "منتج جديد",
        delete: "حذف",
        yourCart: "سلتك",
        empty: "فارغة.",
        goShopping: "اذهب للتسوق",
        total: "المجموع",
        checkoutMethod: "طريقة الدفع",
        manual: "يدوي (نقد/بنك)",
        local: "محلي (PalPay)",
        global: "عالمي (PayPal)",
        addToCart: "أضف للسلة",
        logout: "خروج",
        close: "إغلاق",
        productName: "اسم المنتج",
        price: "السعر",
        description: "الوصف",
        addedToCart: "تمت الإضافة للسلة!",
        deleteConfirm: "حذف هذا المنتج؟",
        paymentManual: "تم الطلب! يرجى الدفع عند الاستلام.",
        paymentLocal: "جاري التحويل لـ PalPay... (محاكاة) - تم الدفع!",
        paymentGlobal: "جاري التحويل لـ PayPal... (محاكاة) - تم الدفع!",
        pendingApproval: "حساب البائع بانتظار الموافقة.",
        invalidCreds: "بيانات الدخول غير صحيحة",
        welcomeBack: "مرحباً بعودتك",
        imgSource: "مصدر الصورة",
        edit: "تعديل",
        save: "حفظ",
        imageUrl: "رابط الصورة",
        category: "الفئة",
        updateProduct: "تحديث المنتج",
        next: "التالي",
        prev: "السابق",
        page: "صفحة",
        itemsPerPage: "عدد العناصر في الصفحة",
        confirm: "تأكيد",
        cancel: "إلغاء",
        areYouSure: "هل أنت متأكد؟",
        pleaseLogin: "يرجى تسجيل الدخول لإضافة العناصر إلى السلة",
        register: "إنشاء حساب",
        dontHaveAccount: "ليس لديك حساب؟",
        alreadyHaveAccount: "لديك حساب بالفعل؟",
        name: "الاسم الكامل",
        registerSuccess: "تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.",
        registerVendor: "سجل كبائع",
        registerClient: "سجل كعميل",
        role: "الدور",
        vendors: "البائعين",
        browseVendors: "تصفح البائعين",
        viewShop: "عرض المتجر",
        backToVendors: "العودة للقائمة",
        allProductsBy: "جميع منتجات",
        vendorName: "اسم البائع",
        products: "المنتجات",
        actions: "إجراءات",
        searchVendors: "بحث عن بائعين...",
        status: "الحالة",
        all: "الكل",
        pending: "قيد الانتظار",
        approved: "مقابل",
        searchUsers: "بحث عن مستخدمين...",
        profile: "ملفي الشخصي",
        accountInfo: "معلومات الحساب",
        editProfile: "تعديل الملف الشخصي",
        updateSuccess: "تم تحديث الملف الشخصي بنجاح!",
        joined: "انضم منذ",
        orders: "طلباتي",
        saveChanges: "حفظ التغييرات",
        accountSecurity: "أمان الحساب",
        newPassword: "كلمة مرور جديدة (اتركها فارغة للمحافظة على الحالية)",
        chat: "محادثة",
        chatWithVendor: "مراسلة البائع",
        messages: "الرسائل",
        send: "إرسال",
        typeMessage: "اكتب رسالة...",
        noMessages: "لا توجد رسائل بعد. ابدأ محادثة!",
        selectChat: "اختر محادثة لبدء الدردشة"
    }
};

let currentLang = localStorage.getItem('gazaLang') || 'en';
let currentTheme = localStorage.getItem('gazaTheme') || 'light';

function t(key) {
    return translations[currentLang][key] || key;
}

function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('gazaLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (router.currentRoute) router.navigate(router.currentRoute);
    else updateNav();
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('gazaTheme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    updateNav();
}

/* --- Data & Persistence --- */
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwbl2yeKaaaO7OuA3CIfJqjN2722ClC2mb69w9Uxo_7Ked_1A2B32ZQD7140ogKqb6V/exec"; // PASTE YOUR GOOGLE APPS SCRIPT URL HERE

class DataStore {
    constructor() {
        this.data = { users: [], products: [], orders: [], messages: [] };
        // Initial setup
        this.init();
    }

    async init() {
        // 1. Try to load from LocalStorage first for speed
        const stored = localStorage.getItem('gazaMarketDB_v5');
        if (stored) {
            this.data = JSON.parse(stored);
        } else {
            // 2. Fallback to local db.json
            await fetch('db.json')
                .then(r => r.json())
                .then(json => { this.data = json; this.save(); })
                .catch(err => console.error("Initial data load fail", err));
        }

        // 3. Sync with Google Sheets in the background (if URL is set)
        if (GOOGLE_SHEETS_URL) {
            this.syncWithCloud();
        }
    }

    async syncWithCloud(silent = false) {
        try {
            const response = await fetch(`${GOOGLE_SHEETS_URL}?action=getAll`);
            const cloudData = await response.json();
            if (cloudData && cloudData.users) {
                this.data = cloudData;
                this.save();
                if (!silent && router.currentRoute) router.navigate(router.currentRoute);
                return true;
            }
        } catch (e) {
            console.warn("Cloud sync failed. Working offline.", e);
        }
        return false;
    }

    async pushToCloud(tab, action, data) {
        if (!GOOGLE_SHEETS_URL) return;
        try {
            await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script requires no-cors for simple posts
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tab, action, data })
            });
            console.log(`Cloud update pushed: ${tab} ${action}`);
        } catch (e) {
            console.error("Cloud push failed", e);
        }
    }

    save() {
        localStorage.setItem('gazaMarketDB_v5', JSON.stringify(this.data));
    }

    // CRUD Helpers
    getUsers() { return this.data.users; }
    getProducts() { return this.data.products; }
    getMessages() { return this.data.messages || []; }
    getOrders() { return this.data.orders || []; }

    addUser(user) {
        this.data.users.push(user);
        this.save();
        this.pushToCloud('users', 'add', user);
    }

    updateUser(updated) {
        const idx = this.data.users.findIndex(u => u.id === updated.id);
        if (idx !== -1) {
            this.data.users[idx] = updated;
            this.save();
            this.pushToCloud('users', 'update', updated);
        }
    }

    addProduct(prod) {
        this.data.products.push(prod);
        this.save();
        this.pushToCloud('products', 'add', prod);
    }

    updateProduct(updated) {
        const idx = this.data.products.findIndex(p => p.id === updated.id);
        if (idx !== -1) {
            this.data.products[idx] = updated;
            this.save();
            this.pushToCloud('products', 'update', updated);
        }
    }

    deleteProduct(id) {
        const prod = this.data.products.find(p => p.id === id);
        this.data.products = this.data.products.filter(p => p.id !== id);
        this.save();
        if (prod) this.pushToCloud('products', 'delete', { id });
    }

    addOrder(order) {
        if (!this.data.orders) this.data.orders = [];
        this.data.orders.push(order);
        this.save();
        this.pushToCloud('orders', 'add', order);
    }

    addMessage(msg) {
        if (!this.data.messages) this.data.messages = [];
        const message = {
            id: 'm' + Date.now(),
            timestamp: new Date().toISOString(),
            read: false,
            ...msg
        };
        this.data.messages.push(message);
        this.save();
        this.pushToCloud('messages', 'add', message);
        updateNav(); // Refresh nav to update count
        return message;
    }

    markChatAsRead(userId, partnerId) {
        if (!this.data.messages) return;
        let changed = false;
        this.data.messages.forEach(m => {
            if (m.receiverId === userId && m.senderId === partnerId && !m.read) {
                m.read = true;
                changed = true;
                this.pushToCloud('messages', 'update', m);
            }
        });
        if (changed) {
            this.save();
            updateNav();
        }
    }
}

/* --- Auth System --- */
class AuthService {
    constructor(store) {
        this.store = store;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;
        if (this.currentUser) this.refreshCurrentUser();
    }
    refreshCurrentUser() {
        const user = this.store.getUsers().find(u => u.id === this.currentUser.id);
        if (user) {
            this.currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
    }
    login(username, password) {
        const user = this.store.getUsers().find(u => u.username === username && u.password === password);
        if (user) {
            if (user.role === 'vendor' && user.status !== 'approved') {
                showAlert(t('pendingApproval'));
                return null;
            }
            this.currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }
        showAlert(t('invalidCreds'));
        return null;
    }
    register(userData) {
        const exists = this.store.getUsers().find(u => u.username === userData.username);
        if (exists) { showAlert("Username exists"); return false; }
        this.store.addUser({
            id: 'u' + Date.now(),
            ...userData,
            status: userData.role === 'vendor' ? 'pending' : 'approved'
        });
        showAlert(t('registerSuccess'));
        return true;
    }
    logout() {
        this.currentUser = null;
        sessionStorage.removeItem('currentUser');
        router.navigate('home');
    }
    isAdmin() { return this.currentUser && this.currentUser.role === 'admin'; }
    isVendor() { return this.currentUser && this.currentUser.role === 'vendor'; }
    isClient() { return this.currentUser && this.currentUser.role === 'client'; }
}

/* --- Router --- */
class Router {
    constructor() { this.routes = {}; this.currentRoute = null; }
    register(name, renderFn) { this.routes[name] = renderFn; }
    navigate(name, params = {}) {
        this.currentRoute = name;
        const app = document.getElementById('main-content');
        app.innerHTML = '';
        if (this.routes[name]) {
            const view = this.routes[name](params);
            view.classList.add('page-transition');
            app.appendChild(view);
        }
        updateNav();
        window.scrollTo(0, 0);
    }
}

const store = new DataStore();
const auth = new AuthService(store);
const router = new Router();
const cart = [];

/* --- Views --- */
function renderHome() {
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="glass" style="padding: 40px; text-align: center; margin-bottom: 30px;">
            <h1>${t('welcome')}</h1>
            <p>${t('subtitle')}</p>
            <div style="margin-top: 20px;">
                <input type="text" id="searchBar" placeholder="${t('searchPlaceholder')}" style="max-width: 300px;">
                <select id="catFilter" style="max-width: 150px; margin-left: 10px;">
                    <option value="">${t('allCategories')}</option>
                    ${[...new Set(store.getProducts().map(p => p.category))].map(c =>
        `<option value="${c}">${translations[currentLang][c.toLowerCase()] || c}</option>`
    ).join('')}
                </select>
            </div>
        </div>
        <div id="productGrid" class="grid-products"></div>
        <div class="flex-between" style="margin-top: 20px; border-top: 1px solid var(--glass-border); padding-top: 20px;">
            <div id="pagination" class="pagination" style="margin-top: 0;"></div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <label style="font-size: 0.9rem;">${t('itemsPerPage')}:</label>
                <select id="itemsPerPage" style="width: auto; padding: 5px 10px;">
                    <option value="8">8</option><option value="16">16</option><option value="32">32</option><option value="64">64</option>
                </select>
            </div>
        </div>
    `;
    const grid = section.querySelector('#productGrid');
    const paginationEl = section.querySelector('#pagination');
    const itemsPerEl = section.querySelector('#itemsPerPage');
    let currentPage = 1;

    const renderProducts = () => {
        const filter = section.querySelector('#searchBar').value;
        const category = section.querySelector('#catFilter').value;
        const itemsPerPage = parseInt(itemsPerEl.value);
        grid.innerHTML = '';
        let prods = store.getProducts();
        if (filter) prods = prods.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
        if (category) prods = prods.filter(p => p.category === category);

        const totalPages = Math.ceil(prods.length / itemsPerPage);
        if (currentPage > totalPages) currentPage = totalPages || 1;
        const paginated = prods.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

        paginated.forEach(p => {
            const card = document.createElement('div');
            card.className = 'glass product-card';
            const isReal = p.image && (p.image.startsWith('http') || p.image.startsWith('data:image'));
            const vendor = store.getUsers().find(u => u.id === p.vendorId);
            card.innerHTML = `
                ${isReal ? `<img src="${p.image}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 12px; margin-bottom: 15px; cursor: pointer;" onclick="showImageModal('${p.name}', '${p.image}')">` : `<div class="text-img-placeholder" onclick="showImageModal('${p.name}', '${p.image}')">[${p.name}]</div>`}
                <h3>${p.name}</h3>
                <div class="flex-between" style="margin-bottom: 5px;">
                    <p style="font-size: 0.85rem; color: var(--primary-color); font-weight: 500;">
                        ${translations[currentLang][p.category.toLowerCase()] || p.category}
                    </p>
                    ${vendor ? `<a href="#" style="font-size: 0.8rem; color: #888; text-decoration: none;" onclick="event.preventDefault(); router.navigate('vendorShop', {id: '${vendor.id}'})">👤 ${vendor.name}</a>` : ''}
                </div>
                <p style="color: #666; font-size: 0.9rem; line-height: 1.4; height: 3.8em; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                    ${p.description}
                </p>
                <div class="flex-between" style="margin-top: auto; padding-top: 15px;">
                    <span style="font-weight: bold; color: var(--primary-color); font-size: 1.1rem;">$${p.price}</span>
                    ${!auth.isVendor() ? `<button class="btn btn-primary" onclick="addToCart('${p.id}')">${t('addToCart')}</button>` : ''}
                </div>
            `;
            grid.appendChild(card);
        });
        paginationEl.innerHTML = `
            <button class="page-btn" id="prevPage" ${currentPage === 1 ? 'disabled' : ''}>${t('prev')}</button>
            <div style="display: flex; align-items: center; gap: 5px;">
                <span class="page-info">${t('page')}</span>
                <input type="number" id="jumpPage" value="${currentPage}" min="1" max="${totalPages || 1}" style="width: 50px; text-align: center; padding: 2px;">
                <span class="page-info">/ ${totalPages || 1}</span>
            </div>
            <button class="page-btn" id="nextPage" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}>${t('next')}</button>
        `;

        paginationEl.querySelector('#prevPage').onclick = () => { if (currentPage > 1) { currentPage--; renderProducts(); window.scrollTo(0, 0); } };
        paginationEl.querySelector('#nextPage').onclick = () => { if (currentPage < totalPages) { currentPage++; renderProducts(); window.scrollTo(0, 0); } };

        const jumpInput = paginationEl.querySelector('#jumpPage');
        jumpInput.onchange = (e) => {
            let val = parseInt(e.target.value);
            if (val >= 1 && val <= totalPages) {
                currentPage = val;
                renderProducts();
                window.scrollTo(0, 0);
            } else {
                e.target.value = currentPage;
            }
        };
        jumpInput.onkeydown = (e) => {
            if (e.key === 'Enter') jumpInput.onchange(e);
        };
    };
    section.querySelector('#searchBar').oninput = () => { currentPage = 1; renderProducts(); };
    section.querySelector('#catFilter').onchange = () => { currentPage = 1; renderProducts(); };
    itemsPerEl.onchange = () => { currentPage = 1; renderProducts(); };
    setTimeout(renderProducts, 50);
    return section;
}

function renderVendors() {
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="glass" style="padding: 40px; text-align: center; margin-bottom: 30px;">
            <h1>${t('vendors')}</h1>
            <p>${t('browseVendors')}</p>
        </div>
        
        <div class="glass" style="padding: 20px; margin-bottom: 20px;">
            <div class="search-wrap">
                <input type="text" id="vendorSearch" placeholder="${t('searchVendors')}">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <label style="margin-bottom: 0;">${t('itemsPerPage')}:</label>
                    <select id="vItemsPerPage" style="width: auto;">
                        <option value="5">5</option><option value="10" selected>10</option><option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="data-table-container glass">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>${t('vendorName')}</th>
                        <th>${t('products')}</th>
                        <th style="text-align: center;">${t('actions')}</th>
                    </tr>
                </thead>
                <tbody id="vendorTableBody"></tbody>
            </table>
        </div>

        <div class="flex-between" style="margin-top: 20px; border-top: 1px solid var(--glass-border); padding-top: 20px;">
            <div id="vPagination" class="pagination" style="margin-top: 0;"></div>
        </div>
    `;

    const tbody = section.querySelector('#vendorTableBody');
    const searchInput = section.querySelector('#vendorSearch');
    const itemsPerSelect = section.querySelector('#vItemsPerPage');
    const paginationEl = section.querySelector('#vPagination');

    let currentPage = 1;
    let filteredVendors = [];

    const updateView = () => {
        const query = searchInput.value.toLowerCase();
        const itemsPerPage = parseInt(itemsPerSelect.value);

        const allVendors = store.getUsers().filter(u => u.role === 'vendor' && u.status === 'approved');
        filteredVendors = allVendors.filter(v => v.name.toLowerCase().includes(query));

        const totalPages = Math.ceil(filteredVendors.length / itemsPerPage) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        const start = (currentPage - 1) * itemsPerPage;
        const pageData = filteredVendors.slice(start, start + itemsPerPage);

        tbody.innerHTML = '';
        if (pageData.length === 0) {
            tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; padding: 40px;">No vendors found.</td></tr>`;
        } else {
            pageData.forEach(v => {
                const pCount = store.getProducts().filter(p => p.vendorId === v.id).length;
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="font-weight: 600;">
                        <span style="font-size: 1.2rem; margin-right: 10px;">🏪</span>
                        ${v.name}
                    </td>
                    <td><span class="badge" style="background: var(--primary-color); color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem;">${pCount} ${t('products')}</span></td>
                    <td style="text-align: center;">
                        <button class="btn btn-primary" onclick="router.navigate('vendorShop', {id: '${v.id}'})">${t('viewShop')}</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        paginationEl.innerHTML = `
            <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} id="vPrev">${t('prev')}</button>
            <span class="page-info">${t('page')} ${currentPage} / ${totalPages}</span>
            <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} id="vNext">${t('next')}</button>
        `;

        paginationEl.querySelector('#vPrev').onclick = () => { if (currentPage > 1) { currentPage--; updateView(); } };
        paginationEl.querySelector('#vNext').onclick = () => { if (currentPage < totalPages) { currentPage++; updateView(); } };
    };

    searchInput.oninput = () => { currentPage = 1; updateView(); };
    itemsPerSelect.onchange = () => { currentPage = 1; updateView(); };

    setTimeout(updateView, 50);
    return section;
}

function renderVendorShop(params) {
    const vendorId = params.id;
    const vendor = store.getUsers().find(u => u.id === vendorId);
    if (!vendor) return renderHome();

    const section = document.createElement('section');
    section.innerHTML = `
        <div class="glass" style="padding: 40px; margin-bottom: 30px; display: flex; align-items: center; gap: 30px;">
            <div style="font-size: 5rem;">🏪</div>
            <div>
                <h1>${vendor.name}</h1>
                <p>${t('allProductsBy')} ${vendor.name}</p>
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button class="btn btn-secondary" onclick="router.navigate('vendors')">← ${t('backToVendors')}</button>
                    ${auth.currentUser && auth.currentUser.id !== vendor.id ? `<button class="btn btn-primary" onclick="router.navigate('chat', {userId: '${vendor.id}'})">💬 ${t('chatWithVendor')}</button>` : ''}
                </div>
            </div>
        </div>

        <div class="glass" style="padding: 20px; margin-bottom: 20px;">
            <div class="search-wrap">
                <input type="text" id="vsSearch" placeholder="${t('searchPlaceholder')}">
                <select id="vsCatFilter" style="width: auto;">
                    <option value="">${t('allCategories')}</option>
                    ${[...new Set(store.getProducts().filter(p => p.vendorId === vendorId).map(p => p.category))].map(c =>
        `<option value="${c}">${translations[currentLang][c.toLowerCase()] || c}</option>`
    ).join('')}
                </select>
                <div style="display: flex; align-items: center; gap: 10px; margin-left: auto;">
                    <label style="margin-bottom: 0;">${t('itemsPerPage')}:</label>
                    <select id="vsItemsPer" style="width: auto;">
                        <option value="8">8</option><option value="16" selected>16</option><option value="32">32</option>
                    </select>
                </div>
            </div>
        </div>

        <div id="vendorProductGrid" class="grid-products"></div>
        
        <div class="flex-between" style="margin-top: 20px; border-top: 1px solid var(--glass-border); padding-top: 20px;">
            <div id="vsPagination" class="pagination" style="margin-top: 0;"></div>
        </div>
    `;

    const grid = section.querySelector('#vendorProductGrid');
    const searchInput = section.querySelector('#vsSearch');
    const catFilter = section.querySelector('#vsCatFilter');
    const itemsPerSelect = section.querySelector('#vsItemsPer');
    const paginationEl = section.querySelector('#vsPagination');

    let currentPage = 1;

    const renderProducts = () => {
        const query = searchInput.value.toLowerCase();
        const category = catFilter.value;
        const itemsPerPage = parseInt(itemsPerSelect.value);

        grid.innerHTML = '';
        let prods = store.getProducts().filter(p => p.vendorId === vendorId);

        if (query) prods = prods.filter(p => p.name.toLowerCase().includes(query));
        if (category) prods = prods.filter(p => p.category === category);

        const totalPages = Math.ceil(prods.length / itemsPerPage) || 1;
        if (currentPage > totalPages) currentPage = totalPages;
        const paginated = prods.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

        if (paginated.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found for this search.</div>`;
        } else {
            paginated.forEach(p => {
                const card = document.createElement('div');
                card.className = 'glass product-card';
                const isReal = p.image && (p.image.startsWith('http') || p.image.startsWith('data:image'));
                card.innerHTML = `
                    ${isReal ? `<img src="${p.image}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 12px; margin-bottom: 15px; cursor: pointer;" onclick="showImageModal('${p.name}', '${p.image}')">` : `<div class="text-img-placeholder" onclick="showImageModal('${p.name}', '${p.image}')">[${p.name}]</div>`}
                    <h3>${p.name}</h3>
                    <p style="font-size: 0.85rem; color: var(--primary-color); font-weight: 500; margin-bottom: 5px;">
                        ${translations[currentLang][p.category.toLowerCase()] || p.category}
                    </p>
                    <p style="color: #666; font-size: 0.9rem; line-height: 1.4; height: 3.8em; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                        ${p.description}
                    </p>
                    <div class="flex-between" style="margin-top: auto; padding-top: 15px;">
                        <span style="font-weight: bold; color: var(--primary-color); font-size: 1.1rem;">$${p.price}</span>
                        ${!auth.isVendor() ? `<button class="btn btn-primary" onclick="addToCart('${p.id}')">${t('addToCart')}</button>` : ''}
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        paginationEl.innerHTML = `
            <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} id="vsPrev">${t('prev')}</button>
            <span class="page-info">${t('page')} ${currentPage} / ${totalPages}</span>
            <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} id="vsNext">${t('next')}</button>
        `;

        paginationEl.querySelector('#vsPrev').onclick = () => { if (currentPage > 1) { currentPage--; renderProducts(); window.scrollTo(0, 0); } };
        paginationEl.querySelector('#vsNext').onclick = () => { if (currentPage < totalPages) { currentPage++; renderProducts(); window.scrollTo(0, 0); } };
    };

    searchInput.oninput = () => { currentPage = 1; renderProducts(); };
    catFilter.onchange = () => { currentPage = 1; renderProducts(); };
    itemsPerSelect.onchange = () => { currentPage = 1; renderProducts(); };

    setTimeout(renderProducts, 50);
    return section;
}

function renderLogin() {
    const div = document.createElement('div');
    div.className = 'glass';
    div.style = 'max-width: 400px; margin: 50px auto; padding: 30px;';
    div.innerHTML = `
        <h2 class="text-center">${t('login')}</h2>
        <form id="loginForm">
            <div class="form-group"><label>${t('username')}</label><input type="text" name="username" required></div>
            <div class="form-group"><label>${t('password')}</label><input type="password" name="password" required></div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">${t('signIn')}</button>
        </form>
        <div class="text-center mt-4">
            <p>${t('dontHaveAccount')}</p>
            <button class="btn btn-secondary" onclick="router.navigate('register')">${t('register')}</button>
        </div>
    `;
    div.querySelector('form').onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const u = auth.login(fd.get('username'), fd.get('password'));
        if (u) {
            showAlert(`${t('welcomeBack')}, ${u.name}`);
            if (auth.isAdmin()) router.navigate('admin');
            else if (auth.isVendor()) router.navigate('vendor');
            else router.navigate('home');
        }
    };
    return div;
}

function renderRegister() {
    const div = document.createElement('div');
    div.className = 'glass';
    div.style = 'max-width: 400px; margin: 50px auto; padding: 30px;';
    div.innerHTML = `
        <h2 class="text-center">${t('register')}</h2>
        <form id="registerForm">
            <div class="form-group"><label>${t('name')}</label><input type="text" name="name" required></div>
            <div class="form-group"><label>${t('username')}</label><input type="text" name="username" required></div>
            <div class="form-group"><label>${t('password')}</label><input type="password" name="password" required></div>
            <div class="form-group"><label>${t('role')}</label>
                <select name="role"><option value="client">${t('registerClient')}</option><option value="vendor">${t('registerVendor')}</option></select>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">${t('register')}</button>
        </form>
        <div class="text-center mt-4">
            <p>${t('alreadyHaveAccount')}</p>
            <button class="btn btn-secondary" onclick="router.navigate('login')">${t('login')}</button>
        </div>
    `;
    div.querySelector('form').onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        if (auth.register({ name: fd.get('name'), username: fd.get('username'), password: fd.get('password'), role: fd.get('role') })) {
            router.navigate('login');
        }
    };
    return div;
}

function renderAdmin() {
    if (!auth.isAdmin()) return renderHome();
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="glass" style="padding: 40px; text-align: center; margin-bottom: 30px;">
            <h1>${t('adminDashboard')}</h1>
            <p>${t('vendorApprovals')}</p>
        </div>

        <div class="glass" style="padding: 20px; margin-bottom: 20px;">
            <div class="search-wrap">
                <input type="text" id="adminSearch" placeholder="${t('searchUsers')}">
                <select id="statusFilter" style="width: auto;">
                    <option value="">${t('all')} ${t('status')}</option>
                    <option value="pending">${t('pending')}</option>
                    <option value="approved">${t('approved')}</option>
                </select>
                <div style="display: flex; align-items: center; gap: 10px; margin-left: auto;">
                    <label style="margin-bottom: 0;">${t('itemsPerPage')}:</label>
                    <select id="adminItemsPer" style="width: auto;">
                        <option value="5">5</option><option value="10" selected>10</option><option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="data-table-container glass">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>${t('name')}</th>
                        <th>${t('username')}</th>
                        <th>${t('status')}</th>
                        <th style="text-align: center;">${t('actions')}</th>
                    </tr>
                </thead>
                <tbody id="adminTableBody"></tbody>
            </table>
        </div>

        <div class="flex-between" style="margin-top: 20px; border-top: 1px solid var(--glass-border); padding-top: 20px;">
            <div id="adminPagination" class="pagination" style="margin-top: 0;"></div>
        </div>
    `;

    const tbody = section.querySelector('#adminTableBody');
    const searchInput = section.querySelector('#adminSearch');
    const statusFilter = section.querySelector('#statusFilter');
    const itemsPerSelect = section.querySelector('#adminItemsPer');
    const paginationEl = section.querySelector('#adminPagination');

    let currentPage = 1;

    const updateView = () => {
        const query = searchInput.value.toLowerCase();
        const status = statusFilter.value;
        const itemsPerPage = parseInt(itemsPerSelect.value);

        let users = store.getUsers().filter(u => u.role === 'vendor');
        if (query) users = users.filter(u => u.name.toLowerCase().includes(query) || u.username.toLowerCase().includes(query));
        if (status) users = users.filter(u => (u.status || 'approved') === status);

        const totalPages = Math.ceil(users.length / itemsPerPage) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        const start = (currentPage - 1) * itemsPerPage;
        const pageData = users.slice(start, start + itemsPerPage);

        tbody.innerHTML = '';
        if (pageData.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 40px;">No vendors found.</td></tr>`;
        } else {
            pageData.forEach(v => {
                const tr = document.createElement('tr');
                const vStatus = v.status || 'approved';
                tr.innerHTML = `
                    <td style="font-weight: 600;">${v.name}</td>
                    <td>@${v.username}</td>
                    <td><span class="badge" style="background: ${vStatus === 'pending' ? 'var(--danger-color)' : 'var(--primary-color)'}; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem;">${t(vStatus)}</span></td>
                    <td style="text-align: center;">
                        ${vStatus === 'pending' ? `<button class="btn btn-primary" onclick="approveVendor('${v.id}'); router.navigate('admin')">${t('approve')}</button>` : ''}
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        paginationEl.innerHTML = `
            <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} id="admPrev">${t('prev')}</button>
            <span class="page-info">${t('page')} ${currentPage} / ${totalPages}</span>
            <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} id="admNext">${t('next')}</button>
        `;

        paginationEl.querySelector('#admPrev').onclick = () => { if (currentPage > 1) { currentPage--; updateView(); } };
        paginationEl.querySelector('#admNext').onclick = () => { if (currentPage < totalPages) { currentPage++; updateView(); } };
    };

    searchInput.oninput = () => { currentPage = 1; updateView(); };
    statusFilter.onchange = () => { currentPage = 1; updateView(); };
    itemsPerSelect.onchange = () => { currentPage = 1; updateView(); };

    setTimeout(updateView, 50);
    return section;
}

function renderVendor() {
    if (!auth.isVendor()) return renderHome();
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="flex-between mb-4">
            <h2>${t('vendorPortal')}</h2>
            <button class="btn btn-primary" onclick="showProductModal()">+ ${t('newProduct')}</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px;">
            <div class="glass" style="padding: 20px; text-align: center;">
                <h4 style="margin: 0; opacity: 0.7;">Products</h4>
                <div style="font-size: 2rem; font-weight: bold;">${store.getProducts().filter(p => p.vendorId === auth.currentUser.id).length}</div>
            </div>
            <div class="glass" style="padding: 20px; text-align: center;">
                <h4 style="margin: 0; opacity: 0.7;">Total Orders</h4>
                <div style="font-size: 2rem; font-weight: bold;">${store.getOrders().filter(o => o.items.some(i => i.vendorId === auth.currentUser.id)).length}</div>
            </div>
            <div class="glass" style="padding: 20px; text-align: center;">
                <h4 style="margin: 0; opacity: 0.7;">Chat Partners</h4>
                <div style="font-size: 2rem; font-weight: bold;">${[...new Set(store.getMessages().filter(m => m.senderId === auth.currentUser.id || m.receiverId === auth.currentUser.id).map(m => m.senderId === auth.currentUser.id ? m.receiverId : m.senderId))].length}</div>
            </div>
        </div>

        <div class="glass" style="padding: 20px; margin-bottom: 20px;">
            <div class="search-wrap">
                <input type="text" id="vpSearch" placeholder="${t('searchPlaceholder')}">
                <select id="vpCatFilter" style="width: auto;">
                    <option value="">${t('allCategories')}</option>
                    ${[...new Set(store.getProducts().map(p => p.category))].map(c =>
        `<option value="${c}">${translations[currentLang][c.toLowerCase()] || c}</option>`
    ).join('')}
                </select>
                <div style="display: flex; align-items: center; gap: 10px; margin-left: auto;">
                    <label style="margin-bottom: 0;">${t('itemsPerPage')}:</label>
                    <select id="vpItemsPer" style="width: auto;">
                        <option value="5">5</option><option value="10" selected>10</option><option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="data-table-container glass">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>${t('productName')}</th>
                        <th>${t('category')}</th>
                        <th>${t('price')}</th>
                        <th style="text-align: center;">${t('actions')}</th>
                    </tr>
                </thead>
                <tbody id="vpTableBody"></tbody>
            </table>
        </div>

        <div class="flex-between" style="margin-top: 20px; border-top: 1px solid var(--glass-border); padding-top: 20px;">
            <div id="vpPagination" class="pagination" style="margin-top: 0;"></div>
        </div>
    `;

    const tbody = section.querySelector('#vpTableBody');
    const searchInput = section.querySelector('#vpSearch');
    const catFilter = section.querySelector('#vpCatFilter');
    const itemsPerSelect = section.querySelector('#vpItemsPer');
    const paginationEl = section.querySelector('#vpPagination');

    let currentPage = 1;

    const updateView = () => {
        const query = searchInput.value.toLowerCase();
        const category = catFilter.value;
        const itemsPerPage = parseInt(itemsPerSelect.value);

        let products = store.getProducts().filter(p => p.vendorId === auth.currentUser.id);
        if (query) products = products.filter(p => p.name.toLowerCase().includes(query));
        if (category) products = products.filter(p => p.category === category);

        const totalPages = Math.ceil(products.length / itemsPerPage) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        const start = (currentPage - 1) * itemsPerPage;
        const pageData = products.slice(start, start + itemsPerPage);

        tbody.innerHTML = '';
        if (pageData.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 40px;">No products found.</td></tr>`;
        } else {
            pageData.forEach(p => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            ${p.image ? `<img src="${p.image}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">` : '📦'}
                            <span>${p.name}</span>
                        </div>
                    </td>
                    <td><span class="badge" style="background: rgba(42, 157, 143, 0.1); color: var(--primary-color);">${translations[currentLang][p.category.toLowerCase()] || p.category}</span></td>
                    <td><strong>$${p.price}</strong></td>
                    <td style="text-align: center;">
                        <button class="btn btn-secondary" style="padding: 5px 10px;" onclick='showProductModal(${JSON.stringify(p).replace(/'/g, "&apos;")})'>${t('edit')}</button>
                        <button class="btn btn-danger" style="padding: 5px 10px;" onclick="deleteProduct('${p.id}')">${t('delete')}</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        paginationEl.innerHTML = `
            <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} id="vpPrev">${t('prev')}</button>
            <span class="page-info">${t('page')} ${currentPage} / ${totalPages}</span>
            <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} id="vpNext">${t('next')}</button>
        `;

        paginationEl.querySelector('#vpPrev').onclick = () => { if (currentPage > 1) { currentPage--; updateView(); } };
        paginationEl.querySelector('#vpNext').onclick = () => { if (currentPage < totalPages) { currentPage++; updateView(); } };
    };

    searchInput.oninput = () => { currentPage = 1; updateView(); };
    catFilter.onchange = () => { currentPage = 1; updateView(); };
    itemsPerSelect.onchange = () => { currentPage = 1; updateView(); };

    setTimeout(updateView, 50);
    return section;
}

function renderCart() {
    const div = document.createElement('div');
    div.className = 'glass';
    div.style = 'max-width: 600px; margin: 20px auto; padding: 30px;';
    if (cart.length === 0) {
        div.innerHTML = `<h2>${t('yourCart')}</h2><p>${t('empty')}</p><button class="btn btn-secondary" onclick="router.navigate('home')">${t('goShopping')}</button>`;
        return div;
    }
    let total = 0;
    const list = cart.map(item => { total += item.price; return `<div class="flex-between mb-4"><span>${item.name}</span><span>$${item.price}</span></div>`; }).join('');
    div.innerHTML = `<h2>${t('yourCart')}</h2><div class="mb-4">${list}</div><div class="flex-between mb-4" style="border-top: 1px solid #ccc; padding-top: 10px;"><strong>${t('total')}:</strong><strong>$${total}</strong></div><h3>${t('checkoutMethod')}</h3><div style="display: flex; gap: 10px; margin-bottom: 20px;"><button class="btn btn-secondary" onclick="processPayment('manual')">${t('manual')}</button><button class="btn btn-secondary" onclick="processPayment('local')">${t('local')}</button><button class="btn btn-secondary" onclick="processPayment('global')">${t('global')}</button></div>`;
    return div;
}

function renderProfile() {
    if (!auth.currentUser) return renderHome();
    auth.refreshCurrentUser();
    const u = auth.currentUser;

    const div = document.createElement('div');
    div.className = 'glass';
    div.style = 'max-width: 800px; margin: 30px auto; padding: 40px;';
    div.innerHTML = `
        <div style="display: flex; align-items: center; gap: 30px; margin-bottom: 40px; border-bottom: 1px solid var(--glass-border); padding-bottom: 30px;">
            <div style="font-size: 5rem; background: var(--primary-color); color: white; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; border-radius: 50%;">
                ${u.name.charAt(0).toUpperCase()}
            </div>
            <div>
                <h1>${u.name}</h1>
                <p style="color: #666;">@${u.username} • <span class="badge" style="background: var(--primary-color); color: white;">${u.role.toUpperCase()}</span></p>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div>
                <h3>${t('accountInfo')}</h3>
                <form id="profileForm">
                    <div class="form-group">
                        <label>${t('name')}</label>
                        <input type="text" name="name" value="${u.name}" required>
                    </div>
                    <div class="form-group">
                        <label>${t('username')}</label>
                        <input type="text" value="${u.username}" disabled style="opacity: 0.6; cursor: not-allowed;">
                    </div>
                    <div class="form-group">
                        <label>${t('accountSecurity')}</label>
                        <input type="password" name="newPassword" placeholder="${t('newPassword')}">
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">${t('saveChanges')}</button>
                </form>
            </div>
            <div>
                <h3>Quick Stats</h3>
                <div class="glass" style="padding: 20px; margin-bottom: 20px;">
                    <p><strong>${t('role')}:</strong> ${u.role}</p>
                    <p><strong>${t('status')}:</strong> ${t(u.status || 'approved')}</p>
                </div>
                ${u.role === 'client' ? `
                    <h3>${t('orders')}</h3>
                    <div id="ordersList">
                        ${store.getOrders().filter(o => o.userId === u.id).length === 0 ?
                `<div class="glass" style="padding: 20px; text-align: center;"><p style="color: #888;">No orders yet.</p></div>` :
                store.getOrders().filter(o => o.userId === u.id).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map(o => `
                                <div class="glass mb-4" style="padding: 15px;">
                                    <div class="flex-between">
                                        <strong>Order #${o.id.substring(1, 6)}</strong>
                                        <span class="badge" style="background: var(--primary-color); color: white;">$${o.total.toFixed(2)}</span>
                                    </div>
                                    <p style="font-size: 0.8rem; margin: 5px 0;">${new Date(o.timestamp).toLocaleString()}</p>
                                    <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 5px;">
                                        ${[...new Set(o.items.map(i => i.vendorId))].map(vid => {
                    const v = store.getUsers().find(usr => usr.id === vid);
                    return v ? `<button class="btn btn-secondary" style="font-size: 0.7rem; padding: 4px 8px;" onclick="router.navigate('chat', {userId: '${vid}'})">💬 Chat ${v.name}</button>` : '';
                }).join('')}
                                    </div>
                                </div>
                            `).join('')
            }
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    div.querySelector('#profileForm').onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const updated = { ...u, name: fd.get('name') };
        const newPass = fd.get('newPassword');
        if (newPass) updated.password = newPass;

        store.updateUser(updated);
        auth.refreshCurrentUser();
        showAlert(t('updateSuccess'));
        router.navigate('profile');
    };

    return div;
}

function renderConversations() {
    if (!auth.currentUser) return renderHome();
    const u = auth.currentUser;
    const messages = store.getMessages();
    const users = store.getUsers();

    // Group messages by conversation partner
    const chats = {};
    messages.forEach(m => {
        if (m.senderId === u.id || m.receiverId === u.id) {
            const partnerId = m.senderId === u.id ? m.receiverId : m.senderId;
            if (!chats[partnerId]) {
                chats[partnerId] = {
                    partner: users.find(usr => usr.id === partnerId),
                    lastMessage: m,
                    unreadCount: 0
                };
            }
            if (new Date(m.timestamp) > new Date(chats[partnerId].lastMessage.timestamp)) {
                chats[partnerId].lastMessage = m;
            }
            if (m.receiverId === u.id && !m.read) {
                chats[partnerId].unreadCount++;
            }
        }
    });

    const section = document.createElement('section');
    section.innerHTML = `
        <div class="glass" style="padding: 30px; margin-bottom: 30px;">
            <h1>${t('messages')}</h1>
        </div>
        <div class="chat-container">
            <div class="glass conversations-list">
                ${Object.values(chats).length === 0 ? `<p style="padding: 20px; text-align: center; color: #888;">${t('noMessages')}</p>` :
            Object.values(chats).sort((a, b) => new Date(b.lastMessage.timestamp) - new Date(a.lastMessage.timestamp)).map(c => `
                    <div class="glass conversation-item ${c.unreadCount > 0 ? 'unread' : ''}" onclick="router.navigate('chat', {userId: '${c.partner.id}'})">
                        <div class="flex-between">
                            <strong>${c.partner.name} ${c.unreadCount > 0 ? `<span class="badge" style="background: var(--danger-color); font-size: 0.6rem; color: white;">${c.unreadCount}</span>` : ''}</strong>
                            <span style="font-size: 0.7rem; opacity: 0.6;">${new Date(c.lastMessage.timestamp).toLocaleDateString()}</span>
                        </div>
                        <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            ${c.lastMessage.senderId === u.id ? 'You: ' : ''}${c.lastMessage.text}
                        </p>
                    </div>
                `).join('')}
            </div>
            <div class="glass chat-window" style="justify-content: center; align-items: center; background: rgba(0,0,0,0.05);">
                <div style="text-align: center; opacity: 0.5;">
                    <div style="font-size: 4rem;">💬</div>
                    <p>${t('selectChat')}</p>
                </div>
            </div>
        </div>
    `;
    return section;
}

function renderChat(params) {
    if (!auth.currentUser) return renderHome();
    const u = auth.currentUser;
    const partnerId = params.userId;
    const partner = store.getUsers().find(usr => usr.id === partnerId);
    if (!partner) return renderHome();

    const section = document.createElement('section');
    section.innerHTML = `
        <div class="glass" style="padding: 20px 30px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px;">
            <button class="btn btn-secondary" onclick="router.navigate('conversations')" style="padding: 5px 10px;">←</button>
            <div style="width: 40px; height: 40px; background: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                ${partner.name.charAt(0).toUpperCase()}
            </div>
            <div>
                <h3 style="margin: 0;">${partner.name}</h3>
                <span class="badge" style="font-size: 0.7rem; background: rgba(0,0,0,0.1);">${partner.role}</span>
            </div>
        </div>
        <div class="glass chat-window" style="height: 60vh;">
            <div id="messagesDisplay" class="messages-display"></div>
            <form id="chatInputArea" class="chat-input-area">
                <input type="text" id="msgInput" placeholder="${t('typeMessage')}" required autocomplete="off">
                <button type="submit" class="btn btn-primary">${t('send')}</button>
            </form>
        </div>
    `;

    const display = section.querySelector('#messagesDisplay');
    const input = section.querySelector('#msgInput');
    const form = section.querySelector('#chatInputArea');

    const refreshMessages = () => {
        store.markChatAsRead(u.id, partnerId);
        const msgs = store.getMessages().filter(m =>
            (m.senderId === u.id && m.receiverId === partnerId) ||
            (m.senderId === partnerId && m.receiverId === u.id)
        );
        display.innerHTML = msgs.map(m => `
            <div class="message-bubble ${m.senderId === u.id ? 'message-sent' : 'message-received'}">
                ${m.text}
                <span class="message-time">${new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        `).join('');
        display.scrollTop = display.scrollHeight;
    };

    form.onsubmit = (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
            store.addMessage({
                senderId: u.id,
                receiverId: partnerId,
                text: text
            });
            input.value = '';
            refreshMessages();
        }
    };

    setTimeout(refreshMessages, 50);
    // Poll for new messages every 3 seconds (simulated real-time)
    const interval = setInterval(async () => {
        if (router.currentRoute === 'chat') {
            const hasNew = await store.syncWithCloud(true);
            if (hasNew) refreshMessages();
        } else {
            clearInterval(interval);
        }
    }, 3000);

    return section;
}

/* --- Helpers --- */
window.showAlert = (msg) => {
    const m = document.createElement('div');
    m.className = 'modal-overlay';
    m.innerHTML = `<div class="modal-content glass" style="max-width: 350px;"><div style="font-size: 3rem; margin-bottom: 10px;">🔔</div><p>${msg}</p><button class="btn btn-primary" style="width: 100%;" onclick="this.closest('.modal-overlay').remove()">${t('close')}</button></div>`;
    document.body.appendChild(m);
    setTimeout(() => { if (m.parentNode) m.remove(); }, 3000);
};

window.showConfirm = (msg, onConfirm) => {
    const m = document.createElement('div');
    m.className = 'modal-overlay';
    m.innerHTML = `<div class="modal-content glass" style="max-width: 350px;"><h3 style="margin-top: 0;">${t('areYouSure')}</h3><p>${msg}</p><div style="display: flex; gap: 10px; margin-top: 20px;"><button id="cOk" class="btn btn-danger" style="flex: 1;">${t('confirm')}</button><button id="cNo" class="btn btn-secondary" style="flex: 1;">${t('cancel')}</button></div></div>`;
    document.body.appendChild(m);
    m.querySelector('#cOk').onclick = () => { onConfirm(); m.remove(); };
    m.querySelector('#cNo').onclick = () => m.remove();
    m.onclick = (e) => { if (e.target === m) m.remove(); };
};

window.showImageModal = (title, src) => {
    const m = document.createElement('div');
    m.className = 'modal-overlay'; m.onclick = (e) => { if (e.target === m) m.remove(); };
    const isReal = src && (src.startsWith('http') || src.startsWith('data:image'));
    m.innerHTML = `<div class="modal-content glass"><h2>${title}</h2>${isReal ? `<img src="${src}" style="max-width: 100%; max-height: 70vh; border-radius: 12px; margin-bottom: 20px;">` : `<div style="font-size: 5rem;">🖼️</div>`}<button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">${t('close')}</button></div>`;
    document.body.appendChild(m);
};

window.addToCart = (pid) => {
    if (!auth.currentUser) { showAlert(t('pleaseLogin')); router.navigate('login'); return; }
    const p = store.getProducts().find(p => p.id === pid);
    if (p) { cart.push(p); showAlert(t('addedToCart')); updateNav(); }
};

window.approveVendor = (uid) => {
    const u = store.getUsers().find(user => user.id === uid);
    if (u) { u.status = 'approved'; store.updateUser(u); router.navigate('admin'); }
};

window.deleteProduct = (pid) => {
    showConfirm(t('deleteConfirm'), () => { store.deleteProduct(pid); router.navigate('vendor'); });
};

window.showProductModal = (product = null) => {
    const m = document.createElement('div'); m.className = 'modal-overlay';
    const isEdit = !!product;
    m.innerHTML = `
        <div class="modal-content glass" style="max-width: 450px; text-align: left;">
            <h2>${isEdit ? t('edit') : t('newProduct')}</h2>
            <form id="pForm">
                <div id="mImgPrev" style="width: 100%; height: 150px; background: #eee; border-radius: 12px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #ccc;">${product?.image ? `<img src="${product.image}" style="width: 100%; height: 100%; object-fit: cover;">` : 'No Preview'}</div>
                <div class="form-group"><label>${t('productName')}</label><input type="text" name="name" required value="${product?.name || ''}"></div>
                <div style="display: flex; gap: 10px;"><div style="flex: 1;"><label>${t('price')}</label><input type="number" step="0.01" name="price" required value="${product?.price || ''}"></div><div style="flex: 1;"><label>${t('category')}</label><select name="category"><option value="Beauty" ${product?.category === 'Beauty' ? 'selected' : ''}>Beauty</option><option value="Clothing" ${product?.category === 'Clothing' ? 'selected' : ''}>Clothing</option><option value="Home" ${product?.category === 'Home' ? 'selected' : ''}>Home</option></select></div></div>
                <div class="form-group"><label>${t('description')}</label><textarea name="description" rows="2" required>${product?.description || ''}</textarea></div>
                <div class="form-group"><label>${t('imageUrl')}</label><input type="text" id="mImgUrl" name="image" value="${product?.image || ''}"></div>
                <div style="display: flex; gap: 10px; margin-top: 20px;"><button type="submit" class="btn btn-primary" style="flex: 1;">${t('save')}</button><button type="button" class="btn btn-secondary" style="flex: 1;" onclick="this.closest('.modal-overlay').remove()">${t('close')}</button></div>
            </form>
        </div>
    `;
    m.querySelector('#mImgUrl').oninput = (e) => {
        const url = e.target.value;
        m.querySelector('#mImgPrev').innerHTML = url && (url.startsWith('http') || url.startsWith('data:image')) ? `<img src="${url}" style="width: 100%; height: 100%; object-fit: cover;">` : 'No Preview';
    };
    m.querySelector('form').onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = { name: fd.get('name'), price: parseFloat(fd.get('price')), category: fd.get('category'), description: fd.get('description'), image: fd.get('image') || '' };
        if (isEdit) store.updateProduct({ ...product, ...data });
        else store.addProduct({ id: 'p' + Date.now(), vendorId: auth.currentUser.id, ...data });
        m.remove(); router.navigate('vendor');
    };
    document.body.appendChild(m);
};

window.processPayment = (method) => {
    if (cart.length === 0) return;
    const order = {
        id: 'o' + Date.now(),
        userId: auth.currentUser.id,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price, 0),
        method: method,
        status: 'completed',
        timestamp: new Date().toISOString()
    };
    store.addOrder(order);

    let msg = method === 'manual' ? t('paymentManual') : (method === 'local' ? t('paymentLocal') : t('paymentGlobal'));
    showAlert(msg); cart.length = 0; updateNav(); router.navigate('home');
};

function updateNav() {
    const nav = document.getElementById('navRight');
    nav.innerHTML = '';
    const create = (txt, fn) => { const a = document.createElement('a'); a.href = "#"; a.onclick = (e) => { e.preventDefault(); fn(); }; a.textContent = txt; return a; };

    const lang = document.createElement('a'); lang.href = "#"; lang.className = 'lang-toggle'; lang.innerHTML = `<span>${currentLang === 'en' ? 'عربي' : 'English'}</span> 🌐`;
    lang.onclick = (e) => { e.preventDefault(); setLanguage(currentLang === 'en' ? 'ar' : 'en'); };
    nav.appendChild(lang);

    const theme = document.createElement('a'); theme.href = "#"; theme.className = 'lang-toggle'; theme.style = 'margin: 0 15px;'; theme.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
    theme.onclick = (e) => { e.preventDefault(); setTheme(currentTheme === 'light' ? 'dark' : 'light'); };
    nav.appendChild(theme);

    nav.appendChild(create(t('vendors'), () => router.navigate('vendors')));

    if (auth.currentUser) {
        const unreadCount = store.getMessages().filter(m => m.receiverId === auth.currentUser.id && !m.read).length;
        const msgLabel = unreadCount > 0 ? `${t('messages')} (${unreadCount})` : t('messages');
        nav.appendChild(create(msgLabel, () => router.navigate('conversations')));
        nav.appendChild(create(t('profile'), () => router.navigate('profile')));
        if (auth.isAdmin()) nav.appendChild(create('Admin', () => router.navigate('admin')));
        if (auth.isVendor()) nav.appendChild(create(t('vendorPortal'), () => router.navigate('vendor')));
        nav.appendChild(create(`${t('logout')} (${auth.currentUser.username})`, () => auth.logout()));
    } else {
        nav.appendChild(create(t('login'), () => router.navigate('login')));
    }
    if (!auth.isVendor()) nav.appendChild(create(`🛒 (${cart.length})`, () => router.navigate('cart')));
}

/* --- Init --- */
router.register('home', renderHome);
router.register('login', renderLogin);
router.register('register', renderRegister);
router.register('admin', renderAdmin);
router.register('vendor', renderVendor);
router.register('cart', renderCart);
router.register('vendors', renderVendors);
router.register('vendorShop', renderVendorShop);
router.register('profile', renderProfile);
router.register('conversations', renderConversations);
router.register('chat', renderChat);

document.addEventListener('DOMContentLoaded', async () => {
    await store.init();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-theme', currentTheme);
    router.navigate('home');
});
