<template>
  <nav
      class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-mint-green-600 flex flex-wrap items-center justify-between relative md:w-[65px] z-10 p-2"
  >
    <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <!--            <button
                      class="cursor-pointer text-green-600 md:hidden px-3 py-1 text-[35pt] leading-none bg-transparent rounded border border-solid border-transparent"
                      type="button"
                      v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
                  >
                      <Icon icon="ep:menu"/>
                  </button>-->
      <!-- Brand -->
      <router-link
          class="md:block text-left mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold "
          to="/"
      >
        <img :src="logoNoBgColor" alt="logo" class="m-auto"/>
      </router-link>
      <!--            &lt;!&ndash; User &ndash;&gt;
                  <ul class="md:hidden items-center flex flex-wrap list-none">
                      <li class="inline-block relative">
                          <notification-dropdown/>
                      </li>
                      <li class="inline-block relative">
                          <user-dropdown/>
                      </li>
                  </ul>-->
      <!-- Collapse -->
      <div
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
          v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <!--                <div
                            class="md:min-w-full md:hidden block pb-4 mb-4"
                        >
                            <div class="flex flex-wrap">
                                <div class="w-6/12">
                                    <router-link
                                        class="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        <img :src="logoNoBgColor" alt="RenewSmartControl logo" class="w-3/4 my-auto mx-auto"/>
                                    </router-link>
                                </div>
                                <div class="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        class="cursor-pointer bg-green-600 text-white md:hidden px-4 h-1/2 my-auto text-md leading-none rounded border border-solid border-transparent"
                                        v-on:click="toggleCollapseShow('hidden')"
                                    >
                                        <Icon icon="ep:close-bold" class="text-lg"/>
                                    </button>
                                </div>
                            </div>
                        </div>-->


        <template v-for="menu in menus" :key="menu.key">
          <div >
            <a class="p-2 my-2 hover:bg-mint-green-500 rounded-xl w-[45px] h-[45px] flex cursor-pointer"
               @click="openMenu(menu.key);"
               :class="[
                              menu.key === openedMenu
                                ? 'bg-mint-green-500 '
                                : 'bg-mint-green-600 ',
                            ]">
              <Icon :icon="menu.icon" class="text-mint-green-50 text-[32px] m-auto"/>
            </a>
          </div>

          <!--                   <ul v-for="item in menu.items" class="md:flex-col md:min-w-full flex flex-col list-none" :key="item.key">
                                  <li class="items-center">
                                      <router-link
                                          :to="item.path"
                                          v-slot="{ href, navigate, isActive }">
                                          <a :href="href" @click="navigate" class="flex uppercase font-bold my-2 ml-2"
                                             :class="[
                                        isActive
                                          ? 'text-emerald-500 hover:text-emerald-600'
                                          : 'text-slate-700 hover:text-slate-500',
                                      ]">
                                              <Icon :icon="item.icon" class="mr-2 text-lg"
                                                    :class="[isActive ? 'text-emerald-500' : 'text-slate-300']"/>
                                              <span class="text-xs">{{ item.name }}</span>
                                          </a>
                                      </router-link>
                                  </li>
                              </ul>-->

        </template>

      </div>
    </div>
  </nav>

  <Transition>
    <div v-if="openedMenu" @click="openedMenu = ''" class="backdrop-blur fixed top-0 left-0 w-full h-screen z-[2]"></div>
  </Transition>

  <Transition>
    <nav v-if="openedMenu" tabindex="-1" class="md:left-[65px] md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-mint-green-500 flex flex-wrap items-center justify-between relative md:w-2/12 z-10 ">
      <img :src="logoText" alt="logo" class="m-auto"/>
      <template v-for="menu in menus" :key="menu.key">
        <div v-if="openedMenu === menu.key" class="flex flex-col text-mint-green-100 p-0">
            <router-link class="group flex hover:bg-mint-green-200 hover:text-mint-green-700 p-0 m-0 py-2" v-for="submenu in menu.items" :key="submenu.key" :to="submenu.path">
              <Icon :icon="submenu.icon" class="ml-5 text-[28px] my-auto"/> <span class="ml-3 mr-auto my-auto text-[18px] ">{{ submenu.name }} </span>
            </router-link>
        </div>
      </template>
    </nav>
  </Transition>
</template>
); }

<script setup lang="ts">
import {ref} from 'vue';
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import logoNoBgColor from '@/assets/logo-placeholder.svg';
import logoText from '@/assets/logo-text.svg';
import {Icon} from '@iconify/vue';
import {useTemplateStore} from '@/stores/templateStore'

const collapseShow = ref("hidden");
const {menus} = useTemplateStore();

const openedMenu: ref<string> = ref("");

function toggleCollapseShow(classes) {
  collapseShow.value = classes;
}
function openMenu(key) {

  if(openedMenu.value === key) {
    openedMenu.value = "";
    return;
  }

  openedMenu.value = key;
}

</script>

<style scoped>

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  z-index: 3;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}

.v-leave-from,
.v-enter-to {
  transform: translateX(0);
}

</style>