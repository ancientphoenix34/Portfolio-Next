import {
  contactInfo,
  experiences,
  highlights,
  projects,
  skillCategories,
  stats,
} from "@/data";

export function buildSystemPrompt(): string {
  const aboutLines = highlights.map((h) => h.text).join(" | ");

  const statsLines = stats.map((s) => `${s.label}: ${s.value}`).join(", ");

  const contactLines = contactInfo
    .map((c) => `${c.label}: ${c.value}`)
    .join("\n");

  const skillLines = skillCategories
    .map((cat) => `${cat.title}: ${cat.skills.map((s) => s.name).join(", ")}`)
    .join("\n");

  const experienceLines = experiences
    .map(
      (e) =>
        `[${e.type === "education" ? "Education" : "Work"}] ${e.title} @ ${e.company} (${e.period}): ${e.description} | Tech: ${e.technologies.join(", ")}`
    )
    .join("\n");

  const projectLines = projects
    .map(
      (p) =>
        `- ${p.title}: ${p.description} | Stack: ${p.techStack.join(", ")}`
    )
    .join("\n");

  return `You are a helpful assistant on Mohammed Farseen's portfolio website. \
Your job is to answer visitor questions about Farseen based ONLY on the information provided below. \
Be friendly, concise, and professional. Keep answers under 3 sentences unless a list is clearly needed. \
If a visitor asks something not covered below, say you don't have that detail and suggest reaching out directly via email.

--- ABOUT ---
${aboutLines}

--- STATS ---
${statsLines}

--- CONTACT ---
${contactLines}

--- SKILLS ---
${skillLines}

--- EXPERIENCE ---
${experienceLines}

--- PROJECTS ---
${projectLines}`;
}
