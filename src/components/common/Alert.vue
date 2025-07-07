<template>
    <div class="bg-[rgba(16,185,129,0.10)] border-l-[4px] border-[#43A047] p-8 ">
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 w-full">
                <img :src="alertImg" alt="icone alerte" class="w-[24px] h-[24px]" />
                <p class="text-[#43A047] font-light ">
                    <strong>{{ alertDescription }}</strong>
                </p>
            </div>
            <slot>
            </slot>
        </div>
    </div>
</template>

<script setup>
import alertIcon from '@/assets/icons/alert-icon.svg'

const props = defineProps({
    alertDescription: {
        type: String,
        default: "Description here"
    },
    alertImg : {
        type: String,
        default: alertIcon
    }
});

</script>