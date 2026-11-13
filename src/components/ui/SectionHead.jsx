import { useTranslation } from 'react-i18next';
import { sectionsById } from '../../data/sections';

export default function SectionHead({ id }) {
  const { t } = useTranslation();
  const { number, jp } = sectionsById[id];

  return (
    <div className="section-head">
      <span className="section-head__label">
        <span className="section-head__num">{number}</span>
        <span className="eyebrow">{t(`${id}.eyebrow`)}</span>
      </span>
      <span className="jp section-head__jp" lang="ja" aria-hidden="true">
        {jp}
      </span>
    </div>
  );
}
