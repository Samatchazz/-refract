---
title: Who Reaps All the Superchats? A Large-Scale Analysis of Income
id: who-reaps-all-the-superchats-a-large-scale-analysis-of-income
tags:
- creator-attrition-income-data-079588
- creator-attrition
- survival-analysis
- creator-earnings
- income-inequality
- youtube
- livestreaming
- vtuber
- platform-telemetry
- east-asia
- academic-paper
created: '2026-07-27T11:26:31.368891Z'
updated: '2026-07-27T17:52:25.869630Z'
source: https://arxiv.org/pdf/2503.00825
source_domain: arxiv.org
fetched_at: '2026-07-27T11:26:31.365506Z'
fetch_provider: crawl4ai
status: review
type: note
tier: institutional
content_type: paper
deprecated: false
summary: 'Zhao, Diep, Pei, Yoon, Jurgens & Zhu (UBC / Stanford / Michigan), arXiv:2503.00825v1
  [cs.HC], 2 March 2025, CHI-format. The single most useful source in this batch for
  the ATTRITION half of the query: it is one of the few papers that reports an actual
  creator survival analysis with a Cox proportional-hazards model, on observed platform
  telemetry rather than self-report.\n\nSAMPLE: 1,923 Virtual YouTubers (VTubers)
  sampled from Virtual YouTuber Wiki (~2,800 listed, >15 languages), whose YouTube
  livestreams were scraped for public livechat records. Coverage: early 2017 to July
  2023 (6.5 years), >1 million streaming hours across ~450,000 sessions, 17 billion
  total views, 6.75 million unique commenting viewers, 61 currencies converted to
  USD at daily ECB rates. Breakdown: 1,238 agency-affiliated (Hololive 70, Nijisanji
  192, 774 Inc 25, other agencies 951) and 635 independent. GEOGRAPHY: this is a JAPAN/EAST-ASIA-ORIGIN,
  globally distributed sample - VTubing began in Japan, Hololive operates dedicated
  Japanese, English and INDONESIAN branches - which makes it the one source here with
  meaningful non-Western coverage, though the paper does not report country-level
  breakdowns.\n\nSURVIVAL FINDINGS (Section 7): median lifespan (first stream to last
  stream) of ALL VTubers is 24 months. By affiliation: 44 months for large agencies
  (Hololive/Nijisanji), 28 months for independents, 21 months for small agencies -
  all pairwise differences significant (Large vs Other p=1.3e-28; Large vs Independent
  p=2.07e-15; Independent vs Other p=2.03e-7). 1,057 of 1,923 (over 50%) had stopped
  streaming completely within 3 years of their first stream; among those who stopped,
  median lifespan was about 19 months. Cox model (concordance 0.680, sigma 0.023,
  5-fold grouped CV): hazard ratio 1.980 for small/other agency affiliation (p=0.003)
  and 1.296 for independents (p=0.302, not significant) relative to large-agency baseline;
  total viewers exp(beta)=0.983 (p=0.001); total members exp(beta)=2.124 (p=1.6e-8,
  raises initial hazard) with a negative member-x-time interaction 0.976 (p=0.001);
  Superchat income x time 0.993 (p=0.010). Gender and stream duration were NOT significant.
  Right-censoring: any VTuber whose last stream fell within 3 months of the July 2023
  cutoff is treated as censored.\n\nINCOME FINDINGS: mean monthly Superchat income
  across all VTubers is ,667 but the MEDIAN is only 27 - a 21x mean/median ratio.
  25% of VTubers received zero Superchats in the entire observation window (''only
  75% of them had received at least one Superchat''). Between-VTuber Gini rose from
  ~0.60 (2018) to 0.75 (2023). Within-viewer concentration: of 6.75M unique commenting
  viewers, 7.96% ever sent a Superchat and 12.65% ever bought a membership; over 80%
  spent nothing. Per-VTuber Superchat Gini among paying viewers is around and above
  0.6, saturating at 0.8-0.9 as the paying base grows. Median share of a VTuber''s
  chatters who are Superchat senders is 5% (14% among loyal viewers, 22% among members).
  Most Superchats are -0; YouTube caps Superchats at ,000/week. Memberships are short
  and shallow: median viewer subscribes to 1 VTuber (mean 3.06, Q75 3.00).\n\nAGENCY
  CONCENTRATION: Hololive + Nijisanji take more than 60% of total views and more Superchat
  income than all other VTubers combined; the top independent (Kamito) earned one-eighth
  of the top corporate VTuber (Kiryu Coco) and did not place in the top 100 by income.
  Note that agencies take a large cut, so VTuber take-home is materially below observed
  Superchat gross.\n\nCAVEATS: only publicly-visible Superchat and membership revenue
  is observed - sponsorships, merchandise, concerts and ad revenue are invisible,
  and Hololive''s own financial reports say merchandising overtook Superchats/memberships
  after 2022, so this UNDERSTATES total top-creator income and probably overstates
  the relative importance of tipping. Sampling is from a fandom wiki, which favours
  notable VTubers, so real attrition across all VTubers is very likely worse than
  the reported 50%-in-3-years. LONG SOURCE, 14,394 words - candidate for source-analyst
  delegation.'
raw_file: raw/who-reaps-all-the-superchats-a-large-scale-analysis-of-income.pdf
doi: arXiv:2503.00825
utility_score: 17.0
---

Who Reaps All the Superchats? A Large-Scale Analysis of Income
Inequality in Virtual YouTuber Livestreaming
Ruijing Zhao∗
ruijing.zhao@sauder.ubc.ca
University of British Columbia
Vancouver, Canada
Brian Diep∗
brdiep@mail.ubc.ca
University of British Columbia
Vancouver, Canada
Jiaxin Pei
pedropei@stanford.edu
Stanford University
Palo Alto, USA
Dongwook Yoon
yoon@cs.ubc.ca
University of British Columbia
Vancouver, Canada
David Jurgens
jurgens@umich.edu
University of Michigan
Ann Arbor, USA
Jian Zhu
jian.zhu@ubc.ca
University of British Columbia
Vancouver, Canada
ABSTRACT
The explosive growth of Virtual YouTubers (VTubers)—streamers
who perform behind virtual anime avatars—has created a unique
digital economy with profound implications for content creators,
platforms, and viewers. Understanding the economic landscape of
VTubers is crucial for designing equitable platforms, supporting
content creator livelihoods, and fostering sustainable digital com-
munities. To this end, we conducted a large-scale study of over 1
million hours of publicly available streaming records from 1,923
VTubers on YouTube, covering tens of millions of dollars in actual
profits. Our analysis reveals stark inequality within the VTuber
community and characterizes the sources of income for VTubers
from multiple perspectives. Furthermore, we also found that the
VTuber community is increasingly monopolized by two agencies,
driving the financial disparity. This research illuminates the finan-
cial dynamics of VTuber communities, informing the design of
equitable platforms and sustainable support systems for digital
content creators.
CCS CONCEPTS
• Social and professional topics; • Human-centered comput-
ing →Empirical studies in collaborative and social comput-
ing;
KEYWORDS
virtual YouTuber, livestreaming, social media, monetization
ACM Reference Format:
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens,
and Jian Zhu. 2025. Who Reaps All the Superchats? A Large-Scale Analysis
of Income Inequality in Virtual YouTuber Livestreaming. In Proceedings
∗Both authors contributed equally to this research.
Permission to make digital or hard copies of all or part of this work for personal or
classroom use is granted without fee provided that copies are not made or distributed
for profit or commercial advantage and that copies bear this notice and the full citation
on the first page. Copyrights for components of this work owned by others than ACM
must be honored. Abstracting with credit is permitted. To copy otherwise, or republish,
to post on servers or to redistribute to lists, requires prior specific permission and/or a
fee. Request permissions from permissions@acm.org.
Conference’17, July 2017, Washington, DC, USA
© 2025 Association for Computing Machinery.
ACM ISBN 978-x-xxxx-xxxx-x/YY/MM...$15.00
https://doi.org/10.1145/nnnnnnn.nnnnnnn
of ACM Conference (Conference’17). ACM, New York, NY, USA, 18 pages.
https://doi.org/10.1145/nnnnnnn.nnnnnnn
1
INTRODUCTION
Virtual YouTuber, or VTubers, are a special category of livestreamers
with virtual 2D or 3D anime-style avatars controlled by human
voice actors. Under the masquerade of virtual bodies, Nakanohi-
tos, or the human voice actors can flexibly perform a constructed
personality that appeals to their fanbase [65, 85, 99]. Despite their
virtual appearance, VTubers attract and engage a large fanbase
through real-time interactions that provide emotional and enter-
taining affordance [21]. Meanwhile, the audience can not only in-
teract with the VTuber through the text-based livechat channel, but
also support the VTuber with Superchats or monthly memberships,
which grant them privileges like pinned messages for a longer du-
ration, exclusive emojis, and username highlights (see Figure 1).
Unlike mainstream YouTubers who regularly upload pre-recorded
videos and monetize through advertisement revenues [53], VTu-
bers engage with the audience primarily through synchronized
livestreaming and mostly monetize through Superchats and mem-
bership subscription. An online survey of 34 VTubers [8] suggested
that, among all monetization methods, Superchat donations (39.1%)
and membership subscriptions (26.1%) are the two most popular
ways. Financial report from Hololive Production [23] also suggested
that Superchats and Membership were the most important revenue
stream until 2022, after which they were only second to revenues
from merchandising.
VTubers initially debuted in Japan and became popular in East
Asia [91]. In recent years, VTubers have also gained increasing
popularity in the English-speaking cybersphere and worldwide,
as evidenced by the English-speaking VTuber, Gawr Gura, who
reached over 4 million YouTube subscribers in about two years
[75]. As of May 2024, 64 out of the top 100 most Superchatted
YouTubers are VTubers [1], which collectively generate tens of
millions in revenue per year. Despite their significant role in the
content creation economy, the monetization landscape of VTubers
are generally underexplored from the current literature.
One distinction between VTubers and conventional game stream-
ers is the companies behind them. VTubers, since their earliest days,
are invented, manufactured and actively promoted by corporate
agencies for commercial interests [92]. VTubers also explicitly in-
corporate agencies in their self-branding [70]. Agencies, similar to
arXiv:2503.00825v1  [cs.HC]  2 Mar 2025


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
Figure 1: Screenshot of video game streaming by the Hololive VTuber Gawr Gura, the most subscribed VTuber on YouTube [75].
‘guilds’ or Multi-channel Network (MCN) companies in the West-
ern and Chinese livestreaming industry, are companies offering
streamer support ranging from talent selection, content creation
to monetization but also reaping a sizable portion from streamer
incomes [60, 70, 109]. Agencies have emerged as a critical player
in the content creation economy, in addition to creators and plat-
forms [60]. Yet they have not received sufficient attention from
researchers. Studying the VTuber community provides a unique
opportunity to delve into these agencies, their economic activities,
and their influence on VTubers and viewers. This will not only re-
veal how the VTuber community functions but also provide insights
into how content creation has evolved.
In this study, we aim to understand the monetization of VTubers
and the agencies behind them from a quantitative perspective by
answering the following specific research questions (RQs):
• RQ 1: Who profits the most from the VTuber livestream
market?
• RQ 2: Who are contributing to the VTuber’s monetiza-
tion during livestreaming?
• RQ 3: What is the influence of agencies in monetiza-
tion?
• RQ 4: What factors affect the survival of VTubers?
We conducted a comprehensive quantitative analysis of over 1
million hours of livestream records from more than 1,900 VTubers
on YouTube over six years. Our main contributions are as follows:
• First, our large-scale analysis offers a global quantitative
characterization of the monetization landscape of the VTu-
ber community, showing that the financial inequality and
the widening wealth gap in the VTuber community, and
that a subset of viewers contributes disproportionally to the
incomes during livestreaming.
• Secondly, from the perspective of agencies, we show that
two agencies, Hololive and Nijisanji monopolize the VTu-
ber market by owning the most profitable VTubers and that
the dominance of these two agencies has been strengthened
over the years. These two large agencies had a higher per-
centage of members and Superchat senders than VTubers
from small agencies and independent VTubers, but a smaller
percentage of loyal viewers. Agencies also cultivated a loyal
fanbase loyal to the brand of the agency, rather than only to
individual VTubers.
• Furthermore, our survival analysis indicates that VTuber
lifespans are highly associated with economic factors and,
in particular, affiliation status. VTubers from large agencies
survive longer than those from small agencies and indepen-
dent VTubers. Yet VTubers from small agencies were active
for a shorter lifespan than independent VTubers.
• Based on our analyses, we discuss the increasingly critical
role of agencies, or MCNs, in the creator economy and its
implications. We also propose the design implications for
the VTuber community to expand the monetization strate-
gies and provide more equalitarian opportunities to small
VTubers.
For replication, we release our code for scraping and data analysis,
as well as some preprocessed data, at https://github.com/brdiep113/
chi-livechats.
2
BACKGROUNDS AND RELATED WORK
Our study is motivated by prior research on VTubers and the eco-
nomic status of digital content creators. In this section, we summa-
rized the related works.
2.1
VTubers as a cultural phenomenon
VTubers are a relatively new phenomenon that has only attracted
attention from the HCI and CSCW community in the past few
years. Livestreaming, especially game streaming, is mostly male-
dominated [30, 35], yet VTubers are firmly dominated by female
voice actors because of their origins in the Japanese idol indus-
try [99]. Some VTubers have been drawing intense criticisms of
misogyny and gender biases are common in VTuber communities
[13, 14, 18, 30, 65, 89, 99]. However, the VTuber streaming commu-
nity is becoming more diverse in terms of language and gender
[13, 65, 89].


---

Who reaps all the Superchats?
Conference’17, July 2017, Washington, DC, USA
Existing studies have investigated how VTuber perform various
personalities visually and vocally [12, 18, 21, 34, 99]. Other studies
on VTubers also examine user engagement with virtual avatars
[65, 73, 87, 102], viewer perception [78], and motivations [22, 65].
Many studies also explore the design and the technical aspects of
virtual livestreaming [19, 31, 50, 77, 93, 103, 111]. Prior studies, pri-
marily based on qualitative interviews, provide an in-depth descrip-
tion of individual VTuber and viewer experience [4, 22, 65, 66, 99],
but scant attention has been paid to the financial ecosystem of
VTubers, as well as the collective patterns of VTuber monetization
activities. Unlike many individual-based streamers, many promi-
nent VTubers are associated agencies [65, 92]. Agencies are key
players in the market as they actively manufacture, promote, and
monetize VTubers. Yet exactly how agency affiliation affects the
performance of VTubers has not been systematically investigated.
VTubers, like other online influencers, actively mobilize inti-
macies with followers to forge parasocial relationship from fans
[2, 16, 38]. It has been found that the strength of the parasocial
relationship on social media predicts content consumption and
purchase intentions [55, 84]. Such parasocial interaction can be
drawn upon to maximize monetization and could potentially lead
to overspending [71, 88]. In this study, we operationalize parasocial
attachment as either being financially or behaviorally committed
to VTubers. We compare how these committed viewers differ from
the rest of the viewers in terms of membership subscriptions and
Superchat donations.
2.2
The economy of social media content
creation
In recent years, online content creation has emerged as an increas-
ingly vital component of the entertainment industry. Understanding
these digital patronage platforms can help communities design for
and support content creators and contributors for an enhanced
experience. Prior studies have explored the creator economy on
platforms like OnlyFans [98], YouTube [3, 47], Patreon [32, 39, 82]
and the financial ecosystems on different platforms [11, 41]. Other
studies investigate the online consumption behaviors of users, par-
ticularly user churn and user loyalty [32, 40, 57]. Content creators
are also actively employing multiple strategies to achieve moneti-
zation from users [68, 90].
VTubers’ monetization falls into the category of a fan-based
model [39], in contrast to the advertisement-based model that dom-
inated Internet content creation in the past decades [33]. Unlike
other content creators who rely on revenues from advertisement
agencies, VTubers generally receive monetary rewards directly
from the voluntary donations of fans. Different from many YouTu-
bers, most VTubers choose to livestream rather than upload pre-
recorded videos. Superchats sent during livestreaming, in addi-
tion to any regular monthly subscriptions, constitute a primary
source of income for VTubers [8, 23]. While Subscription-based
monetization [32, 39, 98] and online gifting in game streaming
[59, 95, 101, 105, 112] have received extensive research, online gift-
ing (Superchats) and subscription (membership) in the context of
VTubers have not received enough attention relative to its propor-
tion in creator economy [106].
2.3
Multi-media networks in digital content
creation
With the rise of digital content creation, MCNs has already become
another major player in addition to content creators and platforms.
MCNs originated in YouTube, and were utilized to professionize
content production on the platform [26, 45, 64, 108]. Yet YouTube
only treated MCNs as transitional tools in its commercialization
process and began limiting the operations of MCNs [108]. While
MCNs are not quite prominent in Western streamers, they are the
primary business model in the Chinese livestreaming industry. Most
current research on MCNs focuses on China, which has the largest
MCN market in the world [108]. MCNs have been mentioned in
early interviews of Chinese streamers [100, 109], noting their role
in providing support for streamers but also taking away profits
and autonomy from them. Recent research suggests that MCNs
has gradually evolved from intermediaries merely facilitating con-
tent creation [48, 64] to gatekeepers manufacturing influencers
in bulk and strategically controlling content creation, becoming
increasingly dominant [60, 62, 107].
Within the VTuber contexts, MCNs are usually referred to as
Jimusho, or agencies. The origin of VTubers also started from the
effort to manufacture online virtual idols with the existing work-
flows in the Japanese idol industry augmented with technology
[9, 92]. While functioning like other MCNs, VTuber agencies also
inherit the Japanese idol agencies [70]. Prior studies on VTubers
have briefly mentioned the role of corporate agencies in replacing
VTuber voice actors at will [65, 99], highlighting the controlling
power of corporate agencies. Yet the role of corporate agencies
has rarely been explored at a wider scale and outside the Chinese
context. Given their increasing importance in institutionalizing
digital content creation, our study aims to provide a nuanced un-
derstanding of the role of MCNs, or agencies in VTuber contexts
(we use these two terms interchangeably), in the content creation
economy.
2.4
Challenges in digital content creation
The distribution of wealth is highly unequal among streamer com-
munities with a long-tail distribution [46, 81], with top streamers
getting much more wealth than those at the bottom. While such pat-
terns regularly emerge from economic activities, researchers have
exposed and addressed the inequalities and biases in digital plat-
forms exacerbating such inequalities. Female and other marginal-
ized streamers are more likely to be subject to the unfair community
guidelines of the platforms [53, 54], moderator and algorithmic bi-
ases in content moderation [15, 49, 51, 69], and constant harassment
[76, 79, 94, 96]. Some studies also expose the precarious nature of
the digital content creation professions and their work conditions
[20, 27, 72], highlighting how the nature of this profession differs
from jobs in traditional sectors. It has been found that the actors
animating virtual characters are facing vulnerabilities as employees,
with their invisible labor not receiving sufficient recognition [20].
Through the lens of quantitative analysis, we also plan to inves-
tigate the likelihood and the career of VTubers. As digital content
creators, VTubers are likely to run into similar challenges such
as job precarity, unstable incomes, and high dropout rates. Unlike
most game streamers that are individual-based [86], the earliest


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
and most successful VTubers were corporate-managed streamers
[6, 67]. VTubers are also likely to face unequal power dynamics
from corporate agencies or competitive pressure from the corporate
content creation pipeline, which merits further research.
3
METHOD
3.1
Data collection
For this study, we collected a large-scale dataset of livechats in
VTuber streaming from YouTube.
3.1.1
Aquisition of VTuber samples. We first acquired a compre-
hensive list of VTubers from Virtual YouTuber Wiki1, which covers
around 2,800 VTubers streaming in more than 15 languages. VTu-
ber Wiki had been used as a list for calculating the demographics
of VTubers [99]. This list, while not exhaustive, still constitutes a
representative sample of the whole VTuber spectrum.
3.1.2
Meta information extraction. The fandom pages included
detailed and structured meta-information of VTubers contributed
by crowd-sourced editors. We used regular expressions to extract
names, debut dates, agency affiliations (if any), channel links, pre-
sented genders, primary language, and (virtual) personal details.
The extracted data were all manually inspected and corrected for
erroneous information and typos. After inspecting, we selected
only VTubers that had a YouTube channel link on their Fandom
pages.
3.1.3
Livechat collection. Most VTubers archive all of their public
streaming sessions with time-synchronized live chats. We used
a customized scraper built on yt-dlp, an open-source YouTube
downloader, to collect data from the channels of these VTubers.
Given a link to a VTuber channel, the scraper retrieved all the public
livestream records in the channel. Only text data for streaming
sessions, including video descriptions and livechat records were
collected. The video description included the title, the host, views,
subscriber count, and duration. Each livechat session was a JSON-
formatted object of all livechats sent in the livestreaming session,
each livechat represented as a single entry with features listed in
Table 1.
3.1.4
Ethical practices. During data collection, we adhered to eth-
ical practices for web scraping. To avoid overloading the website
server, only necessary data was accessed and data requests were
sent at a reasonable interval (> 5 seconds per request) to mini-
mize high-frequency requests. The web scraping was completed
in around four months with multiple breaks every day. The data
collection procedure did not involve any direct interactions with
the viewers or the VTubers. Hence this work does not fall into the
categories of human subject research and no institutional review is
needed. All of the collected livestreaming sessions were public and
non-sensitive. Users were fully anonymized through non-reversible
hashing. We did not anonymize the VTubers as they are public
figures.
1https://virtualyoutuber.fandom.com/wiki/Virtual_YouTuber_Wiki
Items
Description
Session ID
The unique identifier of the livestreamed session
User ID
The public username, which we anonymized through
hashing
Video Offset
The timing of the livechat relative to the video start
time
Message
The text content of the message, including stickers
Superchat
Whether this livechat is a Superchat or not
Unix
Times-
tamp
The Unix timestamp of the livechat
Author Badge
Whether the sender is a member at the time and, if
yes, the duration in month
Purchase
Amount
The precise value of Superchat in local currency, such
as $5, C$5, NT$100, ¥1000.
Message Dura-
tion
Duration of the message as proportional to the Su-
perchat value
Table 1: A list of features available in each public livestream
session record retrieved from YouTube.
3.2
Dataset summary
Table 2 presents the overall summary of VTubers in our data. After
data cleaning, we aggregated livestreaming sessions from 1,923
VTubers between early 2017 and July 2023, representing VTubers
more than 15 languages. Altogether, these VTubers streamed more
than 1 million hours in around 450k sessions on YouTube, yield-
ing more than 17 billion views in total. These statistics suggest
that our data represents a comprehensive view of the VTubers on
YouTube. The VTuber landscape is firmly dominated by corporate
agencies, as the two largest agencies, Hololive and Nijisanji, reap
more than 60% of total views. Most VTubers are affiliated with
agencies, yet independent VTubers also contribute to a sizeable
portion of streamed content.
3.3
Extracting financial transcations
We focus on two primary approaches to achieving monetization
directly during livestreaming, Superchat and Membership, as
illustrated in Figure 1.
Superchats are messages or stickers that will stay highlighted
in bright colors and special fonts for a longer fixed interval on the
livechat interface. The duration of the Superchats is proportional
to the amount of payment. The price of Superchat is customizable
between $1 to $500, though the actual price range varies across
international regions and currencies.
Membership is another common way for fans to pledge their
loyalty. A user can pay a monthly subscription fee to become a
channel member, which, in return, receives member-only benefits
including highlighted usernames, exclusive emojis, member-only
livestream, and more close interactions with the VTuber. The mem-
bership also comes with different tiers, with the most common
pricing ranging from $1.99, $4.99, $14.99 to as high as $34.99.
In addition to Superchats and membership, other possible ways
of monetization include streaming sponsored content, selling VTuber-
themed products, serving as brand ambassadors, live concerts, etc
[23, 92]. However, these activities do not directly happen during
livestreaming and the resulting transaction information is usually


---

Who reaps all the Superchats?
Conference’17, July 2017, Washington, DC, USA
Affiliation
Num. VTubers
Total Videos
Total Hours
Total Views
Total Chats
Affiliated
1238
337k
893k
16324m
9728k
- Hololive
70
43.3k
116k
6330m
3753k
- Nijisanji
192
105k
294k
7091m
3440k
- 774 Inc
25
20.4k
43.2k
486m
337k
- Other Affiliations
951
169k
441k
2417m
2199k
Independents
635
108k
273k
1007m
723k
Table 2: Data for VTubers by Most Popular Affiliations.
not disclosed. Therefore, we limited our analysis to the publicly
available Superchat and membership information.
3.3.1
Extracting membership. We only counted the number of
members as well as the maximal duration of membership per VTu-
ber channel. Each member is associated with a member-only badge,
which are usually marked with time spans such as one month,
three months, and one year. For each member, we aggregated all
their membership badges across all sessions for each VTuber and
treated the longest period as indicated in their badge as the mem-
bership duration. The membership tiers are not differentiated in
the public data, so we had to make a simplifying assumption that
all membership here is homogenous.
3.3.2
Extracting Superchats. Each Superchat is associated with a
numerical value in local currency as well as the currency symbol.
A total of 61 unique currencies were identified through regular
expressions. All payments were converted to US dollars with the
daily foreign exchange rates available from the European Central
Bank and investing.com (for 30 currencies not available in the
European Central Bank). We used the exact timestamp of each Su-
perchat to retrieve the daily currency exchange rate on the day
when the Superchat was sent. We also manually verified the ob-
tained numbers and rankings with public VTuber statistics2 and
concluded that the numbers were indeed close, despite the fact that
these public statistics also include private livestreaming sessions
and deleted sessions.
3.4
Data coding
3.4.1
Categorization of viewers. Our viewer population only in-
cludes the viewers who left at least one livechat in livestreaming. We
distinguished viewers who were committed behaviorally (loyal vs.
non-loyal) and who were committed financially (Superchat senders
and members). In previous literature, user loyalty is considered a
strong proxy for latent engagement in online community platforms
[40]. Adapted from prior work [32, 40], we adopt a time-dependent
approach to defining loyal viewers by incorporating both users’
preferences and commitment. Preference refers to users being ac-
tive in a substantial portion of a specific VTuber’s livestreaming
sessions, while commitment refers to the sustainability of this pref-
erence over time [40]. Specifically, for a VTuber, a viewer is con-
sidered loyal in month t if they have sent at least one chat in at
least half of this VTuber’s streams in both month t and month t + 1.
For financially committed viewers, Superchat senders are those
2https://playboard.co/en/youtube-ranking/most-superchatted-v-tuber-channels-in-
worldwide-total
who have sent Superchats at least once. Members are those who
pay to become a channel member at least once. Notably, a viewer
can simultaneously exhibit behavioral loyalty and financial com-
mitment to a VTuber (e.g., a viewer can be both a loyal viewer and
a Superchat sender in month t). In our analysis, we examine viewer
engagement and financial transactions separately.
3.4.2
Categorizing VTubers. We also coded VTubers into three
categories. VTubers themselves are not a homogenous community,
agency affiliations can impact their actual activities [92]. VTubers
without any affiliations were coded as Independent VTubers. For
affiliated VTubers, they were categorized into Large Agency VTu-
ber if they were affiliated with Hololive and Nijisanji. Otherwise,
they were coded as Other Agency VTuber. This categorization
scheme allows us to compare the performance of affiliated and
independent VTubers. Hololive and Nijisanji VTubers were coded
as separate categories as these two companies were outstanding
from other agencies in terms of various metrics.
3.4.3
Constructing VTuber networks through loyal viewers. Viewers
often follow more than one VTubers. To visualize this, we con-
structed the loyal viewer networks as a weighted undirected graph
between VTubers, with each VTuber as a node. Let 𝐴and 𝐵be two
lists of loyal viewers from two VTubers. The edge weight between
these two VTubers is the same as the dice coefficient of their loyal
viewers, defined as:
𝐷(𝐴, 𝐵) = 2|𝐴∩𝐵|
|𝐴| + |𝐵|
where |𝐴∩𝐵| is the intersection of loyal viewers and |𝐴|, |𝐵| are
the total number of loyal viewers. Dice coefficient quantifies the
fraction of shared loyal viewers between VTubers. We computed
the dice coefficient for each unique pair of VTubers and used them
as the edge weights between this pair of VTubers. This network
allows us to visualize the relationship between VTubers.
3.5
Analyzing income disparity
In order to quantify the monetary disparity between viewers, we
calculated Gini coefficients, or Gini index. Gini index has been a
common measure of economic inequality and has been applied to
compare the income polarity in online platforms [32, 46]. Given
a sequence of 𝑛values {𝑥1,𝑥2, . . . ,𝑥𝑛} that is sorted in ascending
order, the Gini coefficient can be calculated using the following
definition [29].
𝐺=
Í𝑛
𝑖=1(2𝑖−𝑛−1)𝑥𝑖
𝑛Í𝑛
𝑖=1 𝑥𝑖
(1)


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
where 𝑖is the rank of 𝑥𝑖. G is the Gini index with a theoretical range
between 0 and 1, where 0 implies absolute equality and 1 means
extreme inequality. We used Gini index to quantify the monetary
disparity in the following three scenarios.
• Between-VTuber Gini index. This Gini index measures
the disparities of total income between each VTuber.
• Within-Vtuber Gini index. This Gini index measures the
income stability of a VTuebr by quantifying the Superchat
income disparties across all livestreaming sessions for the
VTuber. Membership subscription fees are not included in
this calculation, as we do not have access to such data.
• Superchat Gini index. This Gini index quantifies the dispar-
ities in monetary contributions between Superchat senders
for each VTuber. It is calculated based on the total contribu-
tions by Superchat sender for each VTuber.
3.6
Survival analysis
We adopted a survival analysis to analyze the probability of VTuber
failure given their monthly engagement features over time. Sur-
vival analysis is a collection of statistical methods concerned with
predicting the expected temporal span until an event occurs [25, 52].
In our case, the event of interest is when the VTuber will cease
streaming.
3.6.1
Feature extraction. Our data is an incomplete snapshot of
VTuber activities, as many of them will continue to remain active
after the data collection cutoff. As for defining failure in our analysis,
a VTuber is considered to have failed at their n-th month if the time
between the VTuber’s most recent stream to their first stream is
less than 𝑛months. We also considered any VTuber’s who’s most
recent stream to fall within the 3 months of the cutoff date to still
be right-censored, implying that their survival time is potentially
longer than the observed label [52].
In our analysis, we considered time-dependent viewer engage-
ment features at each month as well as demographic information
such as affiliation and gender of VTuber. We also considered en-
gagement features such as number of members, number of unique
viewers, Superchat income, and duration streaming from every
month from the date of their first stream to their failure or censor-
ing. The set of all features are summarized in Table 3. We ensure
that our features can be used to predict only future failure by pre-
dicting the survival status of each VTuber at month t with features
from month t −1.
3.6.2
Cox model. The model we fit is a Cox proportional hazards
model [24]. It is a parametric model that estimates a baseline hazard
(risk of failure) function over time as well as the effect of additional
covariates on the baseline hazard. Positive coefficients represent in-
creases in the risk of failure, whereas negative coefficients represent
decreases in risk of failure. Under exponentiation, the coefficients
of the model can also be interpreted as representing a hazard ratio
representing the multiplicative change in hazard, or the risk of fail-
ure. Notably, several of our covariates fail a test of proportionality
[37] at the 𝛼= 0.05 significance level. This suggests the typical
assumption that the affect of covariates on the hazard does not vary
in time. In order to address this, we include interaction terms in our
model with the covariates that violate fail the proportional hazards
Feature
Description
Affiliation
The listed affiliation of the VTuber as listed on the
VTuber Fandom Wiki. This is coded as a categorical
variable with 3 levels, large affiliation for those affili-
ated with Hololive or Nijisanji, other affiliations for
those with any other affiliations, and independent
for those with none.
Gender
The listed gender of the VTuber as listed on the
VTuber Fandom Wiki (including male, female, and
other/non-binary)
Total
Stream
Duration
Total duration of each of a VTubers’ recorded streams
Total Suprchat
Income
Total amount of Superchats received (converted into
$USD equivalent) over each of a VTubers’ recorded
streams
Total Viewers
Total number of unique viewers who left comments
on the VTubers streams
Total Number
of Members
Total number of unique users subscribed to the VTu-
ber
Table 3: Summary of all extracted features for each month.
assumption to reflect the time-varying nature of this problem. All
hazard ratios in our analysis are reported with female and large
affiliation (Hololive/Nijisanji) VTubers as the reference.
We also estimate the predictive accuracy of our model by doing a
5-fold group cross-validation such that no samples of a VTuber exist
in both the training and held-out fold. We calculate concordance
index (Harrell’s C) on the held-out fold as our evaluation metric
[42]. Concordance index measures the proportion of all pairwise
samples in the data where the model assigns higher risk for the
subject with the shorter survival time.
4
RQ1: WHO PROFITS THE MOST FROM THE
VTUBER LIVESTREAMING MARKET?
In this section, we provide empirical answers to RQ1. Generally
speaking, only a few top VTubers and agencies are profiting a lot
from the livestream market.
4.1
The incomes of VTubers are highly unequal
In Figure 2, the between-VTuber Gini index of VTuber earnings
continued to grow from around 0.60 in 2018 to 0.75 in 2023, indi-
cating a rapidly widening wealth gap between VTubers over time.
VTuber incomes are highly concentrated, with only a small number
of top VTubers reaping most fans and monetary earnings. Among
all VTubers, only 75% of them had received at least one Superchat,
or one fourth of VTubers did not receive any Superchat within
the investigated period. On average, the monthly income for all
VTubers is $2,667. Yet the income distribution is highly skewed,
such that the median monthly income is only $127.
Figure 2 suggests that Gini indexes are low for VTubers with
the highest and the lowest incomes. For VTubers with the lowest
incomes, their monthly incomes are always close to 0. For highest-
income VTubers, they have a large enough fanbase to sustain a
high and stable income every month, and these VTubers are also
more likely from large agencies. Generally speaking, higher income


---

Who reaps all the Superchats?
Conference’17, July 2017, Washington, DC, USA
10
1
100
101
102
103
104
105
Average Monthly Superchat Income
0.0
0.2
0.4
0.6
0.8
1.0
Gini index of Monthly Superchat Income
Affiliation
Independent
Large Affiliation
Other Affiliation
0.60
0.65
0.70
0.75
0.80
2018
2020
2022
Date
Gini Coefficient
Figure 2: Left: VTubers’ monthly Superchat Income and the Within-Vtuber Gini index of monthly income for each VTuber.
A higher Gini index in this context suggests high variation of monthly income. Right: Between-VTuber Gini index across
VTubers Over Time. The overall trend shows an increasing Gini coefficient from 2018 into 2023 when the data was collected.
0%
25%
50%
75%
100%
Akatsuki Yume
Akizuki Yueno
Amano Serafi
Aomiya Yozuri
Etna Crimson
Gawr Gura
Himemori Luna
Karrot Keromi
Obaachan
Osaki Cherry
VTuber
% of Streams
Stream Type
Chatting
Gaming
 Music
(a) Distribution of Session Types.
0
25
50
75
100
Akatsuki Yume
Akizuki Yueno
Amano Serafi
Aomiya Yozuri
Etna Crimson
Gawr Gura
Himemori Luna
Karrot Keromi
Obaachan
Osaki Cherry
VTuber
% of Received Superchats
Stream Type
Chatting
Gaming
Music
(b) Stream Types by Superchats.
Figure 3: Distribution of Stream Type. Many VTubers engage in multiple activities across their streams but gaming and chatting
sessions are usually the most profitable.
is weakly associated with higher income stability (Spearman cor-
relation: 𝜌= 0.30, 𝑝= 2.82𝑒−37), a trend also observed in Twitch
streamers [46].
4.2
Most Superchat incomes are from regular
gaming and chatting sessions (and a few
special events)
To understand what livestream content contributes to Superchats,
we sample 10 VTubers from our dataset (ensuring representation
from large corporate affiliations i.e. Hololive and Nijisanji, as well as
smaller affiliated and independent VTubers) and manually tagged
their streamed sessions from the first 3 months of 2023 to ensure
consistency in time. We found that most livestream sessions rotate
between gaming, chatting, and singing, though individual VTubers
prioritize certain content types. In Figure 3a, a majority of streams
are video gaming streams, more frequently than chatting and mu-
sical streams. Video gaming is popular among VTubers as it can
offer a stable viewer count and is not as effortful. In comparison,
singing requires special training and effort, so fewer VTubers are
doing music streaming. However, in terms of earnings, gaming
streaming generally earns fewer Superchats than chatting and mu-
sic streaming. In Figure 3b, chatting sessions tend to generate a
higher percentage of Superchat values than gaming streams, despite
being less frequent. In the case of the 324 sessions considered in this
analysis, over 12% (37 streams) were collaborated between two or
more other VTubers from the same agencies. Many agencies often
organize co-streaming events with several of their own VTubers
[56], which brings different viewer groups together, leading to a
large number of Superchats.
Figure 4 provides some qualitative examples of a few top VTu-
bers’ income per session over their lifespan. The Superchat income
per session is relatively stable. Yet there are often some outlier
sessions (spikes in figures) that yielded much higher incomes than
average. These outlier sessions are usually special events such as
birthday party concerts, collaborative live concerts, and new avatar
reveal parties. These special events usually offer more novel con-
tent than average streams, thereby attracting more viewers and
Superchats than regular sessions. A similar case has also been ob-
served in Twitch that key events are effective ways to attract a
larger-than-usual audience [28].


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
0
10000
20000
30000
2020
2021
2022
2023
Date
Payment ($ USD)
(a) Usada Pekora
0
2000
4000
6000
2021
2022
2023
Date
Payment ($ USD)
(b) Kamito
0
10000
20000
30000
2021
2022
2023
Date
Payment ($ USD)
(c) Gawr Gura
0
3000
6000
9000
12000
2019
2020
2021
2022
2023
Date
Payment ($ USD)
(d) Kson
Figure 4: Superchat incomes over time for selected VTubers. Income is unevenly distributed throughout a VTubers streams,
with significant spikes in a few streams.
0:00:00
0:33:20
1:06:40
1:40:00
2:13:20
2:46:40
VTuber: Houshou Marine         Livestreaming Date: 2022-08-10
0:00:00
1:06:40
2:13:20
3:20:00
4:26:40
5:33:20
VTuber: Inugami Korone         Livestreaming Date: 2020-07-03
0:00:00
0:13:20
0:26:40
0:40:00
0:53:20
1:06:40
VTuber: Fuwa Minato         Livestreaming Date: 2023-02-14
0:00:00
0:25:00
0:50:00
1:15:00
1:40:00
VTuber: Kuzuha         Livestreaming Date: 2022-12-18
Figure 5: Temporal occurrences of Superchats across the
whole sessions, with each dark bar indicating a Superchat.
Superchats tend to occur in clusters rather than evenly dis-
tributed across sessions.
4.3
Superchats are mostly from a few key
moments in livestreaming
We randomly sampled 100 livestream sessions for qualitative anal-
ysis. Figure 5 illustrates the temporal distribution of Superchats for
selected livestream sessions. Consistent prior observation on gifting
events [95, 112], Superchats tend to be clustered in short time spans
rather than evenly spread out across the whole session. Compared
to the long-term commitment of membership, Superchats are more
likely to be impulsive purchases, induced by the special moments in
livestream and the behavior of peer viewers. Based on our analysis,
there are three common cases where Superchats are sent in syn-
chrony. First, Superchats are sent in bulks at the beginning and the
end of the livestream, as a way of greeting. Secondly, most Super-
chats were sent out to celebrate the memorable, funny, or touching
moments. The large immersive virtual concerts can attract tens of
thousands of viewers, spurring more spikes of Superchats [56, 57].
Thirdly, in the case of conflicts or discussions, Superchats are sent
out by viewers who truly want their voice heard by pinning their
paid comment at the top of the chat window for a longer exposure.
5
RQ2: WHO ARE CONTRIBUTING TO THE
VTUBER’S MONETIZATION DURING
LIVESTREAMING?
5.1
VTubers’ incomes are primarily from a
small group of loyal fans
We have aggregated 6.75 million unique viewers, among which
7.96% have sent at least one Superchat and 12.65% have purchased
at least one VTuber membership. However, more than 80% viewers
in livechats did not spend any money. As we are only counting
viewers who left at least one livechat, the actual ratio can be much
lower if we count all viewers. Figure 6 indicates that the ratio of loyal
viewers was generally low in the VTuber viewers. However, viewers
who were behaviorally committed (loyal viewers) or financially
committed (members) were more likely to send out Superchats than
the general viewer population.
Even among the Superchat senders, there was tremendous in-
equality in individual contributions. For most VTubers, their Su-
perchat Gini indexes are around and above 0.6, indicating large
inequality in viewer spending (see Figure 7). This implies that the
core contributing viewers are extremely small in number, yet con-
tribute a disproportionally large share of income. Superchat Gini
indexes also grow with the increase in the paying viewer base, but
eventually saturates around 0.8-0.9. Generally, a larger paying user
base implies more diversity in users across regions and economic
conditions, which enlarges the monetary gaps.
5.2
Membership pledges tend to be short and
exclusive
Most VTubers did not set up membership subscriptions or did not
have members, but for those who did, the average membership rate
was around 5%, slightly higher than the ratio of Superchat senders.


---

Who reaps all the Superchats?
Conference’17, July 2017, Washington, DC, USA
2018-03
2019-01
2019-11
2020-09
2021-07
2022-05
2023-03
Month
0.05
0.10
0.15
0.20
0.25
0.30
Percentage of Loyal Users
Mean
±1 Std Dev
(a) Average Percentage of Loyal Viewers
across VTubers
0.0
0.1
0.2
0.3
0.4
0.5
Mean Percentage of Loyal Viewers over Months
0
100
200
300
400
500
600
700
Number of VTubers
(b) Average Percentage of Loyal Viewers
across Months
All Viewers
Loyal Viewers
Members
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
Ratio of Superchat Senders
(c) Distributions of Superchat Sender Ratios
per Vtuber
Figure 6: Loyal Viewer Statistics. Kruskal-Wallis H-test revealed significant differences among the ratios of Superchat senders
in all viewers, loyal viewers, and members (𝐻= 1116.72, 𝑝= 3.22 × 10−243). Post-hoc analysis revealed significant differences in
all pairwise group comparisons.
100
101
102
103
104
Number of Superchat senders
0.0
0.2
0.4
0.6
0.8
Gini index between Superchat senders
Affiliation
Independent
Large Affiliation
Other Affiliation
Figure 7: Superchat Gini index of Viewer Superchat Income
Contributions. The Spearman correlation between number
of Superchat senders and Gini Index is 𝜌= 0.71, with a 𝑝-
value of 3.31 × 10−191.
Compared to the one-time Superchats that cost between $1 to $500
only for brief moments, the membership is a more cost-effective
bargain to showcase loyalty. Not only because the price is cheaper,
but also because members can get their usernames highlighted in
color with an exclusive sticker attached, and receive additional
highlights for Superchats for a whole month.
Similar to many other content creators, VTubers are performing
parasocial relational labor to attract viewers [38]. Viewers’ commit-
ment to VTubers is usually exclusive. Our data analysis confirms
that the majority of members (over 50%) subscribed to only one
VTuber throughout their active period (Figure 8), as it can be diffi-
cult financially, and maybe in terms of time, to commit to multiple
VTubers for most viewers. Most membership also is also short-lived.
In fact, over 40% of members ended their membership in one month
(Figure 8). Yet, there is still a non-negligible portion of viewers who
maintain their membership for more than 1 year, some even over 4
years. Such parasocial relationships can be hard to maintain over a
long period.
5.3
Superchats were mostly sent out in small
amounts but loyal viewers sent them more
frequently
The distribution of individual Superchat payments in Figure 9 sug-
gests that most Superchats cost around $1-$10. The resulting prob-
ability distribution has multiple spikes because the payments are
usually limited to whole number amounts. YouTube caps the maxi-
mum amount of Superchats to $2,000 per week, so it is rare to find
Superchats beyond $500 in the data.
We compared the Superchat contributions from loyal viewers
and members among all Superchat senders in Figure 9. If the ratio
of loyal viewers or members is proportional to their percentage of
contributed Superchat values, the data points in Figure 9 should fall
exactly on the reference line. However, most data points are above
the reference line, implying that they contributed unproportionally
to Superchat incomes of the VTubers. Figure 6c further shows the
loyal viewers who show up more often in livechats and members
are more likely to send out Superchats. Across all VTubers, the
median ratio of Superchat senders is only 5%. Yet the same ratio is
14% and 22% for loyal viewers and members respectively.
We take a closer look at this disparity in Figure 10. On average,
loyal viewers and members send more money through Superchats
than non-loyal viewers and non-members (left), despite the former
being outnumbered by the latter. However, the USD-equivalent
value of single Superchats sent by both loyal/non-loyal viewers and
members/non-members was pretty close (right). The monetary gap
is primarily caused by the fact that loyal viewers and members sent
out Superchats far more frequently than other viewers.
6
RQ3: WHAT IS THE INFLUENCE OF
AGENCIES IN MONETIZATION?
In this section, to address RQ3, we dive deeper into the role of
agencies in the VTuber monetization landscape.
6.1
Affiliated VTubers hold a strong advantage
over independent VTubers
The top-earning VTubers are also dominated by corporate-managed
VTubers, especially from two major VTuber agencies, Hololive and
Nijisanji (see Figure 2). Hololive dominates the leaderboard with
more high-earning VTubers than Nijisanji and other affiliations


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
< 1 m 1-2 m 2-6 m 0.5-1 y 1-2 y
2-3 y
3-4 y
> 4 y
Membership Length
0
200,000
400,000
600,000
800,000
1,000,000
Number of Memberships
1
2
3-5
6-10
11-20
21-50
>50
Number of VTubers Viewers Subscribed to
0
100000
200000
300000
400000
Number of Viewers
Mean: 3.06
25th Percentile: 1.00
50th Percentile (Median): 1.00
75th Percentile: 3.00
Figure 8: Distribution of Membership Subscription Length; Number of Vtubers Viewers Subscribed to as a Member. The majority
of users have a relatively low number of VTubers that they are subscribed to and tend to have short-term memberships.
0.0
0.2
0.4
0.6
0.8
1.0
Loyal Viewers in Superchat Senders (Ratio)
0.0
0.2
0.4
0.6
0.8
1.0
Superchat Income from
 Loyal Viewers (Ratio)
Reference Line (y=x)
0.0
0.2
0.4
0.6
0.8
1.0
Members in Superchat Senders (Ratio)
0.0
0.2
0.4
0.6
0.8
1.0
Superchat Income from
 Members (Ratio)
Reference Line (y=x)
0
1
2
3
4
0.01
0.1
1
10
100
1000
Payment Amount ($ USD Value)
Density
Figure 9: Superchat Income Contributions of Loyal Viewers and Members. Loyal viewers and members contribute dispropor-
tionately more monetarily.
Loyal Viewers   
   Non-Loyal Viewers
0
100
200
300
400
Mean: 97.86
Mean: 25.96
Average Total Superchat Payment
Loyal Viewers   
   Non-Loyal Viewers
0
20
40
Mean: 11.76
Mean: 2.96
Average Number of Superchats
Loyal Viewers   
   Non-Loyal Viewers
0
10
20
Mean: 7.83
Mean: 8.18
Average Payment per Superchat
(a) Statistics of Loyal Viewers’ Superchat Income Contributions. Wilcoxon signed-rank tests revealed significant differences between loyal
and non-loyal viewers regarding average total Superchat payment (𝑊= 30 874, 𝑝= 9.55 × 10−159), average number of Superchats (𝑊= 13 448.5,
𝑝= 7.56 × 10−174), and average payment per Superchat (𝑊= 272 609, 𝑝= 1.18 × 10−8).
Members
Non-members
0
100
200
Mean: 68.16
Mean: 21.48
Average Total Superchat Payment
Members
Non-members
0
10
20
Mean: 7.40
Mean: 2.74
Average Number of Superchats
Members
Non-members
0
10
20
Mean: 8.53
Mean: 7.31
Average Payment per Superchat
(b) Statistics of Members’ Superchat Income Contributions. Wilcoxon signed-rank tests revealed significant differences between members
and non-members regarding average total Superchat payment (𝑊= 30 955, 𝑝= 1.59 × 10−127), average number of Superchats (𝑊= 23 010.5,
𝑝= 1.51 × 10−133), and average payment per Superchat (𝑊= 137 324, 𝑝= 4.24 × 10−35).
Figure 10: Detailed Statistics of Superchat Income Contributions
(Figure 12), though it manages fewer VTubers than Nijisanji (Ta-
ble 2). In contrast, the top independent VTubers earned far less
than the top corporate VTubers (Figure 12). For example, the top
independent VTuber, Kamito, only earned one eighth of the total
income of the top VTuber, Kiryu Coco, and was not even among
the top 100 VTubers by income.
We visualize the income disparity between affiliated and inde-
pendent VTubers in the cumulative distribution function (CDF) of


---

Who reaps all the Superchats?
Conference’17, July 2017, Washington, DC, USA
0
10
20
30
40
2018
2020
2022
Date
Cumulative income (/mil $USD)
VTuber Affiliation
hololive
Independent
NIJISANJI
Other affiliations
(a) Cumulative Income of All VTubers by Affiliation
0.00
0.25
0.50
0.75
1.00
0
10−1
100
101
102
103
104
105
106
107
Total Received Payment (pseudo−log Scale)
Cumulative Probability
VTuber Affiliation
Large affiliation
Independent
Other Affiliation
(b) CDF of Income by Affiliation
Figure 11: Cumulative Income and CDF of Income by Affiliation. The largest agencies (Hololive and NIJISANJI), dominate
market share in terms of revenue.
0
0.5
1
1.5
2
Kiryu Coco
Kuzuha
Usada Pekora
Fuwa Minato
Houshou Marine
Kanae
Yukihana Lamy
Mori Calliope
Amane Kanata
Vox Akuma
Inugami Korone
Kagami Hayato
Tsunomaki Watame
Minato Aqua
Shirogane Noel
Shiranui Flare
Sakura Miko
Momosuzu Nene
Sakamata Chloe
Kson
Oozora Subaru
Natsuiro Matsuri
Gawr Gura
Yuki Chihiro
Hakui Koyori
VTuber
Income (/mil $USD)
VTuber Affiliation
hololive
NIJISANJI
Other Affiliation
(a) Top VTubers by Income
0
0.5
1
1.5
2
Kamito
Shigure Ui
Ponpoko
Ayamy
Kayamori Emma
Kaga Oren
Kirschtorte
ZonBko
Ito Life
Magrona
Tenjin Kotone
Maisaki Berry
Kumonoue Yumemi
Tukky
Ushio Ebi
Ririsya
Iida Pochi
MYA
Yomeguri Hana
Uten Hiyori
Nekosaki Anji
Tadano Rei
Amai Hiyo
Wazaki Ako
Kamishiro Natsume
VTuber
Income (/mil $USD)
VTuber Affiliation
Independent
(b) Top Independent Vtubers by Income
0
10
20
30
40
NIJISANJI
hololive
774 inc.
VSPO!
NoriPro
.live
VShojo
Neo−Porte
Re:AcT
Propro Production
Affiliation
Income (/mil $USD)
(c) Total Income of VTuber agencies
Figure 12: Incomes of Top VTubers and Top independent VTubers. The market is disproportionately controlled by the largest
agencies.
VTuber incomes in Figure 11a. Across the whole VTuber spectrum,
independent VTubers earned less than affiliated VTubers, and a
higher percentage of independent VTubers hadn’t received any
Superchat payment in their active period at all.
6.2
The VTuber market is dominated by two
VTuber agencies
Fig 11a shows the growth of incomes by affiliations. Even among
the VTuber agencies, the inequality is substantial. Nijisanji Project
was the first major VTuber agency to reap significant profits from
VTubing since around 2019. Hololive, and most small agencies soon
followed suit and began making large margins of profit in 2020.
Since then, the overall growth has remained strong, catalyzed by the
COVID-19 Pandemic [17, 104, 110]. Notably, Nijisanji and Hololive,
respectively, earn more than all other agencies combined in terms
of Superchats, suggesting the corporate monopoly of the VTuber
market.
In Figure 12c, Hololive and Nijisanji have far outperformed the
other agencies with more than 10 times the profits of the next
largest agency. Even among affiliated VTubers, the VTuber agencies
also differ widely in nature. Some are large corporate agencies
specializing exclusively in managing VTubers like Hololive and
Nijisanji with strict talent selection pipelines, professional content
creation, and marketing strategies [63, 110], while some are formed
by a few independent VTubers loosely joining together to co-hire
personnel or co-livestream.
6.3
Agencies took the lead in international
expansion
Longitudinally, the income composition of currencies reflects the
increasing International reception of VTubers. In Figure 13, the
international expansion began in 2019 and has grown tremendously
during the COVID-19 Lockdown [58, 110]. Since then, while the
primary profits of the VTuber industry are still from Japan, about
30% of the profits were generated in other currencies. If these data
were broken down by affiliations, we can observe in Figure 14 that
Hololive and Nijisanji ranked as the top two in almost all currencies,
suggesting their leading positions in the international expansion.
The growth of VTubers was primarily in East Asia, from Japan,
Taiwan, Hong Kong, and South Korea, where Japanese ACG culture
commands a large influence. North American countries (US and
Canada) are the second largest regional income sources for VTubers,
followed by European countries. Language similarity and cultural
affinity play an important role in international expansion.


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
0.00
0.25
0.50
0.75
1.00
2019
2020
2021
2022
2023
Date
Proportion of All Income
Currency
JPY
KRW
NT$
Other
AUD
CAD
EUR
GBP
HKD
SGD
USD
(a) Temporal Distribution of Payments
0.00
0.25
0.50
0.75
1.00
Kiryu Coco
Kuzuha
Usada Pekora
Fuwa Minato
Houshou Marine
VTuber
Proportion
Currency
AUD
CAD
EUR
GBP
HKD
JPY
KRW
NT$
Other
SGD
USD
(b) Currency Distribution of Top VTuber’s
Figure 13: Distribution of Currencies. VTubers’ incomes consist of diverse international currencies.
JPY
USD
NT
HKD
CAD
KRW
AUD
EUR
GBP
SGD
Other
10
1
10
2
10
3
10
4
10
5
10
6
10
7
USD$ (Log scale)
Affiliations
Nijisanji
Hololive
Other agencies
Independent
Figure 14: The USD equivalent values of different currencies by affiliation types. The results show that Hololive and Nijisanji
consistently ranked as the top two across all currencies.
0.00%
5.00%
10.00%
15.00%
20.00%
Member ratio
Superchat sender ratio
Loyal viewer ratio
Affiliation
Independent
Large Affiliation
Other Affiliation
Figure 15: Ratio of different viewer category by affiliation
types. Large agency VTubers had higher percentages of mem-
bers and Superchat senders but lower percentages of loyal
viewers compared to independent and other agency VTubers.
Independent VTubers had higher percentages of loyal view-
ers but lower percentages of members and Superchat senders.
6.4
VTubers from the same agency tend to
attract similar loyal viewers
Figure 15 shows the ratio of committed viewers by different af-
filiation types. We conducted Kruskal-Wallis H-tests to compare
the differences within and across affiliation types. VTubers from
large agencies attracted a higher percentage of members and Su-
perchat senders than loyal viewers (𝐻= 256.99, 𝑝= 1.56𝑒−56).
In contrast, independent VTubers attract a higher percentage of
loyal viewers than members and Superchat senders (𝐻= 268.54,
𝑝= 4.86𝑒−59). VTubers from other agencies also have a higher ratio
of loyal viewers than members and Superchat senders (𝐻= 47.54,
𝑝= 4.74𝑒−11), though the difference is less pronounced. For each
ratio, large agency VTubers had a lower percentage of loyal view-
ers than independent and other agency VTubers (𝐻= 147.61,
𝑝= 8.80𝑒−33), but had a higher ratio of members (𝐻= 184.59,
𝑝= 8.22𝑒−41) and Superchat senders (𝐻= 119.97, 𝑝= 8.85𝑒−27)
than other VTubers.
Loyal viewers form the backbone of a fanbase, as they engage
with VTubers more frequently and for a long time. The network
shown in Figure 16 illustrates the connections between VTubers
through shared loyal users. This implies that loyal viewers of an
affiliated VTuber are also more likely to be loyal to other VTubers
from the same agencies. Nijisanji and Hololive also have multi-
ple VTuber clusters, which are grouped by their local branches in
Japanese, English, and Indonesian, or by gender of the VTubers.
Small agencies and independent VTubers tend to be less connected
in the graph, suggesting that loyal viewers to these VTubers are
more likely to be only loyal to them alone. Smaller VTubers were
successful in building a fanbase of their own, yet agencies are keen
on curating a fanbase for their agency brands rather than individual
VTubers.


---

Who reaps all the Superchats?
Conference’17, July 2017, Washington, DC, USA
Figure 16: VTuber network constructed through shared loyal viewers. Each node represents a VTuber and node size is propor-
tional to node degrees. Nodes connected through more edges are closer in distance. VTuber agencies are represented by colors.
The network indicates that VTubers affiliated with the same agency tend to share a significant number of loyal viewers.
7
RQ4: WHAT FACTORS AFFECT THE
SURVIVAL OF VTUBERS?
In this section, we examine the career lifespan of individual VTubers
to answer RQ4.
7.1
Most VTubers fail within three years
Figure 17 illustrates the distribution of VTuber lifespan, or the time
difference between the first and the last streaming session in months.
The median lifespan of all VTubers is 24 months. Further breaking
down by affiliations indicates that the median active period is 44
months for large agencies (Hololive & Nijisanji), 21 months for
other agencies, and 28 months for independent VTubers. Pairwise
Wilcoxon signed-rank test with False Discovery Rate correction
[5] shows that the differences are significant between each pair of
affiliation type (Large vs. Other: 𝑝= 1.3𝑒−28; Large vs. Independent:
𝑝= 2.07𝑒−15; Independent vs. Other: 𝑝= 2.03𝑒−7).
While many VTubers will probably remain active after our cutoff
time of July 2023, a high percentage of them have already stopped
streaming long before the cutoff date. We find that 1,057 (over 50%)
have stopped streaming completely within 3 years of their first
stream. Of those who fail, the median lifespan is about 19 months.
Motivated by this observation, we continue to investigate what are
the factors associated with VTubers’ failure.
7.2
VTubers’ failure is associated with
affiliation status and channel performance
Table 4 summarizes the results of the Cox model regression fitted
to VTuber survival data. We find that the role of affiliation, income,
0
10
20
30
40
50
Active periods (month)
Independent
Large affiliation
Other affiliation
Affiliation
Independent
Large affiliation
Other affiliation
Figure 17: Distribution of VTubers’ lifespan by affiliations.
VTubers from the largest agencies tend to have the longest
lifespan, followed by independent VTubers, and then those
from smaller agencies.
membership, and unique viewership are all statistically significant
in predicting the hazard ratio for VTubers, either as main effects
or as interaction terms with time. However, gender and streaming
duration in the past month were not statistically significant predic-
tors of survival hazard. We find that the mean concordance index
across all folds is 0.680 (𝜎= 0.023). This is higher than 0.5 which
is the expected concordance index for a random guessing baseline.
This suggests that our features have predictive power over VTuber
failure rate.
With respect to user engagement features related to a VTuber’s
streams, for each unit increase in income, and each unit increase
in unique viewers, a VTuber’s risk of failure decreases slightly.
Interestingly, membership count appears to significantly increase
the initial base risk of a VTuber’s failure. However, membership


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
Feature
𝛽
exp(𝛽)
p-value
Significance
Affiliation (Independent)
0.259
1.296
0.302
Affiliation (Non-large/other)
0.683
1.980
0.003
**
VTuber Gender (male)
0.026
1.026
0.741
VTuber Gender (other)
0.139
1.149
0.277
Total Stream Duration
−0.026
0.974
0.207
Total Superchat Income
−0.136
0.872
0.111
Total Number of Members
0.753
2.124
1.6𝑥10−8
***
Total Viewers
−0.017
0.983
0.001
**
Affiliation (Independent) * time
−0.019
0.981
0.027
*
Affiliation (Non-large/other) * time
−0.019
0.981
0.015
*
Total Superchat Income * time
−0.007
0.993
0.010
*
Total Number of Members * time
−0.024
0.976
0.001
***
Total Viewers * time
0.0001
1.000
0.530
Table 4: Cox Regression Model Summary.
and Superchat income have notable interactions with time which
both show a decreased risk of failure that is magnified the latter
into the VTuber’s lifespan. This suggests that long-term VTuber
survival is dependent on securing consistent Superchat income and
viewership.
Affiliation plays a significant role in the survival of VTubers. The
risk of failure for independent and other non-large affiliations is at
almost 1.3 times and 2 times the baseline risk than those from large
affiliations. Notably, the interaction between VTuber affiliation and
time is statistically significant for all levels. For both independent
and non-large affiliated VTubers, the risk of failure decreases over
time, despite the high initial risk.
8
DISCUSSIONS
Here we present an in-depth discussion of our findings.
8.1
Corporate monopoly of the VTuber market
Our findings reveal the starting economic inequality between VTu-
bers, similar to streamers in Twitch [46] and Chinese platforms
[61], as the concentration of wealth emerges naturally in economic
activities [36, 74]. Yet compared to prior studies on the inequality
of livestreaming [46, 61], we further show that, while wealth is con-
centrated in a few top VTubers, most, if not all, of these top VTubers
are also controlled by two agencies, Nijisanji and Hololive. These
two agencies reap the most views and Superchats on YouTube, more
than the total of all other VTubers combined in our dataset. The idol
manufacturing process by the largest VTuber agencies was success-
ful. Large agencies can afford more aesthetically pleasing avatars,
better motion and face capture technologies, marketing strategies,
content creation plans, and professional training [63, 110], making
them easily stand out from VTubers.
Many MCNs optimize content creation through influence ma-
trices [60], strategies also adopted by many VTuber agencies. Our
analysis of VTuber networks reveals that many VTubers from the
same agencies share a similar subset of loyal viewers. Such out-
comes are more likely to emerge from the coordinated operations
directed by agencies such as collaboration livestreaming rather
than only driven by platform algorithms. This top-down manu-
facturing process also allows agencies to design niche content to
target certain audience groups. For example, Hololive has regional
branches catering specifically to English, Japanese, and Indonesian
audiences, and it also has a special branch, HOLOSTARS featuring
male VTubers.
Yet the monopoly of a few large agencies can also lead to some
problems. Research has found that profit-driven live-streaming
guilds in China [109] required their streamers to prioritize content
that was deemed most profitable, limiting the content diversity and
the creativity freedom of streamers. The profit-driven nature of
agencies can potentially cause streamers to treat fans as assets and
minimize the reciprocal relationship [100, 109]. They might also
push independent VTubers and VTubers from small agencies out
of the market.
8.2
Precarity of the VTuber profession
For most people, being a VTuber is far from being profitable and
stable. In the platform ‘gig economy‘ [72, 97], most streamers face
economic instabilities and can be subject to various challenges
posed by the platform, including demonetization and algorithmic
biases [51]. Agencies alter the power dynamics between streamers
and the platform, making streamers easier to prosper and more
resistant to the exploitation of the platform.
However, affiliation with an agency does not necessarily benefit
the VTuber career. Our finding suggests that independent VTubers
were active for a slightly longer period than VTubers affiliated with
small agencies other than Hololive and Nijisanji. Agencies are set
up primarily for profit, yet a potion of independent VTubers are
also motivated by intrinsic interests [100]. Intrinsic interests can
motivate some Independent VTubers to persist longer even if the
monetary prospect is dim. Yet the pressure to monetize in small
agencies might be more likely to cause burn-out and the subsequent
dropout for some affiliated VTubers.
While VTuber agencies shield VTubers from platform risks, they
could also exploit VTubers. As the agencies own the anime avatar,
the YouTube channel and the content, voice actors can be reduced
to replaceable assets of the company. Contractual VTubers may
even be subject to unfair labor practices, including delayed pay-
ment, harassment, and toxic work environments [44]. Nijisanji also
once publicly announced the graduation of a VTuber without even


---

Who reaps all the Superchats?
Conference’17, July 2017, Washington, DC, USA
informing her [43]. Secondly, the corporate agency usually takes
a large share of the income to cover other costs, so what is left to
VTubers could be a small percentage of what is actually earned
[60, 62].
8.3
Cultivating parasocial relationship from
viewers
In our results, viewers who were committed either financially (mem-
bers) or behaviorally (loyal viewers) were more likely to be Super-
chat senders. For small VTubers, their streaming sessions tend to
have less audience, making it possible for the VTuber to interact
more frequently with viewers with high self-disclosure [92] and
for the viewers to perceive the VTuber as more authentic. It is far
easier to cultivate the ‘perceived interconnectedness‘ [2] between
viewers and the streamer.
Corporate streamers often minimized the creation of recipro-
cal relationships but were more oriented towards maximizing the
virtual gifts [109]. The business model of large agencies makes it
harder to cultivate such relationships, even though their affiliated
VTubers were more successful in attracting more members and
Superchat senders. Each livestreamming session was planned and
monitored by agency staff and VTubers were trained to behave in
ways that could attract more potential monetization. Compared
to independent VTubers, corporate VTubers tend to have less self-
expression and are more distant to the audience [92].
For agencies, the strategy is to turn loyal viewers into loyal
customers of their agency brand through coordinated marketing.
Many agencies marketed their VTubers as classmates or families
and coordinated many collaborative streaming events where several
VTubers interact closely. So viewers are more likely to extend their
attachment from one VTubers to other VTubers from the same
agency.
8.4
Theoretical implications
Our study advances the general understanding of the creator econ-
omy, especially the monetization outcome of corporate players in
institutionalizing content production. In the research on the plat-
form economy, the major players are generally conceived as the
platform, creators, users, and advertisers [7, 10, 80], but the crit-
ical role of MCNs has not been sufficiently recognized. In many
analyses, the assumption that individual channels or streamers are
isolated members or isolated units of analysis is still widely held
[46, 83, 92]. Yet our analyses show that, agencies have dominated,
if not monopolized, the VTuber market, exerting an unnegligible
impact on the monetization landscape. Our study reveals the depth
and breadth of corporate power from a quantitative perspective,
challenging the ‘gig economy’ assumption of the content creator
economy. Future theoretical and empirical research should take
MCNs into consideration. We call for more research to investigate
how corporate forces impact and reshape the creator economy.
8.5
Design implications
8.5.1
Better governance of agencies. Large monopoly agencies,
with their strong capability to attract viewers and to monetize,
might also be able to challenge or strengthen the power of the plat-
form [108] or gate-keep the VTuber market [60]. From our analysis,
agencies are extremely successful at attracting high ratios of paid
viewers and large spikes of payment events. Yet it is not uncommon
for agencies or MCNs to gain unfair advantage through gaming the
algorithm, faking Superchat transactions, and encouraging impulse
buying [62]. It is important to consider these agencies in platform
governance to create a fair environment for content creators.
8.5.2
Supporting independent VTubers. While the majority of small
VTubers do not contribute to most views and revenues, it is still
important to provide support for them on the platform. They pro-
duce most content on the platform, assume the risk of innovation,
and put competitive pressure on the top VTubers and agencies
[83]. Support efforts can include more accessible data analytics for
tracking channel performance (like our analysis here), developing
low-cost technologies for avatars and motion capture, and more
equitable platform algorithms or profit-sharing programs to give
more economic opportunities to independent VTubers.
8.5.3
Enhancing content diversity. Due to the limitation of the
anime avatar, the activities a VTuber can perform are much more
limited than a real-person streamer. Our analysis showed that VTu-
bers overwhelmingly rely on gaming, chatting, and singing, a stan-
dard production pipeline first codified by Nijisanji [92]. It is neces-
sary for VTubers to explore more diverse content creation strategies
that differ and improve from the common VTuber streaming. For
example, VTuber kson ONAIR alternates between a virtual avatar
and a real person in streaming. Such explorations in new content
can cultivate a more diverse audience outside the Otaku community,
and promote a more sustainable content creation.
8.5.4
Enhancing engagement with multilingual technologies. The
international audience has been an important source of VTubers’
monetization. We tried to access some top VTuber pages by setting
our location to different regions and languages, only to find that
little was done on the side of VTubers or the platform to enhance
the accessibility of these international audiences other than the
localized livechat interface. Technologies like streaming speech
recognition and machine translation are promising in partially
bridging the language gap during livestreaming. The incorporation
of multilingual language technologies can potentially attract more
international viewers for VTubers.
9
LIMITATIONS
Our study is still limited in several ways. First, our results can still
be biased, as samples cannot represent a complete history of VTu-
bers and their viewers on YouTube. Some VTubers chose not to
make public the past streamed sessions due to privacy, copyright
concerns, and contractual requirements. So we had to exclude them
in our analysis. There are also other popular VTuber platforms, like
Twitch, Bilibili (Chinese VTubers), and NicoNico (Japanese VTu-
bers). Secondly, we only included viewers who left livechats, which
can be just a small fraction of all viewers. Thirdly, our estimation of
VTuber incomes is only an estimation based on Superchats, which
might only account for a part of the actual incomes of VTubers.
The same USD amount also might not represent the same buying
power in different regions. Finally, like other data mining studies,
our statistical analysis only reveals correlation rather than causal


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
relationships. Future research is needed to address these limitations
to better understand VTubers or streamers in general.
10
CONCLUSIONS
In this study, we analyzed over a million hours of publicly available
streaming records of over 1900 VTubers on YouTube to understand
their monetization landscape. Our analysis reveals stark inequality
and instability of incomes for the majority of VTubers behind the
booming industry, as only a few top VTubers and two VTuber
agencies are dominating the whole market. We also characterize
the viewers and the role of agencies. Furthermore, survival analysis
suggests that VTubers’ failure can be predictable based on economic
factors and affiliation status. For the HCI community and relevant
stakeholders, these results shed light on the overall functioning
of the VTuber ecosystem and provide implications informing the
design of sustainable support systems for VTubers. Our research
also calls for more research on the impact of corporate forces on
the creator economy.
ACKNOWLEDGMENTS
We thank the ACs and the anonymous reviewers for their detailed
comments, which helped improve this article considerably. We also
thank UBC Advanced Research Computing and Digital Alliance
of Canada for their computing support. BD was supported by the
Canada Graduate Scholarship (Master’s Program). This research
was funded by the Hampton New Faculty Grant, the CFI-JELF Fund,
and the NSERC Discovery Grant awarded to the last author JZ.
REFERENCES
[1] [n. d.].
Most Super Chatted Channels in Worldwide - All-time — play-
board.co.
https://playboard.co/en/youtube-ranking/most-superchatted-all-
channels-in-worldwide-total. [Accessed 13-09-2024].
[2] Crystal Abidin. 2015. Communicative intimacies: Influencers and percieved
interconnectedness. (2015).
[3] Raphaela Andres, Michelangelo Rossi, and Mark J Tremblay. 2023. YouTube
“Adpocalypse”: The YouTubers’ journey from ad-based to patron-based revenues.
ZEW-Centre for European Economic Research Discussion Paper 59 (2023).
[4] Ava Bartolome and Shuo Niu. 2023. A Literature Review of Video-Sharing
Platform Research in HCI. In Proceedings of the 2023 CHI Conference on Human
Factors in Computing Systems. 1–20.
[5] Yoav Benjamini and Yosef Hochberg. 1995. Controlling the false discovery rate:
a practical and powerful approach to multiple testing. Journal of the Royal
statistical society: series B (Methodological) 57, 1 (1995), 289–300.
[6] Kate Berbano. 2022. Meet Japan’s Riku Tazumi, the 26-year-old billionaire
founder of Anycolor — scmp.com. https://www.scmp.com/magazines/style/
celebrity/article/3200160/meet-riku-tazumi-26-year-old-japanese-billionaire-
founder-anycolor-his-youtuber-talent-agency-and. [Accessed 10-09-2024].
[7] Hemant K Bhargava. 2022. The creator economy: Managing ecosystem supply,
revenue sharing, and platform design. Management Science 68, 7 (2022), 5233–
5251.
[8] Bilal. 2024.
VTuber Statistics 2024: Insights From Our VTuber Sur-
vey. https://dereproject.com/vtuber/vtuber-statistics-2024-insights-from-our-
vtuber-survey/#h-vtuber-statistics-challenges-amp-coping-mechanisms Ac-
cessed: 2024-11-13.
[9] Daniel Black. 2012. The virtual idol: Producing and consuming digital femininity.
Idols and celebrity in Japanese media culture (2012), 209–28.
[10] Alexander Bleier, Beth L Fossen, and Michal Shapira. 2024. On the role of social
media platforms in the creator economy. International Journal of Research in
Marketing 41, 3 (2024), 411–426.
[11] Ross Bonifacio and Donghee Yvette Wohn. 2020. Digital patronage platforms. In
Companion Publication of the 2020 Conference on Computer Supported Cooperative
Work and Social Computing. 221–226.
[12] Liudmila Bredikhina and Agnès Giard. 2022. Becoming a virtual cutie: digital
cross-dressing in Japan. Convergence 28, 6 (2022), 1643–1661.
[13] Noel Brett. 2022. Why Do We Only Get Anime Girl Avatars? Collective White
Heteronormative Avatar Design in Live Streams. Television & New Media 23, 5
(2022), 451–461.
[14] James Byron. 2023. New collaboration in a virtual world: studying Vtubers through
identity, gender and fan engagement. Ph. D. Dissertation. Macquarie University.
[15] Robyn Caplan and Tarleton Gillespie. 2020. Tiered governance and demonetiza-
tion: The shifting terms of labor and compensation in the platform economy.
Social Media+ Society 6, 2 (2020), 2056305120936636.
[16] Chih-Ping Chen. 2016. Forming digital self and parasocial relationships on
YouTube. Journal of Consumer culture 16, 1 (2016), 232–254.
[17] James Chen. [n. d.].
The Vtuber takeover of 2020 — polygon.com.
https://www.polygon.com/2020/11/30/21726800/hololive-vtuber-projekt-
melody-kizuna-ai-calliope-mori-vshojo-youtube-earnings.
[Accessed
05-09-2024].
[18] Manting Chen and Rocco Juanlei Hu. 2024. The host in the shell: Constructing
female identity in the embodied animated media. New Media & Society (2024),
14614448231226213.
[19] Qianniu Chen, Zhehan Gu, Li Lu, Xiangyu Xu, Zhongjie Ba, Feng Lin, Zhenguang
Liu, and Kui Ren. 2024. Conan’s Bow Tie: A Streaming Voice Conversion for Real-
Time VTuber Livestreaming. In Proceedings of the 29th International Conference
on Intelligent User Interfaces. 35–50.
[20] EunJeong Cheon and Shengyang Xu. 2024. Creative Precarity in Motion: Re-
vealing the Hidden Labor Behind Animating Virtual Characters. In Proceedings
of the 2024 ACM Designing Interactive Systems Conference. 3471–3484.
[21] P Chinchilla and Jihyun Kim. 2024. VTuber for Streamers: Exploring the Role
of Social Presence in the Visual Representation of Streamers. Communication
Studies (2024), 1–17.
[22] Abhinav Choudhry, Jinda Han, Xiaoyu Xu, and Yun Huang. 2022. " I Felt a Little
Crazy Following a’Doll’" Investigating Real Influence of Virtual Influencers
on Their Followers. Proceedings of the ACM on human-computer interaction 6,
GROUP (2022), 1–28.
[23] COVER. 2023.
Materials for Growth Opportunities and Strategies.
https://cover-corp.com/ir/news/230327_5253_COVER_Materials_for_
Growth_Opportunities_and_Strategies.pdf#page=1.00 [PDF document].
[24] David R Cox. 1972. Regression models and life-tables. Journal of the Royal
Statistical Society: Series B (Methodological) 34, 2 (1972), 187–202.
[25] David Roxbee Cox. 2018. Analysis of survival data. Chapman and Hall/CRC.
[26] Stuart Cunningham, David Craig, and Jon Silver. 2016. YouTube, multichannel
networks and the accelerated evolution of the new screen ecology. Convergence
22, 4 (2016), 376–391.
[27] Greig De Peuter. 2011. Creative economy and labor precarity: A contested
convergence. Journal of communication inquiry 35, 4 (2011), 417–425.
[28] Jie Deng, Felix Cuadrado, Gareth Tyson, and Steve Uhlig. 2015. Behind the
game: Exploring the twitch streaming platform. In 2015 International Workshop
on Network and Systems Support for Games (NetGames). IEEE, 1–6.
[29] Philip M Dixon, Jacob Weiner, Thomas Mitchell-Olds, and Robert Woodley. 1987.
Bootstrapping the Gini coefficient of inequality. Ecology 68, 5 (1987), 1548–1551.
[30] Nicola Döring and M Rohangis Mohseni. 2019. Male dominance and sexism on
YouTube: results of three content analyses. Feminist Media Studies 19, 4 (2019),
512–524.
[31] Ian Drosos and Philip J Guo. 2022. The design space of livestreaming equipment
setups: Tradeoffs, challenges, and opportunities. In Proceedings of the 2022 ACM
Designing Interactive Systems Conference. 835–848.
[32] Lana El Sanyoura and Ashton Anderson. 2022. Quantifying the creator econ-
omy: A large-scale analysis of patreon. In Proceedings of the International AAAI
Conference on Web and Social Media, Vol. 16. 829–840.
[33] David S Evans. 2009. The online advertising industry: Economics, evolution,
and privacy. Journal of economic perspectives 23, 3 (2009), 37–60.
[34] Júlio César Valente Ferreira, Rafael Dirques David Regis, Paula Gonçalves,
Gabriela Rodrigues Diniz, and Vitor Pedro da Silva Castelo Tavares. 2022. VTuber
concept review: The new frontier of virtual entertainment. In Proceedings of the
24th Symposium on Virtual and Augmented Reality. 83–96.
[35] Guo Freeman and Donghee Yvette Wohn. 2020. Streaming your identity: Navigat-
ing the presentation of gender and sexuality through live streaming. Computer
Supported Cooperative Work (CSCW) 29, 6 (2020), 795–825.
[36] Xavier Gabaix. 2009. Power laws in economics and finance. Annu. Rev. Econ. 1,
1 (2009), 255–294.
[37] Patricia M Grambsch and Terry M Therneau. 1994. Proportional hazards tests
and diagnostics based on weighted residuals. Biometrika 81, 3 (1994), 515–526.
[38] Lee Hair. 2021. Friends, not ATMs: Parasocial relational work and the con-
struction of intimacy by artists on Patreon. Sociological Spectrum 41, 2 (2021),
196–212.
[39] Lee Hair, Ross Bonifacio, and Donghee Yvette Wohn. 2022. Multi-platform
practices among digital patronage creators. Convergence 28, 5 (2022), 1438–
1456.
[40] William Hamilton, Justine Zhang, Cristian Danescu-Niculescu-Mizil, Dan Juraf-
sky, and Jure Leskovec. 2017. Loyalty in online communities. In Proceedings of
the International AAAI conference on web and social media, Vol. 11. 540–543.
[41] Kotaro Hara, Abigail Adams, Kristy Milland, Saiph Savage, Chris Callison-Burch,
and Jeffrey P Bigham. 2018. A data-driven analysis of workers’ earnings on


---

Who reaps all the Superchats?
Conference’17, July 2017, Washington, DC, USA
Amazon Mechanical Turk. In Proceedings of the 2018 CHI conference on human
factors in computing systems. 1–14.
[42] Frank E Harrell, Robert M Califf, David B Pryor, Kerry L Lee, and Robert A Rosati.
1982. Evaluating the yield of medical tests. Jama 247, 18 (1982), 2543–2546.
[43] Kazuma Hashimoto. [n. d.]. VTuber Selen Tatsuki’s Nijisanji termination creates
uproar and backlash — polygon.com. https://www.polygon.com/24065311/
vtuber-selen-tatsuki-nijisanji-termination-dokibird. [Accessed 05-09-2024].
[44] Kazuma Hashimoto. 2023.
VTubers have reached their inevitable con-
clusion.
https://www.polygon.com/23919506/vtuber-hololive-gawr-gura-
nijisanji-agency-model
[45] Mingyi Hou. 2019. Social media celebrity and the institutionalization of YouTube.
Convergence 25, 3 (2019), 534–553.
[46] Antoine Houssard, Federico Pilati, Maria Tartari, Pier Luigi Sacco, and Riccardo
Gallotti. 2023. Monetization in online streaming platforms: an exploration of
inequalities in Twitch. tv. Scientific Reports 13, 1 (2023), 1103.
[47] Yiqing Hua, Manoel Horta Ribeiro, Thomas Ristenpart, Robert West, and Mor
Naaman. 2022. Characterizing alternative monetization strategies on YouTube.
Proceedings of the ACM on Human-Computer Interaction 6, CSCW2 (2022), 1–30.
[48] Jonathon Hutchinson. 2023. Digital intermediation: Unseen infrastructure for
cultural production. Routledge.
[49] Shagun Jhaver, Darren Scott Appling, Eric Gilbert, and Amy Bruckman. 2019.
" Did you suspect the post would be removed?" Understanding user reactions
to content removals on Reddit. Proceedings of the ACM on human-computer
interaction 3, CSCW (2019), 1–33.
[50] Katsuhiro Kanamori and Kazuhisa Yanaka. 2023. Practical Course for Creating
Stereoscopic VTuber. In SIGGRAPH Asia 2023 Educator’s Forum. 1–6.
[51] Sara Kingsley, Proteeti Sinha, Clara Wang, Motahhare Eslami, and Jason I Hong.
2022. " Give Everybody [..] a Little Bit More Equity": Content Creator Perspec-
tives and Responses to the Algorithmic Demonetization of Content Associated
with Disadvantaged Groups. Proceedings of the ACM on Human-Computer
Interaction 6, CSCW2 (2022), 1–37.
[52] David G Kleinbaum and Mitchel Klein. 1996. Survival analysis a self-learning
text. Springer.
[53] Susanne Kopf. 2020. “Rewarding good creators”: corporate social media dis-
course on monetization schemes for content creators. Social Media+ Society 6, 4
(2020), 2056305120969877.
[54] Susanne Kopf. 2024. Corporate censorship online: Vagueness and discursive
imprecision in YouTube’s advertiser-friendly content guidelines. New Media &
Society 26, 4 (2024), 1756–1774.
[55] Lauren I Labrecque. 2014. Fostering consumer–brand relationships in social
media environments: The role of parasocial interaction. Journal of interactive
marketing 28, 2 (2014), 134–148.
[56] Sebin Lee, Daye Kim, and Jungjin Lee. 2023. The Effects of Viewing Formats and
Song Genres on Audience Experiences in Virtual Avatar Concerts. In Proceedings
of the 31st ACM International Conference on Multimedia. 6978–6988.
[57] Sebin Lee and Jungjin Lee. 2023. “Ju. T’aime” My Idol, My Streamer: A Case
Study on Fandom Experience as Audiences and Creators of VTuber Concert.
IEEE Access 11 (2023), 31125–31142.
[58] Alex P Leith and Erin Gheen. 2022. Twitch in the time of quarantine: The role
of engagement in needs fulfillment. Psychology of Popular Media 11, 3 (2022),
275.
[59] Yi Li and Yunjun Guo. 2021. Virtual gifting and danmaku: What motivates
people to interact in game live streaming? Telematics and Informatics 62 (2021),
101624.
[60] Fan Liang and Li Ji. 2024. Manufacturing influencers: the gatekeeping roles of
MCNs (Multi-channel networks) in cultural production. Information, Communi-
cation & Society (2024), 1–17.
[61] Li Liao, Chen Lin, Lu Liu, Xincheng Wang, and Yang You. 2023. Cyber Income
Inequality. Available at SSRN 4381802 (2023).
[62] Tingting Liu, Chris KK Tan, Xiaobing Yang, and Miao Li. 2023. Zhibo gonghui:
China’s ‘live-streaming guilds’ of manipulation experts. Information, Communi-
cation & Society 26, 6 (2023), 1210–1225.
[63] Bredikhina Liudmila. 2020. Designing identity in VTuber era. Proceedings of
Laval Virtual VRIC ConVRgence (2020), 182–184.
[64] Ramon Lobato. 2016. The cultural logic of digital intermediaries: YouTube
multichannel networks. Convergence 22, 4 (2016), 348–360.
[65] Zhicong Lu, Chenxinran Shen, Jiannan Li, Hong Shen, and Daniel Wigdor. 2021.
More kawaii than a real-person live streamer: understanding how the otaku
community engages with and perceives virtual YouTubers. In Proceedings of the
2021 CHI Conference on Human Factors in Computing Systems. 1–14.
[66] Zhicong Lu, Haijun Xia, Seongkook Heo, and Daniel Wigdor. 2018. You watch,
you give, and you engage: a study of live streaming practices in China. In
Proceedings of the 2018 CHI conference on human factors in computing systems.
1–13.
[67] Bryan Lufkin. 2018.
The virtual vloggers taking over YouTube —
bbc.com. https://www.bbc.com/worklife/article/20181002-the-virtual-vloggers-
taking-over-youtube. [Accessed 10-09-2024].
[68] Renkai Ma, Xinning Gui, and Yubo Kou. 2023. Multi-platform content creation:
the configuration of creator ecology through platform prioritization, content
synchronization, and audience management. In Proceedings of the 2023 CHI
Conference on Human Factors in Computing Systems. 1–19.
[69] Renkai Ma and Yubo Kou. 2021.
" How advertiser-friendly is my video?":
YouTuber’s Socioeconomic Interactions with Algorithmic Content Moderation.
Proceedings of the ACM on Human-Computer Interaction 5, CSCW2 (2021), 1–25.
[70] David W Marx. 2012. The Jimusho system: Understanding the production logic
of the Japanese entertainment industry. In Idols and celebrity in Japanese media
culture. Springer, 35–55.
[71] Hisashi Masuda, Spring H Han, and Jungwoo Lee. 2022. Impacts of influencer
attributes on purchase intentions in social media influencer marketing: Mediat-
ing roles of characterizations. Technological Forecasting and Social Change 174
(2022), 121246.
[72] George Morgan and Pariece Nelligan. 2018. The creativity hoax: Precarious work
in the gig economy. Anthem Press.
[73] Yi Mou, Jianfeng Lan, and Yingjia Huang. 2023. Good night versus goodbye?
Comparing the mourning remarks of virtual and human uploaders through a
data-mining approach. New Media & Society (2023), 14614448231212822.
[74] Mark EJ Newman. 2005. Power laws, Pareto distributions and Zipf’s law. Con-
temporary physics 46, 5 (2005), 323–351.
[75] Hololive News. 2022. Gawr Gura Has Achieved 4 Million YouTube Subscribers.
https://hololive.hololivepro.com/en/news/20220616-02-2/
[76] David Van Nguyen, Edward F Melcer, and Deanne Adams. 2024. Exploring
Gender and Racial/Ethnic Bias Against Video Game Streamers: Comparing
Perceived Gameplay Skill and Viewer Engagement. In Proceedings of the 19th
International Conference on the Foundations of Digital Games. 1–11.
[77] Ky Trung Nguyen, Linh Xuan Vu, and Thi Thanh Quynh Nguyen. 2023. Turning
Human into 2D Virtual Character Using Real-Time Motion Capture. In Interna-
tional Conference on Cooperative Design, Visualization and Engineering. Springer,
214–224.
[78] Anika Nissen, Colin Conrad, and Aaron Newman. 2023. Are you human?
Investigating the perceptions and evaluations of virtual versus human Insta-
gram influencers. In Proceedings of the 2023 CHI conference on human factors in
computing systems. 1–14.
[79] Dragos, M Obreja. 2023. Toward a multidimensional streaming: A thematic case
study of two Twitch channels. new media & society 25, 6 (2023), 1354–1373.
[80] Renana Peres, Martin Schreier, David A Schweidel, and Alina Sorescu. 2024.
The creator economy: An introduction and a call for scholarly research.
[81] Federico Pilati, Antoine Houssard, and Pier Luigi Sacco. 2024. Mirroring the
inequalities of mainstream music platforms: popularity, revenue, and moneti-
zation strategies on Bandcamp. International Journal of Cultural Policy (2024),
1–20.
[82] Tobias Regner. 2021. Crowdfunding a monthly income: an analysis of the
membership platform Patreon. Journal of Cultural Economics 45, 1 (2021), 133–
142.
[83] Bernhard Rieder, Erik Borra, Òscar Coromina, and Ariadna Matamoros-
Fernández. 2023. Making a living in the creator economy: A large-scale study
of linking on YouTube. Social Media+ Society 9, 2 (2023), 20563051231180628.
[84] Alan M Rubin and Mary M Step. 2000. Impact of motivation, attraction, and
parasocial interaction on talk radio listening. Journal of Broadcasting & Electronic
Media 44, 4 (2000), 635–654.
[85] Robin Schmieder. 2024. Waiting for a face reveal that never comes? How VTubers
challenge our understanding of influencer authenticity. Celebrity Studies 15, 2
(2024), 266–281.
[86] Max Sjöblom, Maria Törhönen, Juho Hamari, and Joseph Macey. 2019. The
ingredients of Twitch streaming: Affordances of game streams. Computers in
Human Behavior 92 (2019), 20–28.
[87] Jan-Philipp Stein, Priska Linda Breves, and Nora Anders. 2022. Parasocial
interactions with real and virtual influencers: The role of perceived similarity
and human-likeness. New Media & Society (2022), 14614448221102900.
[88] Debra Lynn Stephens, Ronald Paul Hill, and Karyn Bergman. 1996. Enhancing
the consumer-product relationship: Lessons from the QVC home shopping
channel. Journal of business research 37, 3 (1996), 193–200.
[89] Tommie Ann Sutton. 2021. Gendered rhetoric of video game streaming: Female
agency, harassment and cat girls. State University of New York at Albany.
[90] Wondwesen Tafesse and Mumin Dayan. 2023. Content creators’ participation in
the creator economy: Examining the effect of creators’ content sharing frequency
on user engagement behavior on digital platforms. Journal of Retailing and
Consumer Services 73 (2023), 103357.
[91] Otto Nauma Tambunan and Andy Bangkit Setiawan. 2023. Factors in the Growth
of Vtuber Livestreaming Entertainment Phenomenon in Japanese Society. Liter-
acy: International Scientific Journals of Social, Education, Humanities 2, 2 (2023),
78–85.
[92] Yee Heng Tan and Barbara R Greene. 2025. Can a 2D shark girl be an influencer?
uncovering prevailing archetypes in the virtual entertainer industry. Journal of
Business Research 186 (2025), 114951.


---

Conference’17, July 2017, Washington, DC, USA
Ruijing Zhao, Brian Diep, Jiaxin Pei, Dongwook Yoon, David Jurgens, and Jian Zhu
[93] Man To Tang, Victor Long Zhu, and Voicu Popescu. 2021. Alterecho: Loose
avatar-streamer coupling for expressive vtubing. In 2021 IEEE International
Symposium on Mixed and Augmented Reality (ISMAR). IEEE, 128–137.
[94] Christine Tomlinson. 2024. Community Grievances, personal responsibility, and
DIY protection: Frustrations and solution-seeking among marginalized Twitch
streamers. Convergence 30, 1 (2024), 358–374.
[95] Wei Tu, Chen Yan, Yiping Yan, Xu Ding, and Lifeng Sun. 2018. Who is earning?
Understanding and modeling the virtual gifts behavior of users in live streaming
economy. In 2018 IEEE conference on multimedia information processing and
retrieval (MIPR). IEEE, 118–123.
[96] Jirassaya Uttarapong, Jie Cai, and Donghee Yvette Wohn. 2021. Harassment
experiences of women and LGBTQ live streamers and how they handled neg-
ativity. In Proceedings of the 2021 ACM International Conference on Interactive
Media Experiences. 7–19.
[97] Steven Vallas and Juliet B Schor. 2020. What do platforms do? Understanding
the gig economy. Annual review of sociology 46, 1 (2020), 273–294.
[98] Pelayo Vallina, Ignacio Castro, and Gareth Tyson. 2023. Cashing in on Con-
tacts: Characterizing the OnlyFans Ecosystem. In Proceedings of the ACM Web
Conference 2023. 2645–2654.
[99] Qian Wan and Zhicong Lu. 2023. Investigating VTubing as a Reconstruction of
Streamer Self-Presentation: Identity, Performance, and Gender. arXiv preprint
arXiv:2307.11025 (2023).
[100] Dennis Wang, Yi-Chieh Lee, and Wai-Tat Fu. 2019. " I love the feeling of being
on stage, but I become greedy" Exploring the impact of monetary incentives
on live streamers’ social interactions and streaming content. Proceedings of the
ACM on Human-Computer Interaction 3, CSCW (2019), 1–24.
[101] Donghee Yvette Wohn and Guo Freeman. 2020. Live streaming, playing, and
money spending behaviors in eSports. Games and Culture 15, 1 (2020), 73–88.
[102] Li Xie-Carson, Thomas Magor, Pierre Benckendorff, and Karen Hughes. 2023.
All hype or the real deal? Investigating user engagement with virtual influencers
in tourism. Tourism Management 99 (2023), 104779.
[103] Si-han Xu. 2021. The research on applying artificial intelligence technology to
virtual youtuber. In 2021 IEEE International Conference on Robotics, Automation
and Artificial Intelligence (RAAI). IEEE, 10–14.
[104] Hiromu Yakura. 2021. No More Handshaking: How have COVID-19 pushed the
expansion of computer-mediated communication in Japanese idol culture?. In
Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems.
1–10.
[105] Eun Yu, Chanyong Jung, Hyungjin Kim, and Jaemin Jung. 2018. Impact of viewer
engagement on gift-giving in live video streaming. Telematics and Informatics
35, 5 (2018), 1450–1460.
[106] Jinming Zhan and Nan Zhang. 2023. Exploring the Impact of Virtual Anchor
Features and Live Content on Viewers’ Willingness to Pay for “Superchat” in Live
Entertainment Scenarios. Highlights in Business, Economics and Management 6
(2023), 189–205.
[107] Chi Zhang and Yiben Ma. 2023. Invented borders: The tension between grass-
roots patriotism and state-led patriotic campaigns in China. Journal of Contem-
porary China 32, 144 (2023), 897–913.
[108] Weiyu Zhang and Tong Tong. 2024. Contesting the intermediary power: How
Chinese MCNs interact with platforms, creators, and advertisers. Media, Culture
& Society (2024), 01634437241229306.
[109] Xiaoxing Zhang, Yu Xiang, and Lei Hao. 2019. Virtual gifting on China’s live
streaming platforms: hijacking the online gift economy. Chinese Journal of
Communication 12, 3 (2019), 340–355.
[110] Ziyu Zhao. 2022. The live commerce of VTuber. In Proceedings of the 2022 5th
International Conference on Humanities Education and Social Sciences (ICHESS
2022). 324–331.
[111] Qian Zhou, David Ledo, George Fitzmaurice, and Fraser Anderson. 2024. Time-
Tunnel: Integrating Spatial and Temporal Motion Editing for Character Anima-
tion in Virtual Reality. In Proceedings of the CHI Conference on Human Factors in
Computing Systems. 1–17.
[112] Zhenhui Zhu, Zhi Yang, and Yafei Dai. 2017. Understanding the gift-sending
interaction on live-streaming video websites. In Social Computing and Social
Media. Human Behavior: 9th International Conference, SCSM 2017, Held as Part
of HCI International 2017, Vancouver, BC, Canada, July 9-14, 2017, Proceedings,
Part I 9. Springer, 274–285.
