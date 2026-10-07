import type { SkillCategory } from "../data/portfolio";

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  return (
    <article className="skill-category">
      <div className="skill-category__heading">
        <span className="skill-category__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3>{category.name}</h3>
      </div>
      <ul className="skill-category__list" aria-label={category.name}>
        {category.skills.map((skill) => (
          <li className="skill-category__item" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
