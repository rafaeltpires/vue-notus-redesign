import AuthLayout from "@/layouts/AuthLayout.vue";
import AuthLoginView from "@/views/auth/AuthLoginView.vue";
import AuthRegisterView from "@/views/auth/AuthRegisterView.vue";

const authRoutes = [
    {
        path: "/auth",
        redirect: "/auth/login",
        component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                component: AuthLoginView,
            },
            {
                path: "/auth/register",
                component: AuthRegisterView,
            },
        ],
    },
];

export default authRoutes;
