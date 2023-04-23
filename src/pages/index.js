import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.textContainer}>
        <div className={styles.desc}>早知道昨天就加了</div>
        <div className={styles.desc}>再涨2个点我就卖了</div>
        <div className={styles.desc}>回本我就清仓</div>
        <div className={styles.desc}>抄底抄底</div>
        <div className={styles.desc}>... ...</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="财富自由"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
