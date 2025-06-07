<script setup>
import { RouterLink } from "vue-router";

const skills = ["html", "CSS", "javascript", "Vue", "React"];
const experiences = [
  {
    date: "Feb 2023 – Present",
    title: "Frontend Developer",
    company: "Thatek Saudi Arabia Company",
    location: "Remote",
    details: [
      "Built responsive web apps with Nuxt.js & Tailwind CSS.",
      "Implemented UI features using Adobe XD and Figma.",
      "Refactored Nuxt.js codebase for responsiveness, maintainability, and DRY principles.",
      "Developed tests and results pages; integrated backend APIs.",
      "Migrated from Nuxt 2 to Nuxt 3, adopting Composition API and upgrading state management to Pinia.",
      "Implemented dynamic theming and dark mode for enhanced accessibility.",
      "Delivered React Native app features, expanding cross-platform capabilities.",
      "Collaborated with backend team to ensure seamless API integration and optimize performance.",
    ],
  },
  {
    date: "Sep 2023 – Jul 2024",
    title: "Team Leader & Frontend Lead",
    project: "Graduation Project - Zagazig University",
    company: "ZWEB - AI-powered website builder",
    details: [
      "Led 15-member team to develop an AI-driven landing page builder.",
      "Mentored team on React & Git best practices.",
      "Managed tasks, code merges, and conflict resolution.",
      "Designed UI with Figma; integrated AI backend features.",
      "Fostered open communication and team collaboration.",
    ],
  },
  {
    date: "Jan 2023 – Feb 2023",
    title: "Frontend Developer",
    company: "Freelance",
    details: [
      "Designed and developed a responsive Islamic website featuring audio and video content using HTML, CSS, and JavaScript.",
      "Built multiple sections including Lessons, Lectures, Sermons, and Articles optimized for seamless user experience.",
      "Ensured full compatibility across mobile, tablet, and desktop devices.",
      "Collaborated closely with the client to refine features through multiple iterations.",
    ],
  },
  {
    date: "Oct 2022",
    title: "Frontend Developer",
    company: "Freelance",
    details: [
      "Built React landing page with brand-aligned design.",
      "Created visuals using Adobe Illustrator.",
      "Designed responsive layouts from wireframes.",
    ],
  },
  {
    date: "Apr 2022 – Sep 2022",
    title: "Software Engineer Intern",
    company: "Kalbonyan Elmarsos Internship",
    details: [
      "Completed comprehensive training in programming fundamentals, including object-oriented design, data structures, algorithms, and software testing.",
      "Mastered web development with HTML, CSS, and responsive design through real-world projects.",
      "Learned full MERN stack development: JavaScript, React.js, Node.js, and MongoDB.",
      "Gained practical experience deploying applications on AWS and building serverless web applications.",
      "Developed proficiency in Git and version control workflows.",
    ],
  },
];
</script>

<template>
  <section>
    <h2 class="section-title">about me</h2>

    <div class="about-row">
      <img class="image" src="@/assets/img/my-photo.webp" alt="me" />

      <div class="about-text">
        <p class="description">
          Computer Science Engineer with a strong passion for frontend
          development, experienced in technologies like Vue.js, Nuxt.js, React,
          and Next.js.
        </p>
        <p class="subtitle">Skills</p>
        <div class="skills">
          <div v-for="skill in skills" :key="skill" class="skill-item">
            {{ skill }}
          </div>
        </div>

        <p class="subtitle">Education</p>
        <div class="timeline">
          <div class="timeline-item">
            <span class="date">2020 : 2024</span>
            <h4>Faculty of Engineering - Zagazig university</h4>
            <p>Computer Science Department</p>
          </div>
        </div>

        <p class="subtitle">Experience</p>
        <div class="tab-content active">
          <div class="timeline">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="timeline-item"
            >
              <span class="date">{{ exp.date }}</span>
              <h4>{{ exp.title }}</h4>
              <template v-if="exp.project">
                <h4>{{ exp.project }}</h4>
              </template>
              <p v-if="exp.company">
                {{ exp.company }}
                <small v-if="exp.location"> ({{ exp.location }})</small>
              </p>
              <ul>
                <li v-for="(detail, i) in exp.details" :key="i">
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a
          href="https://www.notion.so/Mohamed-Said-Abdallah-4e6e5b071ab04d159b2980d2929dea60"
          class="btn link-item"
          target="_blank"
          >CV Link</a
        >
        <RouterLink to="contact" class="btn link-item">contact me</RouterLink>
      </div>
    </div>
  </section>
</template>

<style>
.about-text {
  padding: 1rem 0;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  width: 100%;
}
.about-row {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
}
.image {
  background-color: var(--white-alpha-25);
  max-width: 300px;
  border: 4px solid var(--white-alpha-40);
  border-radius: 1rem;
  width: 100%;
}

.skills {
  display: flex;
  flex-wrap: wrap;
}
.skill-item {
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  padding: 5px 15px;
  text-transform: capitalize;
  margin: 0 0.8rem 0.8rem 0;
  border-radius: 1.5rem;
}
.timeline {
  position: relative;
}
.timeline::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 1px;
  top: 5px;
  left: 5px;
  background-color: var(--main-color);
}
.timeline-item {
  margin-bottom: 2rem;
  position: relative;
  padding: 0 0 2rem 2rem;
}
.timeline-item::before {
  content: "";
  position: absolute;
  height: 11px;
  width: 11px;
  top: 5px;
  left: 0;
  background-color: var(--main-color);
  border-radius: 50%;
}
.timeline-item:last-child {
  margin-bottom: 0;
}
.timeline-item .date {
  display: block;
  color: var(--main-color);
  font-weight: 400;
}
.timeline-item h4 {
  font-size: 1.2rem;
  text-transform: capitalize;
}
.timeline-item p {
  margin: 0 0 0.6rem;
}
.timeline-item ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.btn {
  margin: 0 1rem;
}

@media (max-width: 767px) {
  .about-row {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .image {
    width: 200px;
  }

  .about-text {
    font-size: 1rem;
  }
  .skill-item {
    padding: 5px 10px;
    margin: 0 8px 8px 0;
  }
  .timeline-item {
    margin-bottom: 1rem;
    position: relative;
    padding: 0 0 1rem 1rem;
  }
}
</style>
