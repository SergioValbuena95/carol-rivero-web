<script setup lang="ts">
const { t } = useI18n();
const { ig } = useContactLinks();

useSeoMeta({
    title: () =>('seo.title'),
    description: t('seo.description'),
    ogTitle: t('seo.title'),
    ogDescription: t('seo.description'),
    ogType: 'website',
    ogImage: ig,
});

useSchemaOrg([
    definePerson({
        name: 'Carol Rivero',
        jobTitle: () => t('seo.title'),
        sameAs: [ig]
    }),
    defineWebPage(),
]);

</script>

<template>
    <main>
        <SectionHeroSection />
        <SectionStatementSection />
        <SectionAreasSection />
        <SectionAboutSection />
        <SectionStepsSection id="approach" ns="approach" />
        <SectionStepsSection id="process" ns="process" />
        <SectionPlansSection />
        <SectionPracticalSection />
        <SectionContactSection />
    </main>
</template>