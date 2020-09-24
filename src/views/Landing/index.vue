<template>
  <div>
    <HeaderLanding />
    <PartnerSection />
    <AboutSection />
    <FeatureSection />
    <TestimoniSection />
    <FooterLanding />
  </div>
</template>

<script>
import HeaderLanding from './components/HeaderLanding'
import PartnerSection from './components/PartnerSection'
import AboutSection from './components/AboutSection'
import FeatureSection from './components/FeatureSection'
import FooterLanding from './components/FooterLanding'
import TestimoniSection from './components/TestimoniSection'
export default {
  components: {
    HeaderLanding,
    PartnerSection,
    AboutSection,
    FeatureSection,
    FooterLanding,
    TestimoniSection
  }
}
</script>

<style scoped>
</style>
