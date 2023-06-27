import AdminLayout from "@/layouts/AdminLayout.vue";
import AdminDashboardView from "@/views/admin/AdminDashboardView.vue";
import AdminSettingsView from "@/views/admin/AdminSettingsView.vue";
import AdminTablesView from "@/views/admin/AdminTablesView.vue";
import AdminMapsView from "@/views/admin/AdminMapsView.vue";

const adminRoutes = [
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        component: AdminLayout,
        children: [
            {
                path: "/admin/dashboard",
                component: AdminDashboardView,
            },
            {
                path: "/admin/settings",
                component: AdminSettingsView,
            },
            {
                path: "/admin/tables",
                component: AdminTablesView,
            },
            {
                path: "/admin/maps",
                component: AdminMapsView,
            },
        ],
    }
];

export default adminRoutes;
