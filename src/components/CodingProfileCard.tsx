import { portfolio, type CodingProfile } from "../data/portfolio";

interface CodingProfileCardProps {
  profile: CodingProfile;
}

export function CodingProfileCard({ profile }: CodingProfileCardProps) {
  const profileUrl =
    profile.profileUrl.trim() ||
    (profile.platform === "GitHub" ? (portfolio.links.github ?? "").trim() : "");
  const stats = [
    profile.solvedProblems.trim() && {
      label: "Problems solved",
      value: profile.solvedProblems,
    },
    profile.rating.trim() && { label: "Rating", value: profile.rating },
    profile.rank.trim() && { label: "Rank", value: profile.rank },
  ].filter((stat): stat is { label: string; value: string } => Boolean(stat));

  return (
    <article className="coding-card">
      <div className="coding-card__topline">
        <span className="coding-card__monogram" aria-hidden="true">
          {profile.platform.slice(0, 1)}
        </span>
        <span className="coding-card__type">PROFILE</span>
      </div>
      <h3>{profile.platform}</h3>
      {profile.handle.trim() && <p className="coding-card__handle">{profile.handle}</p>}
      {stats.length > 0 && (
        <dl className="coding-card__stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {profileUrl ? (
        <a
          className="coding-card__link"
          href={profileUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          View profile <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </article>
  );
}
