<template>
    <div class="">
        <UserProfile v-if="!isEditprofile" @edit-profile="isEditprofile = true" />
        <EditProfile v-if="isEditprofile" @back-to-list="isEditprofile = false" />
        
    </div>
</template>

<script setup>
import UserProfile from './components/UserProfile.vue'
import EditProfile from './components/EditProfile.vue'
import { ref } from 'vue';

const isEditprofile = ref(false)

</script>