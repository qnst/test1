import { 
  Button, 
  makeStyles,
  shorthands,
} from '@fluentui/react-components';
import { Dismiss24Regular, Apps48Filled } from '@fluentui/react-icons';
import { useState } from 'react';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  banner: {
    backgroundColor: '#9FCBEF',
    color: '#1a1a1a',
    ...shorthands.padding('12px', '40px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '15px',
    flexShrink: 0,
  },
  bannerContent: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
  },
  bannerLink: {
    color: '#0078D4',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  hero: {
    background: 'linear-gradient(135deg, #E6F2FA 0%, #F0E6FA 50%, #FAE6F0 100%)',
    flex: 1,
    ...shorthands.padding('40px', '80px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: '-10%',
      left: '30%',
      width: '40%',
      height: '80%',
      background: 'linear-gradient(135deg, rgba(255, 192, 203, 0.3) 0%, transparent 100%)',
      ...shorthands.borderRadius('50%'),
      transform: 'rotate(-15deg)',
      pointerEvents: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-20%',
      right: '10%',
      width: '50%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.2) 0%, transparent 100%)',
      ...shorthands.borderRadius('50%'),
      pointerEvents: 'none',
    },
  },
  heroLeft: {
    zIndex: 1,
    maxWidth: '800px',
  },
  heroTag: {
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.5px',
    color: '#1a1a1a',
    marginBottom: '24px',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: '44px',
    fontWeight: 600,
    lineHeight: '1.2',
    marginBottom: '20px',
    color: '#1a1a1a',
  },
  heroSubtitle: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '32px',
    color: '#323130',
  },
  heroButtons: {
    display: 'flex',
    ...shorthands.gap('12px'),
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#0078D4',
    color: '#fff',
    fontSize: '15px',
    ...shorthands.padding('10px', '20px'),
    height: '40px',
    fontWeight: 600,
    ...shorthands.border('none'),
    '&:hover': {
      backgroundColor: '#106EBE',
    },
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#0078D4',
    fontSize: '15px',
    ...shorthands.padding('10px', '20px'),
    height: '40px',
    fontWeight: 600,
    ...shorthands.border('1px', 'solid', '#0078D4'),
    '&:hover': {
      backgroundColor: 'rgba(0, 120, 212, 0.05)',
    },
  },
  heroRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  heroImage: {
    width: '100%',
    maxWidth: '500px',
    height: '300px',
    backgroundColor: 'rgba(0, 120, 212, 0.1)',
    ...shorthands.borderRadius('8px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    color: '#0078D4',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  bottomNav: {
    backgroundColor: '#fff',
    ...shorthands.borderTop('1px', 'solid', '#E1E1E1'),
    ...shorthands.padding('16px', '80px'),
    display: 'flex',
    ...shorthands.gap('32px'),
    alignItems: 'center',
    flexShrink: 0,
  },
  navTab: {
    color: '#0078D4',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const HomePage = () => {
  const styles = useStyles();
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className={styles.container}>
      {/* Announcement Banner */}
      {showBanner && (
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <span>Introducing Daily App Service - Build and scale with confidence.</span>
            <a href="#" className={styles.bannerLink}>
              Read the blog →
            </a>
          </div>
          <Button
            appearance="subtle"
            icon={<Dismiss24Regular />}
            onClick={() => setShowBanner(false)}
            style={{ minWidth: '32px', color: '#1a1a1a' }}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroTag}>DAILY. STREAMLINE YOUR WORKFLOW.</div>
          <h1 className={styles.heroTitle}>
            The development platform that grows with your team
          </h1>
          <p className={styles.heroSubtitle}>
            Manage your applications, databases, and documents in one unified platform. 
            Built for developers and teams—with powerful tools for daily development, 
            intelligent document collaboration, and seamless database management.
          </p>
          <div className={styles.heroButtons}>
            <Button 
              appearance="primary" 
              size="large"
              className={styles.primaryButton}
              onClick={() => window.location.href = '/dashboard'}
            >
              Get started with Daily
            </Button>
            <Button 
              appearance="outline" 
              size="large"
              className={styles.secondaryButton}
            >
              Explore solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className={styles.bottomNav}>
        <span className={styles.navTab}>Latest Updates</span>
        <span className={styles.navTab}>Solutions</span>
        <span className={styles.navTab}>Features & Tools</span>
        <span className={styles.navTab}>Resources</span>
        <span className={styles.navTab}>Success Stories</span>
      </div>
    </div>
  );
};

export default HomePage;
