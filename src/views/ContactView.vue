<script setup>
import Envelope from "@/components/icons/Envelope.vue";
import Whatsapp from "@/components/icons/Whatsapp.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Github from "@/components/icons/Github.vue";
</script>

<template>
  <section class="contact-section" id="contact">
    <h2 class="section-title">contact me</h2>

    <div class="social-links">
      <div class="social-links-link">
        <p>Email</p>
        <a href="mailto:mohamedsaidredwan@gmail.com" target="_blank"
          ><Envelope class="main-color"
        /></a>
      </div>
      <div class="social-links-link">
        <p>Whatsapp</p>
        <a href="https://wa.me/01206184802" target="_blank"
          ><Whatsapp class="main-color"
        /></a>
      </div>
      <div class="social-links-link">
        <p>LinkedIn</p>
        <a
          href="https://www.linkedin.com/in/mohamedsaidredwan"
          target="_blank"
          ><LinkedIn class="main-color"
        /></a>
      </div>
      <div class="social-links-link">
        <p>Github</p>
        <a href="https://github.com/eng-mohamedSaid" target="_blank"
          ><Github class="main-color"
        /></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.social-links-link {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.social-links-link p {
  width: 130px;
  font-size: 1.2rem;
  font-weight: 500;
}
.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  color: var(--main-color);
  border-radius: 50%;
  margin: 0.3rem;
  transition: all 0.3s ease;
}
.social-links a:hover {
  background-color: var(--main-color);
}
.main-color {
  color: var(--main-color);
  width: 30px;
  height: 30px;
}
a:hover .main-color {
  color: var(--white);
}
</style>
