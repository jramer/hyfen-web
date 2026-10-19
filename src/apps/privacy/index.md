---
title: Attic privacy policy
description: How Attic for HomeKit handles your data.
permalink: /apps/privacy/index.html
layout: layouts/apps.njk
page_class: prose
---
# Attic privacy policy

Effective 19 October 2026

## Who we are

Attic for HomeKit is published by Hyfen AB, organisation number 559180-9958. You can reach us at attic@hyfen.se.

## What Attic does with your data

Attic reads the sensors in your Home through HomeKit and Matter and stores the readings in a database on your Mac. Those readings stay on your Mac. Attic only reads your accessories and never controls them.

## What leaves your Mac

Data leaves your Mac only when you set it up.

- Home Assistant and MQTT destinations send readings to the server or broker you enter. We do not run or see those servers. Credentials are kept in your Mac's Keychain.
- The Local API is off until you turn it on. It requires a token and answers only devices on your own network. Connections from anywhere else are closed.
- Export writes a file to the place you choose.
- Anonymous usage data is sent to us only if you turn it on. The next section says what it contains.

## Anonymous usage data (optional)

Attic can send us anonymous data about how the app is used. It is off until you turn it on, during setup or in Settings → General, and you can turn it off there at any time. No feature depends on it, paid or free.

When it is on, Attic sends us:

- which parts of the app are used, for example that Settings or Diagnostics was opened, a chart range was changed, an export was made, a destination was turned on, the Attic Pro sheet was opened or a subscription was bought (monthly or yearly);
- once a day: your plan (free or Attic Pro), the app version and the macOS version; how many tiles and charts are pinned on the Overview and how many comparisons you have, each sent on its own; and which kinds of destination are set up.

It never contains an identifier, your name, your readings or anything from HomeKit: no homes, rooms or accessories. Dates are rounded to the day.

The data goes to a service we run on Cloudflare, with the database stored in the EU. We keep only daily totals: how many times each event happened on each day. We do not store your IP address. Cloudflare, which carries the traffic, sees the IP address of every connection, as any network provider does, and keeps it in its security logs for requests it blocks. We keep the totals for 24 months and then delete them.

Turning it off stops the sending and deletes what has not been sent yet. Because nothing we keep can be linked to you, we cannot find or delete data that was already sent.

## What we receive

Only the anonymous usage data described above, and only if you turn it on. We do not receive your readings, your Home's layout or anything from HomeKit. The app contains no crash-reporting or advertising SDKs.

## Purchases

Subscriptions are handled by Apple through the App Store. We see no payment details.

## HomeKit data

We never use HomeKit data for advertising or data mining.

## Children

Attic is not directed at children and we do not knowingly collect data from anyone, children included.

## Your rights under GDPR

You have the right to access, correct and delete personal data we hold about you, and to complain to your data protection authority (in Sweden, IMY). The usage data we keep is anonymous daily totals, so we hold no personal data about Attic users and a request has nothing to act on. You are welcome to contact us at attic@hyfen.se.

## Changes to this policy

If we change this policy we will update this page and the effective date. The current version is effective 19 October 2026.
