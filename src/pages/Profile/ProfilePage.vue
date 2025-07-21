<template>
    <div>
        <UserProfile 
            v-if="!isEditprofile"
            :is-client="auth.role == 'client' ? true : false"
            @edit-profile="isEditprofile = true"
        />
        <EditProfile v-if="isEditprofile" @back-to-list="isEditprofile = false" />
    </div>

    <!-- PROFIL PRO -->
    <!-- <div v-if="auth.role === 'pro'">
        <UserProfilePro v-if="!isEditprofile" @edit-profile="isEditprofile = true"/>
        <EditProfilePro v-if="isEditprofile" @back-to-list="isEditprofile = false"/>
    </div> -->
</template>

<script setup>
import UserProfile from './components/UserProfile.vue'
import EditProfile from './components/EditProfile.vue'

// import UserProfilePro from './components/UserProfilePro.vue'
// import EditProfilePro from './components/EditProfilePro.vue'

import { auth } from '@/stores/auth.js'
import {  ref } from 'vue';

const isEditprofile = ref(false)
</script>