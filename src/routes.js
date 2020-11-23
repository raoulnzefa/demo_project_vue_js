// ------------------- Login Start ------------------------
const Login = () =>
    import ('./components/Login/Login.vue');
// ------------------- Login Start ------------------------
// ------------------- OtherLinks Start ------------------------
const HelpAndSupport = () =>
    import ('./components/OtherLinks/HelpAndSupport.vue');
// ------------------- OtherLinks Start ------------------------
// ------------------- Dashboard Start --------------------
const Home = () =>
    import ('./components/Dashboard/Home.vue');
const Dashboard = () =>
    import ('./components/Dashboard/Dashboard.vue');
// ------------------- Dashboard End ----------------------
// ------------------- Cart Start --------------------
const Cart = () =>
    import ('./components/Dashboard/Cart/Cart.vue');
const ProceedToPayment = () =>
    import ('./components/Dashboard/Cart/ProceedToPayment.vue');
// ------------------- Cart End ----------------------
// ------------------- Shopping Start --------------------
const Shop = () =>
    import ('./components/Shopping/AllProducts.vue');
const DetailedProductView = () =>
    import ('./components/Shopping/DetailedProductView.vue');
// ------------------- Shopping End ----------------------
// ------------------- My Account Start -------------------
const MyAccount = () =>
    import ('./components/Login/MyAccount.vue');
const ContactDetails = () =>
    import ('./components/Login/MyAccount/ContactAndAddressDetails.vue');
const MyProfile = () =>
    import ('./components/Login/MyAccount/MyProfile.vue');
const NotificationSettings = () =>
    import ('./components/Login/MyAccount/NotificationSettings.vue');
const OrderDetails = () =>
    import ('./components/Login/MyAccount/OrderDetails.vue');
const PasswordAndSecurity = () =>
    import ('./components/Login/MyAccount/PasswordAndSecurity.vue');
const PaymentsAndBills = () =>
    import ('./components/Login/MyAccount/PaymentsAndBills.vue');
const ProfileSettings = () =>
    import ('./components/Login/MyAccount/ProfileSettings.vue');
const Settings = () =>
    import ('./components/Login/MyAccount/Settings.vue');
// ------------------- My Account End -------------------

export const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
}, {
    path: '/',
    component: Home,
    children: [
        // ---------------- Dashboard Start ------------------------
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        // ---------------- Dashboard End --------------------------
        // ---------------- HelpAndSupport Start -----------------------------
        {
            path: '/help-support',
            name: 'HelpAndSupport',
            component: HelpAndSupport
        },
        // ---------------- HelpAndSupport End -------------------------------
        // ---------------- Cart Start -----------------------------
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/payment',
            name: 'ProceedToPayment',
            component: ProceedToPayment
        },
        // ---------------- Cart End -------------------------------
        // ---------------- Shopping Start -----------------------------
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/product-details',
            name: 'DetailedProductView',
            component: DetailedProductView
        },
        // ---------------- Shopping End -------------------------------
        // ---------------- My Account Start -----------------------
        {
            path: '/my-account',
            name: 'MyAccount',
            component: MyAccount,
            children: [{
                path: '/contact',
                name: 'ContactDetails',
                component: ContactDetails
            }, {
                path: '/profile',
                name: 'MyProfile',
                component: MyProfile
            }, {
                path: '/notification-settings',
                name: 'NotificationSettings',
                component: NotificationSettings
            }, {
                path: '/order',
                name: 'OrderDetails',
                component: OrderDetails
            }, {
                path: '/security',
                name: 'PasswordAndSecurity',
                component: PasswordAndSecurity
            }, {
                path: '/payments-bills',
                name: 'PaymentsAndBills',
                component: PaymentsAndBills
            }, {
                path: '/profile-settings',
                name: 'ProfileSettings',
                component: ProfileSettings
            }, {
                path: '/settings',
                name: 'Settings',
                component: Settings
            }, ]
        },
        // ---------------- My Account End -----------------------
    ]
}, ]