<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalPath = useSwitchLocalePath();

</script>

<template>
    <div class="flex gap-1 rounded-full border border-ink/15 p-0.5 text-xs font-semibold" role="group" aria-label="Language">
        <NuxtLink
            v-for="l in locales"
            :key="l.code"
            :to="switchLocalPath(l.code)"
            :hreflang="l.language"
            :lang="l.code"
            :aria-current="l.code === locale ? 'true' : undefined"
            class="rounded-full px-2.5 py-1 transition-colors duration-300"
            :class="
                l.code === locale
                ? 'bg-ink text-cream'
                : 'text-muted hover:text-ink'
            "
        >
            {{ l.code.toUpperCase() }}
        </NuxtLink>
    </div>
</template>