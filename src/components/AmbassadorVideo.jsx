import { useTranslation } from '../utils/useTranslation'

export default function AmbassadorVideo() {
  const { t } = useTranslation()

  return (
    <section id="zgodba" className="main-section ambassador-video-section" aria-labelledby="ambassador-video-title">
      <div className="site-container ambassador-video-layout">
        <div className="ambassador-video-copy">
          <p className="main-eyebrow ambassador-video-eyebrow" data-reveal data-reveal-style="clip">
            {t('video.label')}
          </p>
          <h2
            id="ambassador-video-title"
            className="main-section-title ambassador-video-title"
            data-reveal
            data-reveal-style="up"
            data-reveal-delay="80"
          >
            {t('video.title')}
          </h2>
          <p
            className="ambassador-video-description"
            data-reveal
            data-reveal-style="up"
            data-reveal-delay="140"
          >
            {t('video.description')}
          </p>
        </div>

        <figure className="ambassador-video-figure" data-reveal data-reveal-style="up" data-reveal-delay="160">
          <div className="ambassador-video-frame">
            <video
              aria-label={t('video.aria_label')}
              className="ambassador-video-player"
              controls
              playsInline
              poster="/images/ambassador-video-poster.jpg"
              preload="metadata"
            >
              <source src="/GEN-SHORT-2.mp4" type="video/mp4" />
              {t('video.fallback')}
            </video>
          </div>
          <figcaption>{t('video.caption')}</figcaption>
        </figure>
      </div>
    </section>
  )
}
