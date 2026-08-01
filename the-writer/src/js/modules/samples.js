// Sample-reading overlay content (brief §6: 2–3 anonymized excerpts,
// ~300 words each, owned by us). Injected into [data-read-content] on
// every page so the overlay works from any entry point.

export const SAMPLES_HTML = `
  <article class="read-sample">
    <span class="label">Memoir — excerpt, names changed</span>
    <h2 class="read-sample-title">The Year the House Went Quiet</h2>
    <p>My mother kept the ledger in the kitchen drawer, under the good scissors, and for thirty-one years nobody but her ever opened it. When she died in March I sat at her table with the drawer pulled out and understood, for the first time, that our family had been a small business all along — one that traded in favors, casseroles, school shoes and silence, and that had never once run at a loss.</p>
    <p>The entries stopped in February. Her handwriting, which had marched level through four decades, drifted upward at the end the way a voice does when it is asking a question it already knows the answer to. I copied the last line into my notebook before the estate people came, because it seemed to me the truest sentence anyone in our family had ever written: <em>owed to no one; owing, nothing.</em></p>
    <p>People ask what it was like to grow up in that house and I tell them the truth: it was quiet. Not the quiet of things unsaid — the quiet of things settled. Every argument in our kitchen ended in arithmetic. It took me fifty years and her funeral to learn that the arithmetic had been love, compounding daily, recorded in a drawer where anyone could have found it and no one ever looked.</p>
  </article>
  <article class="read-sample">
    <span class="label">Founder essay — excerpt, anonymized</span>
    <h2 class="read-sample-title">On Firing Myself</h2>
    <p>The board did not ask me to step down. I want that on the record, mostly because it makes what happened stranger: on a Tuesday in October, with revenue growing and the press friendly, I wrote a memo recommending the company replace me, and then I argued for it in a room where every person present had a financial interest in talking me out of it.</p>
    <p>Founders talk about their companies as children, which is flattering to founders and unfair to children. A company is not your child. It is your argument — a claim you made about the world, staffed and capitalized. And the discipline of an argument is that when someone makes it better than you, you yield the floor. By year six, three people in that building made my argument better than I did. Two of them didn't know it. One did, and was too loyal to say so.</p>
    <p>So the memo did what I could not do in a hallway conversation: it made loyalty irrelevant. The best decision I made as a chief executive was the last one, and I have spent two grateful years watching someone else be right about my life's work, weekly, in public.</p>
  </article>
  <article class="read-sample">
    <span class="label">Commencement speech — excerpt</span>
    <h2 class="read-sample-title">Instructions for a Borrowed Life</h2>
    <p>You will be told today that your future is unwritten. This is a lie, and you are wearing the evidence: every gown in this stadium was worn before you, every chair filled before you, every ambition you are carrying was carried up this hill by someone whose name the university has since put on a building or forgotten entirely. Your life is not unwritten. It is a second draft — and this is tremendous news.</p>
    <p>Because nobody freezes at a second draft. The first draft — the terrifying one, the blank page — was written for you: by parents, by teachers, by every stranger who was kind to you at the exact moment it mattered. Your job is not to begin. Your job is to revise. Strike what is false. Keep what sings. Hand it, improved, to somebody younger — and decline, politely but permanently, to be the last person who touched it.</p>
  </article>
`;

export function fillSamples() {
  const target = document.querySelector('[data-read-content]');
  if (target && !target.dataset.filled) {
    target.innerHTML = SAMPLES_HTML;
    target.dataset.filled = '1';
  }
}
