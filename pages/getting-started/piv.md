---
title: PIV card
redirect_from:
  - /piv/
---

_a.k.a. your "Smart Card" or "GSA badge"._

## Getting issued a card

Your PIV allows you to get in and out of GSA buildings and avoid security lines.

Although some of our employees are based out of a specific office, your badge
can be permissioned for multiple GSA buildings. Email
[hspd12.security@gsa.gov](mailto:hspd12.security@gsa.gov) to start this process,
which usually takes a few days. After you receive an email confirmation, you'll
need to visit the security office in each new building to activate your card.

GSA processes new badges every Wednesday. When your badge is ready, you’ll
receive an email (in both your personal and GSA emails) from
`HSPD12Admin@usaccess.gsa.gov` containing four steps. Please skip to step four,
which details how to schedule an appointment and pick up your badge, and bring
the password in step three. To check on the status of your GSA badge, you can
email [hspd12.security@gsa.gov](mailto:hspd12.security@gsa.gov).

## Use with a GSA Mac

### Setup

Once you have your PIV card and PIN, you should be able to set up your computer
for [logging in and other activities](#password-vs-pin). You may wish to contact
a representative from IT to walk you through this process. Make sure you mention
in your ticket that this is for a MacBook.

1. Open the GSA Self Service application on your MacBook and select
   "SmartCard/PIV" from the lefthand filter. You should see two applications:
   `Smart Card Certificate Validation` and `Map Smartcard - Catalina`
2. Plug a card reader into your laptop and insert your card
3. Click "Test" on the `Smart Card Certificate Validation` application in Self
   Service. Wait for a moment while it confirms your card is good to go.
   **Contact IT if your certificate does not validate**
4. Click "Install" on `Map Smartcard - Catalina`. Wait until this finishes
   installing. Do not remove your card.
5. Now you can remove your card and log out of your computer. You are all set up to
   follow the login steps below.
   - Note: DO NOT REBOOT. This will brick the machine. Please only Log Out only.

### Password vs. PIN

All personal computers at GSA need to use PIV cards to log in. This means you'll
use a PIN when logging into your Mac, as well as when you perform other actions
on your Mac that require a password. It is not a replacement for your ENT
password. Here are some common questions (and answers) that may help.

When the computer first turns on from off/restart, you will use your Mac
password. Past that, the PIV+PIN should be used. When the card reader is
connected (and working properly), the prompt will change from "password" to
"PIN". PIV + PIN authentication will be required:

- at login
- when unlocking your screensaver
- when running the `sudo` command in the terminal (mostly needed for development
  tasks)
- when installing certain applications
- when making changes in System Preferences
- when performing any other action that currently requires your laptop password
  that isn't covered above

If you are prompted on your laptop to "reset your password", it is referring to
your "local" Mac password, not your ENT or PIN. Please complete those steps
right away, as there's a timeout.

### Certificate prompt

When logging into some systems, you will be asked to choose a digital
certificate. If your PIV card is inserted, there will be two certificates listed
with your name on them.

- The right choice generally seems to be the first option.
- If you want to be certain, on Macs you can look at the digital certificate's
  "Usage" field. Choose the one that is **_only_** "Digital Signature"
- If you choose the wrong certificate the first time, you might still be able to
  log in with another using an incognito window

### PIV readers

#### Types

GSA has a few different types of USB-C readers:

- Stanley Global "pigtail"
- ACS "butterfly"
- ACS "pigtail"

Since the new Macs only have two USB-C ports, and you'll find one of them is
taken up by power and the other taken up by the PIV reader, you'll probably end
up needing a dongle after all, if only to regain a spare USB port.

If you do need to use a dongle, there's one more wrinkle: The dongle may not
provide enough juice to power the USB-C PIV reader. In that case, you'll need to
plug the PIV reader directly into computer. You can plug the power cord into the
dongle, then plug the dongle into the computer, so you are powering the computer
through the dongle.

If you get the folding kind of reader, it will appear to block the second USB-C
port, but you can thread the power cable or dongle cable through the reader's
frame to access the second port.

### Issues

If the card is lost, follow [these
instructions]({% page "/getting-started/equipment/#lost-or-stolen-equipment" %}).

#### Card reader unreliable

Everyone should have two readers (so they have a backup) --- [request a backup
and/or replacement]({% page "/getting-started/equipment/#peripherals" %}) if you
don't.

#### "SmartCard certificate is not trusted" error

If this error message appears after a period of working, functional PIV login
and authentication, it could be a poor connection between the PIV and the
reader. Try cleaning the contact pad on the PIV with a pencil eraser. Wipe any
eraser debris off afterwards, and reinsert the card into the reader and try
again.

#### Forgot your card

Please [contact the Help
Desk]({% page "/getting-started/classes/gsa-internal-tools/#it-service-desk" %})
and they will assist you by temporarily enabling your computer to use a username
and password. This can be done remotely, as long as you are connected to the
internet.
