<script setup>
import Envelope from "@/components/icons/Envelope.vue";
import Whatsapp from "@/components/icons/Whatsapp.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Github from "@/components/icons/Github.vue";

const contacts = [
  {
    label: "Email",
    href: "mailto:mohamedsaidredwan@gmail.com",
    icon: Envelope,
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/01206184802",
    icon: Whatsapp,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamedsaidredwan",
    icon: LinkedIn,
  },
  {
    label: "Github",
    href: "https://github.com/eng-mohamedSaid",
    icon: Github,
  },
];
</script>

<template>
  <section>
    <h2 class="section-title">contact me</h2>

    <div class="social-links">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="social-links-link"
      >
        <p>{{ contact.label }}</p>
        <a
          :href="contact.href"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via {{ contact.label }}"
        >
          <component :is="contact.icon" class="icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
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
  margin: 0;
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
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
}

.social-links a:hover {
  background-color: var(--main-color);
  color: var(--white);
}

.icon {
  width: 30px;
  height: 30px;
  transition: color 0.3s ease;
}
</style>
