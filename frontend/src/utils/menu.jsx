const menus = [
    {
        key: 'dashboard',
        name: 'Dashboard',
        url: '/dashboard',
        isActive: false,
        icon: 'fa-solid fa-dashboard',
        children: [],
    },
    {
        key: 'category',
        name: 'Category',
        url: '/categories',
        icon: 'fa-solid fa-list',
        isActive: false,
        children: [],
    },
].sort((a, b) => a.sort - b.sort);

export default menus;
