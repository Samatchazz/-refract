---
title: Concurrent Streaming, Viewer Transfers, and
id: concurrent-streaming-viewer-transfers-and
tags:
- creator-attrition-income-data-079588
- livestreaming
- vtuber
- youtube
- audience-dynamics
- academic-paper
created: '2026-07-27T11:27:22.404450Z'
updated: '2026-07-27T17:52:26.007606Z'
source: https://arxiv.org/pdf/2603.23773
source_domain: arxiv.org
fetched_at: '2026-07-27T11:27:22.400530Z'
fetch_provider: crawl4ai
status: review
type: note
tier: institutional
content_type: paper
deprecated: false
summary: 'Maxwell Shepherd (Johns Hopkins), ''Concurrent Streaming, Viewer Transfers,
  and Audience Loyalty in a Creator Ecosystem: A Minute-Level Longitudinal Study'',
  arXiv:2603.23773v1 [cs.SI], 24 March 2026. QUALITY VERDICT: peripheral to this research
  question. It contains NO income figures and NO attrition or survival rates. Its
  relevance is that it quantifies audience non-exclusivity and within-ecosystem attention
  competition - a mechanism behind why creator earnings do not scale with effort.\n\nSAMPLE:
  2,935,985 minute-by-minute viewer-count observations across 7,762 livestreams from
  18 YouTube channels, all belonging to Hololive English (HoloEN), November 2022 to
  March 2026 (3.3 years). Median stream duration 181.2 minutes; mean 7,587 viewers
  per stream; max single-stream 243,897 viewers. These are elite VTubers inside the
  dominant agency, not a representative creator sample - the author states plainly
  that focusing on a single organisation ''limits generalizability''.\n\nFINDINGS.
  (1) Concurrency dilution: mean per-stream audience falls from 14,377 viewers when
  a creator streams alone to 6,057 when eight ecosystem colleagues stream simultaneously
  - a 58% raw drop. But after residualising on hour-of-day the within-hour competition
  correlation is only rho = -0.165 (95% CI [-0.186, -0.145], p<0.001, day-level block
  bootstrap over 1,209 days, 2,000 iterations), so most of the raw drop is scheduling
  confound, not audience splitting. (2) Viewer transfers (''raids''): 3,243 candidate
  transfer events detected; among plausible events (efficiency <=100%) mean spike
  is 2,552 viewers and MEDIAN transfer efficiency is about 49% (IQR 29-60%), i.e.
  roughly half a departing audience follows to another ecosystem stream and half leaves
  entirely. Top 10 channel pairs account for 16% of events. ~5% estimated false positives.
  (3) Audience exclusivity is a creator-level, not organisation-level, property: Competition
  Resistance ranges from 0.364 (Gura) to 1.000 (Kiara) among channels in the SAME
  agency; Post-Peak Retention is uniformly high across channels.\n\nACTIVITY DISPARITY
  (useful as an effort benchmark): among these 18 elite channels, streaming frequency
  ranges from 3.1 streams/month (Gura, 90 streams) to 22.8 streams/month (Bijou, 720
  streams) - a 7x spread in output within one agency - and observed active periods
  run 632 days (most recent debut cohort) to 1,220 days for the earliest channels.
  All 18 are still active, so this yields no exit data.\n\nCAVEATS the author states:
  viewer counts not identities, so overlap is a proxy; the dilution analysis is observational
  not causal; transfer detection is heuristic and cannot separate deliberate raids
  from organic migration; loyalty composite weights (0.30/0.25/0.25/0.20) are subjective.\n\nGEOGRAPHY:
  Hololive ENGLISH branch only - anglophone audience, Japanese parent agency. Not
  generalisable to Southeast Asian creators, though Hololive does operate a separate
  Indonesian branch not covered here.'
raw_file: raw/concurrent-streaming-viewer-transfers-and.pdf
doi: arXiv:2603.23773
utility_score: 15.0
citation_count: 0
venue: arXiv.org
is_retracted: false
---

Concurrent Streaming, Viewer Transfers, and
Audience Loyalty in a Creator Ecosystem: A
Minute-Level Longitudinal Study
Maxwell Shepherd
Johns Hopkins University
msheph15@jh.edu
Abstract—Live streaming platforms host interconnected com-
munities of content creators whose audiences overlap and interact
in ways that are poorly understood at fine temporal resolution.
We present a descriptive longitudinal study of audience behavior
within a creator ecosystem, analyzing 2.9 million minute-by-
minute viewership observations across 7,762 livestreams from
18 affiliated channels over 3.3 years. We find that (1) concurrent
streaming is associated with substantial raw per-stream audi-
ence decreases (14,377 to 6,057 viewers as concurrent stream
count rises from 1 to 9), though hour-of-day controls reduce
the residualized correlation to ρ = −0.165, indicating that
scheduling confounds account for much of the observed drop; (2)
algorithmically detected viewer transfer events achieve a median
efficiency of approximately 50% across 3,243 candidate events;
and (3) audience loyalty metrics (stability, competition resistance,
retention, and floor ratio) vary substantially across creators
within the same organization, with competition resistance ranging
from 0.36 to 1.00, indicating that audience exclusivity is a creator-
level rather than organization-level property. These findings
provide practical benchmarks for creator organizations making
scheduling, cross-promotion, and talent management decisions.
Index Terms—livestreaming, audience overlap, creator ecosys-
tems, concurrent streaming, viewer transfer, audience loyalty,
Hololive, YouTube, virtual YouTuber
I. INTRODUCTION
Live streaming has become a major mode of online me-
dia production and audience participation, with Twitch alone
recording billions of hours watched in 2024 and creator-
centered live platforms sustaining large viewer communities
at global scale [1], [2]. A distinctive feature of this landscape
is the emergence of creator networks in which affiliated
streamers collaborate, cross-promote, and sometimes compete
for viewer attention within a common platform [2].
A practical question for both platform operators and creator
organizations is whether concurrent streaming among affiliated
creators hurts individual streamers’ audiences. The intuition
that concurrent streams “split the audience” is widely held and
influences scheduling decisions, yet it has rarely been tested
with fine-grained longitudinal data. Similarly, the effectiveness
of viewer transfer mechanisms (colloquially called “raids”)
and the degree to which audiences are exclusive to individual
creators are poorly quantified.
Despite growing academic interest in live streaming [4], [5],
much prior work has focused on ethnography, surveys, short-
window observational datasets, or chat-centered participation
measures rather than multi-year minute-by-minute audience
panels [4]–[6].
In this paper, we use a dataset of 2,935,985 minute-by-
minute viewership records spanning 7,762 livestreams from
18 channels over 3.3 years to address three questions:
1) Does concurrent streaming hurt individual creators?
We measure per-stream audience dilution when multiple
affiliated creators stream simultaneously, controlling for
time-of-day confounds.
2) How effective are viewer transfers? We algorithmi-
cally detect viewer transfer events and quantify the frac-
tion of a stream’s audience that transfers to a concurrent
ecosystem stream.
3) How much do audiences vary in exclusivity? We
decompose audience loyalty into four components (sta-
bility, competition resistance, post-peak retention, and
floor ratio), revealing dramatic variation across creators
within the same organization.
II. RELATED WORK
A. Live Streaming Research
The live streaming domain has attracted increasing research
attention. Hamilton et al. [4] examined community formation
on Twitch, finding that streamers cultivate distinct community
identities. Deng et al. [7] analyzed 11 months of Twitch
activity and showed that the platform is highly skewed, with
a small number of games dominating attention and live events
contributing to large traffic spikes. Haimson and Tang [3]
examined what makes remote live events engaging across
Facebook Live, Periscope, and Snapchat, identifying four di-
mensions of engagement: immersion, immediacy, interaction,
and sociality.
Recent work has begun to address inter-stream dynamics.
Jia et al. [8] characterized the creators and spectators of game
replays and live streaming, providing foundational understand-
ing of streamer–viewer relationships. Wu et al. [9] studied
cooperation between content creators on Twitch, finding that
different cooperative behaviors are associated differently with
creator performance rather than uniformly benefiting growth.
However, these studies primarily examine creator–viewer rela-
tions, platform structure, or cooperation behaviors rather than
minute-level longitudinal audience dynamics within a single
affiliated creator ecosystem.
arXiv:2603.23773v1  [cs.SI]  24 Mar 2026


---

B. Network Analysis of Creator Ecosystems
Our analysis also connects to broader work on competi-
tion and differentiation in media markets, which shows that
audience demand can shape how media producers position
themselves relative to rivals [10]. Borghol et al. [11] studied
content-agnostic factors affecting YouTube video popularity,
finding that extrinsic factors beyond content quality sub-
stantially influence viewership outcomes. Ribeiro et al. [12]
tracked user intersection and migration across YouTube ideo-
logical communities, illustrating how behavioral traces can be
used to study cross-community audience movement.
C. Virtual YouTubers (VTubers)
Research on VTubers remains limited, so we draw on
both VTuber-specific work and adjacent live-streaming studies.
Lu et al. [13] examined live streaming practices in China,
highlighting the roles of gifting, social interaction, and fan-
group dynamics, while Lu et al. [14] specifically studied how
viewers engage with and perceive virtual YouTubers. Our
dataset focuses on Hololive Production, one of the largest
VTuber agencies, whose organizational structure creates a
natural laboratory for studying creator ecosystem dynamics.
III. DATASET AND METHODOLOGY
A. Dataset Description
Our dataset comprises minute-by-minute viewer counts
collected from YouTube Live streams of Hololive English
(HoloEN) creators. Table I summarizes the dataset character-
istics.
TABLE I
DATASET SUMMARY
Metric
Value
Total observations
2,935,985
Unique streams
7,762
Unique channels
18
Observation period
Nov 2022 – Mar 2026
Temporal resolution
1 minute
Median stream duration
181.2 minutes
Mean viewers per stream
7,587
Max observed viewers (single stream)
243,897
The 18 channels span four organizational “generations”
(debut cohorts), enabling analysis of how cohort structure
affects audience overlap. Stream metadata includes channel
identity, video identifier, scheduled and actual start times,
stream title, and minute-level viewer counts.
B. Channel Activity Disparities
The channels in our dataset exhibit substantial disparities
in streaming activity. Streaming frequency ranges from 3.1
streams per month (Gura, 90 streams) to 22.8 streams per
month (Bijou, 720 streams), and active periods range from
632 days (Justice generation, debuting most recently) to up to
1,220 days for the earliest channels.
C. Audience Overlap Estimation
Since we observe aggregate viewership counts rather than
individual viewer identities, we estimate audience overlap
indirectly through viewership transfer analysis. When stream
A begins while stream B is ongoing, a drop in B’s viewership
attributable to A’s start provides evidence of shared audience.
We use only stream start events (not end events) to avoid
confounding with natural viewership decay. All stream start
events are processed exhaustively (no sampling), and the
concurrent stream B must span the full measurement window
(having started at least δ minutes before and ending at least δ
minutes after the event) to ensure stable baseline measurement.
Formally, for a stream start event at time t0, we define the
viewership change in concurrent stream B as:
∆VB = ¯V [t0,t0+δ]
B
−¯V [t0−δ,t0]
B
(1)
where ¯V [a,b]
B
denotes the mean viewership of stream B over
interval [a, b] and δ = 8 minutes. The estimated overlap
between channels i and j is the median normalized transfer
across all observed start events:
Oij = median
(
−∆Vj
¯V [t0−δ,t0]
j
streami starts during streamj
)
(2)
The pairwise overlap matrix is then symmetrized: ˆOij =
(Oij + Oji)/2. We validate this methodology via permutation
testing (Section III-F).
D. Viewer Transfer Detection
A viewer transfer event occurs when a substantial portion of
one stream’s audience moves to another active stream near the
first stream’s conclusion. This may result from an intentional
directive by the ending streamer (colloquially called a “raid” or
“host”) or from viewers independently seeking another stream
within the ecosystem. We detect these events algorithmically
by exhaustively scanning all stream end events: for each stream
A ending at time te, we examine every concurrent stream B
(which must have started at least 5 minutes before and end at
least 5 minutes after te). We compare the mean viewership of
B in the 3 minutes before te to the peak viewership of B in
the 5 minutes after te. A candidate transfer event is flagged
when:
1) The spike exceeds 10% of B’s pre-event average view-
ership.
2) The spike exceeds 100 absolute viewers.
3) The spike exceeds 5% of A’s stream-average viewers (to
exclude coincidental fluctuations).
4) Stream A ended with at least 200 viewers (to exclude
abandoned streams).
Transfer efficiency is defined as the spike magnitude divided
by stream A’s final viewer count. We estimate approximately
5% of detected events are false positives (coincidental spikes
unrelated to the ending stream), based on the fraction of events
with efficiency exceeding 100%.


---

E. Loyalty Component Construction
We measure four dimensions of audience exclusivity for
each channel:
• Stability (S): 1 −CV/2 where CV is the coefficient of
variation of stream-average viewership, clipped to [0, 2],
capturing how consistent a channel’s audience size is
across streams.
• Competition Resistance (R): Ratio of mean viewership
during streams with concurrent ecosystem competition to
mean viewership during solo streams, clipped to [0, 1].
Higher values indicate audiences that are retained regard-
less of concurrent alternatives.
• Post-Peak Retention (P): Median fraction of peak view-
ership remaining at the midpoint of the post-peak segment
of a stream. This measures how gradually audiences
depart after peak engagement.
• Floor Ratio (F): 10th-percentile stream-average view-
ership divided by mean stream-average viewership, cap-
turing how much a channel’s audience shrinks during its
least popular streams relative to its typical performance.
Each component is independently informative and consti-
tutes the primary unit of analysis. For visual reference, we also
report a weighted composite L = 0.30S + 0.25R + 0.25P +
0.20F, but we caution that the weights are subjective and
different weightings would produce different channel rankings.
The key findings concern variation in individual components,
not composite scores.
F. Permutation Validation
To test whether the observed frequency of concurrent-
at-start events between channel pairs exceeds what would
occur under independent random scheduling, we conduct a
permutation test with 1,000 iterations. In each iteration, we
randomly reassign stream start times uniformly within the
observation window for each channel (preserving the number
of streams and their durations per channel) and count the
number of concurrent-at-start events per channel pair under
the shuffled schedule. We compare the observed pairwise
event counts to their null distributions, finding that 53% of
channel pairs (81 of 153 tested) exhibit concurrent-at-start
event frequency significantly exceeding the uniform null at
p < 0.01. We note that this null model does not preserve
hour-of-day or day-of-week structure, so some of the excess
concurrency may reflect shared scheduling patterns (e.g., peak-
hour clustering) rather than deliberate coordination. The test
validates that concurrent streaming is non-random, but does
not by itself confirm audience-level overlap.
IV. RESULTS
A. Audience Overlap Structure
Fig. 1 displays the audience overlap network, where nodes
represent channels (sized by average viewership) and edges
represent estimated audience overlap (weighted by overlap
strength). The network exhibits structure partially corre-
sponding to organizational generations, with cross-generation
bridges connecting otherwise separate audience clusters.
Fig. 1.
Audience overlap network. Node size proportional to average
viewership; edge weight proportional to estimated overlap. Colors indicate
organizational generation.
Fig. 2 shows the full pairwise concurrent streaming fre-
quency matrix, revealing that overlap is highly non-uniform:
certain channel pairs stream concurrently far more often than
others, likely driven by scheduling proximity rather than
organizational grouping alone.
Fig. 2. Pairwise concurrent streaming frequency. Darker cells indicate higher
rates of temporal overlap between channels.
Among a constant set of six channels active for nearly the
entire study period (Baelz, Calliope, IRyS, Ina, Kiara, Kronii),
pairwise concurrent streaming frequency shows a statistically
significant upward trend (ρ = 0.63, p < 0.001), though the
absolute change is small (from 8.4% to 8.9% over 3.3 years).


---

B. Per-Stream Dilution Under Concurrent Streaming
Fig. 3 presents the relationship between concurrent stream
count and viewership among HoloEN channels, computed at
minute-level resolution across 903,778 observations. The left
panel shows a positive correlation between concurrent stream
count and total ecosystem viewership (ρ = 0.686); however,
this correlation is largely an artifact of scheduling endogeneity,
as streamers are more likely to stream during hours when
viewers are available, so both concurrent streams and total
viewership are high during peak hours.
The more informative result is in the right panel: per-stream
average viewership drops substantially as concurrent stream
count rises, from 14,377 viewers at 1 concurrent stream to
6,057 at 9 concurrent streams. This raw decrease reflects
two overlapping factors: audience splitting across concurrent
streams, and scheduling confounds (more streams are live
during peak hours, so higher-concurrency buckets sample
from different time periods than lower-concurrency buckets).
After controlling for hour-of-day effects via residualization,
the Spearman rank correlation between hour-residualized con-
current stream count and hour-residualized per-stream view-
ership is ρ = −0.165 (day-level block bootstrap 95% CI:
[−0.186, −0.145], p < 0.001), indicating that within-hour
competition accounts for a small but statistically significant
portion of the overall drop. Because consecutive minute-level
observations are temporally autocorrelated, we use a block
bootstrap (resampling 1,209 calendar days with replacement,
2,000 iterations) rather than the naive iid p-value to ensure
honest inference.
From a scheduling perspective, the raw per-stream decrease
is substantial regardless of its cause: a creator streaming alone
averages 14,377 viewers, while a creator streaming alongside 8
others averages 6,057. The hour-of-day residualization isolates
the within-hour competition effect as small (ρ = −0.165), but
does not diminish the practical reality that streaming during
high-concurrency periods is associated with significantly lower
per-stream viewership.
C. Viewer Transfer Events
Our exhaustive transfer detection algorithm identifies 3,243
candidate viewer transfer events across all stream endings in
the dataset (Fig. 4). We estimate approximately 5% of these
are false positives (coincidental viewership spikes unrelated
to the ending stream), based on the fraction of events with
efficiency exceeding 100%.
Among events with plausible efficiency (≤100%), the mean
spike magnitude is 2,552 viewers and the median transfer effi-
ciency is approximately 49% (IQR: 29%–60%). This suggests
that roughly half of a stream’s departing audience transfers
to a concurrent ecosystem stream, while the remainder either
leaves the platform or navigates elsewhere.
The transfer network is not uniform: the top 10 channel pairs
account for 16% of all detected events, with Bijou→Calliope
(70 events) being the most frequent pair. This concentration
reflects scheduling adjacency and established collaborative re-
lationships, suggesting that viewer transfer frequency depends
on audience familiarity with the receiving channel, which is
consistent with the audience loyalty variation documented in
Section IV-D.
D. Audience Loyalty Components
The four loyalty components reveal substantial heterogene-
ity across channels within the same organization. Table II
presents the individual component values; Fig. 5 provides a
visual summary using the composite index for ordering.
The most striking variation is in Competition Resistance
(R), which ranges from 0.364 (Gura) to 1.000 (Kiara). High-
R channels retain nearly all their viewers when competitors
stream simultaneously, while low-R channels lose a substantial
fraction.
TABLE II
LOYALTY COMPONENTS (SELECTED CHANNELS)
Channel
S
R
P
F
L
IRyS
0.663
0.925
0.870
0.469
0.742
Kiara
0.564
1.000
0.869
0.464
0.729
Raora
0.483
0.948
0.930
0.506
0.716
Calliope
0.608
0.830
0.896
0.401
0.694
Fauna
0.629
0.601
0.902
0.574
0.679
Kronii
0.660
0.629
0.891
0.465
0.671
Bijou
0.656
0.529
0.875
0.550
0.658
Mumei
0.498
0.503
0.875
0.403
0.575
S = Stability, R = Competition Resistance, P = Post-Peak Retention,
F = Floor Ratio, L = Composite Index (subjective weights: w
=
(0.30, 0.25, 0.25, 0.20); provided for reference only).
Stability (S) shows moderate variation (0.286–0.663), with
some channels (ERB, Shiori) exhibiting substantially more
variable audiences. Post-Peak Retention (P) is uniformly
high (0.869–0.940), indicating that viewers generally stay
through most of a stream once they arrive. Floor Ratio (F)
varies moderately (0.373–0.574), reflecting differences in how
much viewership fluctuates between a channel’s most and least
popular streams.
The key takeaway is that Competition Resistance, defined
as the degree to which a creator’s audience is retained under
concurrent competition, varies by nearly 3× across creators
in the same organization (0.36–1.00), while other loyalty
dimensions are more uniform. This suggests that audience
exclusivity is fundamentally a creator-level property, not an
organization-level one.
V. DISCUSSION
A. Scheduling Implications
The raw per-stream viewership drop during concurrent
streaming is substantial (14,377 to 6,057), and this is the
reality creators face when scheduling against peers. The resid-
ualized within-hour effect (ρ = −0.165) indicates that direct
audience competition explains only a small portion of this
drop, with most of the variation attributable to when streams
are scheduled. However, the endogeneity of streaming sched-
ules limits causal interpretation: we cannot cleanly separate
audience splitting from time-of-day confounds, nor distinguish
between viewers who are genuinely exclusive to one creator


---

2.5
5.0
7.5
10.0
12.5
15.0
17.5
Concurrent Streams
0
50000
100000
150000
200000
Total Ecosystem Viewers
Concurrent Streams vs Total Viewers
( = 0.686)
Bin mean
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
Concurrent Streams
0
2000
4000
6000
8000
10000
12000
14000
Per-Stream Avg Viewers
Per-Stream Dilution ( = -0.165)
Per-stream avg
Total ecosystem
20000
40000
60000
80000
100000
Total Viewers
Fig. 3.
Concurrent streaming and per-stream dilution (HoloEN channels only, minute-level). Left: total ecosystem viewership vs. concurrent stream count
(ρ = 0.686), largely reflecting scheduling endogeneity. Right: per-stream average viewership (bars) and total ecosystem viewership (line) by concurrent stream
count. Per-stream averages drop substantially with concurrent stream count, though the residualized within-hour effect is smaller (ρ = −0.165).
Fig. 4.
Detected viewer transfer event: Calliope →IRyS on 2025-06-21.
Top panel: ending channel viewership. Bottom panel: receiving channel with
+24,116 viewer spike at transfer time (dashed line).
and viewers who would switch but are simply not present
during concurrent hours.
B. Viewer Transfers as Cross-Promotion
The median 49% transfer efficiency provides a concrete
benchmark: roughly half of a stream’s ending audience ap-
pears in a concurrent ecosystem stream. For a stream ending
with 5,000 viewers, this translates to approximately 2,500
additional viewers for the receiving channel. This figure en-
compasses both intentional directives by the ending streamer
and organic viewer migration, which our method cannot dis-
tinguish. The concentration of transfer events among specific
channel pairs (top 10 pairs = 16% of all detected events)
suggests that viewer migration is driven by scheduling ad-
jacency and established audience familiarity rather than being
uniformly distributed.
Fig. 5. Audience loyalty components by channel. The composite index L (bar
length) is a weighted summary provided for visual reference; the individual
components are the primary unit of analysis. Colors indicate organizational
generation.
C. Audience Exclusivity as Creator-Level Property
The wide variation in Competition Resistance (0.36–1.00)
within a single organization challenges the assumption that
affiliated creators share a common audience pool. Kiara (R =
1.00) shows no measurable average viewership difference
between solo and concurrent streams, while Gura (R = 0.36)
averages substantially fewer viewers when competitors are
live. This variation suggests that audience exclusivity emerges
from individual creator–audience relationships rather than or-
ganizational structure.
This finding is consistent with the residualized dilution
result: if most creators retain their audiences under compe-
tition (high R), the within-hour competition effect would be
expected to be weak, as observed (ρ = −0.165). The minority


---

of low-R creators may account for a disproportionate share of
even that small effect, though our aggregate analysis cannot
directly test this decomposition.
D. Limitations
Our methodology has several important limitations. We
observe viewer counts rather than identities, so our overlap
estimates are proxies based on behavioral patterns rather than
direct measurements. Individual-level data (e.g., from platform
APIs providing per-user watch history) would enable more
precise overlap quantification.
The positive correlation between concurrent stream count
and total ecosystem viewership (ρ = 0.686) cannot be inter-
preted causally due to scheduling endogeneity: both concurrent
streams and total viewership are driven by common factors
(time of day, day of week, special events). We deliberately
refrain from making causal “market expansion” claims.
The loyalty component weights (0.30, 0.25, 0.25, 0.20)
are subjective. Different weightings would produce different
composite rankings, which is why we emphasize individual
components.
The transfer detection algorithm is necessarily heuristic:
it identifies viewership spikes in concurrent streams near
stream endings, but cannot distinguish between deliberate
directives by the ending streamer, organic viewer migration,
or coincidental factors (e.g., external events driving viewers
to a stream). The reported transfer efficiency therefore reflects
all sources of post-ending viewer movement, not solely in-
tentional cross-promotion. We estimate approximately 5% of
detected events are false positives based on the fraction with
efficiency exceeding 100%.
The dilution analysis is observational, not causal. The
hour-of-day residualization controls for a major confound
but cannot account for all scheduling endogeneity. A true
causal estimate would require exogenous variation in concur-
rent streaming (e.g., natural experiments from server outages
or scheduling disruptions). Because consecutive minute-level
observations are temporally autocorrelated, we use a day-
level block bootstrap rather than the naive iid assumption
for statistical inference; this yields a wider but more honest
confidence interval.
The study focuses on a single creator organization (Hololive
English), which limits generalizability. The organizational
structure (shared branding, cross-promotion, scheduled collab-
orations) may amplify audience overlap relative to independent
creators.
VI. CONCLUSION
Using 2.9 million minute-level observations from 18 affili-
ated livestream channels over 3.3 years, we find that concur-
rent streaming is associated with substantial raw per-stream
viewership decreases, though hour-of-day controls reduce the
residualized competition effect to ρ = −0.165, algorithmically
detected viewer transfer events achieve a median efficiency of
approximately 50% across 3,243 candidate events, and audi-
ence exclusivity varies substantially across creators within the
same organization (Competition Resistance: 0.36–1.00). These
findings provide practical benchmarks for scheduling, cross-
promotion, and talent management in creator ecosystems.
Future work should incorporate individual-level viewer data
to directly measure audience overlap and extend the analysis
to independent creator networks.
REFERENCES
[1] StreamElements, “State of the Stream: Twitch 2024 year in review,”
StreamElements Blog, based on data from Rainmaker.gg, Dec. 16, 2024.
[2] T. L. Taylor, Watch Me Play: Twitch and the Rise of Game Live
Streaming. Princeton, NJ: Princeton Univ. Press, 2018.
[3] O. L. Haimson and J. C. Tang, “What makes live events engaging on
Facebook Live, Periscope, and Snapchat,” in Proc. CHI Conf. Human
Factors Comput. Syst., 2017, pp. 48–60.
[4] W. A. Hamilton, O. Garretson, and A. Kerne, “Streaming on Twitch:
Fostering participatory communities of play within live mixed media,”
in Proc. SIGCHI Conf. Human Factors Comput. Syst., 2014, pp. 1315–
1324.
[5] Z. Hilvert-Bruce, J. T. Neill, M. Sjoblom, and J. Hamari, “Social
motivations of live-streaming viewer engagement on Twitch,” Comput.
Human Behav., vol. 84, pp. 58–67, 2018.
[6] C. Flores-Saviaga, J. Hammer, J. P. Flores, J. Seering, S. Reeves, and
S. Savage, “Audience and streamer participation at scale on Twitch,” in
Proc. 30th ACM Conf. Hypertext Social Media (HT), 2019, pp. 277–278.
[7] J. Deng, F. Cuadrado, G. Tyson, and S. Uhlig, “Behind the game:
Exploring the Twitch streaming platform,” in Proc. Int. Workshop Netw.
Syst. Support Games, 2015, pp. 1–6.
[8] A. L. Jia, S. Shen, D. H. J. Epema, and A. Iosup, “When game
becomes life: The creators and spectators of online game replays and
live streaming,” ACM Trans. Multimedia Comput. Commun. Appl., vol.
12, no. 4, Art. 47, pp. 1–24, 2016.
[9] B. Wu, C. Z. Liu, and H. Zhu, “Will cooperation help content creators
grow? Empirical evidence from Twitch.tv,” in Proc. Int. Conf. Inf. Syst.
(ICIS), 2020.
[10] M. Gentzkow and J. Shapiro, “What drives media slant? Evidence from
U.S. daily newspapers,” Econometrica, vol. 78, no. 1, pp. 35–71, 2010.
[11] Y. Borghol, S. Ardon, N. Carlsson, D. Eager, and A. Mahanti, “The
untold story of the clones: Content-agnostic factors that impact YouTube
video popularity,” in Proc. KDD, 2012, pp. 1186–1194.
[12] M. H. Ribeiro, R. Ottoni, R. West, V. A. Almeida, and W. Meira,
“Auditing radicalization pathways on YouTube,” in Proc. FAT*, 2020,
pp. 131–141.
[13] Z. Lu, H. Xia, S. Heo, and D. Wigdor, “You watch, you give, and you
engage: A study of live streaming practices in China,” in Proc. CHI,
2018, pp. 1–13.
[14] Z. Lu, C. Shen, J. Li, H. Shen, and D. Wigdor, “More kawaii than
a real-person live streamer: Understanding how the otaku community
engages with and perceives virtual YouTubers,” in Proc. CHI Conf.
Human Factors Comput. Syst., 2021, Art. 137, pp. 1–14.
