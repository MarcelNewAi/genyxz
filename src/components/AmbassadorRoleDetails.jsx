import { useTranslation } from '../utils/useTranslation'

export default function AmbassadorRoleDetails() {
  const { t } = useTranslation()
  const facts = [1, 2, 3, 4].map((number) => t(`role.fact${number}`))
  const tasks = [1, 2, 3, 4, 5, 6].map((number) => t(`role.task${number}`))
  const suitability = [1, 2, 3, 4, 5, 6].map((number) => t(`role.fit${number}`))

  return (
    <div className="ambassador-role-info">
      <div className="ambassador-role-facts" aria-label={t('role.facts_label')}>
        <h3>{t('role.facts_title')}</h3>
        <ul>
          {facts.map((fact) => <li key={fact}>{fact}</li>)}
        </ul>
      </div>

      <details className="ambassador-role-details">
        <summary>
          <span>{t('role.toggle')}</span>
          <small>{t('role.hint')}</small>
        </summary>
        <div className="ambassador-role-content">
          <h3>{t('role.title')}</h3>
          <h4>{t('role.what_title')}</h4>
          <p>{t('role.what_text')}</p>

          <h4>{t('role.opportunities_title')}</h4>
          <p>{t('role.opportunities_text1')}</p>
          <p>{t('role.opportunities_text2')}</p>
          <p>{t('role.opportunities_text3')}</p>
          <p>{t('role.opportunities_text4')}</p>
          <ul>{tasks.map((task) => <li key={task}>{task}</li>)}</ul>
          <p>{t('role.development_text1')}</p>
          <p>{t('role.development_text2')}</p>
          <p>{t('role.mentor_text1')}</p>
          <p>{t('role.mentor_text2')}</p>

          <h4>{t('role.time_title')}</h4>
          <p>{t('role.time_text')}</p>

          <h4>{t('role.payment_title')}</h4>
          <p>{t('role.payment_text1')}</p>
          <p>{t('role.payment_text2')}</p>

          <h4>{t('role.career_title')}</h4>
          <p>{t('role.career_text1')}</p>
          <p>{t('role.career_text2')}</p>

          <h4>{t('role.fit_title')}</h4>
          <p>{t('role.fit_intro')}</p>
          <ul>{suitability.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>{t('role.fit_closing')}</p>
        </div>
      </details>
    </div>
  )
}
