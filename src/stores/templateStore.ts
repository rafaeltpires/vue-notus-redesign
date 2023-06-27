import {defineStore} from 'pinia';
import {ref} from "vue";

export const useTemplateStore = defineStore('template', () => {
    const menus = ref([
            {
                parent: 'Dashboard',
                key: 'dashboard',
                icon: 'ic:outline-dashboard',
                items: [
                    {
                        name: 'General',
                        key: 'dashboardGeneral',
                        icon: 'icon-park-outline:list',
                        path: '/dashboard'
                    },
                    {
                        name: 'Finances',
                        key: 'dashboardFinance',
                        icon: 'fluent:form-new-20-regular',
                        path: '/dashboard/finances'
                    }
                ]
            },
            {
                parent: 'Calendar',
                key: 'calendar',
                icon: 'ph:calendar',
                items: [
                    {
                        name: 'New appointment',
                        key: 'newAppointment',
                        icon: 'icon-park-outline:list',
                        path: '/new-appointment'
                    },
                    {
                        name: 'My Appointments',
                        key: 'dashboardFinance',
                        icon: 'fluent:form-new-20-regular',
                        path: '/my-appointments'
                    }
                ]
            },
            {
                parent: 'Portfolio',
                key: 'portfolio',
                icon: 'bytesize:portfolio',
                items: [
                    {
                        name: 'List',
                        key: 'portfolioList',
                        icon: 'icon-park-outline:list',
                        path: '/portfolio/list'
                    },
                    {
                        name: 'New Project',
                        key: 'portfolioNewProject',
                        icon: 'fluent:form-new-20-regular\n',
                        path: '/portfolio/create'
                    }
                ]
            }
        ]
    );

    return {menus};
})
