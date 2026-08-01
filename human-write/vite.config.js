import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const r = (p) => resolve(import.meta.dirname, p);

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        index: r('index.html'),
        about: r('about.html'),
        howItWorks: r('how-it-works.html'),
        journal: r('journal.html'),
        contact: r('contact.html'),
        mentors: r('mentors.html'),
        notFound: r('404.html'),
        mentorPim: r('mentor/pim.html'),
        mentorNan: r('mentor/nan.html'),
        mentorTon: r('mentor/ton.html'),
        mentorMind: r('mentor/mind.html'),
        mentorBook: r('mentor/book.html'),
        mentorJay: r('mentor/jay.html')
      }
    }
  }
});
