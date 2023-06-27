import UserDashboardView from "@/views/user/UserDashboardView.vue";
import UserPortfolioListView from "@/views/user/portfolio/UserPortfolioListView.vue";
import UserPortfolioCreateView from "@/views/user/portfolio/UserPortfolioCreateView.vue";
import UserLayout from "@/layouts/UserLayout.vue";

const userRoutes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: UserLayout,
        children: [
            {
                path: "/dashboard",
                component: UserDashboardView,
            },
            {
                path: "/portfolio",
                redirect: "/portfolio/list",
                children: [
                    {
                        path: "/portfolio/list",
                        component: UserPortfolioListView,
                    },
                    {
                        path: "/portfolio/create",
                        component: UserPortfolioCreateView,
                    },
                ]
            }
        ],
    }
];

export default userRoutes;
