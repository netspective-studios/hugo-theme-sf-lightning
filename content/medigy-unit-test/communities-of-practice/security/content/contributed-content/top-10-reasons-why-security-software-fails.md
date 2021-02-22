---
aliases: /contributed-content/top-10-reasons-why-security-software-fails
archetype: contributor-
mastHead: "Security CoP"
metaTitle: "Top 10 Reasons Why Security Software Fails"
metaDesc: "Present-day malware is groundbreaking enough to slip under the radar of traditional defenses. Cybercriminals have plenty of time and resources to test their perpetrating code extensively. The malicious code can then potentially circumvent regular detection mechanisms and raise no red flags for days on end. Unfortunately, antivirus vendors are a step behind when it comes to identifying such high-profile infections. The payload for the Angler exploit kit, for instance, can go undetected on a targeted host for two days on average." 
ogUrl: "/communities/security/contributed-content/top-10-reasons-why-security-software-fails/"
ogImage: "/communities/security/contributed-content/Top-10-Reasons-Why-Security-Software-Fails.jpg"
categories:
  - Cybersecurity
  - Ransomware
date: 2017-12-22 10:54:07
author: David Balaban
featuredImage:
  format: JPEG
  href: Top-10-Reasons-Why-Security-Software-Fails.jpg
  size:
    - 768
    - 461
  wpAttachment:
    fileName:
    link:
description: 'Present-day malware is groundbreaking enough to slip under the radar of traditional defenses. Cybercriminals have plenty of time and resources to test their perpetrating code extensively. The malicious code can then potentially circumvent regular detection mechanisms and raise no red flags for days on end. Unfortunately, antivirus vendors are a step behind when it comes to identifying such high-profile infections. The payload for the Angler exploit kit, for instance, can go undetected on a targeted host for two days on average.'
twitterdescription: Top 10 Reasons Why Security Software Fails
twittertitle: Top 10 Reasons Why Security Software Fails
link:
  brand:
  herf:
  original:
openProjectCustomFields:
  cleanUrl:
  sourceUrl:
searchCategory: News
slug: top-10-reasons-why-security-software-fails
source: Opsfolio-curations
sub: Contributor center
title: Top 10 Reasons Why Security Software Fails
contentCategories: medigy-security-contributed-content
type: communities/medigy-security
breadcrumbs:
 - Home
 - Communities
 - Security
 - Contributed Content
 - 'Top 10 Reasons Why Security Software Fails'
breadcrumbLinks:
 - "/"
 - "/communities/"
 - "/communities/security/"
 - "/communities/security/contributed-content/"


---
![Top 10 Reasons Why Security Software Fails](/images/Top-10-Reasons-Why-Security-Software-Fails.jpg)

Present-day malware is groundbreaking enough to slip under the radar of traditional defenses. Cybercriminals have plenty of time and resources to test their perpetrating code extensively. The malicious code can then potentially circumvent regular detection mechanisms and raise no red flags for days on end.

Unfortunately, antivirus vendors are a step behind when it comes to identifying such high-profile infections. The payload for the Angler exploit kit, for instance, can go undetected on a targeted host for two days on average. This timeframe is long enough for the cybercriminal to compromise the victim’s identity or deposit file-encrypting ransomware onto the computer.

Malware authors monitor updates rolled out by antivirus labs so they can modify their code and go unnoticed to the latest version of the antivirus solution. The following list highlights the ten most common ways that viruses trick and circumvent security tools.

**1. Scorched-earth tactics**

A malicious virus (codenamed Rombertik) has a module that monitors whether it’s detected and analyzed in the infected computer’s memory. If the spyware identifies such an attempt, it instantly wipes the master boot record (MBR), thereby preventing the machine from booting. Furthermore,  [Rombertik](http://www.dailymail.co.uk/sciencetech/article-3069470/Are-risk-Rombertik-Terrifying-malware-destroy-PC-detected.html)  can terminate itself, which makes it problematic for researchers to reverse and scrutinize its code.

**2. Anti-sandboxing**  
Antivirus tools move suspicious programs to a sandbox to thwart real damage to the host. This technique allows the execution of dubious code in an isolated environment so that it cannot reach critical components of the operating system and stored data. Some malicious programs can circumvent sandboxing by operating alongside a slew of benign dummy files that baffle security suites’ detection routine.

Another clever technique utilized by viruses is to check system registry and other components for known hallmarks of sandboxing. In case the infection determines that it’s operating in a sandbox environment, it halts its malign activity so that the security suite doesn’t flag it as a threat.

**3. Domain shadowing**

Most malware strains need to establish and maintain secure communication with a remote Command & Control server. This allows the malware to transmit harvested information to the cybercriminal and download additional toxic components onto the PC. To fulfill its objective, the malware can employ numerous URLs that are used for a limited period and drop when the URL is blacklisted.

The proprietors of exploit kits hack an account of a domain registrant and register multiple new subdomains on their behalf. Although these subdomains are linked to malicious servers, security solutions may fail to block them because the kernel domain is legitimate.

**4. Fast Flux**

Fast Flux is another technique used to prevent antivirus programs from blocking malicious traffic generated by malware. Threat actors leverage various IP addresses related to a particular domain name. The antivirus evades detection by changing the active IP addresses by modifying DNS values often enough to confuse security suites. The Fast Flux technique is commonly used in  [large-scale malware campaigns](https://www.akamai.com/us/en/about/news/press/2017-press/fast-flux-botnets-still-wreaking-havoc-on-internet-according-to-akamai-research.jsp), such as phishing scams and drive-by virus downloads.

**5. Payload obfuscation via crypto**

When a malicious payload is making rounds in an encrypted form, it is more difficult for an antivirus product to detect. In the best-case scenario, a security tool will identify the culprit with a significant delay, which allows the infection more time to harm the system(s).

**6. Polymorphism**

Modifying properties of a malware sample without changing its purpose may play into the attackers’ hands. A different filename or payload file compression is likely to trick antivirus tools, whose malware signatures include hallmarks of the previous edition of the malware.

**7. Classic literature as a red herring**

The proprietors of exploit kits are known to employ a unique method to thwart detection. They insert large passages from popular novels, such as Jane Austen’s “Sense and Sensibility,” into landing pages hosting the malicious kits. While scanning these pages for dubious traits, internet security tools may perceive the classic literature contents as a sign of legitimacy and therefore won’t flag the site as harmful.

**8. Anonymous networks**

Cybercriminals are fond of leveraging anonymous networks like  [Tor](https://www.torproject.org/projects/torbrowser.html.en)(The Onion Router) and  [I2P](https://geti2p.net/en/)  (Invisible Internet Project) to hide their tracks. The former is heavily used to secure the communication between a malware payload and a C2 server run by the cybercriminal – ransomware distributors in particular. A VPN is sometimes used in addition, forming a highly untraceable  [Tor over VPN connection](https://www.expressvpn.com/how-to-use-vpn/tor-vpn). The latter, I2P, features a similar functionality but also allows threat actors to chat and transfer files back and forth securely.

**9. Office macros**

While macros per se are benign components that function within Microsoft Office solutions, they can be abused to covertly download and execute arbitrary code on a computer. These modules are disabled by default, but users may follow a rogue prompt to activate them and thus unknowingly launch a malicious script that downloads malware onto their machines.

Quite a few blackmail viruses, including the infamous  [Arena ransomware](https://myspybot.com/arena-ransomware/)  and the  [Dridex banking Trojan](https://en.wikipedia.org/wiki/Dridex), have been propagating in this fashion, where booby-trapped Word documents were sent to a large number of users via e-mail spam. Note that campaigns harnessing macros usually involve social engineering to dupe people into opening rogue e-mail attachments.

**10. Staying idle**

Some viruses are intelligent enough to run at a specified time, for instance during system boot-up when the infected host is most susceptible to harmful impact, and the victim’s security suite isn’t set to identify infections in real time. The malicious code may remain inactive at all other times.

**How to stay on the safe side?**

First and foremost, adopt a defensive strategy revolving around prevention rather than reacting after the fact. The following tips should come in handy:

-   Keep your operating system and third-party software up to date at all times. Apply security patches once they are available.
-   Use a reliable and reputable security suite and, most importantly, one with high independent lab scores. Make sure the tool provides real-time detection functionality and comes equipped with a firewall that filters web traffic.
-   Follow safe online practices: stay on the lookout for phishing, never enable macros in Office files received via email, and steer clear of suspicious websites and downloads.

To recap, keep in mind that antivirus software alone is no longer enough to safeguard your computer against malicious code. Try to think out of the box, don’t fall for social engineering attempts and stay privy of online best-practices.