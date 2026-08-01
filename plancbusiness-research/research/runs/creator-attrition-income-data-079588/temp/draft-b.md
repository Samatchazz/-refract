# Content Creation as an Occupation: What the Quantitative Record Actually Contains

**Executive summary.** Where complete transaction records or platform-disclosed payouts exist, the share of people who register a creator account and reach a subsistence income is small and consistent: 0.18% of 139,366 Patreon campaigns registered 2013–2015 reached roughly US$2,500/month [[vol0123456789-3]]; 0.43% of 36,142,711 YouTube channels modelled on Google's disclosed 2019 payout of US$8.25bn cleared a US federal-minimum-wage-equivalent annual floor, falling to 0.043% at a US median-household bar [[httpsdoiorg10117720563051231180628]]; 1.75% of 79,420 tracked Patreon creators cleared US$1,160/month in October 2017, and 0.8% cleared a $15/hour equivalent [[no-one-makes-a-living-on-patreon-the-outline]]. On attrition, two cohort measurements survive audit: roughly 46% three-year exit among an established German YouTube cohort of 500–5,000 subscribers tracked from December 2017 to late 2020 [[el-komboz-lena-abou-kerkhof-anna-loh-johannes]], and a 24-month median career with more than half of 1,923 VTubers stopped within three years on YouTube, 2017–2023 [[who-reaps-all-the-superchats-a-large-scale-analysis-of-income]]. Time from starting to first meaningful income has no measured distribution on any platform, and reasons for quitting have never been elicited from creators who quit.

The second finding is inseparable from the first. A large share of the field's most-circulated figures do not survive provenance checking: the "50 million creators, 4% professional" chain terminates in a venture-capital blog post with no instrument at any depth [[creator-economy-guide-trends-tools-monetization]] [[with-this-report-we-assess-the-current-state-of-the-creator-economy-including]]; "3% of channels take 90% of the wealth" is a unit-transformation of a peer-reviewed measurement of 85% of *views* [[opus-4-youtube-channels-uploads-and-views-a-statistical-analysis-of-the-past-10]]; two sources examined in this run carry fabricated apparatus [[the-creator-burnout-epidemic-why-62-of-full-time-creators-say-theyre-exhausted-t]] [[pengaruh-ekonomi-kreator-digital-terhadap-pendapatan-generasi-z-di-perkotaan-stu]]; and seven trade outlets reporting a burnout prevalence figure are reporting one Censuswide survey of 1,000 people.

Every figure below carries sample size, year, platform and country. Survey figures and telemetry figures are never presented as a range, since they use different denominators over different populations.

---

## 1. Attrition and Survival Rates of Creators and Channels

### A. What survives audit

Four measurements clear the evidence bar, and they measure four different units. They should be read as separate findings rather than as points on one curve.

| Finding | Unit | N | Window | Platform | Country/region | Type |
|---|---|---|---|---|---|---|
| ~46% of a monetized cohort had exited the platform entirely | Channel | Cohort of German YPP channels, 500–5,000 subs (RDD bandwidth n=484 at 900–1,200 subs) | Dec 2017 → Sep–Nov 2020 | YouTube | Germany | API telemetry, two snapshots [[el-komboz-lena-abou-kerkhof-anna-loh-johannes]] |
| Median career 24 months; 1,057 of 1,923 (>50%) stopped within 3 years; 44 / 28 / 21 months by large-agency / independent / small-agency affiliation | Persona | 1,923 | Feb 2017 – Jul 2023 | YouTube (VTuber niche) | Global, East-Asia-origin agencies | Cox proportional-hazards on livechat telemetry [[who-reaps-all-the-superchats-a-large-scale-analysis-of-income]] |
| 82.6% (115,183 of 139,366) never received a single pledge | Campaign | 139,366 | May 2013 – Oct 2015 | Patreon | Not geo-reported; Western-skewed | Complete transaction record [[vol0123456789-3]] |
| Weekly probability of dropping out: 0.20 (top 100), 0.135 (top 1,000) | Account | Top 10,000 payees | Aug 2019 – Oct 2021 | Twitch | Global | Leaked payout ledger [[vol0123456789-2]] |

Regner's 82.6% is failure at entry, not exit over time. Houssard's flux is churn inside an already-elite population. Only the German cohort and the VTuber panel are survival measurements in the ordinary sense, and neither is platform-scale.

One population-level incidence figure exists and is worth separating from the survey literature because its sampling frame includes people who already stopped: Sounds Profitable's *The Creators 2025*, a census-weighted survey of 5,034 US podcast consumers fielded by Signal Hill Insights in December 2025, finds lapsed creators at 6% of the base — roughly half the size of the active-creator group, an approximate 32% churn rate among everyone who ever tried [[the-creators-2025-understanding-the-modern-podcast-creator-landscape-sounds-prof]].

### B. The claimed platform-scale study, and why it is excluded

One source presents itself as the missing survival telemetry. CreatorMap's three cross-linked posts describe a single 2019-tracked YouTube cohort and report three different sample sizes for it: 97,601 channels [[youtube-channel-survival-rates-a-7-year-creator-study-creatormap]], "105,891 independent YouTube channels" in the opening line of a post whose own title says 97,601 [[youtube-channel-lifespan-half-life-study-of-97601-creators-creatormap-creatormap]], and "over 50,000" [[youtube-channel-growth-factors-data-study-of-50k-creators-creatormap-creatormap]]. None carries a named analyst, methodology appendix, dataset or error bars, and each ends with the same product signup. Its 8.8-year median lifespan is also left-truncated: it is the age at death of channels that had already reached 10,000 subscribers.

### C. Why the platform-scale measurement is absent

The absence is documented rather than merely unfound. The YouTube census infrastructure paper states that the official API "does not provide access to the full set of creators" and exposes only current, never historical, subscriber counts, and that Social Blade lists only the top 5,000 channels with at most three years of history [[tube-census]] — external cohort reconstruction is blocked by design. The investor-disclosure channel yields one genuine hit: Spotify discloses that eight in ten artists who crossed US$100,000 in royalties in 2022 have stayed above it every year since [[the-payouts-loud-and-clear]], which is retention within an earnings tier of already-successful artists, not participation among everyone who started.

The closest rigorous analogues come from unpaid contributor populations and show the design is achievable: English Wikipedia good-faith newcomer survival fell from 35.7% (first half of 2004) to 11.3% (second half of 2010) on manually coded newcomer samples (n=2,100) [[researchthe-rise-and-decline-meta-wiki]], and Debian maintainer tracking found 121 of 216 developers (55.8%) still active 6.5 years on, a half-life near 7.5 years [[contributor-turnover-in-libre-software]]. Both populations are unpaid, so exit mechanics differ; they are methodological comparison, not creator data.

The most quantified non-English platform-level evidence is Japanese: Niconico's quarterly posting counts began declining around 2011 while view counts held until 2016, a lag the authors read as creator outflow preceding audience outflow, alongside a viewer survey (n=1,356, fielded Aug–Sep 2021, Japan) in which "creators moved to other services" was the top or joint-top reason for leaving in all six demographic cells at 29–42% [[why-niconico-in-japan-lost-game-jikkyo-streamers-and-their-audience]].

### D. Adjacent platform-work benchmarks, and their own contradiction

For online freelancing rather than content platforms, the standard citation is 163 million registered accounts with 8.6% active and 2.0% having completed ten projects or earned US$1,000 [[x-opportunities-and-challenges]] [[how-many-online-workers-are-there-in-the-open-research-europe]]; the World Bank's own model, across n=503 platforms with traffic data, puts the same quantity at mean 37% and median 26% active [[the-promise-and-peril]]. The roughly fourfold disagreement is driven entirely by how activity is proxied.

---

## 2. Income Distribution Across Creators: Median vs Mean and the Living-Wage Share

### A. Complete records and platform-disclosed payouts

| Finding | N | Year | Platform | Country | Median | Mean |
|---|---|---|---|---|---|---|
| 0.18% of all registered campaigns (250/139,366) at ≥$2,500/month; 1.03% of the 24,257 that ever received a pledge | 139,366 campaigns | 2013–2015 | Patreon | Western-skewed, not geo-reported | $31/month among active campaigns | $197.88/month [[vol0123456789-3]] |
| Median monthly Patreon earnings $46–$72 by linking platform; means $149–$373 | 104,719 accounts (floored >$10/mo) | Mar 2018 / 2021 / 2024 | Patreon | Not geo-stated | $46–$72 | $149–$373 [[rich-get-richer-platform-attention-and-earnings-inequality]] |
| Within-topic creator Gini rose 0.30 → 0.60 | Complete transaction set, >US$2bn paid | Jun 2013 – Dec 2020 | Patreon | US/Western-skewed | not reported | not reported [[quantifying-the-creator-economy-a-large-scale-analysis-of-patreon]] |
| 0.43% of channels clear ~$15,080/yr; 0.043% clear ~$67,521/yr; 31.7M channels receive 0% of ad revenue | 36,142,711 channels | 2019 revenue year | YouTube | Global crawl, no country split | not reported | tier averages $295 to $1,707,446 [[httpsdoiorg10117720563051231180628]] |
| 1,393 of 79,420 (1.75%) at $1,160/month; 635 (0.8%) at $15/hour | 79,420 tracked creators | Oct 2017 | Patreon | Global platform, US-skewed | most earned $1–$100/month | ~$3,000 implied [[no-one-makes-a-living-on-patreon-the-outline]] |
| 0.21% of videos show visible monetization; median channel subscriber count 4 | 10,016 videos sampled, 1,000 hand-coded | late 2022 | YouTube | Global (random video IDs; 20.1% English) | median views 35 | mean views 5,868; mean subs 55,100 [[journal-of-quantitative-description-digital-media-32023-185]] |

Three properties are stable across every one of these instruments: the mean exceeds the median by roughly three to six times; the modal outcome is zero; and the share clearing any subsistence threshold sits below 2% when the denominator is everyone who registered.

Two caveats belong with these rows rather than after them. Graphtreon's counts rest on the roughly 80% of Patreon creators who publicly display earnings, and high-profile earners commonly hide theirs, so the disclosing subset is non-random; the primary account also states the 2% and 0.8% figures against slightly different denominators within one sentence [[no-one-makes-a-living-on-patreon-the-outline]], a caveat the secondary retelling drops [[less-than-2-of-content-creators-on-patreon-earn-monthly-minimum-wage]]. The Twitch leak is weaker than its reputation: the one outlet that contacted named streamers found some confirming the figures as near-exact and others saying they did not line up, one leaked table cannot be reconciled with another (September 2021 monthly earnings extrapolate to roughly $3.4m against a listed cumulative total of $2,551,618 for the same account), and five outlets state five incompatible collection windows for the same files [[twitch-responds-to-leak-revealing-earnings-of-top-streamers-and-more-dexerto]]. The derived figure that roughly 0.083% of Twitch's ~9 million streamers clear US minimum wage from Twitch payouts alone [[many-top-twitch-streamers-dont-make-minimum-wage-and-3-new-takeaways-from-the-tw]] is order-of-magnitude, not precise.

### B. Government-commissioned and administrative data

The UK Intellectual Property Office study is the most methodologically serious income instrument in the record because it publishes two: a census of Official Charts Company streaming counts in which 1,723 artists reached at least 1 million UK streams in October 2020, or 0.41% of all artists with any UK stream that month; and a self-selected survey of 708 UK music creators in which 72% earned £30,000 or less and, among the 197 for whom music was the sole income, 43% earned £20,000 or less (UK, 2020–2021) [[music-creators-earnings-in]]. The survey arm does not show a living-wage majority either.

US administrative data supplies the part-time benchmark that headline creator statistics rarely quote. In the American Community Survey for 2023, artists employed full time had median annual earnings of $70,170, while artists employed part time had a median of $20,380 in constant 2023 dollars — statistically indistinguishable from all part-time workers at $19,330 [[artists-and-other-cultural-workers]]. The ACS records only primary occupation, so anyone creating content as a secondary activity is invisible. The roughly 2.8x gap between the BLS payroll count for independent artists, writers and performers (n=61,710, May 2022, US) and the ACS person count for the same industry group (n=172,376, 2024, US) is the self-employment share that payroll instruments structurally cannot see [[independent-artists-writers-and-performers-may-2022-oews-industry-specific-occup]] [[independent-artists-writers-and-performers-data-usa]].

### C. Self-selected vendor surveys, reported as such

These answer a narrower question — among people already on a commercial platform's creator list, what share clears a bar — and disagree with each other by more than three times on nominally the same quantity in the same year.

| Instrument | N | Fielded | Frame | Headline | Country |
|---|---|---|---|---|---|
| Linktree Creator Report 2022 | 9,576 Linktree users | 2021 | Active Linktree users | 12% of full-time creators >$50k; 53% of all creators earned ≤$100/year; 46% of self-identified full-timers earned <$1,000/year | Composition undisclosed [[pdf-linktree-creatorreport-2022-02f3aa05a27be6fecb3537b13d5ec9depdf]] |
| NeoReach / Influencer Marketing Hub | "over 2,000" | Mar–Apr 2021 | Open survey via the two firms' own creator networks; 4% report >10M followers | 43% earn >$50k; 70% full-time; 78% of full-timers >$23,500 | Undisclosed [[creator-earnings-breakdown-the-creator-economy-today]] |
| NeoReach Creator Earnings 2025 (cited second-hand, report not obtained) | undisclosed | 2025 | undisclosed | 50.71% under $15,000; 15.41% over $100,000 | Undisclosed [[the-creator-burnout-crisis-why-over-half-of-influencers-are-at-a-breaking-point]] |

Linktree's own data undercut the plain reading of its headline: "full-time" is a self-description with no income threshold, and 46% of those using it earned under $1,000 a year [[pdf-linktree-creatorreport-2022-02f3aa05a27be6fecb3537b13d5ec9depdf]].

### D. The measured size of the sampling artifact

One paired measurement quantifies how much a popularity-gated frame inflates a creator statistic. Affiliate-link prevalence in YouTube's Howto & Style category is 3.49% in a random-prefix sample of roughly 500,000 videos collected in 2017 [[endorsements-on-social-media-an-empirical-study-of]] and 36.7% in a dataset restricted to channels with 10,000+ subscribers collected in late 2019 [[characterizing-alternative-monetization-strategies-on]]. This is a monetization-practice metric, not an income metric, and should not be relabelled as a living-wage multiplier; it is nonetheless the cleanest direct evidence that threshold-gated frames inflate creator-behaviour statistics by roughly an order of magnitude.

---

## 3. Time from Starting to First Meaningful Income

### A. The quantity has three operational definitions and no measured distribution

Eligibility, first payout, and an occupationally meaningful income floor are separately gated and largely decoupled. No accessible study reports a calendar-time distribution for any of the three.

| Gate | Definition | Source type |
|---|---|---|
| Monetization eligibility | 1,000 subscribers plus either 4,000 valid public watch hours in the trailing 12 months or 10 million valid public Shorts views in 90 days; review typically about one month | Platform-disclosed, YouTube, global [[youtube-partner-program-overview-eligibility-computer-youtube-help]] |
| Twitch Affiliate | 25 followers, 4 streamed hours, 4 broadcast days, 3 average concurrent viewers, within a rolling 30 days | Platform-disclosed, Twitch, global [[joining-the-affiliate-program]] |
| First payout | US$100 payment threshold, after tax-info, verification and payment-method gates | Platform-disclosed, YouTube, global [[meet-youtubes-revenue-thresholds-for-payment-youtube-help]] |
| Income floor | No platform defines one; studies substitute national minimum wage or median household income | — |

The decoupling is measurable. Telemetry on 1,027,773 YouTube channels sitting at 1,000–1,100 subscribers, measured May 2026, puts the median channel at that band under roughly $5–20/month [[how-much-does-youtube-pay-for-1000-subscribers-in-2026]]. A channel that has just cleared eligibility therefore needs on the order of five to twenty months of accrual to cross the $100 payout floor, before any queue delay.

### B. Elapsed tenure is not the operative variable

The 36,336,861-channel YouTube census (2019-2020, global) reports channel-age correlations with success of 0.082 for subscribers and 0.101 for views among elite channels, falling to 0.009 and 0.003 across the full population, while elite channels average 940 published videos against 294 for the next tier and days-active is "surprisingly constant between tiers" [[mapping-youtube-a-quantitative-exploration-of-a-platformed-media-system]]. The earlier peer-reviewed study it replicates is available only in abstract, reporting that older channels have significantly higher probability of large viewership while young channels retain a small chance of quick success depending on genre [[opus-4-youtube-channels-uploads-and-views-a-statistical-analysis-of-the-past-10]]. A Twitch natural experiment confirms the pattern on another platform: among 18,467 streamers observed August 2019 - July 2020, newcomers reaching Partner status sustained their pandemic-era increase in streaming while newcomers reaching only Affiliate reverted to baseline within four to eight weeks, streaming 15.4% less (p<0.01) — identical tenure, diverging by threshold status [[vol0123456789]].

### C. The widely-repeated timelines have no measured basis

Two advice sources were inspected directly. One asserts fast-track 1–6 months, average 6 months–2 years, slow 2+ years, illustrated by two survivor anecdotes, while selling watch-hour services [[how-long-does-it-take-to-get-monetized-on-youtube-with-examples]]. The other asserts "most creators reach this point within 6–12 months of consistent posting" with no sample, cohort, data source or method anywhere in a 4,800-word article [[when-do-you-start-making-money-on-youtube-how-monetization-really-works]].

Two survey-derived quantities bear on timing and must be read as survivor descriptions, not cohort outcomes. Among Linktree respondents with under 12 months of experience (subset of n=9,576, fielded 2021), 59% had not monetized at all, 35% had monetized below a livable income, and 6% had earned over $10,000 [[pdf-linktree-creatorreport-2022-02f3aa05a27be6fecb3537b13d5ec9depdf]]. Among NeoReach respondents (n>2,000, Mar–Apr 2021), 46% of those online four or more years earn over $20,000 annually and by year six only 17% earn under $20,000 [[creator-earnings-breakdown-the-creator-economy-today]] — computed only over creators still present to answer.

One platform disclosure bears directly on how much income sits behind the eligibility gate: when YouTube retroactively expelled partners under the 2018 threshold change, it stated that 99% of those affected had earned under US$100 in the prior year and 90% under US$2.50 in the prior month [[el-komboz-lena-abou-kerkhof-anna-loh-johannes]].

---

## 4. Documented Reasons Creators Give for Quitting

### A. The population mismatch, stated before the figures

Every prevalence instrument here samples creators who have not quit and asks about burnout or hypothetical intention. No instrument in the record asks a departed creator why they left. Two near-misses make the absence precise: Sounds Profitable's US podcast survey (n=5,034, census-weighted, December 2025) reaches a genuinely lapsed population, cross-tabs it demographically, and explicitly lists "what specific factors drive creator abandonment" as unanswered [[the-creators-2025-understanding-the-modern-podcast-creator-landscape-sounds-prof]]; and a CSCW study that recruited both current and former YouTube creators for 20 interviews on demonetization contains no mention of quitting, burnout or leaving at all [[give-everybody-a-little-bit-more-equity-content-creator-perspectives-and-respons]].

### B. The four prevalence instruments, and their disagreement

| Instrument | N | Fielded | Country | Prevalence | Top-ranked cause |
|---|---|---|---|---|---|
| Censuswide for Billion Dollar Boy | 1,000 creators (500 US / 500 UK) | Jul 2025 | US, UK | 52% experienced burnout; 37% actively consider leaving | Creative fatigue 40%, workloads 31%, screen time 27%; financial instability ranked most severe at 55% among sufferers [[over-half-of-creators-face-burnout-action-urged-billion-dollar-boy]] [[52-of-content-creators-say-they-have-experienced-burnout]] |
| Awin | undisclosed | 2022 | US, UK | 78% (restated as 87% in Awin's own 2024 release) | Constant platform changes 72%; 53% say passion decreased [[78-of-influencers-admit-to-suffering-burnout]] |
| Awin / ShareASale | "over 300"; majority at 1,000–5,000 followers | 2024 | US, UK, FR, DE | 73% at least some of the time | Constant platform changes 70%; comparison to other creators 64% [[a-majority-of-content-creators-and-influencers-struggle-with-burnout-as-concerns]] |
| Vibely | 150; 45.3% at 100k–500k followers | Nov 2021 | Unstated | 90%; 71% considered quitting | Algorithm/platform changes 65%; needing to make a living 59% [[90-of-content-creators-deal-with-burnout-vibely-wants-to-change-that-tubefilter]] |
| Creators 4 Mental Health / Lupiani | 542 | Nov 2025 | North America | 62% | Financial insecurity 69%, reported as correlate not ranked cause [[in-sweeping-study-89-of-creators-claim-to-lack-access-to-specialized-mental-heal]] |

Only one of these instruments ranks financial instability first. The others place platform and algorithm change ahead of it or do not rank financial causes at all. The claim that money is the leading cause of creator burnout does not replicate across the instruments that measure it.

Three provenance notes belong here. The 52% figure appears across at least seven trade outlets [[burnout-among-creators-is-reaching-a-crisis-point]] [[the-creator-burnout-crisis-why-over-half-of-influencers-are-at-a-breaking-point]] [[the-hidden-cost-of-creator-burnout-and-what-it-means-for-your-influencer-program]], and only one names Censuswide, the July 2025 fielding month and the 500-per-market split — the commissioning agency's own release omits all of it [[52-of-content-creators-say-they-have-experienced-burnout]]. Awin's two waves cannot be differenced, because the 2024 release restates the 2022 baseline as 87% while Awin's own 2022 write-up headlines 78% [[a-majority-of-content-creators-and-influencers-struggle-with-burnout-as-concerns]] [[78-of-influencers-admit-to-suffering-burnout]]. And a further circulating figure, "a 2023 Adobe study" finding 48% burnout, carries no sample, methodology, country or working link [[the-creator-economy-has-a-burnout-problem-heres-what-the-data-actually-shows-bit]].

### C. What the models of actual continuation find

Four designs model persistence rather than feeling, and none finds income level to be the operative predictor. In the VTuber Cox model (n=1,923, YouTube, 2017–2023), Superchat income has no significant main effect on hazard (β=−0.136, p=0.111) and stream duration is not significant either (p=0.207), while non-large-agency affiliation carries 1.98× the hazard (p=0.003) [[who-reaps-all-the-superchats-a-large-scale-analysis-of-income]]. The Twitch difference-in-differences (n=18,467, 2019–2020) finds the Affiliate/Partner status line, not earnings, separating streamers who sustained effort from those who reverted [[vol0123456789]]. A structural model of 377 Twitch and YouTube creators (2017, 30 countries, 71% Finland/US) finds intrinsic motivation predicting intention to continue (β=0.568, p=0.000) while extrinsic motivation as a block fails (p=0.052) [[fame-and-fortune-or-just-fun]]; its companion ANOVA (n=382) finds creators who treat creation as work earn the most (mean $774.85/month) and work the most hours (25/week) but show tenure indistinguishable from play-oriented creators (34.21 vs 38.67 months, Tukey p=0.999) [[play-playbour-or-labour-the-relationships-between-perception-of]].

The one behavioural datapoint linking income insufficiency to changed conduct is UK-specific and sectoral: among 311 self-selected members of UK music trade bodies (2020), 43% said insufficient streaming income caused them to take a job outside music — diversification, not exit [[music-creators-earnings-in]].

---

## 5. Geographic Scope: Which Findings Are US/Western-Only, and What Is Known for Southeast Asia

### A. Scope flags on the findings above

| Finding | Sample origin | Generalises to SEA? |
|---|---|---|
| Patreon living-wage shares, both instruments | US/Western-skewed, not geo-reported | No — Western platform base and US-denominated thresholds |
| YouTube payout-tier model, 0.43% / 0.043% | Global crawl, but thresholds are US minimum wage and US median household income | Thresholds do not transfer; the underlying distribution may |
| Twitch payout leak analyses | Global platform, Western-skewed payee base | No |
| German YouTube 46% three-year exit | Germany | Non-US Western only |
| NEA/ACS artist earnings | US only, primary occupation only | No |
| UK IPO music earnings | UK only | No |
| All five burnout instruments | US, UK, France, Germany, North America | No — zero SEA presence |
| Advice-blog monetization timelines | Unsourced | Not applicable |

Three structural breaks are measured rather than assumed. Revenue per thousand views differs by roughly 5–6× between core and peripheral markets [[httpsdoiorg10117720563051241234693]]; Indonesian influencer income is composed overwhelmingly of brand sponsorship rather than platform advertising [[impact-engagement-and-the-future-of-influencer-marketing-in-southeast-asia]]; and the living-wage denominator itself differs, with developing-Asia living wage estimated at US$254.28–414.88/month against a US federal-minimum-wage equivalent near US$1,257/month [[adbi-working-paper-series]]. A fourth pattern is about the information environment rather than the economy: two Vietnamese-language pieces presented as local creator-income coverage are paraphrases of US survey data benchmarked to US living wages, with no Vietnam-specific sample [[báo-cáo-thu-nhập-nhà-sáng-tạo-nội-dung-2025]] [[khổ-như-làm-kol-mạng-vỡ-mộng-làm-giàu-bằng-tiktok-youtube-có-người-chẳng-đủ-tiền]].

### B. The one regional instrument, recovered

The most-cited Southeast Asian creator statistic traces to a real survey. TikTok's *The TikTok Effect*, published 15 June 2023 and fielded by Kadence International across nine markets in August–September 2022 (total quantitative sample N=3,412 TikTok users, plus 192 qualitative interviews), carries on page 10 a nine-country chart titled "Percentage of surveyed creators earning more than minimum wage on TikTok in SEA" [[the-tiktok-effect]]:

| Country | Share above minimum wage | Note |
|---|---|---|
| Laos | 87% | |
| Vietnam | 83% | |
| Malaysia | 80% | |
| Myanmar | 73% | Low base, n=26 |
| Singapore | 68% | |
| Indonesia | 63% | Country total survey sample n=540 (250 main-city, 290 secondary-city) |
| Cambodia | 56% | |
| Philippines | 40% | |
| Thailand | 36% | |

Three caveats attach: the sub-base of "creators using TikTok as a source of income" is disclosed for no country except Myanmar, so the denominator behind each percentage is unknowable; Indonesia's minimum-wage benchmark is a single blended national figure of US$216/month cited to a trade publication, erasing province-level variation; and the sample is self-selected active TikTok users recruited by the platform's own vendor.

The intra-regional spread is the chart's most useful property. A 51-point gap between Laos and Thailand on one instrument, one platform and one fielding window is wider than the gap between several of these countries and Western benchmarks, so "Southeast Asia" cannot be treated as a single condition in this literature.

### C. The companion population figure has no source

The "8 million Indonesian content creators" that travels attached to the 63% appears nowhere in the primary report [[the-tiktok-effect]] and nowhere in the vendor's own methodology summary [[tiktoks-socio-economic-impact-in-southeast-asia-a-summary-of-the-report-kadence]]. Its documented path: TikTok Indonesia's communications director cited it from unspecified internal data as of December 2023, bundled with the 63% [[63-percent-of-tiktok-creators-earn-more-than-minimum-wage]]; TikTok's public policy head repeated both to the Indonesian parliament on 15 July 2025 with no methodology in the official record [[jdih-setjen-dpr-ri-jaringan-dokumentasi-dan-informasi-hukum-sekretariat-jenderal]] [[tiktok-buka-data-63-persen-kreator-di-indonesia-berpenghasilan-tinggi-merdekacom]]; at that same hearing, pressed by a legislator for Indonesia revenue figures, he stated on record that he did not have the data and would submit it in writing later, and no such submission has surfaced [[anggota-dpr-cecar-omzet-tiktok-mengaku-belum-siap-data-teknologi]]; and the Minister of Creative Economy subsequently presented both figures as national, cross-platform statistics [[menekraf-8-juta-orang-berprofesi-konten-kreatof-63-persen-gajinya-di-atas-umr-ku]]. Two figures from different sources, years and methods were merged into one statistic. A separate, non-reconcilable claim that only 14% of Indonesian creators are profitable attributes its population figure to the IMF with no locatable report and derives its 14% from a global Linktree statistic [[ada-8-juta-kreator-konten-tapi-baru-14-persen-yang-cuan]]. Indonesia's statistics agency publishes no creator count [[bps-dan-kemenekraf-bersinergi-kreator-lokal-dilibatkan-dalam-sosialisasi-se2026]].

### D. Country-by-country, what exists

- **Indonesia.** One genuine academic study: 98 YouTube channels drawn from a Socialblade-tracked population of 4,561, March 2023, finding views drive revenue (path coefficient 0.968, p=0.001) while subscribers do not (0.029, p=0.387), R²=0.950, revenue per thousand views spanning IDR 3,682–58,920, and roughly a 650× revenue gap between top and bottom of an already-elite sample [[pengaruh-viewer-dan-subscriber-terhadap-pendapatan-youtuber-indonesia-etnik-jurn]]. Separately, 71% of Indonesian e-commerce participants sell exclusively via social media or chat apps, so "earning on social media" in Indonesia is substantially commerce rather than content monetization [[technologies]].
- **Malaysia.** One vendor survey with disclosed method: n=489, fielded online 11–21 May 2026 by Vase.ai; 34% have filed income tax; in-kind compensation is 46% of income sources against 43% cash; filing rates run 18% among sub-3,000-follower creators against 83% above 100,000 [[nothing-comes-free-study-finds-only-34pc-of-malaysian-content-creators-file-inco]]. No attrition or time-to-income content.
- **Philippines.** A national-accounts aggregate at the wrong unit (creative-economy GVA and employment), plus an ILO country-office statement of February 2026 publicly disowning circulating platform-worker earnings figures drawn from an unvalidated draft [[ilo-philippines-clarifies-misuse-of-preliminary-platform-work-survey-findings-in]]. Freelancing evidence exists but is not creator evidence [[discussion-paper-series-no-2020-29]].
- **Thailand, Vietnam.** Beyond the TikTok chart, targeted local-language and national-statistics searching returned no creator-specific quantitative evidence. **Singapore.** One trade-press claim attributed to a 2024 regulator survey, original publication not located; not citable at present.

### E. A labelled inference

Two sourced findings jointly imply a third that no study has tested. Persistence models find structural access to monetization infrastructure — agency affiliation, partner tier — to be the significant predictor of continuation [[who-reaps-all-the-superchats-a-large-scale-analysis-of-income]] [[vol0123456789]], and regional evidence finds Southeast Asian creators with systematically worse structural access [[httpsdoiorg10117720563051241234693]] [[impact-engagement-and-the-future-of-influencer-marketing-in-southeast-asia]]. If both hold, Southeast Asian attrition should exceed Western attrition. No dataset in this record can test that, and the intra-regional spread above suggests it would not hold uniformly.

---

## 6. Evidence Quality and Measurement Caveats

### A. Two provenance chains, one standard, an unexpected result

| | Western population chain | Southeast Asian income chain |
|---|---|---|
| Origin | SignalFire, venture-capital blog, "bottom's up TAM analysis": 50 million creators, ~2M professional, ~46.7M amateur, no survey or sample disclosed, circa 2020 [[creator-economy-guide-trends-tools-monetization]] | TikTok/Kadence survey, 9 markets, N=3,412, fielded Aug–Sep 2022 [[the-tiktok-effect]] |
| Laundering step | Zippia SEO listicle, 13 June 2023, bylined "Zippia Research", recycling SignalFire, NeoReach and Linktree figures without attributing them [[20-incredible-creator-economy-statistics-2023-facts-charts-trends-zippia]] | Communications director citing the report, July 2024 [[63-percent-of-tiktok-creators-earn-more-than-minimum-wage]] |
| Institutional adoption | Goldman Sachs, April 2023: 50 million creators, ~4% professional "meaning they pull in more than $100,000 a year" [[the-creator-economy-could-approach-half-a-trillion-dollars-by-2027-goldman-sachs]] | Parliamentary testimony, 15 July 2025 [[jdih-setjen-dpr-ri-jaringan-dokumentasi-dan-informasi-hukum-sekretariat-jenderal]] |
| Re-baselining | Goldman Sachs, 26 March 2025: total creators 50.0 / 66.6 / 80.5 / 107.2 million for 2022/2025/2027/2030, professionals held at 2.0 / 2.0 / 2.2 / 2.7 million, exhibit source line "Zippia, Influencer Marketing Hub, Goldman Sachs Global Investment Research", footnote defining professional and amateur "based on self-definitions (e.g. full-time vs. part-time)" with no income threshold [[with-this-report-we-assess-the-current-state-of-the-creator-economy-including]] | Ministerial repetition as a national, cross-platform statistic [[menekraf-8-juta-orang-berprofesi-konten-kreatof-63-persen-gajinya-di-atas-umr-ku]] |
| Global press | 107 million by 2030; professional share falling to 2.5% [[goldman-sachs-sees-rise-of-content-creators-to-107-million-by-2030-stronger-priv]] | Repeated across four Indonesian outlets [[tiktok-buka-data-63-persen-kreator-di-indonesia-berpenghasilan-tinggi-merdekacom]] |
| Instrument found at the bottom | None at any depth | A real, thin, self-selected survey with disclosed fielding dates and country samples |

Applying one standard to both chains produces an asymmetric outcome: the Southeast Asian chain, chased to its primary, has a survey underneath it; the Western chain does not. Three properties of the Western chain compound this. The absolute professional count is held flat at 2.0 million from 2022 to 2025 while the total grows by 16.6 million, so every net entrant in the model is an amateur by construction. The definition of "professional" changes silently between the 2023 article (income above $100,000) and the 2025 report (self-identification, no threshold). And the companion concentration statistic — "3% of YouTubers make 90% of the wealth" — originates in the Zippia restatement of a peer-reviewed finding that on average 85% of *views* accrue to 3% of channels [[opus-4-youtube-channels-uploads-and-views-a-statistical-analysis-of-the-past-10]]. Only the Indonesian population count is orphaned; the Indonesian rate is not.

### B. Fabricated apparatus in the current literature

Two sources here carry invented scholarly furniture. A 2026 trade article attributes a full statistical battery (62% burnout, 47% considered leaving, n=2,400 full-time creators) to a "Creator Economy Research Institute" that does not exist in any register, alongside uncheckable named experts and platform programmes described as fact [[the-creator-burnout-epidemic-why-62-of-full-time-creators-say-theyre-exhausted-t]]. A 2025 Indonesian journal article presents exactly the instrument this question needs — n=60 creators, five cities, stated fielding window, full income-distribution table — while its entire 24-item reference list concerns photocatalysis, laser optics, orthopaedic screw fixation and supernova neutrinos, two in-text citations are absent from its own bibliography, and its named case-study creators cannot be found under their stated handles [[pengaruh-ekonomi-kreator-digital-terhadap-pendapatan-generasi-z-di-perkotaan-stu]]. Both pass a metadata-only screen. Neither passes a reference-list check.

### C. Aggregates without denominators

Two frequently cited figures cannot be converted into per-creator quantities. KPMG's estimate that the twelve largest media companies spent US$210 billion on content in 2024 comes from public filings for twelve named firms with no creator count anywhere in the document, and its YouTube component bundles creator revenue share with Premium licensing and sports rights [[the-future-of]]. A widely-circulated channel-count composite — 113.9 million YouTube channels, 2 million above 10,000 subscribers — is described by its own author as manual open-source-intelligence work assembled from Google Ads, SEMrush, Social Blade, Statista and SimilarWeb, because YouTube publishes neither figure; the one platform-disclosed number inside it is YouTube's August 2021 announcement of 2 million creators in the Partner Program, roughly one in five of the channels then meeting the subscriber gate [[how-many-youtube-channels-are-there-in-2026-tim-queen]].

### D. Six crosswalk dimensions, not four

The four fields attached to every figure above — sample size, year, platform, country — are necessary but insufficient. Sources here also differ in unit of analysis (person, persona, channel, account, registered profile, payroll job), in denominator scope (all registered, all active, all monetized, self-identified primary occupation, payroll-only), and in whether income is gross or net. The Twitch top-100 list is account-level and includes a multi-person production company; Patreon earnings segmented by "linked platform" describe supplemental fan funding, not that platform's advertising revenue [[rich-get-richer-platform-attention-and-earnings-inequality]]; and the ILO's criteria for a credible platform earnings figure — gross separated from net, operating costs, unpaid waiting time, working-time intensity, volatility — are met by essentially no published creator income statistic [[ilo-philippines-clarifies-misuse-of-preliminary-platform-work-survey-findings-in]].

### E. The institutional statement of absence

The most recent institutional accounting confirms the vacuum at source: of 133 countries responding, only 40 report having measured platform work at all, most of them European, and no international statistical standard exists before 2028. Definitions diverge to the point of non-comparability — content creation sits inside some national platform-work statistics and outside others, Singapore's explicitly covering creative work — and reference period alone moves prevalence estimates by three to nine times within one country [[ilo-brief]].

### F. Forward implications

Three dated developments would change what this question can be answered with. The YouTube census infrastructure built from 1.21 billion archived captures covering at least 106 million unique channels was published in 2026 and has not yet carried a survival model; it is the first dataset capable of producing a genuine channel survival curve, though its coverage bias correlates with subscriber count (Spearman 0.354-0.432) and would undercount the death of small channels, precisely where attrition is highest [[tube-census]]. Indonesia's 2026 Economic Census is billed as the first national instrument to enumerate content-creator business actors, which would give Southeast Asia's largest creator population the first administrative denominator anywhere [[bps-dan-kemenekraf-bersinergi-kreator-lokal-dilibatkan-dalam-sosialisasi-se2026]]. The ILO standard due at the 22nd International Conference of Labour Statisticians in 2028 would make national platform-work counts comparable for the first time [[ilo-brief]]. Until then the two highest-value studies in this field remain unrun: a cohort survival curve over a full channel population, and an exit survey that asks people who stopped why they stopped — the second already half-built, since one US survey reaches a lapsed creator population and does not put the question to it [[the-creators-2025-understanding-the-modern-podcast-creator-landscape-sounds-prof]].
