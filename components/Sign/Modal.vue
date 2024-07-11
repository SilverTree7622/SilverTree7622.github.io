<template>
    <UModal
        v-model="opt.isOpen"
        :ui="{
            wrapper: 'bg-transparent p-0 m-0',
            base: 'p-0 m-0 items-center',
            rounded: '',
            width: 'w-[350px]',
            height: 'h-full',
            container: '!items-center',
        }"
    >
        <SignIn v-if="authStore.getTab() === 'signin'" :validate="validate" />
        <SignUp v-if="authStore.getTab() === 'signup'" :validate="validate" />
        <SignComplete1 v-if="
            authStore.getTab() === 'complete1'||
            authStore.getTab() === 'complete1country'
        "/>
        <SignComplete1SelectCountry v-if="authStore.getTab() === 'complete1country'" />
        <SignComplete2 v-if="
            authStore.getTab() === 'complete2' ||
            authStore.getTab() === 'complete2league'
        "/>
        <SignComplete2SelectLeagues v-if="authStore.getTab() === 'complete2league'" />
        <SignComplete2SelectTeam v-if="authStore.getTab() === 'complete2team'" />
        <SignComplete2SelectTeamDetail v-if="authStore.getTab() === 'complete2teamdetail'" />
    </UModal>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const opt = reactive({
    isOpen: <boolean>false,
});

watch(
    () => authStore.getIsOpen(),
    async () => {
        opt.isOpen = authStore.getIsOpen();
    }
);

watch(
    () => opt.isOpen,
    async () => {
        if (opt.isOpen) return;
        authStore.hide();
    }
);

const validate = (email: string, password: string): {
    isEmailFailed: boolean;
    isEmailRequireAtMark: boolean;
    isPasswordFailed: boolean;
} => {
    const res = {
        isEmailFailed: false,
        isEmailRequireAtMark: false,
        isPasswordFailed: false,
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    res.isEmailFailed = !(email ?? '');
    res.isEmailRequireAtMark = !emailRegex.test(email ?? '');
    res.isPasswordFailed = !(password ?? '');
    return res;
};


</script>