<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section id="about">
    <h2 class="section-title">about me</h2>

    <div class="about-row">
      <img class="image" src="@/assets/img/my-photo.webp" alt="me" />

      <div class="about-text">
        <p class="description">
          Hi my name is Mohamed Said. I am a student at faculty of Engineering -
          Computer Science Department (Zagazig University).I am interested in
          Programming so i started learning Web development at youtube then i
          join Kalbonyan Elmarsos Internship, and it gave me the right way to be
          a fullstack developer.
        </p>
        <p class="subtitle">Skills</p>
        <div class="skills">
          <div class="skill-item">html</div>
          <div class="skill-item">css</div>
          <div class="skill-item">javascript</div>
          <div class="skill-item">React</div>
          <div class="skill-item">Nodejs</div>
          <div class="skill-item">AWS</div>
        </div>

        <p class="subtitle">Education & Experience</p>

        <!-- Education start  -->
        <div class="tab-content active" id="education">
          <div class="timeline">
            <div class="timeline-item">
              <span class="date">2020 : 2024</span>
              <h4>Faculty of Engineering - Zagazig university</h4>
              <p>Computer Science Department</p>
            </div>

            <div class="timeline">
              <div class="timeline-item">
                <span class="date">2022</span>
                <h4>Kalbonyan Elmarsos Internship</h4>
                <p>Learn Programing Fundamentals ,HTMl and CSS</p>
                <p>Learn MERN Stack</p>
                <p>
                  Learn How to Deploy your web applications with Cloud Provider
                  (AWS)
                </p>
                <p>Learn How to Make serverless web applications</p>
              </div>
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
.about-tabs {
  margin: 1.5rem;
}
.about-tabs .tab-item {
  padding: 2px 0;
  background-color: transparent;
  border: none;
  display: inline-block;
  color: var(--blue-dark);
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 500;
  margin: 0 1.5rem 0 0;
  position: relative;
  opacity: 0.5;
  transition: all 0.3s ease;
}
.about-tabs .tab-item:last-child {
  margin: 0;
}
.about-tabs .tab-item:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 1px;
  background-color: var(--blue-dark);
  transition: width 0.3s ease;
}
.about-tabs .tab-item:hover::before {
  width: 100%;
}
.about-tabs .tab-item.active::before {
  width: 100%;
  background-color: var(--main-color);
}
.about-tabs .tab-item.active {
  color: var(--main-color);
  opacity: 1;
  cursor: auto;
}
/* timeline for education */
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
/* ------------------for active Education and experience----------------------------------------- */
.tab-content {
  padding: 1rem 0;
  display: none;
}
.tab-content.active {
  display: block;
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
  margin: 0 0 0.6rem;
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
